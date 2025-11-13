.PHONY: help install mirror analyze wayback rewrite encode report gold verify clean serve test status all

# Default target
help:
	@echo "F.A.T. Lab Archive - Available Commands"
	@echo "========================================"
	@echo ""
	@echo "Setup:"
	@echo "  make install        Install dependencies (uv or venv)"
	@echo ""
	@echo "Core Pipeline:"
	@echo "  make all            Run complete archive pipeline"
	@echo "  make mirror         Download entire website (30-60 min)"
	@echo "  make analyze        Analyze for broken links (2-5 min)"
	@echo "  make wayback        Log missing files (fast, mostly skips)"
	@echo "  make rewrite        Rewrite URLs to be relative (5-10 min)"
	@echo ""
	@echo "Utilities:"
	@echo "  make encode         Fix UTF-8 encoding issues"
	@echo "  make report         Generate archive statistics"
	@echo "  make gold           Mirror and integrate gold.fffff.at"
	@echo "  make verify         Verify mirror completeness (dry-run check)"
	@echo ""
	@echo "Development:"
	@echo "  make serve          Start local web server (port 8000)"
	@echo "  make test           Check archive health"
	@echo "  make status         Show current archive status"
	@echo "  make clean          Clean up temporary files"
	@echo ""

# Install dependencies
install:
	@echo "Installing dependencies..."
	@if command -v uv &> /dev/null; then \
		echo "Using uv..."; \
		cd scripts && uv sync; \
	else \
		echo "Using venv..."; \
		python3 -m venv .venv; \
		. .venv/bin/activate && pip install -r scripts/requirements.txt; \
	fi
	@echo "✓ Dependencies installed"

# Complete pipeline
all:
	@echo "Running complete archive pipeline..."
	cd scripts && ./run-all.sh

# Step 1: Mirror site
mirror:
	@echo "Mirroring fffff.at..."
	cd scripts && ./1-mirror-site.sh

# Step 2: Analyze links
analyze:
	@echo "Analyzing links..."
	@if command -v uv &> /dev/null; then \
		cd scripts && uv run python3 2-analyze-links.py; \
	else \
		cd scripts && python3 2-analyze-links.py; \
	fi

# Step 3: Wayback recovery (now mostly just logging)
wayback:
	@echo "Processing missing files (logging skipped URLs)..."
	@if command -v uv &> /dev/null; then \
		cd scripts && uv run python3 3-recover-from-wayback.py; \
	else \
		cd scripts && python3 3-recover-from-wayback.py; \
	fi

# Step 4: Rewrite URLs
rewrite:
	@echo "Rewriting URLs to relative paths..."
	@if command -v uv &> /dev/null; then \
		cd scripts && uv run python3 4-rewrite-urls.py; \
	else \
		cd scripts && python3 4-rewrite-urls.py; \
	fi

# Fix encoding
encode:
	@echo "Fixing UTF-8 encoding issues..."
	@if command -v uv &> /dev/null; then \
		cd scripts && uv run python3 7-fix-encoding-ftfy.py; \
	else \
		cd scripts && python3 7-fix-encoding-ftfy.py; \
	fi

# Generate report
report:
	@echo "Generating archive statistics..."
	@if command -v uv &> /dev/null; then \
		cd scripts && uv run python3 8-generate-report.py; \
	else \
		cd scripts && python3 8-generate-report.py; \
	fi

# Mirror and integrate gold.fffff.at
gold:
	@echo "Archiving gold.fffff.at..."
	cd scripts && ./9-mirror-sister-sites.sh
	@echo ""
	@echo "Extracting from Wayback structure..."
	@if command -v uv &> /dev/null; then \
		cd scripts && uv run python3 11-extract-wayback-files.py; \
	else \
		cd scripts && python3 11-extract-wayback-files.py; \
	fi
	@echo ""
	@echo "Rewriting links..."
	@if command -v uv &> /dev/null; then \
		cd scripts && uv run python3 10-rewrite-sister-site-links.py; \
	else \
		cd scripts && python3 10-rewrite-sister-site-links.py; \
	fi

# Verify mirror completeness (dry-run, no downloads)
verify:
	@echo "Verifying mirror completeness..."
	cd scripts && ./12-verify-mirror.sh

# Start local web server
serve:
	@echo "Starting local server on http://localhost:8000"
	@echo "Press Ctrl+C to stop"
	cd archive && python3 -m http.server 8000

# Test archive health
test:
	@echo "Testing archive..."
	@if [ ! -d "archive" ]; then \
		echo "✗ Archive directory not found"; \
		exit 1; \
	fi
	@if [ ! -f "archive/index.html" ]; then \
		echo "✗ Main index.html not found"; \
		exit 1; \
	fi
	@echo "✓ Archive directory exists"
	@echo "✓ Main index.html exists"
	@FILE_COUNT=$$(find archive -type f | wc -l | tr -d ' '); \
	echo "✓ Files in archive: $$FILE_COUNT"
	@if [ -f "reports/archive-report.txt" ]; then \
		echo "✓ Archive report exists"; \
	else \
		echo "⚠ Archive report not generated yet (run 'make report')"; \
	fi

# Clean temporary files
clean:
	@echo "Cleaning temporary files..."
	@rm -f scripts/*.pyc
	@rm -rf scripts/__pycache__
	@rm -f scripts/*.log
	@rm -f scripts/*.tmp
	@echo "✓ Cleaned"

# Quick status check
status:
	@echo "Archive Status"
	@echo "=============="
	@if [ -d "archive" ]; then \
		FILE_COUNT=$$(find archive -type f 2>/dev/null | wc -l | tr -d ' '); \
		HTML_COUNT=$$(find archive -name "*.html" 2>/dev/null | wc -l | tr -d ' '); \
		SIZE=$$(du -sh archive 2>/dev/null | cut -f1); \
		echo "Archive exists: $$SIZE ($$FILE_COUNT files, $$HTML_COUNT HTML)"; \
	else \
		echo "Archive not yet created (run 'make mirror')"; \
	fi
	@if [ -d "archive/gold" ]; then \
		echo "Gold site: Integrated ✓"; \
	else \
		echo "Gold site: Not integrated (run 'make gold')"; \
	fi
	@if [ -f "reports/wayback-recovery.json" ]; then \
		echo "Wayback processing: Complete ✓"; \
	else \
		echo "Wayback processing: Not run (run 'make wayback')"; \
	fi
