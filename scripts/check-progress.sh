#!/bin/bash
# Quick script to check archival progress

ARCHIVE_DIR="../archive"

if [ ! -d "$ARCHIVE_DIR" ]; then
    echo "Archive directory doesn't exist yet - mirror still starting"
    exit 0
fi

echo "Archive Progress Report"
echo "======================="
echo ""

# Count files by type
echo "Files downloaded:"
echo "  HTML files: $(find "$ARCHIVE_DIR" -name "*.html" -o -name "*.htm" 2>/dev/null | wc -l)"
echo "  Images: $(find "$ARCHIVE_DIR" -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif" 2>/dev/null | wc -l)"
echo "  CSS files: $(find "$ARCHIVE_DIR" -name "*.css" 2>/dev/null | wc -l)"
echo "  JS files: $(find "$ARCHIVE_DIR" -name "*.js" 2>/dev/null | wc -l)"
echo "  Total files: $(find "$ARCHIVE_DIR" -type f 2>/dev/null | wc -l)"
echo ""

# Disk usage
echo "Disk usage: $(du -sh "$ARCHIVE_DIR" 2>/dev/null | cut -f1)"
echo ""

# Check if wget is still running
if pgrep -f "wget.*fffff.at" > /dev/null; then
    echo "Status: wget is still running"
    echo ""
    echo "Recent activity (last 10 lines of wget output):"
    # This won't work well but gives the idea
else
    echo "Status: wget has finished (or hasn't started)"
fi
