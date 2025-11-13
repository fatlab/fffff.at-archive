#!/usr/bin/env python3
"""
Fix UTF-8 encoding issues using ftfy library
This handles mixed encoding scenarios
"""

from pathlib import Path
import ftfy

ARCHIVE_DIR = Path("../archive")


def fix_file_with_ftfy(file_path):
    """Fix encoding issues using ftfy"""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        # Use ftfy to fix mojibake
        fixed_content = ftfy.fix_text(content)

        # Only write if content changed
        if fixed_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            return True
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

    return False


def main():
    print("Fixing encoding with ftfy...")

    html_files = list(ARCHIVE_DIR.rglob("*.html")) + list(ARCHIVE_DIR.rglob("*.htm"))
    print(f"Found {len(html_files)} HTML files")

    fixed = 0
    for i, html_file in enumerate(html_files, 1):
        if i % 500 == 0:
            print(f"  Processing {i}/{len(html_files)}... ({fixed} fixed)")

        if fix_file_with_ftfy(html_file):
            fixed += 1

    print(f"\n✓ Fixed {fixed}/{len(html_files)} files")


if __name__ == '__main__':
    main()
