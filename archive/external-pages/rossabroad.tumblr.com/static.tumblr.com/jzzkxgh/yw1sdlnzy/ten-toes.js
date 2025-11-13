(function($) {
    if (window.location.pathname.indexOf('customize_preview') > -1) {
        $('#stash-preloader').css('display', 'none');
        $('.banner-img, .mobile-banner-img').css({
            'transform': 'none'
        });
        $('.banner-text').css({
            'opacity': '1'
        });
    }
})(jQuery);

jQuery(document).ready(function($){
    $window = $(window);
    modalOpen = false;
    load = new TimelineMax();

    // New Instagram Code
    if ( $('body').hasClass('permalink', 'tagged-page') ) {
        $("article").fitVids();

        $('article').each(function(){
            let articleHTML = $(this).html();
    
                if (articleHTML.includes("https://www.instagram.com")) {
                    $(this).closest('article').find('.tmblr-embed').addClass('insta-video');
                } else {
                }
        });
    }


    if (window.location.pathname.indexOf('customize_preview') > -1) {
        var windowwidth = 1000;
    } else {
        var windowwidth = $(document).width();
    }
    $(window).resize(function(){
        if (window.location.pathname.indexOf('customize_preview') > -1) {
            windowwidth = 1000;
        } else {
            windowwidth = $(document).width();
        }
    });

    var controller = new ScrollMagic.Controller();

    if ( $('body').hasClass('permalink') ) {
        $("article").fitVids();
    }

    if (window.location.pathname.indexOf('customize_preview') > -1) {
        var windowwidth = 1000;
    } else {
        var windowwidth = $(document).width();
    }
    var windowheight = $(window).outerHeight();

    $(window).resize(function(){
        if (window.location.pathname.indexOf('customize_preview') > -1) {
            windowwidth = 1000;
        } else {
            windowwidth = $(document).width();
        }
        windowheight = $(window).outerHeight();
    });



    $(document).on("click",".share-toggle, .close-post-share",function(e){
        $(this).toggleClass("open");
        $(this).closest('.post').find('.post-share').toggleClass("open");
    });
    $(document).on('mouseleave',"article .inside, article .inner", function(){
        $('.share-toggle, .post-share, .standard-share, .post-share-toggle').removeClass('open');
    });

    $(document).on("click",".post-share-toggle",function(e){
        $(this).toggleClass("open");
        $(this).closest('.share').find('.standard-share').toggleClass("open");
    });

    if ( $('.home-description').text().length == 0 ) {
        $('.home-description').css('display','none');
    }


    // Header Background

    if(windowwidth > 720){
        $(window).scroll(function(){
            if ($("body").scrollTop() > 5) {
                $('#header').addClass('bg');
            } else {
                $('#header').removeClass('bg');
            }
        });
        
        $(window)
        .on("scrollstart", function() {
            $('body').addClass('scrolling');
        })
        .on("scrollstop", function() {
            $('body').removeClass('scrolling');
        });
    } else {

    }

    if(windowwidth > 720){
        $(window)
        .on("scrollstart", function() {
            $('body').addClass('scrolling');
        })
        .on("scrollstop", function() {
            $('body').removeClass('scrolling');
        });
    } 


    if ($('body').hasClass( "has-banner" ) && $("#stash-ants .post").length > 0){ 
        TweenMax.fromTo(".arr-down", 0.5, {opacity:0, y:-20},{opacity:1, y:0}, 0.4);
    }

 

    // Banner

    var bannerHeight = windowheight;

    $(document).on('click', '#banner h1.banner-logo, #banner .arr-down', function(e){
        e.preventDefault();
        TweenLite.to( window, 1, {scrollTo:{y: $('#stash').offset().top }, ease:Power2.easeOut});
    });

    // banner Fade
    var bannerfade = TweenMax.to(".banner-center, .arr-down, .banner-video-options", 1, {opacity:0, triggerHook:0});
    var banner = new ScrollMagic.Scene({triggerElement: "#banner", duration: "100%", triggerHook: "onLeave"})
                    .setTween(bannerfade)
                    .addTo(controller);



    // Banner Logo

    if ( $('#banner').length > 0 && windowwidth > 740)  {
        $('#header').addClass('over-banner');
        if (window.location.pathname.indexOf('customize_preview') > -1) {
        } else {
        }
        // Scroll Logo
        $window.scroll(function(event) {
            if ($window.scrollTop() < bannerHeight) { 
                $('#header').addClass('over-banner');
            } else {
                $('#header').removeClass('over-banner');
            }
        });
    }


    // Video header

        var windowWidth = $(window).outerWidth(),
            windowHeight = $(window).outerHeight(),
            vidContainer = $('.banner-youtube-video'),
            playerContainer = $('#player'),
            vidHeight = vidContainer.data('height'),
            vidWidth = vidContainer.data('width'),
            newVidHeight = windowWidth * ( vidHeight / vidWidth );

                vidContainer.height("100vh");
                playerContainer.height("100vh");
                
            // if ( vidContainer.height() > newVidHeight ) {
            //     vidContainer.height(newVidHeight);
            //     playerContainer.height(newVidHeight).width(windowWidth);
            // }

    $(window).resize(function() {
        var windowWidth = $(window).outerWidth(),
            windowHeight = $(window).outerHeight(),
            vidContainer = $('.banner-youtube-video'),
            playerContainer = $('#player'),
            vidHeight = vidContainer.data('height'),
            vidWidth = vidContainer.data('width'),
            newVidHeight = windowWidth * ( vidHeight / vidWidth );

                vidContainer.height("100vh");
                playerContainer.height("100vh");
                
            // if ( vidContainer.height() > newVidHeight ) {
            //     vidContainer.height(newVidHeight);
            //     playerContainer.height(newVidHeight).width(windowWidth);
            // }

    });

    /* Youtube Player */

    /* Mute Button */

    $(document).on("click",".yt-mute-button",function(e){
        if ( $(this).hasClass('off')) {
            player.unMute(); 
            $(this).removeClass('off');
            $(this).addClass('on');
        } else {
            player.mute(); 
            $(this).removeClass('on');
            $(this).addClass('off');
        }
    });

    /* Play Button */

    $(document).on("click",".yt-play-button",function(e){
        if ( $(this).hasClass('autoplay-0')) {
            player.playVideo(); 
            $(this).removeClass('autoplay-0');
            $(this).addClass('autoplay-1');
        } else {
            player.pauseVideo(); 
            $(this).removeClass('autoplay-1');
            $(this).addClass('autoplay-0');
        }
    });

    /* Next Button */

    $(document).on("click",".yt-next-button",function(e){
        player.nextVideo();
    });

    /* Previous Button */

    $(document).on("click",".yt-previous-button",function(e){
        player.previousVideo();
    });



    /* Vimeo Player */

    // Defaults

    if (VIMEO_BANNER) {

        var video = $("#banner-vimeo-video");

        if ( $('.vimeo-play-button').hasClass('autoplay-0')) {
            video.vimeo("pause");
        } else {
            video.vimeo("play");
        }

        if ( $('.vimeo-mute-button').hasClass('off')) {
            video.vimeo("setVolume", 0);
        } else {
            video.vimeo("setVolume", 1);
        }

    }

    //toggle play/pause
    $(document).on("click",".vimeo-play-button",function(e){
        if ( $(this).hasClass('autoplay-0')) {
            video.vimeo("play");
            $(this).removeClass('autoplay-0');
            $(this).addClass('autoplay-1');
        } else {
            video.vimeo("pause");
            $(this).removeClass('autoplay-1');
            $(this).addClass('autoplay-0');
        }
    });
                            
    //toggle mute/unmute
    $(document).on("click",".vimeo-mute-button",function(e){
        if ( $(this).hasClass('off')) {
            video.vimeo("setVolume", 1); 
            $(this).removeClass('off');
            $(this).addClass('on');
        } else {
            video.vimeo("setVolume", 0);
            $(this).removeClass('on');
            $(this).addClass('off');
        }
    });




    /* Overlay Video */

    $(document).on("click",".banner-play svg",function(e){
        $('.banner-play').toggleClass("opened");
        $('.overlay-video').toggleClass("opened");
    });

    $('body').click(function(e) {
        if (!$(e.target).closest('.overlay-video-container, .overlay-video-container iframe').length && $('.overlay-video').hasClass( "opened" )){
            $('.banner-play').removeClass("opened");
            $('.overlay-video').removeClass("opened");
        }
    });

    $(document).keyup(function(e) {
        if ( $('.overlay-video').hasClass( "opened" ) ) {
            if (e.keyCode == 27 ) {
                $('.banner-play').removeClass("opened");
                $('.overlay-video').removeClass("opened");
                return;
            }
        }
    });



    /*fix vid*/

    (function () {

        function resizeVideo(){
            var $video = $('.tumblr_video_container');

            var videoWidth = $video.width(),
                videoHeight = $video.height(),
                videoRatio = (videoHeight/videoWidth),

                newWidth = 560,
                newHeight = Math.floor(newWidth*videoRatio),

                mobileWidth = 260,
                mobileHeight = Math.floor(mobileWidth*videoRatio);

            if ($(window).width() < 640) {
                $video.css('width', '100%').css('height', mobileHeight);
                $video.find('iframe').height(mobileHeight);
            }
            else {
                $video.css('width', '100%').css('height', newHeight);
                $video.find('iframe').height(newHeight);
            }

            $(window).resize(function() {
                if ($(window).width() < 640) {
                    $video.css('width', '100%').css('height', mobileHeight);
                }
                else {
                    $video.css('width', '100%').css('height', newHeight);
                }
            });
        }
        resizeVideo();

    })();



    // $('.stash-photoset.ips').stashIPS();


    // $(window).scroll(function(){
    //     if ($("body").scrollTop() > 50) {
    //         $('#backToTop').css({
    //             'visibility': 'visible',
    //             'opacity': '1'
    //         });
    //     } else {
    //         $('#backToTop').css({
    //             'visibility': 'hidden',
    //             'opacity': '0'
    //         });
    //         $('.banner-text').css({
    //             'opacity': '1'
    //         });
    //     }
    // });


    // if ($("body").scrollTop() > 50) {
    //     $('.banner-text').css({
    //         'opacity': '1'
    //     });
    // }

    $(window).scroll(function() {
        if( $(this).scrollTop() > 50 ) {
            $('#backToTop').css({
                'visibility': 'visible',
                'opacity': '1'
            });
        } else {
            $('#backToTop').css({
                'visibility': 'hidden',
                'opacity': '0'
            });
            $('.banner-text').css({
                'opacity': '1'
            });
        }
    });


    // Soundcloud

    // $(document).on("click",".soundcloud-close.opened",function(e){
    //     $('.soundcloud-close').removeClass("opened");
    //     $('.soundcloud-close').addClass("closed");
    //     $('.soundcloud-player').addClass("closed");
    // });

    // $(document).on("click",".soundcloud-close.closed",function(e){
    //     $('.soundcloud-close').addClass("opened");
    //     $('.soundcloud-close').removeClass("closed");
    //     $('.soundcloud-player').removeClass("closed");
    // });

    // $(window).scroll(function() {
    //     if( $(this).scrollTop() > 2 ) {
    //         $('.soundcloud-close').removeClass("opened");
    //         $('.soundcloud-close').addClass("closed");
    //         $('.soundcloud-player').addClass("closed");
    //     } else {
    //     }
    // });



    // Banner

    var initController = new ScrollMagic.Controller();
    var controller = new ScrollMagic.Controller();
    $(document).on('click', '#banner h1.banner-logo, #banner .arr-down', function(e){
        e.preventDefault();
        TweenLite.to( window, 1, {scrollTo:{y: $('#stash').offset().top }, ease:Power2.easeOut});
    });

    $(document).on('click', '#backToTop, .backToTop', function(e){
        e.preventDefault();
        TweenLite.to( window, 1, {scrollTo:{y: 0 }, ease:Power2.easeOut});
    });

    // banner fade
    var bannerfade = TweenMax.to(".banner-text, .arr-down", 1, {opacity:0, triggerHook:0});
    var banner = new ScrollMagic.Scene({triggerElement: "#banner", duration: "100%", triggerHook: "onLeave"})
                    .setTween(bannerfade)
                    .addTo(controller);

    if ( $('#banner').length > 0 ) {
        if(windowwidth > 740){
            // sidebar/logo fade in
            function showLogo() {$('.logo, .sidebar-toggle, .header-description').addClass('show');}
            var logofade = TweenMax.to(".header-description", 0.7, {opacity:1, ease:Power2.easeOut, triggerHook:0});
            var logobanner = new ScrollMagic.Scene({triggerElement: ".page-container", duration: 0.7, triggerHook: 0, ease:Power2.easeOut, onComplete: showLogo})
                            .setTween(logofade)
                            .addTo(controller);
        } 
    } else {
        TweenMax.to(" #backToTop, .header-description ", 0, {opacity:1});
    }









    // Stop/Start Scroll

    function disableMenuScrolling() {

        var selScrollable = '#sidebar';
        // Uses document because document will be topmost level in bubbling
        $(document).on('touchmove',function(e){
          e.preventDefault();
        });
        // Uses body because jQuery on events are called off of the element they are
        // added to, so bubbling would not work if we used document instead.
        $('body').on('touchstart', selScrollable, function(e) {
          if (e.currentTarget.scrollTop === 0) {
            e.currentTarget.scrollTop = 1;
          } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
            e.currentTarget.scrollTop -= 1;
          }
        });
        $('body').on('touchmove', selScrollable, function(e) {
            // Only block default if internal div contents are large enough to scroll
            // Warning: scrollHeight support is not universal. (http://stackoverflow.com/a/15033226/40352)
            if($(this)[0].scrollHeight > $(this).innerHeight()) {
                e.stopPropagation();
            }
        });

    }

    function enableMenuScrolling() {
        $(document).off('touchmove');
        $('body').off('touchmove touchstart', '#sidebar')
    }




    /* Sidebar */

    var headerHeight = $('#header').height();
    $('.sidebar-toggle').css('line-height', headerHeight + 'px');

    (function( window ){
        
        'use strict';

        var body = document.body,
            html = document.documentElement,
            pageOverlay = document.querySelector( "#page-overlay" ),
            toggleMenu = document.querySelector( ".sidebar-toggle" ),
            headerMenu = document.querySelector( ".header" ),
            mobileMenu = document.querySelector( "#sidebar" ),
            activeNav
        ;

        /* push menu left */ 
        $(document).on('click', '.sidebar-toggle, .close-sidebar', function() {
            openSidebar();
        });



        function openSidebar() {
            if ( $('.sidebar-toggle').hasClass( "open" ) ) {
                closeSidebar();
                return;
            }

            // TweenLite.to('#sidebar .inner', 0, { display: "none", });
            // TweenLite.to('#sidebar .inner', 0, { display: "block", });
            $('body').addClass('sidebar-open');
            $('.sidebar-toggle').addClass('open');
            disableMenuScrolling();

            $('body').css('overflow','hidden');
            // $('#sidebar').css('overflow-y','scroll');

        }

        function closeSidebar () {
            enableMenuScrolling();
            $('.sidebar-toggle').removeClass('open');
            $('body').removeClass('sidebar-open');
            // TweenLite.to('#sidebar .inner', 0, { display: "none", });
            $('body').css('overflow','');
            // setTimeout(function(){
            //     $('#sidebar').css('overflow-y','');
            // }, 700);
        }

        $('body').click(function(e) {
            if (!$(e.target).closest('#sidebar .inner, .sidebar-toggle').length && $('.sidebar-toggle').hasClass( "open" )){
                closeSidebar();
            }
        });

        $(document).keyup(function(e) {
            if ( $('.sidebar-toggle').hasClass( "open" ) ) {
                if (e.keyCode == 27 ) {
                    closeSidebar();
                    return;
                }
            }
        });

        // if(windowwidth > 720){
        //     $(document).on({
        //         mouseenter: function () {
        //             openSidebar();
        //         },
        //         mouseleave: function (e) {
        //             if(!$(e.target).hasClass('#sidebar')) {
        //                 closeSidebar();
        //             }
        //         }
        //     }, ".sidebar-toggle, #sidebar"); //pass the element as an argument to .on
        // } 

        $('#stash-ants').isotope(true).isotope('layout');
        setTimeout(function(){
            $('#stash-ants').isotope(true).isotope('layout');
        }, 3000);
            setTimeout(function(){
            $('#stash-ants').isotope(true).isotope('layout');
        }, 9000);

        // Customize Screen

        if (window.location.pathname.indexOf('customize_preview') > -1) {
            $('.customize-demo').addClass('visible');
            return;
        }

    })( window );
});