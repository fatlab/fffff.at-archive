#!/usr/bin/env python3
"""
Extract files from Wayback Machine mirror structure and clean up paths
"""

import shutil
from pathlib import Path
import re

ARCHIVE_DIR = Path("../archive")


def extract_wayback_site(wayback_tmp_dir, target_dir):
    """
    Extract files from Wayback Machine directory structure.

    Wayback mirrors look like:
    web.archive.org/web/20170821075525/http:/www.gold.fffff.at/

    We want to extract just the site content to the target directory.
    """
    if not wayback_tmp_dir.exists():
        print(f"  No Wayback tmp directory found at {wayback_tmp_dir}")
        return 0

    print(f"  Extracting from {wayback_tmp_dir}...")

    # Find the web.archive.org directory
    wayback_root = wayback_tmp_dir / "web.archive.org"
    if not wayback_root.exists():
        print(f"  Error: No web.archive.org directory found")
        return 0

    # Find the snapshot directory (looks like: web/20170821075525/...)
    web_dir = wayback_root / "web"
    if not web_dir.exists():
        print(f"  Error: No 'web' directory found")
        return 0

    # Find timestamp directories
    snapshot_dirs = [d for d in web_dir.iterdir() if d.is_dir() and d.name.isdigit()]
    if not snapshot_dirs:
        print(f"  Error: No snapshot directories found")
        return 0

    # Use the first/most recent snapshot
    snapshot_dir = sorted(snapshot_dirs)[-1]
    print(f"  Found snapshot: {snapshot_dir.name}")

    # Find the actual site content (http:/domain/ or https:/domain/)
    content_dirs = []
    for protocol_dir in snapshot_dir.iterdir():
        if protocol_dir.is_dir() and protocol_dir.name in ['http:', 'https:']:
            content_dirs.extend(protocol_dir.iterdir())

    if not content_dirs:
        print(f"  Error: No content directories found")
        return 0

    # Use the first content directory (should be the site domain)
    content_dir = content_dirs[0]
    print(f"  Content directory: {content_dir}")

    # Copy all files from content_dir to target_dir
    file_count = 0
    for item in content_dir.rglob("*"):
        if item.is_file():
            # Calculate relative path from content_dir
            rel_path = item.relative_to(content_dir)
            dest_path = target_dir / rel_path

            # Create parent directories
            dest_path.parent.mkdir(parents=True, exist_ok=True)

            # Copy file
            shutil.copy2(item, dest_path)
            file_count += 1

    print(f"  ✓ Extracted {file_count} files to {target_dir}")

    # Clean up wayback tmp directory
    print(f"  Cleaning up {wayback_tmp_dir}...")
    shutil.rmtree(wayback_tmp_dir)

    return file_count


def main():
    print("Extracting Wayback Machine archive...")
    print("")

    total_files = 0

    # Extract gold.fffff.at
    print("Processing gold.fffff.at...")
    gold_wayback = ARCHIVE_DIR / "gold" / ".wayback-tmp"
    gold_target = ARCHIVE_DIR / "gold"
    if gold_wayback.exists():
        count = extract_wayback_site(gold_wayback, gold_target)
        total_files += count
    else:
        print("  Already extracted or not yet downloaded")

    print("")
    print("=" * 80)
    print("Wayback Extraction Complete!")
    print("=" * 80)
    print(f"Total files extracted: {total_files}")
    print("")
    print("Gold site ready at:")
    print(f"  - {ARCHIVE_DIR / 'gold' / 'index.html'}")
    print("")
    print("Next: Run 10-rewrite-sister-site-links.py to update internal links")
    print("")


if __name__ == '__main__':
    main()
