// new masonry
const grid = document.querySelector("#content-inner");
if (grid !== null) {
  const msnry = new Masonry(grid, {
    // options
    itemSelector: "none",
    columnWidth: 1,
    // columnWidth: '.grid-sizer'
    // percentPosition: true,
    // gutter: '.grid__gutter-sizer',
    // tagger: 30,
    // fast transitions
    // transitionDuration: '0.2s',
    visibleStyle: { transform: "translateY(0)", opacity: 1 },
    hiddenStyle: { transform: "translateY(100px)", opacity: 0 },
  });

  // initial items reveal
  imagesLoaded(grid, function () {
    grid.classList.remove("are-images-unloaded");
    msnry.options.itemSelector = "article";
    let items = grid.querySelectorAll("article");
    msnry.appended(items);
    // msnry.layout()
    document.getElementsByClassName("page-footer")[0].style.display = "block";
  });

  const infScroll = new InfiniteScroll(grid, {
    path: ".nav-previous a",
    append: "article",
    outlayer: msnry,
    // button: '.view-more-button',
    // scrollThreshold: false,
    history: false,
  });

  // Start Borlabs Cookie Plugin to work with infinite scroll
  // Infinite Scroll Event listener
  infScroll.on("append", function (_event, _response, _path, _items) {
    //console.log( 'Loaded: ' + path );
    // If plugin is activated
    if (typeof window.BorlabsCookie === "object") {
      // If consent for vimeo is given by the user
      if (window.BorlabsCookie.checkCookieConsent("vimeo")) {
        //Unblock content
        window.BorlabsCookie.unblockContentId("vimeo");
      }
    }
    //rerun splide
    if (document.getElementById("image-carousel") !== null) {
      const splides = document.querySelectorAll(".splide");
      // 1. query slider elements: are there any splide elements?
      if (splides.length) {
        // 2. process all instances
        for (const splideElement of splides) {
          //3.1 if no options are defined by 'data-splide' attribute: take these default options
          const splideDefaultOptions = {
            type: "fade",
            rewind: true,
            //heightRatio: 1,
            //height: '20rem',
            autoplay: true,
            interval: 2000,
            pauseOnHover: true,
            arrows: false,
            pagination: false,
          };
          /**
           * 3.2 if options are defined by 'data-splide' attribute: default options will we overridden
           * see documentation: https://splidejs.com/guides/options/#by-data-attribute
           **/
          const splide = new Splide(splideElement, splideDefaultOptions);
          // 3. mount/initialize this slider
          splide.mount();
        }
      }
    }
  });
}

document.addEventListener("click", () => {
  if (!event.target.closest(".toggleLanguage")) return;
  const togglede = document.getElementsByClassName("de")[0];
  const toggleen = document.getElementsByClassName("en")[0];
  togglede.classList.toggle("hide");
  toggleen.classList.toggle("hide");
});

// (function($) {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     console.log( 'Clicked Hash');
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') || location.hostname == this.hostname) {
//       var target = $(this.hash),
//       headerHeight = $("#header-inner").height() + 40; // Get fixed header height
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       console.log( 'if true');
//       if (target.length) {
//         $('html,body').animate({
//           scrollTop: target.offset().top - headerHeight
//         }, 500);
//         return false;
//       }
//     }
//   });
// })(jQuery);

// Navigation slider
document.addEventListener("click", (e) => {
  if (!e.target.closest(".slideinabout")) return;
  if (document.getElementById("slideinNav").classList.contains("visible")) {
    document.getElementById("slideinNavHash").classList.remove("visible");
    document.getElementById("slideinSearch").classList.remove("visible");
    document.getElementById("slideinNav").classList.remove("visible");
  } else {
    document.getElementById("slideinNav").classList.toggle("visible");
    document.getElementById("slideinNavHash").classList.remove("visible");
    document.getElementById("slideinSearch").classList.remove("visible");
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("#ht-button")) return;
  if (document.getElementById("slideinNavHash").classList.contains("visible")) {
    document.getElementById("slideinNav").classList.remove("visible");
    document.getElementById("slideinSearch").classList.remove("visible");
    document.getElementById("slideinNavHash").classList.remove("visible");
  } else {
    document.getElementById("slideinNavHash").classList.toggle("visible");
    document.getElementById("slideinNav").classList.remove("visible");
    document.getElementById("slideinSearch").classList.remove("visible");
  }
});

document.addEventListener("click", (e) => {
  if (!e.target.closest("#search-button")) return;
  if (document.getElementById("slideinSearch").classList.contains("visible")) {
    document.getElementById("slideinNav").classList.remove("visible");
    document.getElementById("slideinNavHash").classList.remove("visible");
    document.getElementById("slideinSearch").classList.remove("visible");
  } else {
    document.getElementById("slideinSearch").classList.toggle("visible");
    document.getElementById("slideinNav").classList.remove("visible");
    document.getElementById("slideinNavHash").classList.remove("visible");
  }
});

document.addEventListener(
  "DOMContentLoaded",
  function () {
    if (document.getElementById("image-carousel") !== null) {
      var splides = document.querySelectorAll(".splide");
      // 1. query slider elements: are there any splide elements?
      if (splides.length) {
        // 2. process all instances
        for (const splideElement of splides) {
          //3.1 if no options are defined by 'data-splide' attribute: take these default options
          var splideDefaultOptions = {
            type: "fade",
            rewind: true,
            //heightRatio: 1,
            //height: '20rem',
            autoplay: true,
            interval: 2000,
            pauseOnHover: true,
            arrows: false,
            pagination: false,
          };
          /**
           * 3.2 if options are defined by 'data-splide' attribute: default options will we overridden
           * see documentation: https://splidejs.com/guides/options/#by-data-attribute
           **/
          var splide = new Splide(splideElement, splideDefaultOptions);
          // 3. mount/initialize this slider
          splide.mount();
        }
      }
    }

    if (document.getElementById("single-carousel") !== null) {
      var singlecarousel = new Splide("#single-carousel", {
        autoWidth: true,
        type: "loop",
        perMove: 1,
        gap: 10,
        classes: {
          arrows: "splide__arrows your-class-arrows",
          arrow: "splide__arrow your-class-arrow",
          prev: "splide__arrow--prev your-class-prev",
          next: "splide__arrow--next your-class-next",
        },
        pagination: false,
      });
      singlecarousel.mount();
    }
  },
  false
);

// window.addEventListener('load', displayFooter);
// function displayFooter() {
//   document.getElementsByClassName("page-footer")[0].style.display = "block";
//   }
