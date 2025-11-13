#!/usr/bin/env python3
"""
Update all gold.fffff.at links to /gold across the archive.
"""

import re
from pathlib import Path

ARCHIVE_ROOT = Path("/Users/jamie/dev/fffff.at-archive/archive")

# Patterns to replace
REPLACEMENTS = [
    (r'http://www\.gold\.fffff\.at', '/gold'),
    (r'https://www\.gold\.fffff\.at', '/gold'),
    (r'http://gold\.fffff\.at', '/gold'),
    (r'https://gold\.fffff\.at', '/gold'),
]


def update_file(html_file: Path) -> int:
    """Update gold.fffff.at links in a single file."""

    try:
        with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        original_content = content
        replacements_made = 0

        # Apply all replacements
        for pattern, replacement in REPLACEMENTS:
            matches = len(re.findall(pattern, content))
            if matches > 0:
                content = re.sub(pattern, replacement, content)
                replacements_made += matches

        # Only write if changed
        if content != original_content:
            with open(html_file, 'w', encoding='utf-8') as f:
                f.write(content)
            return replacements_made

        return 0

    except Exception as e:
        print(f"  ERROR processing {html_file}: {e}")
        return 0


def main():
    print("=" * 70)
    print("UPDATE GOLD.FFFFF.AT LINKS → /GOLD")
    print("=" * 70)

    # Find all HTML files (excluding gold directory itself)
    html_files = [
        f for f in ARCHIVE_ROOT.rglob("*.html")
        if "gold" not in str(f.relative_to(ARCHIVE_ROOT)).split('/')[0]
    ]

    print(f"\nFound {len(html_files)} HTML files to process")
    print("(excluding gold/ directory itself)")

    total_replacements = 0
    files_updated = 0

    print("\nProcessing files...")
    for html_file in html_files:
        replacements = update_file(html_file)
        if replacements > 0:
            files_updated += 1
            total_replacements += replacements
            if files_updated <= 5:  # Show first 5 files
                rel_path = html_file.relative_to(ARCHIVE_ROOT)
                print(f"  {rel_path}: {replacements} links updated")

    if files_updated > 5:
        print(f"  ... and {files_updated - 5} more files")

    print("\n" + "=" * 70)
    print("UPDATE COMPLETE")
    print("=" * 70)
    print(f"\nFiles updated: {files_updated}")
    print(f"Total replacements: {total_replacements}")
    print(f"\nAll gold.fffff.at links now point to /gold")
    print()


if __name__ == "__main__":
    main()
