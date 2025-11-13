$(function () { // all strict code goes in this function

    "use strict";

    $(document).ready(function () {
        // Sticky navbar 
        // Custom function which toggles between sticky class (is-sticky)
        var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
            var stickyHeight = sticky.outerHeight();
            var stickyTop = stickyWrapper.offset().top+200;
            if (scrollElement.scrollTop() >= stickyTop) {
                stickyWrapper.height(stickyHeight);
                sticky.addClass("is-sticky");
            }
            else {
                sticky.removeClass("is-sticky");
                stickyWrapper.height('auto');
            }
        };

        // Find all data-toggle="sticky-onscroll" elements
        $('[data-toggle="sticky-onscroll"]').each(function () {
            var sticky = $(this);
            var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
            sticky.before(stickyWrapper);
            sticky.addClass('sticky');

            // Scroll & resize events
            $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
                stickyToggle(sticky, stickyWrapper, $(this));
            });

            // On page load
            stickyToggle(sticky, stickyWrapper, $(window));
        });



        $('.owl-carousel').owlCarousel({
            items: 4,
            loop: true,
            margin: 10,
            autoplay: true,
            autoplayTimeout: 1000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1,
                    nav: false
                },
                400: {
                    items: 2,
                    nav: false
                },
                600: {
                    items: 3,
                    nav: false
                },
                1000: {
                    items: 5,
                    nav: false,
                    loop: false
                },
                1600: {
                    items: 8,
                    nav: false,
                    loop: false
                }
            }
        });


        $('.counter').counterUp({
            delay: 10,
            time: 4000
        });

        initParalaxBg();

        //script for portfolio details modal tigger
        $(".pro-Modal").on("click", function () {
            $("#portfolioDetModal").modal('show');
        });
        //end script for portfolio details modal tigger


        //script for page scroll to top and bottom
        $('.page-scroll ').on('click', function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top-30
                    }, 1000);
                    return false;
                }
            }
        });
        //end script for page scroll to top and bottom

        // script for category filter (portfolio page)
        $(function () {
            $('#portfolio-cat').mixItUp();
        });
        //end  script for category filter

        //for form validation
//        $.validator.setDefaults({
//            //Submit alert
//            submitHandler: function () {
//                alert("Form Submitted! Thank You :)");
//            }
//        });
        // Get a Quote Form 
        $("#getAQuoteForm").validate({
            rules: {
                GetAQutName: "required",
                GetAQutEmail: {
                    required: true,
                    email: true
                },
                GetAQutUrl: {
                    required: true,
                    url: true
                },
                GetAQutMsg: {
                    required: true
                }
            }
        });
        // Get In Touch Form 
        $("#getInTouch").validate({
            rules: {
                GetinTouchName: "required",
                GetinTouchEmail: {
                    required: true,
                    email: true
                }
            }
        });
        // Get audit Form 
        $("#getAuditForm").validate({
            rules: {
                GetAuditEmail: {
                    required: true,
                    email: true
                },
                GetAuditUrl: {
                    required: true,
                    url: true
                }
            }
        });
        // Contact Us Form 
        $("#contactUsForm").validate({
            rules: {
                contactUsName: "required",
                contactUsMsg: "required",
                contactUsPhone: {
                    required: true,
                    number: true
                },
                contactUsEmail: {
                    required: true,
                    email: true
                }
            }
        }
        );


//    for wow animation
        new WOW().init();
    });

});

//Preloader (not Strict code)
$(window).load(function () {
    preloaderFadeOutTime = 500;
    function hidePreloader() {
        var preloader = $('.loader-wrapper');
        preloader.fadeOut(preloaderFadeOutTime);
    }
    hidePreloader();
});

