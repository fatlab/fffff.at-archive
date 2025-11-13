# Script Audit & Cleanup Plan

## Scripts Created This Session (Keep & Polish)

### Recovery Scripts
- **8-recover-from-backup.py** (14K) - Recovers files from dubtron backups
  - Status: KEEP - works well, just created
  - Core functionality for file recovery

- **10-download-gold-assets.sh** (4.9K) - Downloads gold assets from Wayback
  - Status: OBSOLETE - replaced by clean backup copy
  - Can DELETE - we used clean backup instead

### Gold Archive Scripts
- **9-fix-gold-archive.py** (6.2K) - Cleans Wayback URLs from gold
  - Status: OBSOLETE - used Wayback version, then replaced with clean backup
  - Can DELETE - not needed with clean backup

- **11-update-gold-links.py** (2.5K) - Updates gold.fffff.at → /gold
  - Status: KEEP - successfully updated 3,390 links
  
- **12-deep-clean-gold.py** (5.2K) - Deep clean Wayback refs
  - Status: OBSOLETE - never fully used, clean backup used instead
  - Can DELETE

### Path Fix Scripts
- **13-fix-relative-paths.py** (5.6K) - Fix broken relative paths
  - Status: KEEP - critical fix for 331k paths
  - Should be run after any bulk link changes

## Pre-existing Scripts (Review)

### Initial Setup (Sequential Order)
- **1-mirror-site.sh** (1.2K) - wget mirror of fffff.at
  - Status: KEEP - initial setup, already run
  
- **2-analyze-links.py** (6.5K) - Analyze broken links
  - Status: KEEP - useful for verification

### Recovery Pipeline
- **3-recover-from-wayback.py** (10K) - Wayback recovery
  - Status: KEEP - may need for future recoveries
  
- **4-fix-broken-links.py** (5.0K) - Fix tag/category links
  - Status: NEEDS FIX - has bug preserving wrong ../ levels
  - Should use depth calculation like script 13

- **5-manual-recovery.py** (4.3K) - Manual Wayback recovery
  - Status: KEEP - useful utility

- **7-download-missing-media.py** (3.4K) - Download missing images
  - Status: KEEP - useful for future missing files

### Utilities
- **11-update-reports.py** (7.4K) - Update reports
  - Status: KEEP - report generation

- **check-progress.sh**, **watch-progress.sh**, **commit-progress.sh**
  - Status: KEEP - useful utilities

## Duplicate/Conflicting Scripts

Multiple scripts with same number:
- 4: fix-broken-links.py, rewrite-urls.py
- 5: analyze-media.py, manual-recovery.py
- 6: fix-encoding.py, fix-image-paths.sh
- 7: download-missing-media.py, fix-encoding-ftfy.py
- 8: download-videos.sh, generate-report.py, recover-from-backup.py
- 9: archive-external-pages.py, fix-gold-archive.py, mirror-sister-sites.sh
- 10: download-gold-assets.sh, rewrite-sister-site-links.py, scrape-external-pages.sh
- 11: extract-wayback-files.py, update-gold-links.py, update-reports.py
- 12: deep-clean-gold.py, verify-mirror.sh

## Recommended Actions

### DELETE (Obsolete from this session)
1. scripts/9-fix-gold-archive.py - replaced by clean backup
2. scripts/10-download-gold-assets.sh - replaced by clean backup
3. scripts/12-deep-clean-gold.py - never fully used

### FIX (Has bugs)
1. scripts/4-fix-broken-links.py - Fix to calculate correct relative paths

### REORGANIZE (Better numbering)
Current numbering is confusing with duplicates. Suggest:

**Phase 1: Initial Setup (1-5)**
- 1-mirror-site.sh
- 2-analyze-links.py
- 3-recover-from-wayback.py
- 4-fix-broken-links.py (after fixing)
- 5-fix-relative-paths.py (rename from 13)

**Phase 2: Recovery (10-15)**
- 10-manual-recovery.py (rename from 5)
- 11-download-missing-media.py (rename from 7)
- 12-recover-from-backup.py (rename from 8)

**Phase 3: Specialized Fixes (20-25)**
- 20-update-gold-links.py (rename from 11)
- 21-fix-encoding.py (consolidate 6,7)
- 22-update-reports.py (rename from 11)

**Utilities (30+)**
- 30-archive-external-pages.py
- 31-mirror-sister-sites.sh
- etc.

