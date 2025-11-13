#!/usr/bin/env python3
"""
Manual recovery tool for specific URLs
Usage: ./5-manual-recovery.py <url> [url2] [url3] ...
"""

import sys
import time
import requests
from pathlib import Path
from urllib.parse import urlparse

ARCHIVE_DIR = Path("../archive")
WAYBACK_API = "http://archive.org/wayback/available"


def query_wayback(url):
    """Query Wayback Machine for a URL"""
    try:
        params = {'url': url}
        response = requests.get(WAYBACK_API, params=params, timeout=30)

        if response.status_code == 200:
            data = response.json()
            if 'archived_snapshots' in data and 'closest' in data['archived_snapshots']:
                snapshot = data['archived_snapshots']['closest']
                if snapshot.get('available'):
                    return {
                        'url': snapshot['url'],
                        'timestamp': snapshot['timestamp'],
                        'status': snapshot.get('status', 'unknown')
                    }
    except Exception as e:
        print(f"Error querying Wayback: {e}")

    return None


def download_from_wayback(wayback_url, local_path):
    """Download a file from Wayback Machine"""
    try:
        print(f"  Downloading from: {wayback_url}")
        response = requests.get(wayback_url, timeout=60, stream=True)

        if response.status_code == 200:
            local_path.parent.mkdir(parents=True, exist_ok=True)

            with open(local_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)

            return True
    except Exception as e:
        print(f"  Error downloading: {e}")

    return False


def url_to_local_path(url):
    """Convert URL to local file path"""
    parsed = urlparse(url)

    # Handle fffff.at URLs
    if parsed.netloc in ['fffff.at', 'www.fffff.at', '']:
        path = parsed.path.lstrip('/')
        if not path:
            path = 'index.html'

        # Remove query string for file path
        if '?' in path:
            path = path.split('?')[0]

        return ARCHIVE_DIR / path

    # External URL - save to external/ directory
    domain = parsed.netloc or 'unknown'
    path = parsed.path.lstrip('/') or 'index.html'
    return ARCHIVE_DIR / 'external' / domain / path


def recover_url(url):
    """Attempt to recover a single URL"""
    print(f"\n{'='*80}")
    print(f"Recovering: {url}")
    print(f"{'='*80}")

    # Determine local path
    local_path = url_to_local_path(url)
    print(f"Local path: {local_path}")

    # Check if already exists
    if local_path.exists():
        print(f"✓ File already exists locally")
        return True

    # Query Wayback Machine
    print(f"Querying Wayback Machine...")
    wayback_result = query_wayback(url)

    if wayback_result:
        print(f"✓ Found in Wayback Machine!")
        print(f"  Timestamp: {wayback_result['timestamp']}")
        print(f"  Status: {wayback_result['status']}")

        if download_from_wayback(wayback_result['url'], local_path):
            print(f"✓ Successfully recovered!")
            print(f"  Saved to: {local_path}")
            return True
        else:
            print(f"✗ Download failed")
            return False
    else:
        print(f"✗ Not found in Wayback Machine")
        return False


def main():
    if len(sys.argv) < 2:
        print("Manual Recovery Tool")
        print("=" * 80)
        print()
        print("Usage: ./5-manual-recovery.py <url> [url2] [url3] ...")
        print()
        print("Examples:")
        print("  ./5-manual-recovery.py https://fffff.at/some-post/")
        print("  ./5-manual-recovery.py https://fffff.at/files/image.jpg")
        print("  ./5-manual-recovery.py https://fffff.at/post1/ https://fffff.at/post2/")
        print()
        sys.exit(1)

    urls = sys.argv[1:]
    print(f"Attempting to recover {len(urls)} URL(s)...")

    successful = 0
    failed = 0

    for i, url in enumerate(urls, 1):
        if i > 1:
            print(f"\nWaiting 2 seconds before next request...")
            time.sleep(2)

        if recover_url(url):
            successful += 1
        else:
            failed += 1

    # Summary
    print(f"\n{'='*80}")
    print(f"Recovery Summary")
    print(f"{'='*80}")
    print(f"Total URLs: {len(urls)}")
    print(f"Successful: {successful}")
    print(f"Failed: {failed}")


if __name__ == '__main__':
    main()
