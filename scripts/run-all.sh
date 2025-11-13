#!/bin/bash
# Master script to run the entire archival process

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
cd "$SCRIPT_DIR"

echo "========================================="
echo "F.A.T. Lab Archive - Complete Pipeline"
echo "========================================="
echo ""

# Check for Python dependencies
echo "Setting up Python environment..."
# Check if uv is installed, otherwise fall back to venv
if command -v uv &> /dev/null; then
    echo "Using uv for dependency management..."
    # uv handles venv automatically with uv run
    PYTHON_CMD="uv run"
else
    echo "Using venv (install uv for faster execution: brew install uv)..."
    # Create venv if it doesn't exist
    if [ ! -d "../.venv" ]; then
        echo "Creating virtual environment..."
        python3 -m venv ../.venv
    fi
    # Activate venv and install dependencies
    source ../.venv/bin/activate
    if ! python3 -c "import bs4, requests, ftfy" 2>/dev/null; then
        echo "Installing dependencies..."
        pip install -r requirements.txt
    fi
    PYTHON_CMD="python3"
fi

# Step 1: Mirror the site
echo ""
echo "Step 1: Mirroring website"
echo "-----------------------------------------"
if [ ! -f "../archive/index.html" ]; then
    chmod +x 1-mirror-site.sh
    ./1-mirror-site.sh
else
    echo "Archive already exists. Skipping mirror."
    echo "Delete ../archive contents to re-mirror from scratch."
fi

# Step 2: Analyze links
echo ""
echo "Step 2: Analyzing links and finding missing files"
echo "-----------------------------------------"
$PYTHON_CMD 2-analyze-links.py

# Step 3: Recover from Wayback Machine
echo ""
echo "Step 3: Recovering missing files from Wayback Machine"
echo "-----------------------------------------"
echo "NOTE: This step may take a while due to rate limiting"
echo "The script will skip URLs already attempted in previous runs."
echo ""
$PYTHON_CMD 3-recover-from-wayback.py

# Step 4: Rewrite URLs
echo ""
echo "Step 4: Rewriting URLs to be relative"
echo "-----------------------------------------"
$PYTHON_CMD 4-rewrite-urls.py

echo ""
echo "========================================="
echo "Archive Complete!"
echo "========================================="
echo ""
echo "Next steps:"
echo "1. Review reports in ../reports/"
echo "2. Test the archive by opening ../archive/fffff.at/index.html"
echo "3. Commit to git repository"
echo ""
