#!/usr/bin/env python3
"""
Recover missing files from the Wayback Machine
"""

import os
import json
import time
import requests
from pathlib import Path
from urllib.parse import urlparse, quote
from datetime import datetime

REPORTS_DIR = Path("../reports")
ARCHIVE_DIR = Path("../archive")
WAYBACK_API = "http://archive.org/wayback/available"

# Rate limiting
REQUEST_DELAY = 1.5  # seconds between requests


def query_wayback(url):
    """Query Wayback Machine for a URL"""
    try:
        params = {'url': url}
        response = requests.get(WAYBACK_API, params=params, timeout=30)
        time.sleep(REQUEST_DELAY)

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
        print(f"Error querying Wayback for {url}: {e}")

    return None


def download_from_wayback(wayback_url, local_path):
    """Download a file from Wayback Machine"""
    try:
        print(f"  Downloading from Wayback: {wayback_url}")
        response = requests.get(wayback_url, timeout=60, stream=True)
        time.sleep(REQUEST_DELAY)

        if response.status_code == 200:
            # Create parent directories
            local_path.parent.mkdir(parents=True, exist_ok=True)

            # Write file
            with open(local_path, 'wb') as f:
                for chunk in response.iter_content(chunk_size=8192):
                    f.write(chunk)

            return True
    except Exception as e:
        print(f"  Error downloading: {e}")

    return False


def url_to_local_path(url, archive_root):
    """Convert URL to local file path"""
    parsed = urlparse(url)

    # Only handle fffff.at URLs
    if parsed.netloc and parsed.netloc != 'fffff.at':
        return None

    # Remove leading slash
    path = parsed.path.lstrip('/')
    if not path:
        path = 'index.html'

    # Remove query string and fragment for file path
    # but preserve them in a comment/log if needed
    if '?' in path:
        path = path.split('?')[0]

    return archive_root / path


def load_existing_log():
    """Load existing recovery log if it exists"""
    log_path = REPORTS_DIR / 'wayback-recovery.json'
    if log_path.exists():
        with open(log_path, 'r') as f:
            return json.load(f)
    return None


def build_attempted_urls(log):
    """Build set of URLs already attempted (whether successful or not)"""
    attempted = set()
    if log:
        for item in log.get('recovered', []):
            attempted.add(item['url'])
        for item in log.get('not_found', []):
            attempted.add(item['url'])
        for item in log.get('failed_download', []):
            attempted.add(item['url'])
        for item in log.get('external_links', []):
            attempted.add(item['url'])
    return attempted


def main():
    print("Starting Wayback Machine recovery...")

    missing_report = REPORTS_DIR / 'missing-files.json'
    if not missing_report.exists():
        print("Error: missing-files.json not found")
        print("Run the analyze-links script first!")
        return

    with open(missing_report, 'r') as f:
        data = json.load(f)

    missing_files = data['missing_files']

    # Load existing log and find URLs already attempted
    existing_log = load_existing_log()
    attempted_urls = build_attempted_urls(existing_log)

    if existing_log:
        print(f"Found existing recovery log with {len(attempted_urls)} URLs already attempted")
        recovery_log = existing_log
        recovery_log['last_updated'] = datetime.now().isoformat()
        # Update total in case missing files changed
        recovery_log['total_missing'] = len(missing_files)
    else:
        print(f"Starting fresh recovery log")
        recovery_log = {
            'started': datetime.now().isoformat(),
            'last_updated': datetime.now().isoformat(),
            'total_missing': len(missing_files),
            'recovered': [],
            'not_found': [],
            'failed_download': [],
            'external_links': []
        }

    # Count URLs we need to process
    urls_to_process = [url for url in missing_files.keys() if url not in attempted_urls]
    print(f"Found {len(missing_files)} missing files total")
    print(f"Already attempted: {len(attempted_urls)}")
    print(f"To process: {len(urls_to_process)}")

    if not urls_to_process:
        print("\nAll URLs have already been attempted. Nothing to do!")
        return

    processed_count = 0
    for url in urls_to_process:
        processed_count += 1
        refs = missing_files[url]
        print(f"\n[{processed_count}/{len(urls_to_process)}] Processing: {url}")

        parsed = urlparse(url)

        # Skip external links (we'll just log them)
        if parsed.netloc and parsed.netloc != 'fffff.at':
            print(f"  Skipping external link: {parsed.netloc}")
            recovery_log['external_links'].append({
                'url': url,
                'references': refs
            })
            continue

        # Skip WordPress feed URLs (RSS/Atom feeds that return 500s in archive mode)
        if '/feed/' in url or url.endswith('/feed'):
            print(f"  Skipping WordPress feed URL")
            recovery_log['external_links'].append({
                'url': url,
                'references': refs,
                'note': 'WordPress feed URL (skipped)'
            })
            continue

        # Skip WordPress API endpoints
        if '/wp-json/' in url or url.endswith('xmlrpc.php'):
            print(f"  Skipping WordPress API endpoint")
            recovery_log['external_links'].append({
                'url': url,
                'references': refs,
                'note': 'WordPress API endpoint (skipped)'
            })
            continue

        # Skip broken audio directory URLs
        if 'fffff.at/audio/' in url:
            print(f"  Skipping broken audio directory URL")
            recovery_log['external_links'].append({
                'url': url,
                'references': refs,
                'note': 'Broken audio directory URL (skipped)'
            })
            continue

        # Skip all fffff.at URLs - should already be in main mirror
        # If they're missing from mirror, they're likely broken/nonexistent
        if 'fffff.at' in parsed.netloc:
            print(f"  Skipping fffff.at URL (should be in main mirror)")
            recovery_log['external_links'].append({
                'url': url,
                'references': refs,
                'note': 'fffff.at URL (should be in main mirror, skipped)'
            })
            continue

        # Check Wayback Machine
        print(f"  Querying Wayback Machine...")
        wayback_result = query_wayback(url)

        if wayback_result:
            print(f"  Found in Wayback! Timestamp: {wayback_result['timestamp']}")

            local_path = url_to_local_path(url, ARCHIVE_DIR)
            if local_path:
                if download_from_wayback(wayback_result['url'], local_path):
                    print(f"  ✓ Successfully recovered to: {local_path}")
                    recovery_log['recovered'].append({
                        'url': url,
                        'wayback_url': wayback_result['url'],
                        'timestamp': wayback_result['timestamp'],
                        'local_path': str(local_path.relative_to(ARCHIVE_DIR)),
                        'references': refs
                    })
                else:
                    print(f"  ✗ Download failed")
                    recovery_log['failed_download'].append({
                        'url': url,
                        'wayback_url': wayback_result['url'],
                        'references': refs
                    })
            else:
                print(f"  Could not determine local path")
                recovery_log['failed_download'].append({
                    'url': url,
                    'error': 'Could not determine local path',
                    'references': refs
                })
        else:
            print(f"  ✗ Not found in Wayback Machine")
            recovery_log['not_found'].append({
                'url': url,
                'references': refs
            })

    # Save recovery log
    log_path = REPORTS_DIR / 'wayback-recovery.json'
    with open(log_path, 'w') as f:
        json.dump(recovery_log, f, indent=2)

    # Print summary
    print("\n" + "=" * 80)
    print("Recovery Summary")
    print("=" * 80)
    print(f"Total missing files: {recovery_log['total_missing']}")
    print(f"Successfully recovered: {len(recovery_log['recovered'])}")
    print(f"Not found in Wayback: {len(recovery_log['not_found'])}")
    print(f"Failed downloads: {len(recovery_log['failed_download'])}")
    print(f"External links (skipped): {len(recovery_log['external_links'])}")
    print(f"\nDetailed log saved to: {log_path}")

    # Create final missing files report
    still_missing = recovery_log['not_found'] + recovery_log['failed_download']

    if still_missing:
        final_report_path = REPORTS_DIR / 'still-missing.txt'
        with open(final_report_path, 'w') as f:
            f.write("Files Still Missing After Wayback Recovery\n")
            f.write("=" * 80 + "\n\n")
            f.write(f"Total: {len(still_missing)}\n\n")

            for item in sorted(still_missing, key=lambda x: len(x['references']), reverse=True):
                f.write(f"\n{item['url']}\n")
                f.write(f"  Referenced by {len(item['references'])} page(s):\n")
                for ref in item['references'][:10]:  # Show up to 10 references
                    f.write(f"    - {ref['page']} ({ref['type']})\n")

        print(f"\nStill-missing files report: {final_report_path}")


if __name__ == '__main__':
    main()
