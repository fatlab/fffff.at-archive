
// select artwork main image

// switch artwork image

jQuery(document).ready( function() {	
	jQuery('div.artworkThumbs img').hover(
		function() {
			var url=jQuery(this).attr('src');
			jQuery('div.artworkMain img').attr('src',url);
		},
		function() {
		}
	  );
});