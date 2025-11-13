#!/bin/bash
# Fix image paths by converting relative paths to absolute paths

ARCHIVE_DIR="/Users/jamie/dev/fffff.at-archive/archive"

echo "Fixing image paths to use absolute paths..."
echo ""

# Convert relative image paths to absolute
find "$ARCHIVE_DIR" -name "*.html" -type f | while read -r file; do
    # Convert ../../../files/ patterns to /files/
    sed -i '' -E 's|src="(\.\./)+files/|src="/files/|g' "$file"
    sed -i '' -E 's|src="(\.\./)+images/|src="/images/|g' "$file"
    sed -i '' -E 's|src="(\.\./)+fuckflickr/|src="/fuckflickr/|g' "$file"
    sed -i '' -E 's|src="(\.\./)+widgets/|src="/widgets/|g' "$file"

    # Also fix href for linked images
    sed -i '' -E 's|href="(\.\./)+files/|href="/files/|g' "$file"
done

echo "Done! All image paths converted to absolute paths."
echo ""
echo "Testing a few files..."
grep -h 'src="/files/' "$ARCHIVE_DIR"/*.html 2>/dev/null | head -5
