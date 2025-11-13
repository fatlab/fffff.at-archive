#!/usr/bin/env python3
"""
Recover missing files from WordPress backup on remote machine (dubtron).

This script:
1. Parses missing-images-report.txt to identify missing files
2. Cross-references with fffff.at-backup-all-files.txt
3. Generates recovery plan with phases
4. Executes scp commands to copy files from dubtron
"""

import os
import re
import subprocess
from pathlib import Path
from collections import defaultdict
from typing import Dict, List, Set, Tuple

# Configuration
ARCHIVE_ROOT = Path("/Users/jamie/dev/fffff.at-archive")
MISSING_REPORT = ARCHIVE_ROOT / "archive/missing-images-report.txt"
BACKUP_LIST = ARCHIVE_ROOT / "fffff.at-backup-all-files.txt"
REMOTE_HOST = "dubtron"
REMOTE_BASE = "/mnt/nas1/backups/fffff.at"  # Base path on dubtron

# Critical files (referenced most frequently)
CRITICAL_FILES = [
    "files/2015/05/2014fffffat_shaved-rip2.jpg",
    "files/2013/03/rss.gif",
    "files/2012/10/goldwidgetok.gif",
    "files/2013/11/book.gif",
    "fuckflickr/data/MISC/tkyfffffat_banner_200px.jpg",
    "images/copyleft_drips_sm.jpg",
]

# Bulk directories to skip (handle separately)
BULK_DIRECTORIES = ["files", "fuckflickr", "images", "wp-content", "indices"]


def normalize_path(path: str) -> str:
    """Normalize relative paths to remove ../ prefixes."""
    # Remove leading ../../../../ or similar
    while path.startswith("../"):
        path = path[3:]
    return path.strip()


def parse_missing_report() -> Tuple[Set[str], Dict[str, int]]:
    """
    Parse missing-images-report.txt to extract unique missing files.

    Returns:
        - Set of unique missing file paths
        - Dict mapping file paths to reference counts
    """
    missing_files = set()
    reference_counts = defaultdict(int)

    print(f"Parsing {MISSING_REPORT}...")
    with open(MISSING_REPORT, 'r', encoding='utf-8', errors='ignore') as f:
        current_html = None
        for line in f:
            line = line.strip()

            # HTML file line
            if line.startswith('/Users/jamie/dev/fffff.at-archive/'):
                current_html = line

            # Missing image reference line
            elif line.startswith('-> '):
                image_path = line[3:].strip()
                normalized = normalize_path(image_path)

                # Skip empty or weird paths
                if normalized and not normalized.startswith('http'):
                    missing_files.add(normalized)
                    reference_counts[normalized] += 1

    print(f"Found {len(missing_files)} unique missing files")
    print(f"Total references: {sum(reference_counts.values())}")

    return missing_files, dict(reference_counts)


def load_backup_index() -> Dict[str, str]:
    """
    Load backup file list and create index mapping normalized paths to backup paths.

    Returns:
        Dict mapping normalized file paths to their ./path in backup
    """
    backup_index = {}

    print(f"Loading {BACKUP_LIST}...")
    with open(BACKUP_LIST, 'r', encoding='utf-8', errors='ignore') as f:
        for line in f:
            backup_path = line.strip()

            # Skip empty lines
            if not backup_path or backup_path.startswith('#'):
                continue

            # Remove leading ./
            if backup_path.startswith('./'):
                backup_path_clean = backup_path[2:]
            else:
                backup_path_clean = backup_path

            # Store both the original backup path and normalized version
            backup_index[backup_path_clean.lower()] = backup_path

    print(f"Loaded {len(backup_index)} files from backup index")
    return backup_index


def find_recoverable_files(
    missing_files: Set[str],
    backup_index: Dict[str, str],
    reference_counts: Dict[str, int]
) -> Tuple[List[Tuple[str, str, int]], List[str]]:
    """
    Cross-reference missing files with backup index.

    Returns:
        - List of (missing_path, backup_path, ref_count) for recoverable files
        - List of unrecoverable file paths
    """
    recoverable = []
    unrecoverable = []

    print("\nCross-referencing missing files with backup...")
    for missing_path in missing_files:
        # Try exact match
        lookup_path = missing_path.lower()

        if lookup_path in backup_index:
            backup_path = backup_index[lookup_path]
            ref_count = reference_counts.get(missing_path, 0)
            recoverable.append((missing_path, backup_path, ref_count))
        else:
            unrecoverable.append(missing_path)

    print(f"Recoverable: {len(recoverable)} files")
    print(f"Unrecoverable: {len(unrecoverable)} files")

    return recoverable, unrecoverable


def categorize_by_directory(files: List[Tuple[str, str, int]]) -> Dict[str, List[Tuple[str, str, int]]]:
    """Group files by their top-level directory."""
    by_dir = defaultdict(list)

    for missing_path, backup_path, ref_count in files:
        top_dir = missing_path.split('/')[0]
        by_dir[top_dir].append((missing_path, backup_path, ref_count))

    return dict(by_dir)


def copy_file_from_backup(backup_path: str, local_path: str, dry_run: bool = False) -> bool:
    """
    Copy a file from remote backup to local archive using scp.

    Args:
        backup_path: Path in backup (with ./ prefix)
        local_path: Destination path in archive
        dry_run: If True, only print command without executing

    Returns:
        True if successful, False otherwise
    """
    # Remove leading ./ from backup path and prepend REMOTE_BASE
    clean_path = backup_path[2:] if backup_path.startswith('./') else backup_path
    full_remote_path = f"{REMOTE_BASE}/{clean_path}"
    remote_path = f"{REMOTE_HOST}:{full_remote_path}"
    local_full = ARCHIVE_ROOT / "archive" / local_path

    # Create parent directory if needed
    local_full.parent.mkdir(parents=True, exist_ok=True)

    cmd = ["scp", "-q", remote_path, str(local_full)]

    if dry_run:
        print(f"  [DRY RUN] {' '.join(cmd)}")
        return True

    try:
        result = subprocess.run(cmd, capture_output=True, text=True, timeout=30)
        if result.returncode == 0:
            return True
        else:
            print(f"  ERROR: {result.stderr.strip()}")
            return False
    except subprocess.TimeoutExpired:
        print(f"  TIMEOUT copying {local_path}")
        return False
    except Exception as e:
        print(f"  EXCEPTION: {e}")
        return False


def main():
    """Main recovery workflow."""
    print("=" * 70)
    print("FFFFF.AT ARCHIVE - FILE RECOVERY FROM WORDPRESS BACKUP")
    print("=" * 70)
    print()

    # Step 1: Parse missing files
    missing_files, reference_counts = parse_missing_report()

    # Step 2: Load backup index
    backup_index = load_backup_index()

    # Step 3: Find recoverable files
    recoverable, unrecoverable = find_recoverable_files(
        missing_files, backup_index, reference_counts
    )

    # Step 4: Categorize by directory
    by_directory = categorize_by_directory(recoverable)

    # Step 5: Print summary
    print("\n" + "=" * 70)
    print("RECOVERY SUMMARY")
    print("=" * 70)
    print(f"Total missing files: {len(missing_files)}")
    print(f"Recoverable: {len(recoverable)} ({len(recoverable)/len(missing_files)*100:.1f}%)")
    print(f"Unrecoverable: {len(unrecoverable)} ({len(unrecoverable)/len(missing_files)*100:.1f}%)")
    print()

    print("Files by directory:")
    for dir_name in sorted(by_directory.keys()):
        files = by_directory[dir_name]
        total_refs = sum(f[2] for f in files)
        print(f"  {dir_name:30s} {len(files):6,} files ({total_refs:8,} references)")
    print()

    # Step 6: Identify and recover critical files
    print("=" * 70)
    print("PHASE 1: CRITICAL SITE-WIDE ASSETS")
    print("=" * 70)
    critical_recoverable = [
        (m, b, r) for m, b, r in recoverable if m in CRITICAL_FILES
    ]

    critical_success = 0
    if critical_recoverable:
        print(f"\nFound {len(critical_recoverable)} critical files:")
        for missing_path, backup_path, ref_count in sorted(critical_recoverable, key=lambda x: -x[2]):
            print(f"  [{ref_count:5,} refs] {missing_path}")

        print("\nCopying critical files...")
        for missing_path, backup_path, ref_count in critical_recoverable:
            print(f"  Copying {missing_path}...", end=" ")
            if copy_file_from_backup(backup_path, missing_path, dry_run=False):
                print("✓")
                critical_success += 1
            else:
                print("✗")
        print(f"\nSuccessfully copied {critical_success}/{len(critical_recoverable)} critical files")
    else:
        print("No critical files found in backup (may already be recovered)")

    # Step 7: Project-specific directory recovery
    print("\n" + "=" * 70)
    print("PHASE 2: PROJECT-SPECIFIC DIRECTORIES")
    print("=" * 70)

    # Filter out bulk directories to find project-specific ones
    project_dirs = {
        dir_name: files
        for dir_name, files in by_directory.items()
        if dir_name not in BULK_DIRECTORIES
    }

    if project_dirs:
        print(f"\nFound {len(project_dirs)} project-specific directories:")
        project_dirs_sorted = sorted(project_dirs.items(), key=lambda x: -len(x[1]))

        for dir_name, files in project_dirs_sorted:
            total_refs = sum(f[2] for f in files)
            print(f"  {dir_name:30s} {len(files):6,} files ({total_refs:8,} refs)")

        print("\nRecovering project-specific directories...")
        project_success = 0
        project_total = sum(len(files) for files in project_dirs.values())

        for dir_name, files in project_dirs_sorted:
            print(f"\n  [{dir_name}] {len(files)} files")
            for missing_path, backup_path, ref_count in files:
                print(f"    Copying {missing_path}...", end=" ")
                if copy_file_from_backup(backup_path, missing_path, dry_run=False):
                    print("✓")
                    project_success += 1
                else:
                    print("✗")

        print(f"\nSuccessfully copied {project_success}/{project_total} project files")
    else:
        print("\nNo project-specific directories found (or all already recovered)")

    # Step 8: Show bulk directories summary (but don't recover)
    print("\n" + "=" * 70)
    print("BULK DIRECTORIES (SKIPPED)")
    print("=" * 70)
    bulk_files = {
        dir_name: files
        for dir_name, files in by_directory.items()
        if dir_name in BULK_DIRECTORIES
    }

    if bulk_files:
        print(f"\nSkipped {len(bulk_files)} bulk directories:")
        for dir_name in sorted(bulk_files.keys()):
            files = bulk_files[dir_name]
            total_refs = sum(f[2] for f in files)
            print(f"  {dir_name:30s} {len(files):6,} files ({total_refs:8,} refs)")
        print("\nThese can be recovered later if needed.")

    # Step 9: Save reports
    print("\n" + "=" * 70)
    print("SAVING REPORTS")
    print("=" * 70)

    reports_dir = ARCHIVE_ROOT / "reports"
    reports_dir.mkdir(exist_ok=True)

    # Save recovery summary
    summary_file = reports_dir / "backup-recovery-summary.txt"
    with open(summary_file, 'w') as f:
        f.write("WORDPRESS BACKUP RECOVERY SUMMARY\n")
        f.write("=" * 70 + "\n\n")
        f.write(f"Total missing files: {len(missing_files)}\n")
        f.write(f"Recoverable: {len(recoverable)} ({len(recoverable)/len(missing_files)*100:.1f}%)\n")
        f.write(f"Unrecoverable: {len(unrecoverable)} ({len(unrecoverable)/len(missing_files)*100:.1f}%)\n\n")

        f.write("PHASE 1: Critical Site-Wide Assets\n")
        f.write("-" * 70 + "\n")
        f.write(f"Recovered: {critical_success}/{len(critical_recoverable)} files\n\n")

        if project_dirs:
            f.write("PHASE 2: Project-Specific Directories\n")
            f.write("-" * 70 + "\n")
            f.write(f"Recovered: {project_success}/{project_total} files\n")
            f.write(f"Directories: {len(project_dirs)}\n\n")

        if bulk_files:
            f.write("SKIPPED: Bulk Directories\n")
            f.write("-" * 70 + "\n")
            bulk_total = sum(len(files) for files in bulk_files.values())
            for dir_name in sorted(bulk_files.keys()):
                files = bulk_files[dir_name]
                f.write(f"  {dir_name}: {len(files)} files\n")
            f.write(f"Total skipped: {bulk_total} files\n")

    print(f"Saved: {summary_file}")

    # Save recoverable files list
    recoverable_file = reports_dir / "recoverable-files.txt"
    with open(recoverable_file, 'w') as f:
        f.write("RECOVERABLE FILES FROM WORDPRESS BACKUP\n")
        f.write("=" * 70 + "\n\n")
        for missing_path, backup_path, ref_count in sorted(recoverable, key=lambda x: -x[2]):
            f.write(f"{ref_count:6} refs | {missing_path}\n")
            f.write(f"            -> {backup_path}\n")
    print(f"Saved: {recoverable_file}")

    # Save unrecoverable files list
    unrecoverable_file = reports_dir / "unrecoverable-files.txt"
    with open(unrecoverable_file, 'w') as f:
        f.write("UNRECOVERABLE FILES (not in backup)\n")
        f.write("=" * 70 + "\n\n")
        for missing_path in sorted(unrecoverable):
            ref_count = reference_counts.get(missing_path, 0)
            f.write(f"{ref_count:6} refs | {missing_path}\n")
    print(f"Saved: {unrecoverable_file}")

    print("\n" + "=" * 70)
    print("RECOVERY WORKFLOW COMPLETE")
    print("=" * 70)

    total_recovered = critical_success + (project_success if project_dirs else 0)
    print(f"\nRecovery summary:")
    print(f"  Critical files: {critical_success}")
    if project_dirs:
        print(f"  Project files: {project_success}")
    print(f"  Total recovered: {total_recovered} files")

    print(f"\nNext steps:")
    print(f"  1. Check reports in {reports_dir}/")
    print(f"  2. Re-run missing images report to verify recovery")
    print(f"  3. Check git status for new files")
    print(f"  4. To recover bulk directories, re-run with modified config")
    print()


if __name__ == "__main__":
    main()
