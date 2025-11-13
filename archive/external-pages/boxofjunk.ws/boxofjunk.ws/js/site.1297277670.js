// hopefully temporary -- http://github.com/Modernizr/Modernizr/issues#issue/24
Modernizr.addTest('textshadow', function() {
    return document.createElement('div').style.textShadow === '';
});

$(function() {

    var iPhone = /AppleWebKit.*Mobile/.test(navigator.userAgent),
        iPhoneApp = iPhone && !(/Mobile.*Safari/.test(navigator.userAgent)),
        Dublin = {y: 53.347778, x: -6.259722};

    if (iPhone && !iPhoneApp) setTimeout('window.scrollTo(0, 1)', 0);
    if (Modernizr.textshadow) $('a').css('border-bottom-width', 0);

    if (location.hash == '#debug') {
        console.log('[Debug]');
        $('[id]').each(function() {
            var ids = $('[id=' + this.id + ']');
            if (ids.length > 1 && ids[0] == this) console.warn('Multiple elements with id: #' + this.id);
        });
    }

    $('#o_o').each(function() {
        var jimbo = $(this);
        if ($('body').width() > 480 && !$.cookie('ophthalmophobic')) {
            $('<a class="hide" href="/"><img src="/images/cross-white.png" alt="Hide" title="Hide"/></a>').click(function() {
                $(this).hide();
                jimbo.fadeOut(400);
                $.cookie('ophthalmophobic', 1, {expires: 1});
                return false;
            }).appendTo(jimbo);
            jimbo.show();
        }
    });

    if (window.location.hash == '#web3.0') {
        window.location.hash = '#!/bin/sh';
    }

});
