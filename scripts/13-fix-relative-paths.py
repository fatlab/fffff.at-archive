#!/usr/bin/env python3
"""
Fix broken relative paths throughout the archive.

Many files have incorrect ../../../../../../../ paths that go too many levels up.
This script recalculates correct relative paths based on actual file depth.
"""

import re
from pathlib import Path
from urllib.parse import urljoin, urlparse

ARCHIVE_ROOT = Path("/Users/jamie/dev/fffff.at-archive/archive")


def calculate_depth(filepath: Path) -> int:
    """Calculate how many levels deep a file is from archive root."""
    rel_path = filepath.relative_to(ARCHIVE_ROOT)
    # Subtract 1 because the file itself doesn't count
    return len(rel_path.parts) - 1


def fix_relative_path(current_file: Path, broken_path: str) -> str:
    """
    Fix a broken relative path.

    Args:
        current_file: Path to the HTML file containing the link
        broken_path: The broken relative path (e.g., ../../../../../../../about/index.html)

    Returns:
        Corrected relative path
    """
    # Don't touch absolute URLs, anchors, or protocol-relative URLs
    if any(broken_path.startswith(x) for x in ['http://', 'https://', '//', '#', 'mailto:', 'javascript:']):
        return broken_path

    # Don't touch paths that don't have ../
    if not broken_path.startswith('../'):
        return broken_path

    # Count how many ../ are in the broken path
    dotdot_count = 0
    temp = broken_path
    while temp.startswith('../'):
        dotdot_count += 1
        temp = temp[3:]

    # Get the target path (everything after the ../)
    target_path = temp

    # Calculate correct depth
    correct_depth = calculate_depth(current_file)

    # Build correct relative path
    if correct_depth == 0:
        # File is at root, just use target
        return target_path
    else:
        # File is nested, use correct number of ../
        return '../' * correct_depth + target_path


def fix_html_file(filepath: Path) -> dict:
    """Fix all relative paths in a single HTML file."""

    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
    except Exception as e:
        return {'file': filepath.name, 'error': str(e)}

    original_content = content
    fixes = 0

    # Find all href and src attributes with relative paths
    def replace_path(match):
        nonlocal fixes
        attr_name = match.group(1)  # href or src
        quote = match.group(2)  # " or '
        path = match.group(3)

        fixed_path = fix_relative_path(filepath, path)

        if fixed_path != path:
            fixes += 1

        return f'{attr_name}={quote}{fixed_path}{quote}'

    # Match href="..." and src="..."
    pattern = r'((?:href|src))=(["\'])(.*?)\2'
    content = re.sub(pattern, replace_path, content)

    if content != original_content:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return {
            'file': str(filepath.relative_to(ARCHIVE_ROOT)),
            'depth': calculate_depth(filepath),
            'fixes': fixes,
            'changed': True
        }

    return {'file': str(filepath.relative_to(ARCHIVE_ROOT)), 'changed': False}


def main():
    print("=" * 70)
    print("FIX RELATIVE PATHS - ARCHIVE-WIDE")
    print("=" * 70)

    # Find all HTML files
    html_files = list(ARCHIVE_ROOT.rglob("*.html"))
    print(f"\nFound {len(html_files):,} HTML files")

    # Sample check first
    print("\nSample file depths:")
    samples = [
        ARCHIVE_ROOT / "index.html",
        ARCHIVE_ROOT / "about/index.html",
        ARCHIVE_ROOT / "category/projects/index.html",
        ARCHIVE_ROOT / "category/upcomingshows/index.html",
    ]

    for sample in samples:
        if sample.exists():
            depth = calculate_depth(sample)
            rel = sample.relative_to(ARCHIVE_ROOT)
            print(f"  {rel}: depth {depth} (needs {'../' * depth if depth > 0 else 'no ../'})")

    print("\nProcessing files...")
    print("(This may take a few minutes...)")

    results = []
    total_fixes = 0

    for i, html_file in enumerate(html_files):
        if i % 500 == 0 and i > 0:
            print(f"  Processed {i:,}/{len(html_files):,} files...")

        result = fix_html_file(html_file)
        if result.get('changed'):
            results.append(result)
            total_fixes += result.get('fixes', 0)

    print(f"\n  Completed {len(html_files):,} files")

    print("\n" + "=" * 70)
    print("FIX COMPLETE")
    print("=" * 70)

    files_changed = len([r for r in results if r.get('changed')])
    print(f"\nFiles modified: {files_changed:,}")
    print(f"Total path fixes: {total_fixes:,}")

    # Show sample fixes by depth
    if results:
        print("\nSample fixes by file depth:")
        by_depth = {}
        for r in results:
            if r.get('changed'):
                depth = r.get('depth', 0)
                if depth not in by_depth:
                    by_depth[depth] = []
                by_depth[depth].append(r)

        for depth in sorted(by_depth.keys())[:5]:
            sample = by_depth[depth][0]
            print(f"  Depth {depth}: {sample['file']} ({sample['fixes']} fixes)")

    print("\nVerification...")
    # Check if the problem is fixed
    fixed_count = 0
    for html_file in html_files[:100]:  # Sample check
        with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            if '../../../../../../../' in content:
                fixed_count += 1

    if fixed_count == 0:
        print("✓ Sample check passed - no excessive ../ paths found")
    else:
        print(f"⚠ {fixed_count}/100 sample files still have excessive ../ paths")

    print()


if __name__ == "__main__":
    main()
