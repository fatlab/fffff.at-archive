/**
 * Theme Enable Sticky Navigation
 * @author Pitabas Behera
 */
jQuery(document).ready(function() {
    function ascentStickyHeader() {
        if (jQuery(window).scrollTop() >= origOffsetY) {
            jQuery('#header-main').addClass('sticky');
            jQuery('#header-main.sticky').css({
                'top': adminbarHeight + 'px'
            });

            var headerSearchFormTopPosition = (adminbarHeight) + (jQuery('.header-bottom').outerHeight());
            jQuery('#header-search-form-wrap').addClass('sticky');
            jQuery('#header-search-form-wrap.sticky').css({
                'top': headerSearchFormTopPosition + 'px'
            });
        } else {
            jQuery('#header-main').removeClass('sticky');
            jQuery('#header-main').css({
                'top': 'auto'
            });
            jQuery('#header-search-form-wrap').removeClass('sticky');
        }
    }

    function wpAdminbarHeight(wpAdminbar) {
        if (jQuery(wpAdminbar).length) {
            var adminbarHeight = jQuery(wpAdminbar).outerHeight(true);
        } else {
            var adminbarHeight = 0;
        }
        return adminbarHeight;
    }
    jQuery(window).on("load resize scroll", function(e) {
        adminbarHeight = wpAdminbarHeight("#wpadminbar");
        if(jQuery(window).innerWidth() > 767) {
            jQuery('#header-main.sticky').css({
                'top': adminbarHeight + 'px'
            });
        } else {
            jQuery('#header-main.sticky').css({
                'top': 0
            });
        }

        var headerSearchFormTopPosition = (adminbarHeight) + (jQuery('.header-bottom').outerHeight());
        jQuery('#header-search-form-wrap.sticky').css({
            'top': headerSearchFormTopPosition + 'px'
        });
    });
    adminbarHeight = wpAdminbarHeight("#wpadminbar");
    var stickyMenu = jQuery('#header-main');
    var origOffsetY = (stickyMenu.offset().top) - (adminbarHeight);
    document.onscroll = ascentStickyHeader;

}); //End jQuery