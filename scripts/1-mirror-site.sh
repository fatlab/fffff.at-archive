#!/bin/bash
# Initial site mirror using wget

set -e

SITE_URL="https://fffff.at/"
OUTPUT_DIR="../archive"

echo "Starting mirror of fffff.at..."
echo "This will take a while - the site has 205+ pages and many assets"

# Use wget to mirror the entire site
# --mirror: turn on options suitable for mirroring
# --convert-links: make links in downloaded HTML point to local files
# --adjust-extension: save HTML files with .html extension
# --page-requisites: get images, CSS, etc. needed to display pages
# --no-parent: don't ascend to parent directory
# --wait=1: wait 1 second between requests (be polite)
# --random-wait: vary wait time to appear more human
# --user-agent: identify ourselves
# --execute robots=off: ignore robots.txt (archival purpose)
# --continue: resume partial downloads

wget \
  --mirror \
  --convert-links \
  --adjust-extension \
  --page-requisites \
  --no-parent \
  --no-host-directories \
  --wait=1 \
  --random-wait \
  --tries=3 \
  --timeout=30 \
  --user-agent="Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) F.A.T.Archive/1.0" \
  --execute robots=off \
  --continue \
  --directory-prefix="$OUTPUT_DIR" \
  "$SITE_URL"

echo "Mirror complete! Files saved to $OUTPUT_DIR"
echo "Run the next script to analyze and fix broken links."
