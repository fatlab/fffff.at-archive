# Quick Start Guide

## Most Important Scripts (In Order)

### 1. Recover Missing Files
```bash
python3 scripts/8-recover-from-backup.py
```
Recovers critical files from dubtron backups.
- 6 critical site-wide assets
- 26 project-specific files
- Interactive with phase selection

### 2. Fix All Broken Paths
```bash
python3 scripts/13-fix-relative-paths.py
```
**ALWAYS RUN THIS** after any bulk link changes.
- Recalculates correct relative paths
- Fixes excessive `../` navigation
- Last run: fixed 331,471 paths

### 3. Update Gold Links
```bash
python3 scripts/11-update-gold-links.py
```
Updates gold.fffff.at → /gold
- Already run (3,390 links updated)
- Only rerun if you restore from backup

## Quick Checks

### Check for Broken Paths
```bash
grep -r 'href="\.\./\.\./\.\./\.\./\.\./\.\./\.\.' archive/ --include="*.html" | wc -l
```
Should return <200 (only in external-pages/)

### Verify Gold Links
```bash
grep -r "gold\.fffff\.at" archive/ --include="*.html" --exclude-dir="gold" | wc -l
```
Should return ~20 (only display text, not actual links)

### Check Archive Status
```bash
./scripts/check-progress.sh
```

## Common Problems & Solutions

### "Navigation links go to wrong page"
→ Run `python3 scripts/13-fix-relative-paths.py`

### "Gold archive not working"
→ Should already be fixed with clean backup at archive/gold/

### "Missing images on pages"
→ Run `python3 scripts/8-recover-from-backup.py` (interactive)

## File Locations

- **Archive:** `archive/` (gitignored)
- **Gold:** `archive/gold/` (1.3GB, complete)
- **Reports:** `reports/`
- **Scripts:** `scripts/`
- **Obsolete:** `scripts/archive-obsolete/`

## Don't Run

These are obsolete (moved to archive-obsolete/):
- ~~9-fix-gold-archive.py~~
- ~~10-download-gold-assets.sh~~
- ~~12-deep-clean-gold.py~~

## Full Workflow (If Starting Over)

See `scripts/README.md` for complete workflow.
