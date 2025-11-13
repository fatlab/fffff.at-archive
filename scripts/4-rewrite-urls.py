#!/usr/bin/env python3
"""
Rewrite all URLs in HTML files to use relative paths
"""

import os
import re
from pathlib import Path
from urllib.parse import urlparse, urljoin
from bs4 import BeautifulSoup

ARCHIVE_DIR = Path("../archive")


def make_relative_url(from_path, to_url, archive_root):
    """
    Convert an absolute URL to a relative path from the perspective of from_path
    """
    # Skip certain URL types
    if to_url.startswith(('data:', 'javascript:', 'mailto:', '#')):
        return to_url

    parsed = urlparse(to_url)

    # Skip external domains (not fffff.at)
    if parsed.netloc and parsed.netloc not in ['fffff.at', 'www.fffff.at']:
        return to_url

    # Get the path part
    url_path = parsed.path
    if not url_path or url_path == '/':
        url_path = '/index.html'

    # Convert URL path to local file path
    local_target = archive_root / url_path.lstrip('/')

    # Check if target exists (might have .html extension added)
    if not local_target.exists():
        # Try with .html
        if not str(local_target).endswith('.html'):
            html_version = Path(str(local_target) + '.html')
            if html_version.exists():
                local_target = html_version
        # Try as directory with index.html
        else:
            index_version = local_target / 'index.html'
            if index_version.exists():
                local_target = index_version

    # Calculate relative path
    try:
        rel_path = os.path.relpath(local_target, from_path.parent)

        # Preserve fragment
        if parsed.fragment:
            rel_path += '#' + parsed.fragment

        return rel_path
    except ValueError:
        # Paths on different drives or other issues
        return to_url


def rewrite_html_file(html_path, archive_root):
    """Rewrite URLs in an HTML file to be relative"""
    try:
        with open(html_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        soup = BeautifulSoup(content, 'html.parser')
        modified = False

        # Rewrite <a href="...">
        for tag in soup.find_all('a', href=True):
            original = tag['href']
            relative = make_relative_url(html_path, original, archive_root)
            if relative != original:
                tag['href'] = relative
                modified = True

        # Rewrite <img src="...">
        for tag in soup.find_all('img', src=True):
            original = tag['src']
            relative = make_relative_url(html_path, original, archive_root)
            if relative != original:
                tag['src'] = relative
                modified = True

        # Rewrite <link href="...">
        for tag in soup.find_all('link', href=True):
            original = tag['href']
            relative = make_relative_url(html_path, original, archive_root)
            if relative != original:
                tag['href'] = relative
                modified = True

        # Rewrite <script src="...">
        for tag in soup.find_all('script', src=True):
            original = tag['src']
            relative = make_relative_url(html_path, original, archive_root)
            if relative != original:
                tag['src'] = relative
                modified = True

        # Rewrite inline CSS url() references
        for tag in soup.find_all(style=True):
            original_style = tag['style']
            # Match url(...) and replace
            def replace_url(match):
                url = match.group(1).strip('\'"')
                relative = make_relative_url(html_path, url, archive_root)
                return f'url({relative})'

            new_style = re.sub(r'url\(([^)]+)\)', replace_url, original_style)
            if new_style != original_style:
                tag['style'] = new_style
                modified = True

        # Also check <style> tags
        for style_tag in soup.find_all('style'):
            if style_tag.string:
                original_css = style_tag.string

                def replace_url(match):
                    url = match.group(1).strip('\'"')
                    relative = make_relative_url(html_path, url, archive_root)
                    return f'url({relative})'

                new_css = re.sub(r'url\(([^)]+)\)', replace_url, original_css)
                if new_css != original_css:
                    style_tag.string = new_css
                    modified = True

        if modified:
            # Write back
            with open(html_path, 'w', encoding='utf-8') as f:
                f.write(str(soup))
            return True

    except Exception as e:
        print(f"Error processing {html_path}: {e}")

    return False


def rewrite_css_file(css_path, archive_root):
    """Rewrite URLs in CSS files to be relative"""
    try:
        with open(css_path, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()

        original_content = content

        def replace_url(match):
            url = match.group(1).strip('\'"')
            relative = make_relative_url(css_path, url, archive_root)
            return f'url({relative})'

        content = re.sub(r'url\(([^)]+)\)', replace_url, content)

        if content != original_content:
            with open(css_path, 'w', encoding='utf-8') as f:
                f.write(content)
            return True

    except Exception as e:
        print(f"Error processing {css_path}: {e}")

    return False


def main():
    print("Rewriting URLs to be relative...")

    if not ARCHIVE_DIR.exists():
        print(f"Error: Archive directory not found: {ARCHIVE_DIR}")
        return

    # Find all HTML files
    html_files = list(ARCHIVE_DIR.rglob("*.html")) + list(ARCHIVE_DIR.rglob("*.htm"))
    print(f"Found {len(html_files)} HTML files")

    html_modified = 0
    for i, html_file in enumerate(html_files, 1):
        if i % 50 == 0:
            print(f"  Processing HTML {i}/{len(html_files)}...")
        if rewrite_html_file(html_file, ARCHIVE_DIR):
            html_modified += 1

    print(f"Modified {html_modified} HTML files")

    # Find all CSS files
    css_files = list(ARCHIVE_DIR.rglob("*.css"))
    print(f"\nFound {len(css_files)} CSS files")

    css_modified = 0
    for i, css_file in enumerate(css_files, 1):
        if i % 20 == 0:
            print(f"  Processing CSS {i}/{len(css_files)}...")
        if rewrite_css_file(css_file, ARCHIVE_DIR):
            css_modified += 1

    print(f"Modified {css_modified} CSS files")

    print("\n" + "=" * 80)
    print("URL Rewriting Complete!")
    print("=" * 80)
    print(f"HTML files modified: {html_modified}/{len(html_files)}")
    print(f"CSS files modified: {css_modified}/{len(css_files)}")
    print("\nAll URLs have been converted to relative paths.")
    print("The archive should now be fully browsable offline!")


if __name__ == '__main__':
    main()
