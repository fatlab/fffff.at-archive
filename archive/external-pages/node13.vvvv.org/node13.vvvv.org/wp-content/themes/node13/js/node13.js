$(function(){
  
  var social_menu_hide_delay = 1000;
  $('#social-menu').delay(social_menu_hide_delay).animate({
    top: '-140px'
  }, 500);
  
  $('#social-menu .toggle').toggle(function(){
    $('#social-menu').animate({
      top: '0px'
    });
  }, function(){
    $('#social-menu').animate({
      top: '-140px'
    });
  });
  
  if ($.browser.webkit || $.browser.mozilla) {
    // window.console.log = function() {};
      VVVV.init('/wp-content/themes/node13/js/vvvv_js', 'full', function() {
        var patch = new VVVV.Core.Patch('/wp-content/themes/node13/js/logo.v4p', function() {
          $('#logo img').hide();
          $('#logo').css({
            'margin-top': '0px',
            'margin-left': '-100px',
            'margin-right': '175px'
          });
          var mainloop = new VVVV.Core.MainLoop(patch);
          mainloop.start();
        });
      });
  }
  
});