#!/usr/bin/env python3
"""
Fix UTF-8 encoding issues in HTML files
This repairs double-encoded UTF-8 (Mojibake)
"""

import sys
from pathlib import Path

ARCHIVE_DIR = Path("../archive")


def fix_encoding(file_path):
    """Fix double-encoded UTF-8 in a file"""
    try:
        # Read as latin-1 to get the raw bytes as they are
        with open(file_path, 'r', encoding='latin-1') as f:
            content = f.read()

        # Encode back to latin-1 bytes, then decode as UTF-8
        # This reverses the double-encoding
        fixed_content = content.encode('latin-1').decode('utf-8')

        # Only write if content changed
        if fixed_content != content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(fixed_content)
            return True
    except (UnicodeDecodeError, UnicodeEncodeError):
        # File is already correct or has other encoding issues
        pass
    except Exception as e:
        print(f"Error processing {file_path}: {e}")

    return False


def main():
    print("Fixing UTF-8 encoding issues...")

    if not ARCHIVE_DIR.exists():
        print(f"Error: Archive directory not found: {ARCHIVE_DIR}")
        return

    # Find all HTML files
    html_files = list(ARCHIVE_DIR.rglob("*.html")) + list(ARCHIVE_DIR.rglob("*.htm"))
    print(f"Found {len(html_files)} HTML files")

    fixed = 0
    for i, html_file in enumerate(html_files, 1):
        if i % 100 == 0:
            print(f"  Processing {i}/{len(html_files)}... ({fixed} fixed)")

        if fix_encoding(html_file):
            fixed += 1

    print(f"\n✓ Fixed encoding in {fixed}/{len(html_files)} files")


if __name__ == '__main__':
    main()
