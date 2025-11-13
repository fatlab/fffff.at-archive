jQuery(function($){
	$(document).ready(function(){
		
		$("ul.sf-menu").superfish({ 
			autoArrows: true,
			delay: 400,
		});
		
		$('a[href=#toplink]').click(function(){
			$('html, body').animate({scrollTop:0}, 200);
			return false;
		});
		
		$(".prettyphoto-link").prettyPhoto({
			theme: 'pp_default',
			animation_speed:'normal',
			allow_resize: true,
			keyboard_shortcuts: true,
			show_title: false,
			social_tools: false,
			autoplay_slideshow: false
		});
		
		$('#commentform').submit(function(e) {
			var $urlField = $(this).children('#url');
			if($urlField.val() == 'Website') {
				$urlField.val('')
			}
		});
	
			
		$("a[rel^='prettyPhoto']").prettyPhoto({
			theme: 'pp_default',
			animation_speed:'normal',
			allow_resize: true,
			keyboard_shortcuts: true,
			show_title: false,
			slideshow:3000,
			social_tools: false,
			autoplay_slideshow: false,
			overlay_gallery: false
		});
	
	});
});


jQuery(function($){
	$(window).load(function() {
		$('.flexslider').flexslider({
			animation: "fade",
			slideshow: true,
			slideshowSpeed: 6000,
			animationDuration: 600,
			smoothHeight: true,
			directionNav: true,
			controlNav: false,
			keyboardNav: true,
			touchSwipe: true,
			prevText: '<span class="awesome-icon-chevron-left"></span>',
			nextText: '<span class="awesome-icon-chevron-right"></span>',
			randomize: false,
			animationLoop: true,
			pauseOnAction: true,
			pauseOnHover: false,
		});
	
	});
});