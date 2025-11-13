#!/usr/bin/env python3
"""
Generate comprehensive updated reports on missing/broken links,
top domains, and archive statistics.
"""

import json
import re
from pathlib import Path
from collections import defaultdict, Counter

def analyze_broken_links(report_path):
    """Analyze muffet broken links report."""
    if not report_path.exists():
        return {}

    broken_by_type = defaultdict(list)
    broken_domains = Counter()

    with open(report_path, 'r') as f:
        for line in f:
            if '404' in line:
                # Extract URL
                match = re.search(r'http[s]?://[^\s]+', line)
                if match:
                    url = match.group(0)

                    # Categorize by file type
                    if any(ext in url for ext in ['.jpg', '.jpeg', '.png', '.gif', '.webp']):
                        broken_by_type['images'].append(url)
                    elif any(ext in url for ext in ['.mp4', '.webm', '.mov', '.avi']):
                        broken_by_type['videos'].append(url)
                    elif any(ext in url for ext in ['.css']):
                        broken_by_type['stylesheets'].append(url)
                    elif any(ext in url for ext in ['.js']):
                        broken_by_type['javascript'].append(url)
                    elif '/tag/' in url or '/category/' in url:
                        broken_by_type['taxonomies'].append(url)
                    else:
                        broken_by_type['pages'].append(url)

                    # Track domain
                    domain_match = re.search(r'https?://([^/]+)', url)
                    if domain_match:
                        broken_domains[domain_match.group(1)] += 1

    return {
        'by_type': {k: len(v) for k, v in broken_by_type.items()},
        'by_type_urls': broken_by_type,
        'by_domain': dict(broken_domains.most_common(20))
    }

def analyze_missing_images(report_path):
    """Analyze missing images report."""
    if not report_path.exists():
        return {}

    missing_images = []
    image_counts = Counter()

    with open(report_path, 'r') as f:
        for line in f:
            if '  -> ' in line:
                img_path = line.split('  -> ')[1].strip()
                missing_images.append(img_path)
                image_counts[img_path] += 1

    return {
        'total': len(missing_images),
        'unique': len(image_counts),
        'top_20': dict(image_counts.most_common(20))
    }

def analyze_external_links(links_path):
    """Analyze external links file."""
    if not links_path.exists():
        return {}

    domains = Counter()
    total = 0

    with open(links_path, 'r') as f:
        for line in f:
            url = line.strip()
            if url:
                total += 1
                domain_match = re.search(r'https?://([^/]+)', url)
                if domain_match:
                    domains[domain_match.group(1)] += 1

    return {
        'total': total,
        'unique_domains': len(domains),
        'top_20_domains': dict(domains.most_common(20))
    }

def main():
    base_dir = Path(__file__).parent.parent
    reports_dir = base_dir / 'reports'
    reports_dir.mkdir(exist_ok=True)

    print("Generating comprehensive archive reports...")
    print("")

    # Analyze broken links
    print("1. Analyzing broken links...")
    broken_before = analyze_broken_links(base_dir / 'broken-links-report.txt')
    broken_after = analyze_broken_links(base_dir / 'broken-links-report-after-fix.txt')

    # Analyze missing images
    print("2. Analyzing missing images...")
    missing_images = analyze_missing_images(base_dir / 'missing-images-report.txt')

    # Analyze external links
    print("3. Analyzing external links...")
    external_links = analyze_external_links(base_dir / 'external-links.txt')

    # Generate comprehensive report
    report = {
        'broken_links': {
            'before_fixes': broken_before,
            'after_fixes': broken_after,
            'improvement': {
                'total_reduction': sum(broken_before.get('by_type', {}).values()) - \
                                 sum(broken_after.get('by_type', {}).values())
            }
        },
        'missing_images': missing_images,
        'external_links': external_links
    }

    # Save JSON report
    with open(reports_dir / 'archive-analysis.json', 'w') as f:
        json.dump(report, f, indent=2)

    # Generate human-readable report
    output = []
    output.append("=" * 70)
    output.append("FFFFF.AT ARCHIVE - COMPREHENSIVE ANALYSIS REPORT")
    output.append("=" * 70)
    output.append("")

    # Broken Links Section
    output.append("📊 BROKEN LINKS ANALYSIS")
    output.append("-" * 70)
    output.append("")

    if broken_before.get('by_type'):
        output.append("BEFORE FIXES:")
        for link_type, count in broken_before['by_type'].items():
            output.append(f"  {link_type:20s}: {count:,}")
        output.append(f"  {'TOTAL':20s}: {sum(broken_before['by_type'].values()):,}")
        output.append("")

    if broken_after.get('by_type'):
        output.append("AFTER FIXES:")
        for link_type, count in broken_after['by_type'].items():
            output.append(f"  {link_type:20s}: {count:,}")
        output.append(f"  {'TOTAL':20s}: {sum(broken_after['by_type'].values()):,}")
    else:
        output.append("AFTER FIXES: ✅ ALL FIXED (0 broken links)")

    output.append("")
    improvement = sum(broken_before.get('by_type', {}).values()) - \
                  sum(broken_after.get('by_type', {}).values())
    output.append(f"✨ IMPROVEMENT: {improvement:,} broken links fixed")
    output.append("")

    if broken_after.get('by_domain'):
        output.append("Top broken link domains (remaining):")
        for domain, count in list(broken_after['by_domain'].items())[:10]:
            output.append(f"  [{count:4d}x] {domain}")
        output.append("")

    # Missing Images Section
    output.append("")
    output.append("🖼️  MISSING IMAGES ANALYSIS")
    output.append("-" * 70)
    output.append(f"Total missing image references: {missing_images.get('total', 0):,}")
    output.append(f"Unique missing images: {missing_images.get('unique', 0):,}")
    output.append("")

    if missing_images.get('top_20'):
        output.append("Top 10 most frequently missing images:")
        for img_path, count in list(missing_images['top_20'].items())[:10]:
            output.append(f"  [{count:4d}x] {img_path}")
        output.append("")

    # External Links Section
    output.append("")
    output.append("🌐 EXTERNAL LINKS ANALYSIS")
    output.append("-" * 70)
    output.append(f"Total external links: {external_links.get('total', 0):,}")
    output.append(f"Unique domains: {external_links.get('unique_domains', 0):,}")
    output.append("")

    if external_links.get('top_20_domains'):
        output.append("Top 20 external domains:")
        for domain, count in external_links['top_20_domains'].items():
            output.append(f"  [{count:4d}x] {domain}")
        output.append("")

    output.append("=" * 70)

    # Write report
    report_text = '\n'.join(output)
    with open(reports_dir / 'comprehensive-analysis.txt', 'w') as f:
        f.write(report_text)

    print("")
    print(report_text)
    print("")
    print(f"Reports saved to {reports_dir}/")
    print(f"  - archive-analysis.json (machine-readable)")
    print(f"  - comprehensive-analysis.txt (human-readable)")

if __name__ == '__main__':
    main()
