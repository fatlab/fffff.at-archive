var NYTCAP = NYTCAP || {};

NYTCAP.capsuleData = {};

/**
 * Kicks off capsule header work
 * @return {void}
 */
NYTCAP.init = function () {
  const maybeCapsuleData = document.getElementById('nyt-capsule-data');
  if (maybeCapsuleData) {
    NYTCAP.capsuleData = window.JSON.parse(maybeCapsuleData.text);
  }

  // Inserting Ruffle Flash emulator
  NYTCAP.injectRufflePlayer();

  // if we're in an frame, don't do anything
  if (this.isInFrame()) {
    return;
  }

  // Inserting DG JS for GDPR/CCPA.
  NYTCAP.injectDGsnippet();

  window.addEventListener('load', NYTCAP.injectHeader.bind(this));
};

/**
 * Does actualy injection of HTML into page
 * @return {Void}
 */
NYTCAP.injectHeader = function () {
  const hasFixed = this.isProjectPage() || this.doesPageHaveFixedEls() || this.hasElBgImage(document.body) || this.shouldUseFixedHead();
  const capsuleEl = document.createElement('div');
  const useDarkTheme = !this.isProjectPage() && this.isDarkBgPage();

  // don't inject the fade/olverlay div if the page pg isn't white
  if (this.isElBgWhite(document.body)) {
    const capsuleOverlay = document.createElement('div');
    capsuleOverlay.id = 'nytc-overlay';
    document.body.insertBefore(capsuleOverlay, document.body.firstChild);
  }

  capsuleEl.id = 'nytc';

  let capInner = `<div class="nytc-inner ${useDarkTheme ? 'nytc-dark' : ''}" aria-live="polite">`;
  capInner += '<h1 class="nytc-header">This is an archived page.</h1>';

  capInner += '<ul class="nytc-actions">';

  if (this.capsuleData.screenshot) {
    capInner += `<li id="nytc-screenshot"><a href="${this.capsuleData.screenshot}" target="_blank">Original screenshot</a></li>`;
  }

  const canonicalUrl = this.capsuleData.publishedUrl || this.capsuleData.canonicalUrl;
  if (canonicalUrl) {
    capInner += `<li><a href="${canonicalUrl}">Canonical page</a></li>`;
  }

  capInner += `<li><a href="${this.getReportAProblemURL()}" target="_blank">Report a problem</a></li>`;
  capInner += '</ul>';
  capInner += '<button class="nytc-button" id="nytc-close"><span class="nytc-visually-hidden">Hide header</span><i class="icon"></i></button>';
  capInner += '</div>';
  capsuleEl.innerHTML = capInner;

  if (hasFixed) {
    document.body.className = `${document.body.className} nytc-has-fixed`;
  } else {
    document.body.style.transition = 'margin-top .3s ease';
    document.body.className = document.body.className.concat(' has-nytc-header');
    capsuleEl.className = 'nytc-invisible';
    // // delay injection a little bit
    setTimeout(() => {
      document.getElementById('nytc').className = ''; // remove invisibility
    }, 200);
  }
  document.body.insertBefore(capsuleEl, document.body.firstChild);

  // close button
  document.getElementById('nytc-close').addEventListener('click', (e) => {
    let cn = document.body.className;
    if (cn.indexOf('nytc-header-hidden') === -1) {
      cn += ' nytc-header-hidden';
    }
    document.body.className = cn;
  }, false);

  // on scroll, do stuff to hide or reveal the capsule header
  window.addEventListener('scroll', (e) => {
    const HEADER_CLASS = 'nytc-header-invisible';
    const hideHeight = hasFixed ? 70 : 30;
    const scrollDepth = document.documentElement.scrollTop || document.body.scrollTop;
    if (scrollDepth > hideHeight) {
      if (document.body.className.indexOf(HEADER_CLASS) === -1) {
        document.body.className = `${document.body.className} ${HEADER_CLASS}`;
      }
    } else {
      document.body.className = document.body.className.replace(HEADER_CLASS, '');
    }
  });
};

/**
 * Checks all elements on the page to see if any of them are `position:fixed`
 * and are IDs or classes we are not ignoring
 * This is useful to help idenitify some page display stuff where we might want to display
 * different layout and injection patterns for the header.
 * @return {boolean} true for having fixed els
 */
NYTCAP.doesPageHaveFixedEls = function () {
  let i; let
    k;
  const els = document.body.getElementsByTagName('*');

  // for loop, faster than foreach
  for (i = 0; i < els.length; i++) {
    if (window.getComputedStyle(els[i], null).getPropertyValue('position') === 'fixed') {
      // in order for this fn to return false, ALL runs of doesElHaveIgnorableIds && doesElHaveIgnorableClasses must be false
      if (this.doesElHaveIgnorableIds(els[i].id) === false && this.doesElHaveIgnorableClasses(els[i].className) === false) {
        return true;
      }
    }
  }
  return false;
};

/**
 * Determines if a given element has a white background color
 * @param  {object}  el elmeent
 * @return {Boolean}    true for white
 */
NYTCAP.isElBgWhite = function (el) {
  const elCss = window.getComputedStyle(el);
  const whiteRe = /rgb\(255\, 255\, 255\)|rgba\(255, 255, 255, (1|\.\d)?\)/ig;
  if (elCss.backgroundColor && whiteRe.test(elCss.backgroundColor)) {
    return true;
  }
  return false;
};

/**
 * Determines if a given element has a background image
 * @param  {object}  el element
 * @return {Boolean}    true for having a background image
 */
NYTCAP.hasElBgImage = function (el) {
  const elCss = window.getComputedStyle(el);
  return elCss.backgroundImage != 'none';
};

/**
 * Checks if the page's background color falls below a certain darkness level
 * @return {Boolean} [description]
 */
NYTCAP.isDarkBgPage = function () {
  if (window.location.search.indexOf('forcedark') !== -1) return true;
  if (window.location.search.indexOf('forcelight') !== -1) return false;
  const DARK_THRESH = 75;
  const elCss = window.getComputedStyle(document.body);
  const colors = elCss.backgroundColor.split('(')[1].split(')')[0].split(',')
    .map((c) => parseInt(c, 10));
  if (colors.length && colors[0] < DARK_THRESH && colors[0] < DARK_THRESH && colors[0] < DARK_THRESH) {
    if (colors[3] !== undefined && colors[3] === 0) { // background is transparent, can assume white
      return false;
    }
    return true;
  }
  return false;
};

/**
 * Determines if the page is a /project/ page based on URL
 * @return {Boolean} true for being a project page
 */
NYTCAP.isProjectPage = function () {
  return /\/projects\//i.test(window.location.pathname);
};

NYTCAP.shouldUseFixedHead = function () {
  return /\/library\/national\//i.test(window.location.pathname);
};

NYTCAP.isSlideshowPage = function () {
  return /\/slideshow\//i.test(window.location.pathname);
};

/*
 Checks if given id(s) are present in the given elId
 */
NYTCAP.doesElHaveIgnorableIds = function (elId) {
  const idsToIgnore = ['FixedPanel', 'shareToolsOverlay', 'shareToolsDialogBox', 'upNext'];
  return idsToIgnore.indexOf(elId) !== -1;
};

NYTCAP.getReportAProblemURL = function () {
  const subject = encodeURI('problem with archive page');
  const body = encodeURI(`Problem with: ${window.location.href}`);
  return `mailto:archive@nytimes.com?subject=${subject}&body=${body}`;
};

/*
Checks if the el has any of the ignorable classes
 */
NYTCAP.doesElHaveIgnorableClasses = function (elClassName) {
  const classesToIgnore = ['nytOverlay', 'shareToolsOverlay', 'shareToolsDialogBox'];
  const passed = classesToIgnore.filter((cssClass) => elClassName.indexOf(cssClass) !== -1);
  return passed.length >= 1;
};

NYTCAP.isInFrame = function () {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
};

NYTCAP.isLocal = function () {
  return window.location.protocol == 'file:' || window.location.hostname == 'localhost' || window.location.hostname == '0.0.0.0';
};

NYTCAP.injectDGsnippet = function () {
  document.addEventListener('DOMContentLoaded', () => {
    const cookiePurposesText = 'We also use them to analyze site traffic.';
    const s = document.createElement('script');
    s.setAttribute('src', 'https://a1.nyt.com/analytics/dg-governance/governance.min.js');
    s.setAttribute('data-gdpr-cookie-purposes', cookiePurposesText);
    s.setAttribute('data-no-3p', 'true');
    document.body.appendChild(s);
  });
};

NYTCAP.injectRufflePlayer = function () {
  if (NYTCAP.capsuleData.hasFlash
        || window.location.href.includes('elections/2008')
        || window.location.href.includes('elections/2009')
        || window.location.href.includes('elections/2010')
        || window.location.href.includes('/packages/')
  ) {
    // Using document.write instead of document.head.append make it blocking, which is important to spoof swfobject.js
    document.write(`<script src="https://${window.location.hostname}/_flash/ruffle-config.js"></script>`);
    document.write(`<script src="https://${window.location.hostname}/_flash/ruffle.js"></script>`);
  }
};

NYTCAP.init();
