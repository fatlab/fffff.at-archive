"use strict"; // DEV ONLY
jQuery(window).load(function() {

	function scrollToHash() {
		var hash = location.hash.replace('#','');  // not all browsers include the hash, so remove to have a good baseline
		if (hash != '') {
			if (jQuery('#' + hash).length > 0 && jQuery('.sticky-nav a#' + hash).hasClass('link-anchor') === false) {
				var hashOffset = jQuery('#' + hash).offset().top;
				hashOffset = hashOffset - 82;  // 82px is height of sticky-nav
				jQuery('html, body').animate({scrollTop: hashOffset}, 1000);
			}
		}
	}

	jQuery(window).on('hashchange', function() {
		scrollToHash();
	});

	scrollToHash(); // called when the page is first loaded
});
