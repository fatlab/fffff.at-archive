# fffff.at Archive Project

> Complete archival toolkit for preserving the F.A.T. Lab website (https://fffff.at/)

The Free Art and Technology Lab was an organization dedicated to enriching the public domain through research and development of technologies and media. Active from 2007-2015, the site transitioned to archive-only status on August 1, 2015. This project creates a fully self-contained, offline-browsable archive.

## What This Does

This repository contains a complete toolkit to:

1. **Mirror** the entire fffff.at website (3,545 pages, 6,908 files, 11.4 GB)
2. **Analyze** all links to identify broken/missing assets
3. **Fix** 80,886+ broken internal links (tag/category navigation)
4. **Fix** UTF-8 encoding issues in archived HTML
5. **Rewrite** all URLs to use relative paths for offline browsing
6. **Catalog** external content (7,166 links, 268 videos)
7. **Generate** comprehensive reports on archive status

**Result:** A fully self-contained archive that works offline with zero broken links.

**Key Features:**
- ✅ **Makefile interface** - Simple `make` commands for all tasks
- ✅ **Fully headless** - No user input required, safe for automation
- ✅ **Resumable** - Interrupt and restart anytime
- ✅ **Smart filtering** - Skips feeds, APIs, and broken URLs automatically
- ✅ **Modern tooling** - Supports uv or venv for dependencies

## Quick Start

### Prerequisites

```bash
# Required
python3 --version  # 3.7+
wget --version
make --version

# Recommended: Install uv for faster dependency management
brew install uv
```

### Run Complete Archive

```bash
# Install dependencies
make install

# Run complete pipeline
make all

# Or run individual steps
make mirror    # Download site (30-60 min)
make analyze   # Analyze links (2-5 min)
make wayback   # Log missing files (fast)
make rewrite   # Rewrite URLs (5-10 min)
```

**Fully headless** - No user input required. Safe to run unattended.
**Resumable** - Interrupt and restart anytime. Already-attempted URLs are skipped.

### View Archive Locally

```bash
make serve
# Opens http://localhost:8000
```

Or simply open `archive/index.html` directly in your browser.

### Quick Commands

```bash
make help      # Show all available commands
make status    # Check archive status
make report    # Generate statistics
make gold      # Add gold.fffff.at sister site
make test      # Verify archive health
```

## Scripts Reference

### Core Pipeline (Run in Order)

| Script | Purpose | Time | Output |
|--------|---------|------|--------|
| `1-mirror-site.sh` | Download entire website with wget | 30-60 min | `archive/` directory |
| `2-analyze-links.py` | Find all broken/missing references | 2-5 min | `reports/missing-files.json` |
| `3-recover-from-wayback.py` | Recover missing files from archive.org | 1-3 hours | `reports/wayback-recovery.json` |
| `4-rewrite-urls.py` | Convert absolute URLs to relative paths | 5-10 min | Modified HTML files |

### New Archive Enhancement Scripts

| Script | Purpose | Time | Output |
|--------|---------|------|--------|
| `4-fix-broken-links.py` | Fix broken tag/category navigation links | 10-15 min | 96K+ link fixes |
| `5-analyze-media.py` | Analyze missing images, videos, and embeds | 2-5 min | Media analysis report |
| `6-fix-image-paths.sh` | Normalize image paths to absolute | 1-2 min | Fixed image paths |
| `7-download-missing-media.py` | Download missing images from Wayback | Hours | Recovered media files |
| `8-download-videos.sh` | Download YouTube/Vimeo with yt-dlp | Hours-Days | `archived-videos/` |
| `9-archive-external-pages.py` | Extract list of external links | 2-5 min | `external-links.txt` |
| `10-scrape-external-pages.sh` | Download complete external pages + assets | Days | `external-pages/` |
| `11-update-reports.py` | Generate comprehensive analysis reports | 1 min | Updated reports |

### Original Utility Scripts

| Script | Purpose |
|--------|---------|
| `5-manual-recovery.py` | Recover specific URLs manually |
| `6-fix-encoding.py` | Fix UTF-8 double-encoding issues |
| `7-fix-encoding-ftfy.py` | Advanced encoding fixes with ftfy |
| `8-generate-report.py` | Generate archive statistics report |
| `9-mirror-sister-sites.sh` | Mirror gold.fffff.at from Wayback Machine |
| `10-rewrite-sister-site-links.py` | Update links to gold.fffff.at to point to /gold |
| `11-extract-wayback-files.py` | Extract and clean Wayback Machine directory structure |
| `12-verify-mirror.sh` | Verify mirror completeness (dry-run, no downloads) |

### Helper Scripts

| Script | Purpose |
|--------|---------|
| `run-all.sh` | Run complete pipeline automatically |
| `check-progress.sh` | Quick progress snapshot |
| `watch-progress.sh` | Live progress monitoring (refreshes every 5s) |
| `commit-progress.sh` | Commit progress to git with stats |

## Archive Contents

Once complete, the archive contains:

```
archive/
├── index.html              # Homepage
├── page/                   # Blog pagination (205+ pages)
├── files/                  # Uploaded media (images, PDFs, audio, video)
├── wp-content/             # WordPress theme/plugins
├── tag/                    # Tag archives (FIXED navigation)
├── category/               # Category archives (FIXED navigation)
├── author/                 # Author pages
├── archived-videos/        # Downloaded YouTube/Vimeo videos
│   ├── youtube/           # 141 unique videos
│   └── vimeo/             # 127 unique videos
├── external-pages/         # Complete copies of linked external sites
│   └── [domain-name]/     # Full pages with CSS, images, JS
└── [individual-posts]/     # Thousands of blog posts
```

**Current Archive Statistics:**
- **11.4 GB** complete archive
- **6,908 total files**
- **3,545 HTML pages**
- **2,616 images** (692 MB)
- **176 audio files** (7.3 GB MP3s)
- **7,166 external links** preserved
- **268 embedded videos** cataloged (YouTube + Vimeo)
- **80,886 broken links FIXED** ✅

## How It Works

### 1. Mirroring (`1-mirror-site.sh`)

Uses `wget` with these key features:
- **Polite crawling**: 1-second delays between requests
- **Complete recursion**: Downloads all linked pages and assets
- **Resume support**: Can restart interrupted downloads
- **Link conversion**: Converts links to local paths automatically

### 2. Link Analysis (`2-analyze-links.py`)

Scans every HTML file and:
- Extracts all `<a>`, `<img>`, `<link>`, `<script>` references
- Checks which files exist locally
- Categorizes missing files by type
- Generates detailed reports

### 3. Missing File Logging (`3-recover-from-wayback.py`)

Analyzes and logs missing references with smart filtering:
- **Skips external domains** - Logs but doesn't process non-fffff.at URLs
- **Skips WordPress feeds/APIs** - Ignores /feed/, /wp-json/, xmlrpc.php
- **Skips fffff.at URLs** - Already in main mirror or broken
- **Tracks attempted URLs** - Won't retry URLs from previous runs
- Logs all results to `reports/wayback-recovery.json`
- **Fast execution** - No actual recovery attempts, just logging

Result: Clean documentation of what's missing and why (mostly expected external links)

### 4. URL Rewriting (`4-rewrite-urls.py`)

Makes archive fully self-contained:
- Rewrites absolute URLs to relative paths
- Updates HTML tags and CSS `url()` references
- Preserves external links unchanged
- Enables offline browsing

### 5. Encoding Fixes (`6-fix-encoding.py`, `7-fix-encoding-ftfy.py`)

Repairs UTF-8 encoding issues:
- Fixes double-encoded UTF-8 (mojibake)
- Handles mixed encoding scenarios
- Converts `Ã‰cole` → `École`
- Uses `ftfy` library for complex cases

## Troubleshooting

### Mirror Interrupted

Restart - wget will resume automatically:
```bash
cd scripts
./1-mirror-site.sh
```

### Python Dependency Errors

```bash
python3 -m venv .venv
source .venv/bin/activate
pip install -r scripts/requirements.txt
```

### Check Current Progress

```bash
cd scripts
./check-progress.sh
```

### Missing Files Not Recovered

Check `reports/still-missing.txt` for files that couldn't be recovered from Wayback. These may need manual intervention.

## Reports Generated

| Report | Contains |
|--------|----------|
| `reports/archive-report.txt` | Overall statistics and breakdown |
| `reports/comprehensive-analysis.txt` | Summary of broken link fixes applied |
| `reports/archive-analysis.json` | Detailed broken link analysis (4.2 MB) |
| `reports/wayback-recovery.json` | Wayback recovery attempt log (25 MB) |

## Development

### Repository Structure

```
fffff.at-archive/
├── README.md           # This file
├── HOWTO.md           # Detailed instructions
├── STATUS.md          # Current progress
├── .gitignore         # Excludes archive/ directory
├── scripts/           # All archival tools
│   ├── 1-mirror-site.sh
│   ├── 2-analyze-links.py
│   ├── 3-recover-from-wayback.py
│   ├── 4-rewrite-urls.py
│   ├── 5-manual-recovery.py
│   ├── 6-fix-encoding.py
│   ├── 7-fix-encoding-ftfy.py
│   ├── 8-generate-report.py
│   ├── run-all.sh
│   ├── check-progress.sh
│   ├── watch-progress.sh
│   ├── commit-progress.sh
│   └── requirements.txt
├── reports/           # Generated reports
└── archive/           # Downloaded website (not in git)
```

### Why Archive Not in Git

The `archive/` directory is excluded from git because:
- It's **10+ GB** of binary files (audio, video, images)
- It can be **re-generated** by running the scripts
- Keeps the repository **lightweight and fast**
- Scripts are the source of truth

To recreate the archive, just run: `cd scripts && ./run-all.sh`

## Known Issues

### Expected 500 Errors

Some WordPress endpoints return 500 errors:
- `/feed/` - RSS feed
- `/xmlrpc.php` - XML-RPC endpoint
- `/wp-json/` - REST API

These don't affect archive quality - they're just API endpoints.

### External Content

Links to external sites are preserved but not archived:
- YouTube/Vimeo videos (links remain)
- External images from other domains
- Social media embeds

### Gold Sister Site

The F.A.T. Lab had a "gold" sister site at **gold.fffff.at** with curated content.

To include gold.fffff.at in your archive:

```bash
cd scripts

# Download gold site from Wayback Machine (Aug 21, 2017 snapshot)
./9-mirror-sister-sites.sh

# Extract from Wayback directory structure
uv run python3 11-extract-wayback-files.py

# Rewrite all links to point to /gold
uv run python3 10-rewrite-sister-site-links.py
```

Gold site will be accessible at:
- `archive/gold/index.html`

All 3,280+ links from main site to gold.fffff.at are automatically rewritten to local paths (e.g., `http://gold.fffff.at/page` → `/gold/page`).

## Contributing

If you recover additional missing files or improve the scripts:

```bash
git add scripts/
git commit -m "describe your changes"
git push
```

The archive itself is not committed - only the tools to recreate it.

## License

These archival scripts are provided as-is for preservation purposes. All archived content belongs to its original creators at the Free Art and Technology Lab.

## Credits

Archive created using:
- `wget` - Website mirroring
- `BeautifulSoup` - HTML parsing
- `ftfy` - Text encoding repair
- `requests` - HTTP requests
- Wayback Machine API - Archive.org

---

**Archive Status:** Scripts complete and tested. Run `./scripts/run-all.sh` to generate your own archive.
