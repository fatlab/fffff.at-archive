(function( $, win, doc ) {
    'use strict';

    // remove any query string or fragment identifier
    var url = win.location.href.split(/[?#]/)[0];
    var campaignCode = {
        wt_zmc: null,
        utm_medium: 'sm',
        utm_source: null,
        utm_campaign: 'ref',
        utm_content: 'zeitde_dskshare_link_x',
        t: doc.title
    };

    function shareUrl(url) {
        win.open(url, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=300,width=600');
    }

    function addBigShareButtons() {
        var oldShareBox = $('.zb-sharing-menu__title'),
            articleBody = $('article.post'),
            entryFooter = $('.entry-footer__options'),
            newShareBox;

        if (!oldShareBox.length || !articleBody.length) {
            return;
        }

        newShareBox = '<div class="tb-newShareBox">';
        newShareBox += '<a href="#facebook-share" id="facebook-share" class="tb-newShareButton tb-facebook">Auf Facebook teilen</a>';
        newShareBox += '<a href="#twitter-share" id="twitter-share" class="tb-newShareButton tb-twitter">Twittern</a>';
        newShareBox += '</div>'; // close tb-newShareBox

        entryFooter.before(newShareBox);
        oldShareBox.remove(); // kill old social box
        $('.entry-footer__option-seperator.desktop-only').last().hide();
        $('.tb-newShareBox').css( "display", "inline-block");

        $('#facebook-share').on('click', function() {
            if (wt) {
                wt.sendinfo({ linkId: 'stationaer.articlebottom.1.1.social.facebook|https://www.facebook.com/sharer/sharer.php?u=' + url });
            }

            campaignCode.wt_zmc = 'sm.ext.zonaudev.facebook.ref.zeitde.dskshare.link.x';
            campaignCode.utm_source = 'facebook_zonaudev_ext';

            shareUrl('https://www.facebook.com/sharer/sharer.php?u=' + encodeURIComponent( url + '?' + $.param(campaignCode) ));
        });

        $('#twitter-share').on('click', function(){
            if (wt) {
                wt.sendinfo({ linkId: 'stationaer.articlebottom.1.2.social.twitter|https://twitter.com/intent/tweet?url=' + url });
            }

            campaignCode.wt_zmc = 'sm.ext.zonaudev.twitter.ref.zeitde.dskshare.link.x';
            campaignCode.utm_source = 'twitter_zonaudev_ext';

            shareUrl('https://twitter.com/intent/tweet?url=' + encodeURIComponent( url + '?' + $.param(campaignCode) ));
        });
    }

    $( addBigShareButtons );

}( jQuery, window, document ));
