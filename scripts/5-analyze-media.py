#!/usr/bin/env python3
"""
Analyze missing images, videos, and broken embeds in the fffff.at archive.
"""

import os
import re
from pathlib import Path
from collections import defaultdict

def analyze_media(archive_dir):
    """Analyze all media references in HTML files."""

    missing_images = []
    missing_videos = []
    youtube_embeds = []
    vimeo_embeds = []
    external_images = []

    html_files = list(Path(archive_dir).glob('**/*.html'))
    print(f"Analyzing {len(html_files)} HTML files...\n")

    for i, html_file in enumerate(html_files):
        if i % 500 == 0:
            print(f"  Processed {i}/{len(html_files)} files...", end='\r')

        try:
            with open(html_file, 'r', encoding='utf-8', errors='ignore') as f:
                content = f.read()

            # Find image tags
            img_pattern = r'<img[^>]+src=["\']([^"\']+)["\']'
            for match in re.finditer(img_pattern, content, re.IGNORECASE):
                src = match.group(1)

                # Skip external tracking pixels and gravatars
                if any(x in src for x in ['gravatar.com', 'quantserve.com', 'feedburner.com']):
                    continue

                # Check if external
                if src.startswith('http://') or src.startswith('https://'):
                    if 'fffff.at' not in src:
                        external_images.append((str(html_file), src))
                    continue

                # Check if local file exists
                if src.startswith('/'):
                    img_path = archive_dir / src.lstrip('/')
                else:
                    img_path = html_file.parent / src

                img_path = img_path.resolve()
                if not img_path.exists():
                    missing_images.append((str(html_file), src))

            # Find video tags
            video_pattern = r'<(?:video|source)[^>]+src=["\']([^"\']+)["\']'
            for match in re.finditer(video_pattern, content, re.IGNORECASE):
                src = match.group(1)
                if src.startswith('http://') or src.startswith('https://'):
                    continue

                if src.startswith('/'):
                    vid_path = archive_dir / src.lstrip('/')
                else:
                    vid_path = html_file.parent / src

                vid_path = vid_path.resolve()
                if not vid_path.exists():
                    missing_videos.append((str(html_file), src))

            # Find YouTube embeds
            youtube_patterns = [
                r'youtube\.com/embed/([a-zA-Z0-9_-]+)',
                r'youtube\.com/watch\?v=([a-zA-Z0-9_-]+)',
                r'youtu\.be/([a-zA-Z0-9_-]+)'
            ]
            for pattern in youtube_patterns:
                for match in re.finditer(pattern, content):
                    video_id = match.group(1)
                    youtube_embeds.append((str(html_file), video_id))

            # Find Vimeo embeds
            vimeo_pattern = r'vimeo\.com/(?:video/)?(\d+)'
            for match in re.finditer(vimeo_pattern, content):
                video_id = match.group(1)
                vimeo_embeds.append((str(html_file), video_id))

        except Exception as e:
            pass

    print(f"\n\n{'='*60}")
    print("MEDIA ANALYSIS REPORT")
    print('='*60)

    # Missing local images
    print(f"\n📷 MISSING LOCAL IMAGES: {len(missing_images)}")
    if missing_images:
        image_counts = defaultdict(int)
        for _, src in missing_images:
            image_counts[src] += 1

        print(f"\nTop 20 most frequently missing images:")
        for src, count in sorted(image_counts.items(), key=lambda x: x[1], reverse=True)[:20]:
            print(f"  [{count:4d}x] {src}")

    # Missing videos
    print(f"\n🎥 MISSING LOCAL VIDEOS: {len(missing_videos)}")
    if missing_videos:
        print("Examples:")
        for file, src in missing_videos[:10]:
            print(f"  {src}")

    # External images
    print(f"\n🌐 EXTERNAL IMAGE REFERENCES: {len(external_images)}")
    if external_images:
        domain_counts = defaultdict(int)
        for _, src in external_images:
            domain = re.search(r'https?://([^/]+)', src)
            if domain:
                domain_counts[domain.group(1)] += 1

        print(f"Top external domains:")
        for domain, count in sorted(domain_counts.items(), key=lambda x: x[1], reverse=True)[:15]:
            print(f"  [{count:4d}x] {domain}")

    # YouTube embeds
    print(f"\n📺 YOUTUBE EMBEDS: {len(youtube_embeds)}")
    unique_youtube = len(set(vid_id for _, vid_id in youtube_embeds))
    print(f"   Unique videos: {unique_youtube}")
    if youtube_embeds:
        print(f"\nSample YouTube video IDs:")
        unique_ids = list(set(vid_id for _, vid_id in youtube_embeds))[:10]
        for vid_id in unique_ids:
            print(f"  https://youtube.com/watch?v={vid_id}")

    # Vimeo embeds
    print(f"\n📹 VIMEO EMBEDS: {len(vimeo_embeds)}")
    unique_vimeo = len(set(vid_id for _, vid_id in vimeo_embeds))
    print(f"   Unique videos: {unique_vimeo}")
    if vimeo_embeds:
        print(f"\nSample Vimeo video IDs:")
        unique_ids = list(set(vid_id for _, vid_id in vimeo_embeds))[:10]
        for vid_id in unique_ids:
            print(f"  https://vimeo.com/{vid_id}")

    print(f"\n{'='*60}\n")

    # Save detailed reports
    with open('missing-images-report.txt', 'w') as f:
        f.write("MISSING LOCAL IMAGES\n")
        f.write("="*60 + "\n\n")
        for file, src in missing_images:
            f.write(f"{file}\n  -> {src}\n\n")

    with open('external-images-report.txt', 'w') as f:
        f.write("EXTERNAL IMAGE REFERENCES\n")
        f.write("="*60 + "\n\n")
        for file, src in external_images:
            f.write(f"{file}\n  -> {src}\n\n")

    print("Detailed reports saved:")
    print("  - missing-images-report.txt")
    print("  - external-images-report.txt")

if __name__ == '__main__':
    archive_dir = Path(__file__).parent.parent / 'archive'
    analyze_media(archive_dir)
