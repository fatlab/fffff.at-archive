console.log('site.js loaded');

function init(){

    $('.nav-icon').click(function(){
        $('.drop-down-menu').toggleClass('active');
        $('.overlay').toggleClass('active');
    });

    $('.overlay').click(function(){
        $('.drop-down-menu').removeClass('active');
        $('.overlay').removeClass('active');
        $('.video-player-overlay').removeClass('active');
    });

    $('.play').click(function(){
        $('.video-player-overlay').toggleClass('active');
        $('.overlay').toggleClass('active');
        
    });


    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        // direction: 'vertical',
        loop: true,
        spaceBetween:50,
        centeredSlides: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        // scrollbar: {
        //     el: '.swiper-scrollbar',
        // },
    })

}

init();
