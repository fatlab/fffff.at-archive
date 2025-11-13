#!/bin/bash
# Commit current progress to git
# Useful for committing large archives incrementally

cd "$(dirname "$0")/.."

# Check if there are changes
if git diff --quiet && git diff --cached --quiet; then
    echo "No changes to commit"
    exit 0
fi

# Get stats
NEW_FILES=$(git status --porcelain | grep "^??" | wc -l)
MODIFIED_FILES=$(git status --porcelain | grep "^ M" | wc -l)
ADDED_FILES=$(git status --porcelain | grep "^A" | wc -l)

# Count archived files
if [ -d "archive" ]; then
    HTML_COUNT=$(find archive -name "*.html" 2>/dev/null | wc -l)
    TOTAL_COUNT=$(find archive -type f 2>/dev/null | wc -l)
    DISK_USAGE=$(du -sh archive 2>/dev/null | cut -f1)
fi

echo "Preparing commit..."
echo "  New files: $NEW_FILES"
echo "  Modified files: $MODIFIED_FILES"
echo "  Added files: $ADDED_FILES"

if [ -n "$HTML_COUNT" ]; then
    echo "  Archive: $HTML_COUNT HTML files, $TOTAL_COUNT total files, $DISK_USAGE"
fi

# Stage all changes
git add -A

# Create commit message
if [ -n "$HTML_COUNT" ]; then
    COMMIT_MSG="archive progress: $HTML_COUNT pages, $TOTAL_COUNT files, $DISK_USAGE"
else
    COMMIT_MSG="archive progress update"
fi

git commit -m "$COMMIT_MSG"

echo "Committed!"
