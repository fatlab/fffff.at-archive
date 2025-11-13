(function() {
    'use strict';

    var cookieName = 'cookiesConsent';

    if (document.cookie.indexOf(cookieName) !== -1) {
        return;
    }

    var elm = document.getElementById('cookie-alert'),
        btn = elm.getElementsByTagName('button')[0];

    elm.style.display = 'block';

    btn.addEventListener('click', function(e) {
        var never   = new Date('01 Jan 2037'),

            key     = cookieName,
            value   = Date.now(),
            path    = ';path=/',
            expires = ';expires=' + never.toUTCString();

        var cookie = key + '=' + value + path + expires;

        document.cookie = cookie;

        elm.style.display = 'none';
    });
})();
