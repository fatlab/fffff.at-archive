# FFFFF.AT Archive Scripts

Organized scripts for archiving and maintaining the fffff.at website offline.

## Active Scripts (Use These)

### Phase 1: Initial Setup & Analysis
Run these sequentially for a fresh archive:

```bash
# 1. Mirror the site
./1-mirror-site.sh

# 2. Analyze what's broken
python3 2-analyze-links.py

# 3. Recover missing content from Wayback
python3 3-recover-from-wayback.py
```

### Phase 2: Fix Links & Paths

```bash
# 4. Fix broken tag/category navigation
python3 4-fix-broken-links.py

# 5. Fix all relative paths (IMPORTANT: run after any bulk link changes)
python3 13-fix-relative-paths.py
```

**Note:** Script 4 has a bug where it preserves incorrect `../` levels. Always run script 13 after script 4 to recalculate correct relative paths.

### Phase 3: Content Recovery

```bash
# Recover specific files from backups on dubtron
python3 8-recover-from-backup.py

# Download missing images from Wayback
python3 7-download-missing-media.py

# Manual recovery of specific URLs
python3 5-manual-recovery.py
```

### Phase 4: Gold Archive Integration

```bash
# Update all gold.fffff.at links to local /gold
python3 11-update-gold-links.py
```

### Phase 5: Reports & Verification

```bash
# Generate comprehensive reports
python3 11-update-reports.py

# Check progress
./check-progress.sh
```

## Script Details

### Core Scripts

#### `8-recover-from-backup.py` ⭐
Recovers missing files from WordPress backups on dubtron.
- Connects to dubtron:/mnt/nas1/backups/fffff.at/
- Cross-references missing files with backup
- Interactive recovery with phase prioritization
- **Usage:** `python3 scripts/8-recover-from-backup.py`

#### `13-fix-relative-paths.py` ⭐
**Critical fix for broken navigation**
- Calculates correct file depth from archive root
- Rebuilds all relative paths with proper `../` count
- Fixes excessive `../../../../../../../` paths
- Fixed 331,471 paths in last run
- **Usage:** `python3 scripts/13-fix-relative-paths.py`
- **When:** After any bulk link modification

#### `11-update-gold-links.py` ⭐
Updates all gold.fffff.at references to local /gold directory.
- Updates 3,390+ links across 3,269 files
- Converts external subdomain to local path
- **Usage:** `python3 scripts/11-update-gold-links.py`

### Recovery Scripts

#### `3-recover-from-wayback.py`
Automated Wayback Machine recovery using CDX API.

#### `5-manual-recovery.py`
Manual recovery tool for specific URLs from Wayback.

#### `7-download-missing-media.py`
Downloads missing images from Wayback Machine.

### Analysis Scripts

#### `2-analyze-links.py`
Analyzes broken links and generates reports.

#### `11-update-reports.py`
Generates comprehensive archive reports and statistics.

## Utility Scripts

- `check-progress.sh` - Quick progress check
- `watch-progress.sh` - Continuous monitoring
- `commit-progress.sh` - Commit changes with summary

## Archived/Obsolete Scripts

Located in `scripts/archive-obsolete/`:
- `9-fix-gold-archive.py` - Wayback cleanup (replaced by clean backup)
- `10-download-gold-assets.sh` - Asset download (replaced by clean backup)
- `12-deep-clean-gold.py` - Deep Wayback clean (not needed with clean backup)

These were created but superseded when we found clean backups on dubtron.

## Common Workflows

### Fresh Archive Setup
```bash
./1-mirror-site.sh
python3 2-analyze-links.py
python3 4-fix-broken-links.py
python3 13-fix-relative-paths.py  # Always after 4!
python3 8-recover-from-backup.py
python3 11-update-gold-links.py
python3 11-update-reports.py
```

### After Making Link Changes
```bash
python3 13-fix-relative-paths.py  # Recalculate all relative paths
python3 2-analyze-links.py        # Verify fixes
```

### Recover Missing Files
```bash
# Interactive recovery from backups
python3 8-recover-from-backup.py

# Or download from Wayback
python3 7-download-missing-media.py
```

## Known Issues & Fixes

### Issue: Broken Navigation (excessive `../`)
**Cause:** Script 4 preserves incorrect `../` levels from original wget
**Fix:** Run `python3 13-fix-relative-paths.py` after any bulk link changes
**Status:** ✓ Fixed (331,471 paths corrected)

### Issue: Gold archive with Wayback artifacts
**Cause:** Initial archive from web.archive.org
**Fix:** Replaced with clean backup from dubtron
**Status:** ✓ Fixed (using clean backup)

### Issue: Missing critical assets
**Cause:** Not in wget mirror
**Fix:** Recovered from multiple backup sources on dubtron
**Status:** ✓ Fixed (32 files recovered, 100% of critical assets)

## Backup Sources

Files can be recovered from dubtron:
- `/mnt/nas1/backups/fffff.at/` - WordPress backup (primary)
- `/temp-plot/Dropbox/website-backups-httrack/fffff.at/` - HTTrack backup
- `/temp-plot/Dropbox/website-backups/fatlab-dreamhost/fffff.at/` - Dreamhost backup
- `/temp-plot/Dropbox/website-backups/fatlab-dreamhost/gold.fffff.at/` - Clean gold archive

## Success Metrics (Last Run)

- ✓ 32 high-priority files recovered (100%)
- ✓ 331,471 broken paths fixed
- ✓ 3,390 gold links updated
- ✓ 4,034 HTML files corrected
- ✓ FAT Gold archive fully functional (1.3GB)
- ✓ All critical site assets restored

## Notes

- All scripts assume they're run from the repository root
- Archive directory is gitignored (too large)
- Reports directory contains execution summaries
- Always backup before running bulk operations
- Test with a small subset first when modifying scripts

## See Also

- `reports/session-summary.txt` - Complete session summary
- `reports/script-audit.md` - Detailed script audit
- `reports/path-fix-output.txt` - Path fix execution log
