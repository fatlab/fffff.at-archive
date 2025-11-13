function f2_tumblr_slideshow( container ) {
  var slides = jQuery( '#' + container + ' div.f2-tumblr-slideshow div.f2-tumblr-post' );
  var now = slides.filter( ':visible' );
  var next = now.next().length ? now.next() : slides.first();

  now.fadeOut( 1000 );
  next.fadeIn( 1000 );
}

function f2_tumblr_slideshow_init( container, speed ) {

  // Work out the height of the tallest slide
  var max = 0;
  jQuery( '#' + container + ' div.f2-tumblr-slideshow div.f2-tumblr-post' )
    .each( function() { max = Math.max( max, jQuery(this).height() ); });

  // Set the slideshow to this height
  jQuery( '#' + container + ' div.f2-tumblr-slideshow' ).height( max );

  // And make the first item visible
  jQuery( '#' + container + ' div.f2-tumblr-slideshow div.f2-tumblr-post' ).first().show();

  // And then set the timer to do the work
  setInterval( function(){f2_tumblr_slideshow( container )}, speed*1000 );
}

jQuery( function() {
  jQuery( 'div.f2-tumblr-slideshow' ).each( function() {
    f2_tumblr_slideshow_init( jQuery(this).parent().attr('id'), jQuery(this).data('speed'));
  });
});
