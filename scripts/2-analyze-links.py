#!/usr/bin/env python3
"""
Analyze mirrored site for broken links and missing assets
"""

import os
import re
import json
from pathlib import Path
from urllib.parse import urljoin, urlparse
from collections import defaultdict
from bs4 import BeautifulSoup

ARCHIVE_DIR = Path("../archive")
REPORTS_DIR = Path("../reports")


def find_all_html_files():
    """Find all HTML files in the archive"""
    html_files = []
    for path in ARCHIVE_DIR.rglob("*.html"):
        html_files.append(path)
    for path in ARCHIVE_DIR.rglob("*.htm"):
        html_files.append(path)
    return html_files


def extract_links_from_html(html_path):
    """Extract all links and asset references from an HTML file"""
    links = {
        'pages': [],
        'images': [],
        'css': [],
        'js': [],
        'other': []
    }

    try:
        with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
            soup = BeautifulSoup(f.read(), 'html.parser')

        # Find all <a> tags
        for tag in soup.find_all('a', href=True):
            links['pages'].append(tag['href'])

        # Find all <img> tags
        for tag in soup.find_all('img', src=True):
            links['images'].append(tag['src'])

        # Find all <link> tags (CSS)
        for tag in soup.find_all('link', href=True):
            if 'stylesheet' in str(tag.get('rel', [])):
                links['css'].append(tag['href'])
            else:
                links['other'].append(tag['href'])

        # Find all <script> tags
        for tag in soup.find_all('script', src=True):
            links['js'].append(tag['src'])

        # Find background images in style attributes
        for tag in soup.find_all(style=True):
            style = tag['style']
            bg_images = re.findall(r'url\(["\']?([^"\']+)["\']?\)', style)
            links['images'].extend(bg_images)

    except Exception as e:
        print(f"Error processing {html_path}: {e}")

    return links


def resolve_url(base_url, url):
    """Resolve a URL relative to a base URL"""
    # Skip data: URLs and javascript: URLs
    if url.startswith(('data:', 'javascript:', 'mailto:', '#')):
        return None

    # If it's already absolute, return as is
    if url.startswith(('http://', 'https://')):
        return url

    # Resolve relative URL
    return urljoin(base_url, url)


def url_to_local_path(url, archive_root):
    """Convert a URL to expected local file path"""
    parsed = urlparse(url)

    # Only handle fffff.at URLs
    if parsed.netloc and parsed.netloc != 'fffff.at':
        return None

    # Remove leading slash and create path
    path = parsed.path.lstrip('/')
    if not path:
        path = 'index.html'

    local_path = archive_root / path

    # Check variations
    if local_path.exists():
        return local_path

    # Try with .html extension
    if not str(local_path).endswith('.html'):
        html_path = Path(str(local_path) + '.html')
        if html_path.exists():
            return html_path

    # Try as directory with index.html
    index_path = local_path / 'index.html'
    if index_path.exists():
        return index_path

    return None


def main():
    print("Analyzing mirrored site...")

    REPORTS_DIR.mkdir(exist_ok=True)

    if not ARCHIVE_DIR.exists():
        print(f"Error: Archive directory not found: {ARCHIVE_DIR}")
        print("Run the mirror script first!")
        return

    html_files = find_all_html_files()
    print(f"Found {len(html_files)} HTML files")

    # Track all references
    all_references = defaultdict(list)  # url -> [pages that reference it]
    missing_files = defaultdict(list)

    for html_file in html_files:
        rel_path = html_file.relative_to(ARCHIVE_DIR)
        base_url = f"https://fffff.at/{rel_path}"

        links = extract_links_from_html(html_file)

        for link_type, urls in links.items():
            for url in urls:
                resolved = resolve_url(base_url, url)
                if not resolved:
                    continue

                # Track reference
                all_references[resolved].append({
                    'page': str(rel_path),
                    'type': link_type
                })

                # Check if file exists locally
                local_path = url_to_local_path(resolved, ARCHIVE_DIR)
                if not local_path or not local_path.exists():
                    missing_files[resolved].append({
                        'page': str(rel_path),
                        'type': link_type
                    })

    # Generate reports
    print(f"\nFound {len(missing_files)} missing/broken references")

    # Save detailed JSON report
    report = {
        'summary': {
            'total_html_files': len(html_files),
            'total_unique_references': len(all_references),
            'missing_references': len(missing_files)
        },
        'missing_files': {
            url: refs for url, refs in sorted(missing_files.items())
        }
    }

    report_path = REPORTS_DIR / 'missing-files.json'
    with open(report_path, 'w') as f:
        json.dump(report, f, indent=2)

    print(f"Detailed report saved to: {report_path}")

    # Create human-readable summary
    summary_path = REPORTS_DIR / 'missing-files-summary.txt'
    with open(summary_path, 'w') as f:
        f.write("Missing Files Summary\n")
        f.write("=" * 80 + "\n\n")
        f.write(f"Total HTML files analyzed: {len(html_files)}\n")
        f.write(f"Total unique references: {len(all_references)}\n")
        f.write(f"Missing references: {len(missing_files)}\n\n")

        # Group by type
        by_type = defaultdict(set)
        for url, refs in missing_files.items():
            for ref in refs:
                by_type[ref['type']].add(url)

        f.write("Missing files by type:\n")
        for link_type, urls in sorted(by_type.items()):
            f.write(f"  {link_type}: {len(urls)}\n")

        f.write("\n" + "=" * 80 + "\n")
        f.write("Missing Files (sorted by reference count):\n\n")

        sorted_missing = sorted(missing_files.items(),
                              key=lambda x: len(x[1]),
                              reverse=True)

        for url, refs in sorted_missing[:100]:  # Top 100
            f.write(f"\n{url}\n")
            f.write(f"  Referenced by {len(refs)} page(s)\n")
            f.write(f"  Type: {refs[0]['type']}\n")
            if len(refs) <= 5:
                for ref in refs:
                    f.write(f"    - {ref['page']}\n")

    print(f"Summary saved to: {summary_path}")
    print("\nNext: Run the Wayback Machine recovery script")


if __name__ == '__main__':
    main()
