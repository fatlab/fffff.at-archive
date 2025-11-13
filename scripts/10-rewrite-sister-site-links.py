#!/usr/bin/env python3
"""
Rewrite links to sister sites to point to local archive copies
"""

import re
from pathlib import Path
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin

ARCHIVE_DIR = Path("../archive")

# Sister site mappings: external URL -> local path
SISTER_SITE_MAPPINGS = {
    'http://gold.fffff.at': '/gold',
    'https://gold.fffff.at': '/gold',
    'http://www.gold.fffff.at': '/gold',
    'https://www.gold.fffff.at': '/gold',
}


def rewrite_url(url, from_file_path):
    """Rewrite a URL if it points to a sister site"""
    if not url:
        return url

    # Check if URL matches any sister site
    for external_url, local_path in SISTER_SITE_MAPPINGS.items():
        if url.startswith(external_url):
            # Replace the external domain with local path
            new_url = url.replace(external_url, local_path)

            # Make it relative if possible
            # Get the directory of the current file
            current_dir = from_file_path.parent

            # Calculate relative path from current file to archive root
            try:
                rel_to_root = Path('..') * len(current_dir.relative_to(ARCHIVE_DIR).parts)
                if str(rel_to_root) == '.':
                    rel_to_root = Path('.')

                # Construct relative path to sister site
                relative_url = str(rel_to_root / new_url.lstrip('/'))
                return relative_url
            except ValueError:
                # If we can't make it relative, return absolute path
                return new_url

    return url


def process_html_file(file_path):
    """Process a single HTML file and rewrite sister site links"""
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading {file_path}: {e}")
        return False

    soup = BeautifulSoup(content, 'lxml')
    modified = False

    # Process <a> tags
    for tag in soup.find_all('a', href=True):
        original = tag['href']
        rewritten = rewrite_url(original, file_path)
        if rewritten != original:
            tag['href'] = rewritten
            modified = True

    # Process <img> tags
    for tag in soup.find_all('img', src=True):
        original = tag['src']
        rewritten = rewrite_url(original, file_path)
        if rewritten != original:
            tag['src'] = rewritten
            modified = True

    # Process <link> tags (CSS)
    for tag in soup.find_all('link', href=True):
        original = tag['href']
        rewritten = rewrite_url(original, file_path)
        if rewritten != original:
            tag['href'] = rewritten
            modified = True

    # Process <script> tags
    for tag in soup.find_all('script', src=True):
        original = tag['src']
        rewritten = rewrite_url(original, file_path)
        if rewritten != original:
            tag['src'] = rewritten
            modified = True

    # Save if modified
    if modified:
        try:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(str(soup))
            return True
        except Exception as e:
            print(f"Error writing {file_path}: {e}")
            return False

    return False


def main():
    print("Rewriting sister site links...")
    print("")

    # Find all HTML files
    html_files = list(ARCHIVE_DIR.rglob("*.html"))
    print(f"Found {len(html_files)} HTML files")
    print("")

    modified_count = 0
    for i, file_path in enumerate(html_files, 1):
        if i % 100 == 0:
            print(f"Progress: {i}/{len(html_files)} files processed, {modified_count} modified")

        if process_html_file(file_path):
            modified_count += 1

    print("")
    print("=" * 80)
    print("Sister Site Link Rewriting Complete!")
    print("=" * 80)
    print(f"Files processed: {len(html_files)}")
    print(f"Files modified: {modified_count}")
    print("")
    print("Sister site links now point to local archive copies:")
    print("  - gold.fffff.at -> /gold")
    print("")


if __name__ == '__main__':
    main()
