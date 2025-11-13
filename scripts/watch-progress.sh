#!/bin/bash
# Continuously monitor archive progress

ARCHIVE_DIR="../archive"

echo "Watching archive progress..."
echo "Press Ctrl+C to stop"
echo ""

while true; do
    clear
    echo "========================================"
    echo "F.A.T. Lab Archive - Live Progress"
    echo "========================================"
    date
    echo ""

    if [ ! -d "$ARCHIVE_DIR" ]; then
        echo "Archive directory doesn't exist yet..."
    else
        echo "Files downloaded:"
        HTML_COUNT=$(find "$ARCHIVE_DIR" -name "*.html" -o -name "*.htm" 2>/dev/null | wc -l | tr -d ' ')
        IMG_COUNT=$(find "$ARCHIVE_DIR" \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" \) 2>/dev/null | wc -l | tr -d ' ')
        CSS_COUNT=$(find "$ARCHIVE_DIR" -name "*.css" 2>/dev/null | wc -l | tr -d ' ')
        JS_COUNT=$(find "$ARCHIVE_DIR" -name "*.js" 2>/dev/null | wc -l | tr -d ' ')
        TOTAL_COUNT=$(find "$ARCHIVE_DIR" -type f 2>/dev/null | wc -l | tr -d ' ')

        echo "  HTML files: $HTML_COUNT"
        echo "  Images: $IMG_COUNT"
        echo "  CSS files: $CSS_COUNT"
        echo "  JS files: $JS_COUNT"
        echo "  Total files: $TOTAL_COUNT"
        echo ""
        echo "Disk usage: $(du -sh "$ARCHIVE_DIR" 2>/dev/null | cut -f1)"
    fi

    echo ""
    if pgrep -q -f "wget.*fffff.at"; then
        echo "Status: ✓ wget is running"
    else
        echo "Status: wget has finished"
        echo ""
        echo "Run the next script: ./2-analyze-links.py"
        break
    fi

    sleep 5
done
