#!/usr/bin/env python3
"""
Deep clean ALL Wayback Machine references from gold archive.
"""

import re
from pathlib import Path

GOLD_DIR = Path("/Users/jamie/dev/fffff.at-archive/archive/gold")

# All Wayback patterns to clean
PATTERNS = [
    # Full Wayback URLs with timestamps
    (r'https://web\.archive\.org/web/\d+(?:cs_|js_|im_)?/+(?:http://)?(?:www\.)?gold\.fffff\.at(?::\d+)?/', ''),
    (r'https://web\.archive\.org/web/\d+(?:cs_|js_|im_)?/+', ''),
    (r'https://web\.archive\.org/web/', ''),

    # Wombat script references
    (r'__wm\.init\([^)]+\);?', ''),
    (r'__wm\.wombat\([^)]+\);?', ''),

    # Script/link tags with web.archive.org
    (r'<script[^>]*src="https://web-static\.archive\.org[^"]*"[^>]*></script>', ''),
    (r'<link[^>]*href="https://web-static\.archive\.org[^"]*"[^>]*/>', ''),

    # Any remaining archive.org refs in paths
    (r'https://web-static\.archive\.org/_static/[^"\')\s]*', ''),

    # Clean up double slashes after removal
    (r'//+', '/'),

    # Fix protocol-relative gold paths
    (r'//gold/', '/gold/'),
    (r'href="/+gold/', 'href="/gold/'),
    (r'src="/+gold/', 'src="/gold/'),
]


def deep_clean_file(filepath: Path) -> dict:
    """Deep clean a single HTML file."""

    with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
        content = f.read()

    original = content
    replacements = {}

    # Apply all patterns
    for pattern, replacement in PATTERNS:
        matches = len(re.findall(pattern, content))
        if matches > 0:
            replacements[pattern[:50]] = matches
            content = re.sub(pattern, replacement, content)

    # Additional manual fixes for specific issues
    # Fix broken gold links (e.g., href="/gold" or href="//gold")
    content = re.sub(r'href="https://web\.archive\.org/web/\d+/http://(?:www\.)?gold\.fffff\.at/', 'href="', content)
    content = re.sub(r'src="https://web\.archive\.org/web/\d+im_/http://(?:www\.)?gold\.fffff\.at/', 'src="', content)

    # Remove any leftover archive.org toolbar divs
    content = re.sub(r'<!-- BEGIN WAYBACK TOOLBAR INSERT -->.*?<!-- END WAYBACK TOOLBAR INSERT -->', '', content, flags=re.DOTALL)

    # Clean up empty script tags
    content = re.sub(r'<script[^>]*>\s*</script>', '', content)

    # Normalize whitespace
    content = re.sub(r'\n\n\n+', '\n\n', content)

    if content != original:
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        return {
            'file': filepath.name,
            'changed': True,
            'replacements': replacements,
            'size_before': len(original),
            'size_after': len(content),
            'reduction': len(original) - len(content)
        }

    return {'file': filepath.name, 'changed': False}


def main():
    print("=" * 70)
    print("DEEP CLEAN GOLD ARCHIVE - ALL FILES")
    print("=" * 70)

    html_files = sorted(GOLD_DIR.glob("*.html"))
    print(f"\nProcessing {len(html_files)} HTML files...\n")

    all_stats = []
    total_reduction = 0

    for html_file in html_files:
        stats = deep_clean_file(html_file)
        all_stats.append(stats)

        if stats['changed']:
            print(f"✓ {stats['file']}")
            print(f"  Patterns matched: {len(stats['replacements'])}")
            print(f"  Size: {stats['size_before']:,} → {stats['size_after']:,} bytes ({stats['reduction']:,} removed)")
            total_reduction += stats['reduction']
        else:
            print(f"  {stats['file']} (no changes)")

    print("\n" + "=" * 70)
    print("CLEANUP COMPLETE")
    print("=" * 70)

    changed_count = sum(1 for s in all_stats if s['changed'])
    print(f"\nFiles modified: {changed_count}/{len(html_files)}")
    print(f"Total size reduction: {total_reduction:,} bytes ({total_reduction/1024:.1f} KB)")

    # Verify cleanup
    print("\n" + "=" * 70)
    print("VERIFICATION")
    print("=" * 70)

    remaining = 0
    for html_file in html_files:
        with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
            count = content.count('web.archive.org')
            if count > 0:
                print(f"  ⚠ {html_file.name}: {count} web.archive.org refs remaining")
                remaining += count

    if remaining == 0:
        print("\n✓ All web.archive.org references removed!")
    else:
        print(f"\n⚠ {remaining} references still remaining")

    # Check for broken links
    print("\n" + "=" * 70)
    print("CHECKING FOR COMMON ISSUES")
    print("=" * 70)

    issues = []
    for html_file in html_files:
        with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

            # Check for double slashes in paths
            if re.search(r'href="//[^/]', content):
                issues.append(f"{html_file.name}: Protocol-relative URLs found")

            # Check for broken src paths
            if 'src=""' in content or 'href=""' in content:
                issues.append(f"{html_file.name}: Empty src/href attributes")

    if issues:
        print("\nPotential issues found:")
        for issue in issues:
            print(f"  • {issue}")
    else:
        print("\n✓ No common issues detected")

    print()


if __name__ == "__main__":
    main()
