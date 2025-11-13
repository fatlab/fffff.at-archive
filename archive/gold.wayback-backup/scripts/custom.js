var _____WB$wombat$assign$function_____=function(name){return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name))||self[name];};if(!self.__WB_pmw){self.__WB_pmw=function(obj){this.__WB_source=obj;return this;}}{
let window = _____WB$wombat$assign$function_____("window");
let self = _____WB$wombat$assign$function_____("self");
let document = _____WB$wombat$assign$function_____("document");
let location = _____WB$wombat$assign$function_____("location");
let top = _____WB$wombat$assign$function_____("top");
let parent = _____WB$wombat$assign$function_____("parent");
let frames = _____WB$wombat$assign$function_____("frames");
let opens = _____WB$wombat$assign$function_____("opens");
/**
 * effe - Custom JS.
 * Copyright (c) 2011 92five.net
 * @version 1.0
 *
 * http://92five.net
 */
 $(document).ready(function(){
							
$('.single_image').hover(
function(){
$(this).stop().fadeTo('slow',0.4);
},
function(){
$(this).stop().fadeTo('slow',1);
});
						
							
							
//This is basic - uses default settings
$("a.single_image").fancybox();
//Using custom settings
$("a#inline").fancybox({
					   'hideOnContentClick': true
					   });
//Apply fancybox to multiple items
$("a.group").fancybox({
		'transitionIn'	:	'elastic',
		'transitionOut'	:	'elastic',
		'speedIn'		:	600, 
		'speedOut'		:	200, 
		'overlayShow'	:	false
		});
 
 //Animated scrolling		   
      $('a[href*=#]').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
        && location.hostname == this.hostname) {
          var $target = $(this.hash);
          $target = $target.length && $target
          || $('[name=' + this.hash.slice(1) +']');
          if ($target.length) {
            var targetOffset = $target.offset().top;
            $('html,body')
            .animate({scrollTop: targetOffset}, 1000);
           return false;
          }
        }
      });
	  $('ul#filter a').click(function() {
		$(this).css('outline','none');
		$('ul#filter .current').removeClass('current');
		$(this).parent().addClass('current');
		
		var filterVal = $(this).text().toLowerCase().replace(' ','-');
				
		if(filterVal == 'all') {
			$('ul#portfolio li.hidden').fadeIn('slow').removeClass('hidden');
		} else {
			$('ul#portfolio li').each(function() {
				if(!$(this).hasClass(filterVal)) {
					$(this).fadeOut('normal').addClass('hidden');
				} else {
					$(this).fadeIn('slow').removeClass('hidden');
				}
			});
		}
		return false;
	});
//some quicksand js
	  	var items = $('#stage li'),
		itemsByTags = {};
// Looping though all the li items:
	items.each(function(i){
		var elem = $(this),
			tags = elem.data('tags').split(',');
// Adding a data-id attribute. Required by the Quicksand plugin:
		elem.attr('data-id',i);
		$.each(tags,function(key,value){
// Removing extra whitespace:
			value = $.trim(value);
			if(!(value in itemsByTags)){
// Create an empty array to hold this item:
				itemsByTags[value] = [];
			}
// Each item is added to one array per tag:
			itemsByTags[value].push(elem);
		});
	});
// Creating the "Everything" option in the menu:
	createList('Everything',items);
// Looping though the arrays in itemsByTags:
	$.each(itemsByTags,function(k,v){
		createList(k,v);
	});
	$('#filter a').live('click',function(e){
		var link = $(this);
		
		link.addClass('active').siblings().removeClass('active');
// Using the Quicksand plugin to animate the li items.
// It uses data('list') defined by our createList function:
$('#stage').quicksand(link.data('list').find('li'));
		e.preventDefault();
	});
$('#filter a:first').click();
function createList(text,items){
// This is a helper function that takes the
// text of a menu button and array of li items
// Creating an empty unordered list:
		var ul = $('<ul>',{'class':'hidden'});
		$.each(items,function(){
// Creating a copy of each li item
// and adding it to the list:
			$(this).clone().appendTo(ul);
		});
		ul.appendTo('#container');
// Creating a menu item. The unordered list is added
// as a data parameter (available via .data('list'):
		var a = $('<a>',{
			html: text,
			href:'#',
			data: {list:ul}
		}).appendTo('#filter');
	}
 });
}
/*
     FILE ARCHIVED ON 14:37:43 Jul 05, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:49:05 Nov 12, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.548
  exclusion.robots: 0.044
  exclusion.robots.policy: 0.032
  esindex: 0.012
  cdx.remote: 8.535
  LoadShardBlock: 50.404 (3)
  PetaboxLoader3.datanode: 102.935 (5)
  load_resource: 191.218 (2)
  PetaboxLoader3.resolve: 115.215 (2)
*/