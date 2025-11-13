jQuery(function($){
// ==================== FIELD REVEAL SUBSCRIBE MODULE ========================

	// Hide second field until first is complete
	$('.field-reveal .et_pb_subscribe input:eq(1)').hide(); 
	$('.field-reveal .et_pb_subscribe input:eq(0)').on('keyup', function() {
        console.log($(this).val().length);
        if($(this).val().length <= 2) {
            $('.field-reveal .et_pb_subscribe input:eq(1)').hide();      
        }else{
            $('.field-reveal .et_pb_subscribe input:eq(1)').show();
        }
	});
	// Hide third field until second is complete
	$('.field-reveal .et_pb_subscribe input:eq(2)').hide(); 
	$('.field-reveal .et_pb_subscribe input:eq(1)').on('keyup', function() {
        console.log($(this).val().length);
        if($(this).val().length <= 2) {
            $('.field-reveal .et_pb_subscribe input:eq(2)').hide();      
        }else{
            $('.field-reveal .et_pb_subscribe input:eq(2)').show();
        }
	});
	// Hide Button until third is complete
	$('.field-reveal .et_pb_newsletter_button').hide(); 
	$('.field-reveal .et_pb_subscribe input:eq(2)').on('keyup', function() {
        console.log($(this).val().length);
        if($(this).val().length <= 2) {
            $('.field-reveal .et_pb_newsletter_button').hide();      
        }else{
            $('.field-reveal .et_pb_newsletter_button').show();
        }
	});
// ==================== FIELD REVEAL FORM MODULE ========================

    // Hide second field until first is complete
    $('.form-reveal input:eq(1)').hide(); 
    $('.form-reveal input:eq(0)').on('keyup', function() {
        console.log($(this).val().length);
        if($(this).val().length <= 2) {
            $('.form-reveal input:eq(1)').hide();      
        }else{
            $('.form-reveal input:eq(1)').show();
        }
    });
    // Hide third field until second is complete
    $('.form-reveal textarea').hide(); 
    $('.form-reveal input:eq(1)').on('keyup', function() {
        console.log($(this).val().length);
        if($(this).val().length <= 2) {
            $('.form-reveal textarea').hide();      
        }else{
            $('.form-reveal textarea').show();
        }
    });
    // Hide fourth field until third is complete
    $('.form-reveal.et_contact_bottom_container').hide(); 
    $('.form-reveal textarea').on('keyup', function() {
        console.log($(this).val().length);
        if($(this).val().length <= 2) {
            $('.form-reveal .et_contact_bottom_container').hide();      
        }else{
            $('.form-reveal .et_contact_bottom_container').show();
        }
    });

// =============== Collapsable Submenus ====================================

function ds_setup_collapsible_submenus() {
    var $menu = $('.ds-sub-collapse #mobile_menu'),
        top_level_link = '.ds-sub-collapse #mobile_menu .menu-item-has-children > a';
            
    $menu.find('a').each(function() {
        $(this).off('click');
             
        if ( $(this).is(top_level_link) ) {
            $(this).attr('href', '#');
        }
             
        if ( ! $(this).siblings('.sub-menu').length ) {
            $(this).on('click', function(event) {
                $(this).parents('.mobile_nav').trigger('click');
            });
        } else {
            $(this).on('click', function(event) {
                event.preventDefault();
                $(this).parent().toggleClass('visible');
            });
        }
    });
}
     
    $(window).load(function() {
        setTimeout(function() {
            ds_setup_collapsible_submenus();
        }, 700);
    });

// ============= Featured Image Before Title ===============================

$(".single-post .et_post_meta_wrapper:first-child img").prependTo(".single-post .et_post_meta_wrapper:first-child");

// =========================================================================

});