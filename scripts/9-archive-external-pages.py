#!/usr/bin/env python3
"""
Archive external pages linked from the site using Wayback Machine
"""

import re
import time
import requests
from pathlib import Path
from urllib.parse import urlparse

def save_to_wayback(url):
    """Submit URL to Wayback Machine for archiving."""
    save_url = "https://web.archive.org/save/" + url
    try:
        response = requests.get(save_url, timeout=60)
        return response.status_code == 200
    except Exception as e:
        return False

def extract_external_links(archive_dir):
    """Extract all external HTTP links from HTML files."""
    external_links = set()

    html_files = list(Path(archive_dir).glob('**/*.html'))
    print(f"Scanning {len(html_files)} HTML files for external links...")

    for i, html_file in enumerate(html_files):
        if i % 500 == 0:
            print(f"  Processed {i}/{len(html_files)} files...", end='\r')

        try:
            with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()

            # Find all href links
            link_pattern = r'href=["\']([^"\']+)["\']'
            for match in re.finditer(link_pattern, content):
                url = match.group(1)

                # Only external HTTP(S) links
                if url.startswith('http://') or url.startswith('https://'):
                    # Skip our own domains and common services
                    if not any(skip in url for skip in [
                        'fffff.at',
                        'gravatar.com',
                        'wordpress.com',
                        'feedburner.com',
                        'youtube.com',
                        'vimeo.com',
                        'twitter.com',
                        'facebook.com',
                        'instagram.com',
                    ]):
                        external_links.add(url)

        except Exception:
            pass

    print(f"\n\nFound {len(external_links)} unique external links")
    return external_links

def main():
    archive_dir = Path(__file__).parent.parent / 'archive'

    print("Extracting external links...")
    external_links = extract_external_links(archive_dir)

    # Save list
    output_file = Path(__file__).parent.parent / 'external-links.txt'
    with open(output_file, 'w') as f:
        for link in sorted(external_links):
            f.write(link + '\n')

    print(f"Saved external links to: {output_file}")
    print(f"\nTo archive these links in Wayback Machine:")
    print(f"  - Submit manually: https://web.archive.org/save/")
    print(f"  - Or use: waybackpy (pip install waybackpy)")
    print(f"\nTop 20 domains:")

    domains = {}
    for link in external_links:
        domain = urlparse(link).netloc
        domains[domain] = domains.get(domain, 0) + 1

    for domain, count in sorted(domains.items(), key=lambda x: x[1], reverse=True)[:20]:
        print(f"  [{count:4d}x] {domain}")

if __name__ == '__main__':
    main()
