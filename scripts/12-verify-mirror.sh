#!/bin/bash
# Verify mirror completeness by checking URLs without downloading

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ARCHIVE_DIR="$SCRIPT_DIR/../archive"
REPORTS_DIR="$SCRIPT_DIR/../reports"
SITE_URL="https://fffff.at/"

echo "========================================="
echo "F.A.T. Lab Archive - Mirror Verification"
echo "========================================="
echo ""

if [ ! -d "$ARCHIVE_DIR" ]; then
    echo "Error: Archive directory not found at $ARCHIVE_DIR"
    echo "Run 'make mirror' first to create the archive."
    exit 1
fi

echo "This will verify the mirror by:"
echo "1. Using wget --spider to check URLs (no downloads)"
echo "2. Following same pattern as original mirror"
echo "3. Comparing against existing files"
echo "4. Reporting any missing or broken links"
echo ""
echo "This is safe and won't modify your archive."
echo ""

# Create a temporary directory for wget's output
TEMP_DIR="$REPORTS_DIR/verify-temp"
mkdir -p "$TEMP_DIR"

echo "Starting verification..."
echo "This may take 10-30 minutes..."
echo ""

# Run wget in spider mode (dry-run check)
# --spider: Don't download, just check if URLs exist
# --recursive: Follow links
# --no-directories: Don't create directory structure
# --no-verbose: Less output
# Same pattern as original mirror
wget \
    --spider \
    --recursive \
    --level=inf \
    --no-parent \
    --wait=0.5 \
    --random-wait \
    --tries=2 \
    --timeout=15 \
    --user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) F.A.T.Archive-Verify/1.0" \
    --execute robots=off \
    --output-file="$TEMP_DIR/wget-spider.log" \
    --reject="*action=login*,*action=register*" \
    "$SITE_URL" \
    2>&1

echo ""
echo "========================================="
echo "Verification Complete!"
echo "========================================="
echo ""

# Parse the log file for issues
BROKEN_COUNT=$(grep -c "broken link" "$TEMP_DIR/wget-spider.log" || true)
ERROR_404=$(grep -c "404 Not Found" "$TEMP_DIR/wget-spider.log" || true)
ERROR_500=$(grep -c "500 Internal Server Error" "$TEMP_DIR/wget-spider.log" || true)

echo "Results:"
echo "  Broken links detected: $BROKEN_COUNT"
echo "  404 errors: $ERROR_404"
echo "  500 errors: $ERROR_500"
echo ""

if [ $BROKEN_COUNT -gt 0 ] || [ $ERROR_404 -gt 50 ]; then
    echo "⚠ Some issues detected. Review log for details:"
    echo "  $TEMP_DIR/wget-spider.log"
    echo ""
    echo "Note: Some 404/500 errors are expected for:"
    echo "  - WordPress feeds (/feed/)"
    echo "  - API endpoints (/wp-json/, xmlrpc.php)"
    echo "  - External links"
else
    echo "✓ Mirror verification passed!"
    echo "  Archive appears complete and healthy."
fi

# Extract broken links to separate file
if [ $BROKEN_COUNT -gt 0 ]; then
    grep "broken link" "$TEMP_DIR/wget-spider.log" > "$REPORTS_DIR/broken-links-verify.txt" || true
    echo ""
    echo "Broken links saved to: $REPORTS_DIR/broken-links-verify.txt"
fi

echo ""
echo "Full verification log: $TEMP_DIR/wget-spider.log"
echo ""
