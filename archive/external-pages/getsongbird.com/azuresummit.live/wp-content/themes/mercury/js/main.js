$(document).ready(function(){

  // main slider
    $("#slider-main-page").owlCarousel({
        loop:true,
        smartSpeed:1000,
     margin:35,
    nav:true,
    navText: [
        '<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.79705 13L0.433416 6.63636L6.79705 0.272727L7.8908 1.35227L3.38796 5.85511H15.0499V7.41761H3.38796L7.8908 11.9062L6.79705 13Z" fill="white"/></svg>',
        '<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20295 13L15.5666 6.63636L9.20295 0.272727L8.1092 1.35227L12.612 5.85511H0.950106V7.41761H12.612L8.1092 11.9062L9.20295 13Z" fill="white"/></svg>'
      ],
     dots: false,
    responsive:{
      0: {
        items:1,
        margin:10
      },
      1001: {
        items:2
      },
      1300:{
          items: 3
      },
      1445: {
        items: 3
      }   
  }
    });

    // 1win slider

    $("#slider-1-win").owlCarousel({
      loop:true,
      smartSpeed:1000,
  margin:35,
  nav:true,
  navText: [
      '<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.79705 13L0.433416 6.63636L6.79705 0.272727L7.8908 1.35227L3.38796 5.85511H15.0499V7.41761H3.38796L7.8908 11.9062L6.79705 13Z" fill="white"/></svg>',
      '<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20295 13L15.5666 6.63636L9.20295 0.272727L8.1092 1.35227L12.612 5.85511H0.950106V7.41761H12.612L8.1092 11.9062L9.20295 13Z" fill="white"/></svg>'
    ],
   dots: false,
  responsive:{
    0: {
      items:1,
      margin:10
    },
    1001: {
      items:2
    },
    1300:{
        items: 3
    },
    1445: {
      items: 3
    }   
}
  });

  // pinup slider

  $("#slider-pin-up").owlCarousel({
    loop:true,
    smartSpeed:1000,
margin:35,
nav:true,
navText: [
    '<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.79705 13L0.433416 6.63636L6.79705 0.272727L7.8908 1.35227L3.38796 5.85511H15.0499V7.41761H3.38796L7.8908 11.9062L6.79705 13Z" fill="white"/></svg>',
    '<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20295 13L15.5666 6.63636L9.20295 0.272727L8.1092 1.35227L12.612 5.85511H0.950106V7.41761H12.612L8.1092 11.9062L9.20295 13Z" fill="white"/></svg>'
  ],
 dots: false,
responsive:{
  0: {
    items:1,
    margin:10
  },
  1001: {
    items:2
  },
  1300:{
      items: 3
  },
  1445: {
    items: 3
  }   
}
});

// mmostbet slider
$("#slider-mostbet").owlCarousel({
  loop:true,
  smartSpeed:1000,
margin:35,
nav:true,
navText: [
  '<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.79705 13L0.433416 6.63636L6.79705 0.272727L7.8908 1.35227L3.38796 5.85511H15.0499V7.41761H3.38796L7.8908 11.9062L6.79705 13Z" fill="white"/></svg>',
  '<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20295 13L15.5666 6.63636L9.20295 0.272727L8.1092 1.35227L12.612 5.85511H0.950106V7.41761H12.612L8.1092 11.9062L9.20295 13Z" fill="white"/></svg>'
],
dots: false,
responsive:{
0: {
  items:1,
  margin:10
},
1001: {
  items:2
},
1300:{
    items: 3
},
1445: {
  items: 3
}   
}
});


// comments slider
$("#slider-comments").owlCarousel({
  loop:true,
  smartSpeed:1000,
margin:35,
nav:true,
navText: [
  '<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.79705 13L0.433416 6.63636L6.79705 0.272727L7.8908 1.35227L3.38796 5.85511H15.0499V7.41761H3.38796L7.8908 11.9062L6.79705 13Z" fill="white"/></svg>',
  '<svg width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.20295 13L15.5666 6.63636L9.20295 0.272727L8.1092 1.35227L12.612 5.85511H0.950106V7.41761H12.612L8.1092 11.9062L9.20295 13Z" fill="white"/></svg>'
],
dots: false,
responsive:{
0: {
  items:1,
  margin:10
},
1001: {
  items:2
}
  
}
});

  
  });


  