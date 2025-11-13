$(document).ready(function(){
    $(".coupon-example-wrapper").on('click', function(){
        $(".coupon-example-popup").fadeIn();
        //shows shadow around popup
        $("div.multiurl_shadow").css("height", $(document).height()).show();
        //shows popup and positions it in the middle of the screen
        $('.coupon-example-popup').css('top', ($(document).scrollTop()) + 10).show();
    });

    $(document).on('click', '.close_design_popup, div.multiurl_shadow', function (e) {
        e.preventDefault();
        $(".coupon-example-popup, div.multiurl_shadow").fadeOut();
    });
});