jQuery(document).ready(function(){ 
 
 
	 // Smooth scroll up
	 
        jQuery(window).scroll(function(){
            if (jQuery(this).scrollTop() > 100) {
                jQuery('.scrollup').fadeIn();
            } else {
                jQuery('.scrollup').fadeOut();
            }
        }); 
 
        jQuery('.scrollup').click(function(){
            jQuery("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
		
		
	 // Dropdown menu in small screen
	 
		jQuery("<select />").appendTo("#primarynav,#primarynav-footer"); 

		jQuery("<option />",{ 
			"selected": "selected", 
			"value"   : "", 
			"text"    : "Site Menu" // default <option> to display in dropdown 
		}).appendTo("#primarynav select,#primarynav-footer select"); 

		jQuery("#primarynav a").each(function() { 
			var el =  jQuery(this); 
			jQuery("<option />", { 
				"value"   : el.attr("href"), 
				"text"    : el.text() 
			}).appendTo("#primarynav select,#primarynav-footer select"); 
		});

		jQuery("#primarynav select,#primarynav-footer select").change(function() { 
			window.location = jQuery(this).find("option:selected").val(); 
		}); 		
 
});