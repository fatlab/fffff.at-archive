"use strict"; // DEV ONLY
jQuery(function($) {
	setStickyActive(); // set initial state in case page is not a top

	$(window).on('scroll', setStickyActive );

	function setStickyActive() {
		if (window.pageYOffset >= 40) {
			$('body.sticky-nav').addClass('sticky-nav-active');
		} else {
			$('body.sticky-nav').removeClass('sticky-nav-active');
		}
	}
});
