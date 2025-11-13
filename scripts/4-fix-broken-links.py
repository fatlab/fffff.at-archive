#!/usr/bin/env python3
"""
Fix broken internal links in the fffff.at archive.
Converts tag/category shorthand links to proper /tag/ or /category/ paths.

IMPORTANT: This script has a known issue where it preserves the existing
number of ../ levels in relative paths. After running this script, you
MUST run 13-fix-relative-paths.py to recalculate correct path depths.

Example workflow:
  python3 scripts/4-fix-broken-links.py
  python3 scripts/13-fix-relative-paths.py  # Always run this after!
"""

import os
import re
from pathlib import Path

# Read the broken links report to identify what needs fixing
def parse_broken_links(report_path):
    """Parse muffet report and extract broken internal links."""
    broken_tags = set()
    broken_categories = set()

    with open(report_path, 'r') as f:
        for line in f:
            # Skip external links, wp-json, xmlrpc, and large files
            if any(x in line for x in ['wp-json', 'xmlrpc', 'body size exceeds', 'http://', 'https://']):
                if 'localhost:8000' not in line:
                    continue

            # Extract broken tag/category links like /projects/index.html or /kanye/index.html
            match = re.search(r'404\s+http://localhost:8000/([a-z0-9-]+)/index\.html', line)
            if match:
                slug = match.group(1)
                # These are likely tags based on common patterns
                broken_tags.add(slug)

    return broken_tags

def find_correct_path(archive_dir, slug):
    """Find if slug exists in /tag/ or /category/ directories."""
    tag_path = archive_dir / 'tag' / slug / 'index.html'
    category_path = archive_dir / 'category' / slug / 'index.html'

    if tag_path.exists():
        return f'/tag/{slug}/'
    elif category_path.exists():
        return f'/category/{slug}/'
    else:
        return None

def fix_links_in_file(file_path, replacements):
    """Apply link fixes to a single HTML file."""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        original_content = content
        changes_made = 0

        # Apply each replacement
        for broken_link, correct_link in replacements.items():
            # Match href="/slug/" or href="../../slug/" patterns
            patterns = [
                (f'href="/{broken_link}/"', f'href="{correct_link}"'),
                (f'href="/{broken_link}/index.html"', f'href="{correct_link}index.html"'),
                # Relative paths with various levels of ../
                (re.compile(rf'href="(\.\./){{1,20}}{broken_link}/"'), f'href="\\g<1>{correct_link.lstrip("/")}/"'),
                (re.compile(rf'href="(\.\./){{1,20}}{broken_link}/index\.html"'), f'href="\\g<1>{correct_link.lstrip("/")}index.html"'),
            ]

            for pattern, replacement in patterns:
                if isinstance(pattern, str):
                    if pattern in content:
                        content = content.replace(pattern, replacement)
                        changes_made += 1
                else:  # regex pattern
                    new_content, count = pattern.subn(replacement, content)
                    if count > 0:
                        content = new_content
                        changes_made += count

        # Only write if changes were made
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return changes_made

        return 0
    except Exception as e:
        print(f"Error processing {file_path}: {e}")
        return 0

def main():
    script_dir = Path(__file__).parent
    archive_dir = script_dir.parent / 'archive'
    report_path = script_dir.parent / 'broken-links-report.txt'

    print("Analyzing broken links report...")
    broken_tags = parse_broken_links(report_path)

    print(f"Found {len(broken_tags)} potentially broken tag/category links")

    # Build replacement map
    replacements = {}
    found_count = 0
    not_found = []

    for slug in broken_tags:
        correct_path = find_correct_path(archive_dir, slug)
        if correct_path:
            replacements[slug] = correct_path
            found_count += 1
        else:
            not_found.append(slug)

    print(f"Found correct paths for {found_count} broken links")
    if not_found:
        print(f"Could not find {len(not_found)} tags/categories (they may not exist in archive)")
        print(f"Examples: {', '.join(list(not_found)[:10])}")

    if not replacements:
        print("No replacements to make!")
        return

    print(f"\nReplacement map (sample):")
    for slug, path in list(replacements.items())[:10]:
        print(f"  /{slug}/ -> {path}")

    # Find all HTML files
    print(f"\nScanning HTML files in {archive_dir}...")
    html_files = list(archive_dir.glob('**/*.html'))
    print(f"Found {len(html_files)} HTML files")

    # Process files
    print("\nFixing links...")
    total_changes = 0
    files_modified = 0

    for i, html_file in enumerate(html_files):
        if i % 100 == 0:
            print(f"  Processed {i}/{len(html_files)} files...", end='\r')

        changes = fix_links_in_file(html_file, replacements)
        if changes > 0:
            total_changes += changes
            files_modified += 1

    print(f"\n\nDone!")
    print(f"Modified {files_modified} files")
    print(f"Made {total_changes} total link fixes")

if __name__ == '__main__':
    main()
