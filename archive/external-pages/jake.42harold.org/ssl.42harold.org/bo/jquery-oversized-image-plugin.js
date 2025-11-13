(function($) {
  $.fn.oversizedImage = function(options) {
    // the default settings
    var settings = {
     // the elements to find within the container (can be any valid find() selector)
      selector: 'img.oversized',
    }

    // update the settings, if the options aren't set, use an empty object
    $.extend(settings, options || {});

    // get all the images in the current element
    var images = $(this).find(settings.selector);

    // if there are some images
    if (images.length) {
      // loop through each
      $.each(images, function() {
                
        $(this).css('max-width', 'none');
        var imageWidth = ($(this).innerWidth());
        
        // get the parent object
        var parent = $(this).closest('p').get(0);
        var parentWidth = $(parent).innerWidth();
        var baseSize = $(parent).css('font-size').replace('px', '');
        
        var leftOffset = ((imageWidth - parentWidth)/2)/baseSize;
        
        $(this).css('margin-left', '-' + leftOffset + 'em');
      });
    }
  }
})(jQuery);