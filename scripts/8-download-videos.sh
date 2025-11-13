#!/bin/bash
# Download YouTube and Vimeo videos using yt-dlp

ARCHIVE_DIR="/Users/jamie/dev/fffff.at-archive/archive"
VIDEO_DIR="$ARCHIVE_DIR/archived-videos"

mkdir -p "$VIDEO_DIR/youtube"
mkdir -p "$VIDEO_DIR/vimeo"

echo "Checking for yt-dlp..."
if ! command -v yt-dlp &> /dev/null; then
    echo "yt-dlp not found! Installing via brew..."
    brew install yt-dlp
fi

echo ""
echo "Extracting video IDs from HTML files..."

# Extract unique YouTube video IDs
echo "Finding YouTube videos..."
grep -roh 'youtube\.com/embed/[a-zA-Z0-9_-]\+\|youtube\.com/watch?v=[a-zA-Z0-9_-]\+\|youtu\.be/[a-zA-Z0-9_-]\+' "$ARCHIVE_DIR" \
    | sed -E 's|.*embed/||; s|.*watch\?v=||; s|.*youtu\.be/||' \
    | sort -u > /tmp/youtube_ids.txt

YOUTUBE_COUNT=$(wc -l < /tmp/youtube_ids.txt)
echo "Found $YOUTUBE_COUNT unique YouTube videos"

# Extract unique Vimeo video IDs
echo "Finding Vimeo videos..."
grep -roh 'vimeo\.com/\(video/\)\?[0-9]\+' "$ARCHIVE_DIR" \
    | sed -E 's|.*vimeo\.com/(video/)?||' \
    | sort -u > /tmp/vimeo_ids.txt

VIMEO_COUNT=$(wc -l < /tmp/vimeo_ids.txt)
echo "Found $VIMEO_COUNT unique Vimeo videos"

echo ""
echo "Starting downloads (this will take a LONG time)..."
echo ""

# Download YouTube videos
echo "=== Downloading YouTube Videos ==="
youtube_downloaded=0
youtube_failed=0

while IFS= read -r video_id; do
    output_file="$VIDEO_DIR/youtube/${video_id}.mp4"

    if [ -f "$output_file" ]; then
        echo "[SKIP] $video_id (already exists)"
        continue
    fi

    echo "[DL] YouTube: $video_id"
    if yt-dlp \
        --format "best[height<=720]" \
        --output "$output_file" \
        --no-playlist \
        --quiet \
        --no-warnings \
        "https://youtube.com/watch?v=$video_id" 2>/dev/null; then
        ((youtube_downloaded++))
        echo "  ✓ Downloaded"
    else
        ((youtube_failed++))
        echo "  ✗ Failed (may be deleted/private)"
    fi

    sleep 1  # Rate limiting
done < /tmp/youtube_ids.txt

echo ""
echo "=== Downloading Vimeo Videos ==="
vimeo_downloaded=0
vimeo_failed=0

while IFS= read -r video_id; do
    output_file="$VIDEO_DIR/vimeo/${video_id}.mp4"

    if [ -f "$output_file" ]; then
        echo "[SKIP] $video_id (already exists)"
        continue
    fi

    echo "[DL] Vimeo: $video_id"
    if yt-dlp \
        --format "best[height<=720]" \
        --output "$output_file" \
        --no-playlist \
        --quiet \
        --no-warnings \
        "https://vimeo.com/$video_id" 2>/dev/null; then
        ((vimeo_downloaded++))
        echo "  ✓ Downloaded"
    else
        ((vimeo_failed++))
        echo "  ✗ Failed (may be deleted/private)"
    fi

    sleep 1  # Rate limiting
done < /tmp/vimeo_ids.txt

echo ""
echo "============================================================"
echo "VIDEO DOWNLOAD SUMMARY"
echo "============================================================"
echo "YouTube:"
echo "  Downloaded: $youtube_downloaded"
echo "  Failed: $youtube_failed"
echo "  Total: $YOUTUBE_COUNT"
echo ""
echo "Vimeo:"
echo "  Downloaded: $vimeo_downloaded"
echo "  Failed: $vimeo_failed"
echo "  Total: $VIMEO_COUNT"
echo "============================================================"
echo ""
echo "Videos saved to: $VIDEO_DIR"
