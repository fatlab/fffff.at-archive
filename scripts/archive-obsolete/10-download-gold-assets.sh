#!/bin/bash
# Download FAT Gold assets from Wayback Machine

set -e

GOLD_DIR="archive/gold"
WAYBACK_BASE="https://web.archive.org/web/20170821075525"
WAYBACK_ID="20170821075525"

cd "$(dirname "$0")/.."

echo "======================================================================"
echo "DOWNLOADING FAT GOLD ASSETS FROM WAYBACK MACHINE"
echo "======================================================================"

# Create asset directories
mkdir -p "$GOLD_DIR/css"
mkdir -p "$GOLD_DIR/scripts"
mkdir -p "$GOLD_DIR/images"
mkdir -p "$GOLD_DIR/images/sample-project/slider"

# Download CSS files
echo ""
echo "Downloading CSS files..."
wget -q --show-progress -O "$GOLD_DIR/css/style.css" \
  "${WAYBACK_BASE}cs_/http://www.gold.fffff.at/css/style.css"

wget -q --show-progress -O "$GOLD_DIR/css/nivo-slider.css" \
  "${WAYBACK_BASE}cs_/http://www.gold.fffff.at/css/nivo-slider.css"

wget -q --show-progress -O "$GOLD_DIR/css/nivo-theme.css" \
  "${WAYBACK_BASE}cs_/http://www.gold.fffff.at/css/nivo-theme.css"

wget -q --show-progress -O "$GOLD_DIR/css/jquery.fancybox-1.3.4.css" \
  "${WAYBACK_BASE}cs_/http://www.gold.fffff.at/css/jquery.fancybox-1.3.4.css"

# Download JavaScript files
echo ""
echo "Downloading JavaScript files..."
wget -q --show-progress -O "$GOLD_DIR/scripts/jquery-1.6.2.min.js" \
  "${WAYBACK_BASE}js_/http://www.gold.fffff.at/scripts/jquery-1.6.2.min.js"

wget -q --show-progress -O "$GOLD_DIR/scripts/panelslide.js" \
  "${WAYBACK_BASE}js_/http://www.gold.fffff.at/scripts/panelslide.js"

wget -q --show-progress -O "$GOLD_DIR/scripts/custom.js" \
  "${WAYBACK_BASE}js_/http://www.gold.fffff.at/scripts/custom.js"

wget -q --show-progress -O "$GOLD_DIR/scripts/scrolltopcontrol.js" \
  "${WAYBACK_BASE}js_/http://www.gold.fffff.at/scripts/scrolltopcontrol.js"

wget -q --show-progress -O "$GOLD_DIR/scripts/jquery.nivo.slider.pack.js" \
  "${WAYBACK_BASE}js_/http://www.gold.fffff.at/scripts/jquery.nivo.slider.pack.js"

wget -q --show-progress -O "$GOLD_DIR/scripts/nivo-options.js" \
  "${WAYBACK_BASE}js_/http://www.gold.fffff.at/scripts/nivo-options.js"

wget -q --show-progress -O "$GOLD_DIR/scripts/jquery.fancybox-1.3.4.pack.js" \
  "${WAYBACK_BASE}js_/http://www.gold.fffff.at/scripts/jquery.fancybox-1.3.4.pack.js"

wget -q --show-progress -O "$GOLD_DIR/scripts/jquery.easing-1.3.pack.js" \
  "${WAYBACK_BASE}js_/http://www.gold.fffff.at/scripts/jquery.easing-1.3.pack.js"

wget -q --show-progress -O "$GOLD_DIR/scripts/jquery.mousewheel-3.0.4.pack.js" \
  "${WAYBACK_BASE}js_/http://www.gold.fffff.at/scripts/jquery.mousewheel-3.0.4.pack.js"

# Download images
echo ""
echo "Downloading images..."
wget -q --show-progress -O "$GOLD_DIR/favicon.ico" \
  "${WAYBACK_BASE}im_/http://www.gold.fffff.at/favicon.ico"

wget -q --show-progress -O "$GOLD_DIR/images/bannergold.gif" \
  "${WAYBACK_BASE}im_/http://www.gold.fffff.at/images/bannergold.gif"

wget -q --show-progress -O "$GOLD_DIR/images/website.jpg" \
  "${WAYBACK_BASE}im_/http://www.gold.fffff.at/images/website.jpg"

wget -q --show-progress -O "$GOLD_DIR/images/goldeurope.jpg" \
  "${WAYBACK_BASE}im_/http://gold.fffff.at/images/goldeurope.jpg"

wget -q --show-progress -O "$GOLD_DIR/images/bird.png" \
  "${WAYBACK_BASE}im_/http://www.gold.fffff.at/images/bird.png"

wget -q --show-progress -O "$GOLD_DIR/images/diamante.png" \
  "${WAYBACK_BASE}im_/http://www.gold.fffff.at/images/diamante.png"

wget -q --show-progress -O "$GOLD_DIR/images/vimeo.png" \
  "${WAYBACK_BASE}im_/http://www.gold.fffff.at/images/vimeo.png"

wget -q --show-progress -O "$GOLD_DIR/images/camera.png" \
  "${WAYBACK_BASE}im_/http://www.gold.fffff.at/images/camera.png"

wget -q --show-progress -O "$GOLD_DIR/images/github.png" \
  "${WAYBACK_BASE}im_/http://www.gold.fffff.at/images/github.png"

wget -q --show-progress -O "$GOLD_DIR/images/ff.png" \
  "${WAYBACK_BASE}im_/http://www.gold.fffff.at/images/ff.png" || echo "  (ff.png not found, skipping)"

# Note: slider images may not exist in Wayback, but try anyway
wget -q --show-progress -O "$GOLD_DIR/images/sample-project/slider/slide1.jpg" \
  "${WAYBACK_BASE}im_/http://www.gold.fffff.at/images/sample-project/slider/slide1.jpg" 2>/dev/null || echo "  (slide1.jpg not found, skipping)"

wget -q --show-progress -O "$GOLD_DIR/images/sample-project/slider/slide2.jpg" \
  "${WAYBACK_BASE}im_/http://www.gold.fffff.at/images/sample-project/slider/slide2.jpg" 2>/dev/null || echo "  (slide2.jpg not found, skipping)"

echo ""
echo "======================================================================"
echo "DOWNLOAD COMPLETE"
echo "======================================================================"
echo ""
echo "Asset summary:"
echo "  CSS files: $(find $GOLD_DIR/css -type f 2>/dev/null | wc -l | tr -d ' ')"
echo "  JS files: $(find $GOLD_DIR/scripts -type f 2>/dev/null | wc -l | tr -d ' ')"
echo "  Images: $(find $GOLD_DIR/images -type f 2>/dev/null | wc -l | tr -d ' ')"
echo "  Total size: $(du -sh $GOLD_DIR | cut -f1)"
echo ""
echo "Next: Test archive/gold/index.html in browser"
echo ""
