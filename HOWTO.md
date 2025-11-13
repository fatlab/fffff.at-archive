# How to Archive fffff.at

Complete guide to creating a self-contained, offline-browsable archive of the F.A.T. Lab website.

## Quick Start

```bash
cd scripts
./run-all.sh
```

This will run all four stages automatically. See below for details on each stage.

## The Four Stages

### Stage 1: Mirror the Website

```bash
cd scripts
./1-mirror-site.sh
```

Uses `wget` in mirror mode to download:
- All HTML pages (205+ pages)
- All images, CSS, JavaScript
- All media files and PDFs
- Complete site structure preserved

**Time**: 30-60 minutes depending on connection speed
**Space**: ~500MB - 2GB estimated

Features:
- Polite crawling (1 second delay between requests)
- Resumes interrupted downloads
- Converts links to local paths
- Adds .html extensions where needed

**Monitor progress:**
```bash
./watch-progress.sh
# or
./check-progress.sh
```

### Stage 2: Analyze for Missing Files

```bash
python3 2-analyze-links.py
```

Scans all downloaded HTML files and:
- Extracts every link, image, CSS, and JS reference
- Checks which files are missing locally
- Generates detailed reports

**Output:**
- `reports/missing-files.json` - Full data on missing files
- `reports/missing-files-summary.txt` - Human-readable summary

This tells you what needs to be recovered from the Wayback Machine.

### Stage 3: Recover from Wayback Machine

```bash
python3 3-recover-from-wayback.py
```

For each missing file:
1. Queries Wayback Machine API
2. Downloads archived version if available
3. Saves to correct local path

**Time**: 1-3 hours depending on number of missing files
**Rate limited**: 1.5 seconds between requests (be respectful)

**Output:**
- `reports/wayback-recovery.json` - Full recovery log
- `reports/still-missing.txt` - Files that couldn't be recovered

Features:
- Automatic timestamp selection (closest available)
- Handles external links (logs but doesn't download)
- Creates directory structure as needed

### Stage 4: Rewrite URLs to be Relative

```bash
python3 4-rewrite-urls.py
```

Makes the archive fully self-contained:
- Rewrites all absolute URLs to relative paths
- Updates HTML `<a>`, `<img>`, `<link>`, `<script>` tags
- Rewrites CSS `url()` references
- Preserves external links unchanged

**Result**: Archive can be browsed offline without modification

## Requirements

### System Tools
- `wget` (usually pre-installed on macOS/Linux)
- Python 3.7+
- `git` (for version control)

### Python Packages
```bash
pip3 install -r requirements.txt
```

Installs:
- `beautifulsoup4` - HTML parsing
- `requests` - HTTP requests
- `lxml` - Fast HTML processing

## Directory Structure

```
fffff.at-archive/
├── README.md                 # Project overview
├── HOWTO.md                 # This file
├── .gitignore               # Git ignore rules
├── archive/                 # Downloaded website
│   └── fffff.at/           # Mirror root
│       ├── index.html      # Homepage
│       ├── page/           # Paginated content
│       ├── files/          # Uploaded media
│       ├── wp-content/     # WordPress theme/plugins
│       └── ...
├── reports/                 # Analysis reports
│   ├── missing-files.json
│   ├── missing-files-summary.txt
│   ├── wayback-recovery.json
│   └── still-missing.txt
└── scripts/                 # Archival tools
    ├── 1-mirror-site.sh
    ├── 2-analyze-links.py
    ├── 3-recover-from-wayback.py
    ├── 4-rewrite-urls.py
    ├── run-all.sh
    ├── check-progress.sh
    ├── watch-progress.sh
    └── commit-progress.sh
```

## Git Workflow

Commit progress regularly to track changes:

```bash
# After mirroring
./commit-progress.sh

# Manual commits
git add -A
git commit -m "archive progress: [description]"
```

The archive directory may become large (1-2GB). Consider:
- Using Git LFS for large files
- Creating incremental commits
- Pushing to remote storage

## Browsing the Archive

Once complete, open in any browser:

```bash
open archive/fffff.at/index.html
```

All links should work locally. External links will still point to their original destinations.

## Troubleshooting

### Mirror stopped/interrupted

Restart the mirror script - wget will resume:
```bash
cd scripts
./1-mirror-site.sh
```

### Python import errors

Install dependencies:
```bash
pip3 install -r scripts/requirements.txt
```

### Wayback Machine timeouts

The script includes retry logic, but some files may fail. Check `reports/still-missing.txt` for files that couldn't be recovered.

### Disk space

The full archive may require 1-2GB. Check space before starting:
```bash
df -h .
```

## Advanced Usage

### Parallel processing

The scripts are designed to run sequentially, but you can:

1. Run mirror in background: `./1-mirror-site.sh &`
2. Monitor with: `watch -n 10 ./check-progress.sh`
3. After completion, run stages 2-4

### Selective recovery

Edit `3-recover-from-wayback.py` to:
- Prioritize certain file types
- Skip external domains
- Set custom rate limits

### Custom URL rewriting

Edit `4-rewrite-urls.py` to:
- Preserve certain absolute URLs
- Handle special cases
- Add custom path transformations

## What Gets Archived

✅ **Included:**
- All HTML pages and blog posts
- Images (JPG, PNG, GIF)
- CSS stylesheets
- JavaScript files
- PDFs and documents
- WordPress theme files

❌ **Not Included:**
- Dynamic API endpoints (will show as errors)
- RSS feeds (500 errors)
- External embed content (YouTube, Vimeo, etc.)
- Real-time features (comments, search)

External embeds and references remain as links to their original sources.

## Known Issues

### 500 Errors

Some WordPress endpoints return 500 errors:
- `/feed/` - RSS feed
- `/xmlrpc.php` - XML-RPC endpoint
- `/wp-json/` - REST API

These are expected and won't affect the archive quality.

### External Content

Embedded content from external sites:
- YouTube videos - links preserved
- Vimeo videos - links preserved
- Social media embeds - may not display

Consider manually saving critical external media.

## Contributing

If you recover additional missing files:

1. Place them in the correct path under `archive/fffff.at/`
2. Update references if needed
3. Commit with descriptive message
4. Document in reports

## Resources

- Original site: https://fffff.at/
- Wayback Machine: https://web.archive.org/
- wget manual: https://www.gnu.org/software/wget/manual/
- BeautifulSoup docs: https://www.crummy.com/software/BeautifulSoup/

## License

This archival project preserves F.A.T. Lab's work. All archived content belongs to its original creators. The archival scripts are provided as-is for educational and preservation purposes.
