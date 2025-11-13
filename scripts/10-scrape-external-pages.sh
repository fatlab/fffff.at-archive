#!/bin/bash
# Comprehensively scrape all external pages we link to
# Downloads complete working copies including CSS, images, JS, and videos

ARCHIVE_DIR="/Users/jamie/dev/fffff.at-archive/archive"
EXTERNAL_DIR="$ARCHIVE_DIR/external-pages"
EXTERNAL_LINKS="/Users/jamie/dev/fffff.at-archive/external-links.txt"

mkdir -p "$EXTERNAL_DIR"

if [ ! -f "$EXTERNAL_LINKS" ]; then
    echo "Error: external-links.txt not found!"
    echo "Run: python3 scripts/9-archive-external-pages.py first"
    exit 1
fi

echo "============================================================"
echo "EXTERNAL PAGE ARCHIVING"
echo "============================================================"
echo ""
echo "This will download complete working copies of all external"
echo "pages we link to, including:"
echo "  - HTML pages"
echo "  - Stylesheets (CSS)"
echo "  - Images"
echo "  - JavaScript"
echo "  - Videos (when possible)"
echo ""

TOTAL_LINKS=$(wc -l < "$EXTERNAL_LINKS")
echo "Found $TOTAL_LINKS external links to archive"
echo ""

# Check for wget
if ! command -v wget &> /dev/null; then
    echo "Error: wget is required"
    echo "Install: brew install wget"
    exit 1
fi

echo "Starting downloads..."
echo "This will take a LONG time (hours to days)"
echo ""

downloaded=0
failed=0
skipped=0

while IFS= read -r url; do
    # Skip empty lines
    [ -z "$url" ] && continue

    # Create sanitized directory name from domain
    domain=$(echo "$url" | sed -E 's|https?://||' | sed -E 's|/.*||' | sed 's/[^a-zA-Z0-9.-]/_/g')
    dest_dir="$EXTERNAL_DIR/$domain"

    # Skip if already downloaded (check for index.html or similar)
    if [ -d "$dest_dir" ] && [ "$(ls -A "$dest_dir" 2>/dev/null)" ]; then
        ((skipped++))
        echo "[SKIP] $url (already archived)"
        continue
    fi

    echo ""
    echo "[$((downloaded + failed + skipped + 1))/$TOTAL_LINKS] Archiving: $url"
    echo "  → $dest_dir"

    # Use wget with page requisites to download complete page
    if wget \
        --quiet \
        --page-requisites \
        --convert-links \
        --adjust-extension \
        --span-hosts \
        --restrict-file-names=windows \
        --directory-prefix="$dest_dir" \
        --no-parent \
        --timeout=30 \
        --tries=2 \
        --wait=1 \
        --random-wait \
        --user-agent="Mozilla/5.0 (compatible; Archive/1.0; +https://fffff.at)" \
        "$url" 2>&1 | grep -v "^$"; then
        ((downloaded++))
        echo "  ✓ Success"
    else
        ((failed++))
        echo "  ✗ Failed"
    fi

    # Rate limiting - be polite
    sleep 2

done < "$EXTERNAL_LINKS"

echo ""
echo "============================================================"
echo "ARCHIVING COMPLETE"
echo "============================================================"
echo "Total links: $TOTAL_LINKS"
echo "  Downloaded: $downloaded"
echo "  Failed: $failed"
echo "  Skipped (already had): $skipped"
echo ""
echo "External pages saved to: $EXTERNAL_DIR"
echo "============================================================"
