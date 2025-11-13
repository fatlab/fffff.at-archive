jQuery(function($) {

    var $body = $('body');
    var $navContainer = $('header nav');
    var $nav = $('header nav > div');
    var $navToggle = $('#nav-toggle');
    var $window = $(window);
    var $emailInput = $('.signup input[type=email]')

    var navOn = false;

    $('.apps').masonry({
        columnWidth: 'article.app',
        itemSelector: 'article.app',
        gutter: 40,
        transitionDuration: 0,
        stamp: 'section.apps > h1'
    });

    // Toggle nav
    $navToggle.on('touchend click', function(e) {
        e.preventDefault();
        $navContainer.add($navToggle).toggleClass('on');
    });

    /**
     * Generic function for stopping an event. Useful in event handlers.
     */
    function preventDefault(e) {
        if(e) e.preventDefault();
    }

    /**
     * Email form
     */
    $emailInput.on('focus', function(e) {
        if($(this).val() == $(this).data('label')) {
            $(this)
                .val('')
                .addClass('on');
        }
    }).on('blur', function(e) {
        if($(this).val() == '') {
            $(this)
                .val($(this).data('label'))
                .removeClass('on');
        }
    });

    $('.signup form').on('submit', function(e) {
        if($emailInput.val() == $emailInput.data('label')) {
            e.preventDefault();
        }
    });

    $emailInput
        .val($emailInput.data('label'))
        .addClass('inactive')


    $window.on('resize', resize);

    function resize () {
        if($window.width() < 600) {
            $navContainer.add($navToggle).removeClass('on');
        } else {
            $navContainer.add($navToggle).addClass('on');
        }
    }

    resize();

});
