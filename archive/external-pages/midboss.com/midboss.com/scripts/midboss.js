/* Swiper INIT */
var swiper = new Swiper('.swiper-container', {
  spaceBetween: 0,
  centeredSlides: true,
  autoplay: {
    delay: 7000,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});


$(window).bind("load", function() { 

  function checkIfMobile(width) {
    if (width.matches) { // If media query matches
      var navbarList = document.getElementById("navbar-list").classList.remove("ml-auto");
    } else {
      var navbarList = document.getElementById("navbar-list").classList.add("ml-auto");
    }
  }
  
  var width = window.matchMedia("(max-width: 575px)");
  checkIfMobile(width); // Call listener function at run time
  width.addListener(checkIfMobile); // Attach listener function on state changes
  
});
