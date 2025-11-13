#!/usr/bin/env python3
"""
Generate comprehensive archive statistics report
"""

import json
from pathlib import Path
from collections import defaultdict, Counter

ARCHIVE_DIR = Path("../archive")
REPORTS_DIR = Path("../reports")


def analyze_archive():
    """Generate comprehensive statistics about the archive"""

    stats = {
        'total_files': 0,
        'total_size': 0,
        'by_type': defaultdict(lambda: {'count': 0, 'size': 0}),
        'html_pages': [],
        'directories': 0
    }

    # Collect all files
    for path in ARCHIVE_DIR.rglob("*"):
        if path.is_file():
            stats['total_files'] += 1
            size = path.stat().st_size
            stats['total_size'] += size

            # Get file extension
            ext = path.suffix.lower() if path.suffix else 'no_extension'
            stats['by_type'][ext]['count'] += 1
            stats['by_type'][ext]['size'] += size

            # Track HTML pages
            if ext in ['.html', '.htm']:
                rel_path = path.relative_to(ARCHIVE_DIR)
                stats['html_pages'].append(str(rel_path))
        elif path.is_dir():
            stats['directories'] += 1

    return stats


def format_size(bytes):
    """Format bytes to human readable"""
    for unit in ['B', 'KB', 'MB', 'GB']:
        if bytes < 1024.0:
            return f"{bytes:.1f} {unit}"
        bytes /= 1024.0
    return f"{bytes:.1f} TB"


def main():
    print("Generating archive report...")

    # Get archive stats
    stats = analyze_archive()

    # Load missing files report
    missing_report_path = REPORTS_DIR / 'missing-files.json'
    if missing_report_path.exists():
        with open(missing_report_path, 'r') as f:
            missing_data = json.load(f)
    else:
        missing_data = None

    # Create comprehensive report
    report_lines = []
    report_lines.append("=" * 80)
    report_lines.append("FFFFF.AT ARCHIVE - COMPREHENSIVE REPORT")
    report_lines.append("=" * 80)
    report_lines.append("")

    # Overall stats
    report_lines.append("## OVERALL STATISTICS")
    report_lines.append("-" * 80)
    report_lines.append(f"Total Files:        {stats['total_files']:,}")
    report_lines.append(f"Total Directories:  {stats['directories']:,}")
    report_lines.append(f"Total Size:         {format_size(stats['total_size'])}")
    report_lines.append(f"HTML Pages:         {len(stats['html_pages']):,}")
    report_lines.append("")

    # By file type
    report_lines.append("## FILES BY TYPE")
    report_lines.append("-" * 80)
    sorted_types = sorted(stats['by_type'].items(),
                         key=lambda x: x[1]['count'],
                         reverse=True)

    for ext, data in sorted_types[:20]:  # Top 20
        report_lines.append(f"{ext:20s} {data['count']:>6,} files    {format_size(data['size']):>10s}")

    report_lines.append("")

    # Key file types summary
    report_lines.append("## KEY CONTENT BREAKDOWN")
    report_lines.append("-" * 80)

    html_count = stats['by_type'].get('.html', {}).get('count', 0)
    htm_count = stats['by_type'].get('.htm', {}).get('count', 0)

    img_extensions = ['.jpg', '.jpeg', '.png', '.gif', '.svg', '.webp']
    img_count = sum(stats['by_type'].get(ext, {}).get('count', 0) for ext in img_extensions)
    img_size = sum(stats['by_type'].get(ext, {}).get('size', 0) for ext in img_extensions)

    video_extensions = ['.mp4', '.webm', '.mov', '.avi', '.flv']
    video_count = sum(stats['by_type'].get(ext, {}).get('count', 0) for ext in video_extensions)
    video_size = sum(stats['by_type'].get(ext, {}).get('size', 0) for ext in video_extensions)

    css_count = stats['by_type'].get('.css', {}).get('count', 0)
    js_count = stats['by_type'].get('.js', {}).get('count', 0)
    pdf_count = stats['by_type'].get('.pdf', {}).get('count', 0)
    pdf_size = stats['by_type'].get('.pdf', {}).get('size', 0)

    report_lines.append(f"HTML Pages:         {html_count + htm_count:>6,}")
    report_lines.append(f"Images:             {img_count:>6,}    {format_size(img_size)}")
    report_lines.append(f"Videos:             {video_count:>6,}    {format_size(video_size)}")
    report_lines.append(f"CSS Files:          {css_count:>6,}")
    report_lines.append(f"JavaScript Files:   {js_count:>6,}")
    report_lines.append(f"PDF Documents:      {pdf_count:>6,}    {format_size(pdf_size)}")
    report_lines.append("")

    # Missing files analysis
    if missing_data:
        report_lines.append("## MISSING/BROKEN LINKS ANALYSIS")
        report_lines.append("-" * 80)
        summary = missing_data.get('summary', {})
        report_lines.append(f"Total unique references:  {summary.get('total_unique_references', 0):,}")
        report_lines.append(f"Missing references:       {summary.get('missing_references', 0):,}")

        missing_files = missing_data.get('missing_files', {})

        # Categorize missing by domain
        external_links = 0
        fffff_links = 0
        other = 0

        for url in missing_files.keys():
            if 'fffff.at' in url:
                fffff_links += 1
            elif url.startswith('http://') or url.startswith('https://'):
                external_links += 1
            else:
                other += 1

        report_lines.append("")
        report_lines.append("Missing links breakdown:")
        report_lines.append(f"  External domains:       {external_links:>6,}  (expected)")
        report_lines.append(f"  fffff.at missing:       {fffff_links:>6,}  (needs recovery)")
        report_lines.append(f"  Other/relative:         {other:>6,}")
        report_lines.append("")

        # Most referenced missing files
        sorted_missing = sorted(missing_files.items(),
                               key=lambda x: len(x[1]),
                               reverse=True)

        report_lines.append("Top 10 most-referenced missing files:")
        for url, refs in sorted_missing[:10]:
            ref_count = len(refs)
            # Truncate long URLs
            display_url = url if len(url) <= 70 else url[:67] + "..."
            report_lines.append(f"  [{ref_count:>4}] {display_url}")

    report_lines.append("")
    report_lines.append("=" * 80)
    report_lines.append("END OF REPORT")
    report_lines.append("=" * 80)

    # Write report
    report_text = "\n".join(report_lines)
    print(report_text)

    # Save to file
    report_path = REPORTS_DIR / 'archive-report.txt'
    with open(report_path, 'w') as f:
        f.write(report_text)

    print(f"\n✓ Report saved to: {report_path}")

    # Also save JSON for programmatic access
    json_report = {
        'statistics': {
            'total_files': stats['total_files'],
            'total_directories': stats['directories'],
            'total_size_bytes': stats['total_size'],
            'total_size_human': format_size(stats['total_size']),
            'html_pages': len(stats['html_pages'])
        },
        'by_type': {ext: data for ext, data in stats['by_type'].items()}
    }

    json_path = REPORTS_DIR / 'archive-report.json'
    with open(json_path, 'w') as f:
        json.dump(json_report, f, indent=2)

    print(f"✓ JSON report saved to: {json_path}")


if __name__ == '__main__':
    main()
