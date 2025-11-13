#!/usr/bin/env python3
"""
Download missing images and files from Wayback Machine
"""

import os
import re
import time
import subprocess
from pathlib import Path
from urllib.parse import urljoin, urlparse
import requests

WAYBACK_CDX_API = "http://web.archive.org/cdx/search/cdx"
WAYBACK_DOWNLOAD = "http://web.archive.org/web"

def get_wayback_snapshot(url):
    """Find the best Wayback Machine snapshot for a URL."""
    params = {
        'url': url,
        'output': 'json',
        'limit': 1,
        'filter': 'statuscode:200',
        'sort': 'closest',
        'closest': '20150701',  # FAT Lab's peak period
    }

    try:
        response = requests.get(WAYBACK_CDX_API, params=params, timeout=10)
        if response.status_code == 200:
            data = response.json()
            if len(data) > 1:  # First row is headers
                timestamp = data[1][1]
                original_url = data[1][2]
                return f"{WAYBACK_DOWNLOAD}/{timestamp}/{original_url}"
    except Exception as e:
        print(f"  Error finding snapshot: {e}")

    return None

def download_file(url, dest_path):
    """Download a file from URL to destination."""
    dest_path.parent.mkdir(parents=True, exist_ok=True)

    try:
        response = requests.get(url, timeout=30, stream=True)
        if response.status_code == 200:
            with open(dest_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)
            return True
    except Exception as e:
        print(f"  Download failed: {e}")

    return False

def main():
    archive_dir = Path(__file__).parent.parent / 'archive'

    # Read missing images report
    missing_report = Path(__file__).parent.parent / 'missing-images-report.txt'

    if not missing_report.exists():
        print("Missing images report not found!")
        return

    print("Parsing missing images...")

    missing_files = set()
    with open(missing_report, 'r') as f:
        for line in f:
            # Extract file paths like /files/2015/05/image.jpg
            match = re.search(r'/(?:files|images|fuckflickr|widgets)/[^\s"\']+', line)
            if match:
                missing_files.add(match.group(0))

    print(f"Found {len(missing_files)} unique missing files")
    print(f"\nAttempting to download from Wayback Machine...")
    print(f"(This will take a while...)\n")

    downloaded = 0
    failed = 0

    for i, file_path in enumerate(sorted(missing_files), 1):
        if i % 10 == 0:
            print(f"Progress: {i}/{len(missing_files)} ({downloaded} downloaded, {failed} failed)")

        dest_path = archive_dir / file_path.lstrip('/')

        # Skip if already exists
        if dest_path.exists():
            continue

        # Try original fffff.at URL
        original_url = f"http://fffff.at{file_path}"
        wayback_url = get_wayback_snapshot(original_url)

        if wayback_url:
            print(f"[{i}/{len(missing_files)}] Downloading: {file_path}")
            if download_file(wayback_url, dest_path):
                downloaded += 1
                time.sleep(0.5)  # Be nice to Wayback Machine
            else:
                failed += 1
        else:
            failed += 1

    print(f"\n{'='*60}")
    print(f"Download complete!")
    print(f"  Downloaded: {downloaded}")
    print(f"  Failed: {failed}")
    print(f"  Total: {len(missing_files)}")
    print(f"{'='*60}")

if __name__ == '__main__':
    main()
