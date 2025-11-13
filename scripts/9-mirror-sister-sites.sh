#!/bin/bash
# Mirror gold.fffff.at from Wayback Machine and integrate into main archive

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ARCHIVE_DIR="$SCRIPT_DIR/../archive"

echo "========================================="
echo "F.A.T. Lab - Mirror gold.fffff.at"
echo "========================================="
echo ""

# Create subdirectory for gold site
mkdir -p "$ARCHIVE_DIR/gold"

echo "Mirroring gold.fffff.at..."
echo "-----------------------------------------"
echo "Source: https://web.archive.org/web/20170821075525/http://www.gold.fffff.at/"
echo "Output: $ARCHIVE_DIR/gold/"
echo ""

if [ -f "$ARCHIVE_DIR/gold/index.html" ]; then
    echo "gold.fffff.at already mirrored. Skipping."
    echo "Delete $ARCHIVE_DIR/gold/ to re-mirror."
else
    # Mirror gold.fffff.at from Wayback Machine
    # Using specific snapshot from August 21, 2017
    wget \
        --mirror \
        --convert-links \
        --adjust-extension \
        --page-requisites \
        --no-parent \
        --wait=1 \
        --random-wait \
        --tries=3 \
        --timeout=30 \
        --user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) F.A.T.Archive/1.0" \
        --execute robots=off \
        --continue \
        --span-hosts \
        --domains=web.archive.org \
        --directory-prefix="$ARCHIVE_DIR/gold/.wayback-tmp" \
        "https://web.archive.org/web/20170821075525/http://www.gold.fffff.at/"

    echo ""
    echo "✓ Downloaded gold.fffff.at"
fi

echo ""
echo "========================================="
echo "gold.fffff.at Mirror Complete!"
echo "========================================="
echo ""
echo "NOTE: Files are in .wayback-tmp directory with Wayback URLs."
echo "Next steps:"
echo "1. Run scripts/11-extract-wayback-files.py to clean up Wayback artifacts"
echo "2. Run scripts/10-rewrite-sister-site-links.py to update internal links"
echo "3. Gold site will be accessible at:"
echo "   - archive/gold/index.html"
echo ""
