'use strict';

var NYTBLOGCAPS = NYTBLOGCAPS || {};

NYTBLOGCAPS.init = function() {
    // Inserting DG JS snippet for GDPR and CCPA compliance.
    NYTBLOGCAPS.insertDgSnippet();
};

NYTBLOGCAPS.insertDgSnippet = function () {
    document.addEventListener("DOMContentLoaded", function() {
        const cookiePurposesText = 'We also use them to analyze site traffic.';
        const s = document.createElement('script');
        s.setAttribute('src', 'https://a1.nyt.com/analytics/dg-governance/governance.min.js');
        s.setAttribute('data-gdpr-cookie-purposes', cookiePurposesText);
        s.setAttribute('data-no-3p', 'true');
        s.setAttribute('data-dns-side', 'center');
        document.body.appendChild(s);
    });
};

NYTBLOGCAPS.init();
