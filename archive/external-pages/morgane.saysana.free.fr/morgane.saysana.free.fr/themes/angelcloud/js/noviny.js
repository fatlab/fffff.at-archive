/* BEGIN LICENSE BLOCK ----------------------------------
*
* This file is part of Noviny, a Dotclear 2 theme.
*
* Copyright (c) 2003-2008 Olivier Meunier and contributors
* Licensed under the GPL version 2.0 license.
* See LICENSE file or
* http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
*
* -- END LICENSE BLOCK --------------------------------- */

// Tags list display
$(function() {
	var tags = $('#extra .tags li:has(a[class^=tag])').filter(function() {
		var c = $('a',this).attr('class').substr(3);
		return c <= 10;	// We display only tags with % > 10
	}).hide();
	
	if (tags.length > 0) {
		var all_tags = $('<a href="#">' + noviny.all_tags + '</a>').click(function() {
			$('#extra .tags li:hidden').show().css('opacity',0.2).fadeTo(1600,1);
			$('#extra .tags p').remove();
			return false;
		});
		$('#extra .tags').append($('<p></p>').append(all_tags));
	}
});

// Search suggest
$(function() {
	$('#q').searchSuggest({
		source: noviny.ajaxsearch,
		forcePosition: {
			position: 'relative'		}
	});
});


// Modified search suggest code from Peter Vulgaris (www.vulgarisoip.com)
(function($) {
	$.searchSuggest = function(input,params) {
		var defaults = {
			source: null,
			delay: 150,
			minchars: 2,
			selectClass: 'suggest-select',
			maxCacheSize: 65536,
			forcePosition: false
		};
		params = $.extend(defaults,params);
		
		if (params.source == null) {
			throw 'No source given';
		}
		
		input = $(input).attr("autocomplete", "off");
		var results = $(document.createElement('div'));
		
		var timeout = false;		// hold timeout ID for suggestion results to appear	
		var prevLength = 0;			// last recorded length of $input.val()
		var cache = [];			// cache MRU list
		var cacheSize = 0;			// size of cache in chars (bytes?)
		
		results.attr('id','search-suggest').appendTo(input.parent()).hide();
		
		resetPosition();
		$(window).load(resetPosition).resize(resetPosition);
		
		input.blur(function() {
			setTimeout(hideList,100);
			function hideList() {
				results.hide('fast');
			};
		});
		
		try {
			results.bgIframe();
		} catch (e) {}
		
		if ($.browser.mozilla) {
			input.keypress(processKey); // onkeypress repeats arrow keys in Mozilla/Opera
		} else {
			input.keydown(processKey);  // onkeydown repeats arrow keys in IE/Safari
		}
		
		function hideList() {
			results.hide('fast');
		};
		
		function resetPosition() {
			var offset = input.offset();
			if (!params.forcePosition) {
				results.attr({
					top: (offset.top + input.height()),
					left: offset.left - input.width()
				});
			} else {
				results.css(params.forcePosition);
			}
		};
		
		function processKey(e) {
			// handling up/down/escape requires results to be visible
			// handling enter requires that AND a result to be selected
			if ((/(27|38|40)$/.test(e.keyCode) && results.is(':visible')) || (e.keyCode == 13 && getCurrentResult()))
			{
				if (e.preventDefault)
					e.preventDefault();
				if (e.stopPropagation)
					e.stopPropagation();
				
				e.cancelBubble = true;
				e.returnValue = false;
				
				switch(e.keyCode) {
					case 38: // up
						prevResult();
						break;
					case 40: // down
						nextResult();
						break;
					case 27: // escape
						results.hide('fast');
						break;
					case 13: // return
						document.location.href = $('a',getCurrentResult()).attr('href');
						break;
				}
			}
			else if (input.val().length != prevLength)
			{
				if (timeout)
					clearTimeout(timeout);
				timeout = setTimeout(suggest, params.delay);
				prevLength = input.val().length;
			}
		};
		
		function suggest() {
			var q = $.trim(input.val());
			if (q.length >= params.minchars) {
				var cached = checkCache(q);
				
				if (cached) {
					displayItems(cached['data']);
				} else {
					$.get(params.source + q,function(data) {
						displayItems(data);
						addToCache(q,data,data.length);
					});
				}
			} else {
				results.hide('fast');
			}
		};
		
		function checkCache(q) {
			for (var i = 0; i < cache.length; i++) {
				if (cache[i]['q'] == q) {
					cache.unshift(cache.splice(i, 1)[0]);
					return cache[0];
				}
			}
			return false;
		};
		
		function addToCache(q,data,size) {
			while (cache.length && (cacheSize + size > params.maxCacheSize)) {
				var cached = cache.pop();
				cacheSize -= cached['size'];
			}
			
			cache.push({
				q: q,
				size: size,
				data: data
			});
			cacheSize += size;
		};
		
		function displayItems(data) {
			if (data.length == 0) {
				results.hide('fast');
				return;
			}
			
			results.empty().append(data).show('fast');
			
			$('li',results).mouseover(function() {
				$('li',results).removeClass(params.selectClass);
				$(this).addClass(params.selectClass);
			});
		};
		
		function getCurrentResult() {
			if (!results.is(':visible')) {
				return false;
			}
			
			var res = $('li.'+params.selectClass,results);
			if (res.length == 0) {
				return false;
			}
			return res;
		};
		
		function nextResult() {
			var res = getCurrentResult();
			if (res) {
				res.removeClass(params.selectClass).next().addClass(params.selectClass);
			} else {
				$('li:first-child',results).addClass(params.selectClass);
			}
		};
		
		function prevResult() {
			var res = getCurrentResult();
			if (res) {
				res.removeClass(params.selectClass).prev().addClass(params.selectClass);
			} else {
				$('li:last-child',results).addClass(params.selectClass);
			}
		};
	};
	
	
	$.fn.searchSuggest = function(params) {
		this.each(function() {
			new $.searchSuggest(this,params);
		});
		return this;
	};
})(jQuery);