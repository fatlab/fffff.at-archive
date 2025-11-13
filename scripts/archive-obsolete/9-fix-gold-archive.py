#!/usr/bin/env python3
"""
Fix the FAT Gold archive in /gold by:
1. Removing Wayback Machine wrapper URLs
2. Converting to relative paths
3. Extracting/organizing assets
"""

import os
import re
from pathlib import Path
from typing import List, Set

ARCHIVE_ROOT = Path("/Users/jamie/dev/fffff.at-archive")
GOLD_DIR = ARCHIVE_ROOT / "archive/gold"

# Wayback Machine URL patterns to clean
WAYBACK_PATTERNS = [
    # CSS files: ../../../20170821075525cs_/http:/www.gold.fffff.at/css/style.css
    (r'\.\./\.\./\.\./\d+cs_/http:/(?:www\.)?gold\.fffff\.at/', ''),
    # JS files: ../../../20170821075525js_/http:/www.gold.fffff.at/scripts/
    (r'\.\./\.\./\.\./\d+js_/http:/(?:www\.)?gold\.fffff\.at/', ''),
    # Images: ../../../20170821075525im_/http:/www.gold.fffff.at/images/
    (r'\.\./\.\./\.\./\d+im_/http:/(?:www\.)?gold\.fffff\.at/', ''),
    # Full Wayback URLs in hrefs
    (r'https://web\.archive\.org/web/\d+/http://(?:www\.)?gold\.fffff\.at/', ''),
    # Favicon and other
    (r'\.\./\.\./\.\./\d+im_/http:/(?:www\.)?gold\.fffff\.at/', ''),
]

# Archive.org toolbar/banner patterns to remove
ARCHIVE_ORG_PATTERNS = [
    (r'<script\s+src="https://web-static\.archive\.org[^"]*"[^>]*></script>', ''),
    (r'<link[^>]*href="https://web-static\.archive\.org[^"]*"[^>]*/>', ''),
]


def clean_wayback_urls(content: str) -> str:
    """Remove Wayback Machine URL patterns and make paths relative."""

    # First clean Wayback patterns
    for pattern, replacement in WAYBACK_PATTERNS:
        content = re.sub(pattern, replacement, content)

    # Remove archive.org toolbar scripts/styles
    for pattern, replacement in ARCHIVE_ORG_PATTERNS:
        content = re.sub(pattern, replacement, content, flags=re.DOTALL)

    return content


def extract_asset_paths(html_content: str) -> Set[str]:
    """Extract all asset paths (CSS, JS, images) referenced in HTML."""
    assets = set()

    # Find src= and href= attributes
    src_pattern = r'(?:src|href)="([^"]+)"'
    for match in re.finditer(src_pattern, html_content):
        url = match.group(1)

        # Skip external URLs, anchors, and archive.org
        if any(skip in url for skip in ['http://', 'https://', 'web.archive.org', '#', 'mailto:']):
            if 'gold.fffff.at' not in url and 'fffff.at' not in url:
                continue

        # Extract local paths
        if url and not url.startswith('http') and not url.startswith('#'):
            assets.add(url)

    return assets


def process_html_file(html_file: Path) -> dict:
    """Process a single HTML file and return stats."""

    print(f"\nProcessing {html_file.name}...")

    # Read original
    with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    # Count Wayback URLs before
    wayback_count_before = content.count('web.archive.org')
    wayback_paths_before = len(re.findall(r'\.\./\.\./\.\./\d+[a-z_]+/', content))

    # Extract assets before cleaning
    assets = extract_asset_paths(content)

    # Clean content
    cleaned_content = clean_wayback_urls(content)

    # Count after
    wayback_count_after = cleaned_content.count('web.archive.org')
    wayback_paths_after = len(re.findall(r'\.\./\.\./\.\./\d+[a-z_]+/', cleaned_content))

    # Write cleaned version
    with open(html_file, 'w', encoding='utf-8') as f:
        f.write(cleaned_content)

    return {
        'file': html_file.name,
        'wayback_urls_removed': wayback_count_before - wayback_count_after,
        'wayback_paths_removed': wayback_paths_before - wayback_paths_after,
        'assets_found': len(assets),
        'assets': assets
    }


def main():
    """Main processing workflow."""
    print("=" * 70)
    print("FAT GOLD ARCHIVE CLEANUP")
    print("=" * 70)

    # Find all HTML files
    html_files = list(GOLD_DIR.glob("*.html"))
    print(f"\nFound {len(html_files)} HTML files in {GOLD_DIR}")

    # Process each file
    all_stats = []
    all_assets = set()

    for html_file in sorted(html_files):
        stats = process_html_file(html_file)
        all_stats.append(stats)
        all_assets.update(stats['assets'])

    # Print summary
    print("\n" + "=" * 70)
    print("CLEANUP SUMMARY")
    print("=" * 70)

    for stats in all_stats:
        print(f"\n{stats['file']}:")
        print(f"  Wayback URLs removed: {stats['wayback_urls_removed']}")
        print(f"  Wayback paths cleaned: {stats['wayback_paths_removed']}")
        print(f"  Assets referenced: {stats['assets_found']}")

    # Show all unique assets
    print("\n" + "=" * 70)
    print("UNIQUE ASSETS REFERENCED")
    print("=" * 70)

    # Categorize assets
    css_files = [a for a in all_assets if a.endswith('.css')]
    js_files = [a for a in all_assets if a.endswith('.js')]
    image_files = [a for a in all_assets if any(a.endswith(ext) for ext in ['.jpg', '.png', '.gif', '.ico'])]
    html_files_linked = [a for a in all_assets if a.endswith('.html')]

    print(f"\nCSS files ({len(css_files)}):")
    for f in sorted(css_files):
        print(f"  {f}")

    print(f"\nJavaScript files ({len(js_files)}):")
    for f in sorted(js_files):
        print(f"  {f}")

    print(f"\nImage files ({len(image_files)}):")
    for f in sorted(image_files):
        print(f"  {f}")

    print(f"\nLinked HTML files ({len(html_files_linked)}):")
    for f in sorted(html_files_linked):
        print(f"  {f}")

    # Check which assets actually exist
    print("\n" + "=" * 70)
    print("ASSET STATUS")
    print("=" * 70)

    missing_assets = []
    for asset in all_assets:
        if not asset.endswith('.html'):  # HTML files we already have
            asset_path = GOLD_DIR / asset
            if not asset_path.exists():
                missing_assets.append(asset)

    if missing_assets:
        print(f"\nMissing {len(missing_assets)} asset files:")
        for asset in sorted(missing_assets):
            print(f"  ✗ {asset}")
        print(f"\nThese assets may need to be extracted from Wayback or another backup")
    else:
        print("\n✓ All assets exist!")

    print("\n" + "=" * 70)
    print("NEXT STEPS")
    print("=" * 70)
    print("1. Extract missing assets if needed")
    print("2. Test gold/index.html in browser")
    print("3. Update all gold.fffff.at links → /gold")
    print()


if __name__ == "__main__":
    main()
