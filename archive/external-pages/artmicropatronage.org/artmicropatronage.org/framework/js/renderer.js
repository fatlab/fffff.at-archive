var Renderer = (function (){
	var stage = {};
	var current_piece = {};
	var paypal_div;
	var pledgebar_height = $('#pledgebar').height();
	var _overlay_locked = false;
	
	function _lock_overlay(){
		_overlay_locked = true;
		$('#mainRibbon a.close').hide();
	}
	
	function _unlock_overlay(){
		_overlay_locked = false;
		$('#mainRibbon a.close').show();		
	}
	
	
	function _overlay_out(callback){
		if($('#overlay_holder').hasClass('vis') && $('#overlay').html() != ''){
			$('#overlay').fadeOut(callback);
		} else {
			if(typeof callback == 'function') callback.call();
		}
	}
	
	function _overlay_holder_in(callback){
		if(!$('#overlay_holder').hasClass('vis')){
			$('#overlay_holder').addClass('vis').fadeIn(callback);
			$('html,body').animate({ scrollTop: 0 }, 'fast');
		} else{
			if(typeof callback == 'function') callback.call();
		}
	}
	
	function _overlay_holder_out(callback){
		if(_overlay_locked) return;
		
		function clear_out(){
			$('#overlay').html('');
			$('#title').text('');
			$('#left').html('');
			if(typeof callback == 'function') callback.call();
			
			if($('#overlay_cover').data('old-opacity'))
				$('#overlay_cover').css('opacity', $('#overlay_cover').data('old-opacity')).data('old-opacity', '');
				
			if($('#intro').data('old-height')){
				$('#intro').css('height', $('#intro').data('old-height')).data('old-height', '');
				$('#mainRibbon').css('height', $('#mainRibbon').data('old-height')).data('old-height', '');
			}
		}
		
		if($('#overlay_holder').hasClass('vis')){
			$('#overlay_holder').removeClass('vis').fadeOut(clear_out); 
		} else {
			clear_out();
		}
	}
	
	function _overlay_template(template_id, template_data, callback){
		_overlay_holder_in(function(){
			_overlay_out(function(){
				$('#overlay').hide();
				if(template_data.title) $('#title').text(template_data.title).show();
				else $('#title').hide();
				
				if(template_data.hide_cancel) $('a.cancel').hide();
				else  $('a.cancel').show();
				
				if(template_data.opacity)
					$('#overlay_cover').data('old-opacity', $('#overlay_cover').css('opacity')).css('opacity', template_data.opacity);
				
				if(template_data.ribbon_height){
					$('#intro').data('old-height', $('#intro').css('height')).css('height', template_data.ribbon_height);
					$('#mainRibbon').data('old-height', $('#mainRibbon').css('height')).css('height', template_data.ribbon_height);
				}
				
				if(template_data.left) $('#left').html(template_data.left);
				$('#overlay').html(Mustache.to_html($('#'+template_id).html(), template_data || {})).fadeIn('fast');
				if(typeof callback == 'function') callback.call();
			});
		});
	}
	
	function _overlay_load(url){
		$('#overlay').load(url, _overlay_holder_in);
	}

	function __stage_height(){
		stage.height = $(window).height() - 13 - pledgebar_height;
		return stage.height;
	}
	
	function __stage_width(){
		stage.width = $(window).width();
		return stage.width;
	}
	
	function __optimal_width(){
		__stage_width();
		var opts = {};
		if(arguments.length > 0 && arguments[0]) opts = arguments[0];
		
		var height = opts.height || current_piece.display.height;
		var width = opts.width || current_piece.display.width;
		
		var heightDif = height - stage.height;
		var widthDif = width - stage.width;
		if(heightDif / height > widthDif / width){
			width =  parseInt(width * (1 - heightDif / height));
		} else {
			width = stage.width;
		}
		if(opts.border) width -= opts.border * 2;
		return width;
	}
	
	function __optimal_height(){
		__stage_height();
		var opts = {};
		if(arguments.length > 0 && arguments[0]) opts = arguments[0];

		var height = opts.height || current_piece.display.height;
		var width = opts.width || current_piece.display.width;
		
		var heightDif = height - stage.height;
		var widthDif = width - stage.width;
		
		if(heightDif / height > widthDif / width){
			height = stage.height;
		} else {
			height = height * (1 - widthDif / width);
		} 
		if(opts.border) height -= opts.border * 2;
		return height;
	}
	
	function __optimal_left(){
		__stage_width();
		var left = 0;
		var opts = {};
		if(arguments.length > 0 && arguments[0]) opts = arguments[0];
		
		var diff = stage.width - __optimal_width(opts);
		if(diff){
			left = parseInt(diff / 2);
			if(opts.border && opts.border > left) left -= border;
		} 
		return left;
	}
	
	function __margin_left_for_width(width){
		return parseInt((__stage_width()- width) / 2);
	}
	
	function __to_black(){
		__to_color('#000');
		$('body').addClass('black');
	}
	function __to_white(){
		__to_color('#fff');
	}
	
	function __to_color(color){
		if($('div.exhibition-introduction').hasClass('active')) color = '#fff';
		
		var safe = color.replace('#', '');
		if($('body').hasClass('color-' + safe)) return;

		if(color === '#000' || color === '#000') $('body').addClass('black');
		else $('body').removeClass('black');
		
		$.each($('body').attr('class').split(' '), function(i,elem){
			if(/color-/.test(elem)) $('body').removeClass(elem);
		});

		$('body').addClass('color-' + safe).animate({
			backgroundColor : color
		}, 750);
	}
	
	var render_functions = {
		_last_file : false,
		_handle_global_opts : function(){
			if(current_piece.display.opts && current_piece.display.opts.hide_menu) __hide_menu();
			else __show_menu();
		},
		_handle_color : function(){
			if(current_piece.display.opts && current_piece.display.opts.color) __to_color(current_piece.display.opts.color);
			else __to_white();
		},
		"dh_58" : {
			"resize" : function(){
				/*
				current_piece.display.src = "http://davidhorvitz.com/studentdebt/";
				current_piece.display.width = 1100;
				render_functions.iframe.resize();
				$('#frame').css('margin-left', 170);
				*/
				current_piece.display.src = "http://assets.thepresentgroup.com/artmicropatronage/C.R.E.A.M./horvitz_58cents.jpg";
				current_piece.display.width = 1209;
				current_piece.display.height = 928;
				current_piece.display.opts = {border : 20};
				render_functions.image();
				
				
				if(!$('#btn_58')[0]){
					var butt = $("<button class=\"pledge leftmost\" id=\"btn_58\" data-bind=\"click: function(){ vm.handle_pledge(.58) }, css : {pledged:  piece_pledge() == .58 }\">58&cent;</button>");
					$('button.pledge.leftmost').after(butt).hide();
					ko.applyBindings(vm, butt[0]);
				}

				
			},
			"cleanup" : function(callback){
				$('#btn_58').remove();
				$('button.pledge.leftmost').show();
				callback();
				/*
				render_functions.iframe.cleanup(function(){
					callback();
				});
				*/
			}
		},
		"wrapping-images" : {
			"resize" : function(){
				if(!render_functions._last_file || render_functions._last_file != current_piece.display.images[0]){
					$('#piece').html('').append($('<div>').attr('id', 'wrapping_images_container').css('text-align','left'));
				}
				var how_many_high = parseInt(__stage_height() / current_piece.display.images[0].height) + 1;
				var h = how_many_high * current_piece.display.images[0].height;

				var w=0,how_many_wide=0;
				// start with each image and see how many it will take to get across
				for(var i in current_piece.display.images){
					var z = i;
					var current_how_many_wide = 0;
					var current_w = 0;
					
					while(current_w < __stage_width()){
						if(z == current_piece.display.images.length) z = 0;
						current_w += current_piece.display.images[z].width;
						current_how_many_wide++;
						z++;
					}
					if(current_w > w) w = current_w;
					if(current_how_many_wide > how_many_wide) how_many_wide = current_how_many_wide;
				}
				
				
				var imgs               = '', 
					multiplier            = 1,
					height_reached        = false,
					current_w             = 0,
					current_how_many_high = 1,
					z                     = 0;
				
				if(current_piece.display.opts && current_piece.display.opts.multiplier){
					w += 100;
					for(var i=0; i <= how_many_high * how_many_wide && !height_reached;i++){
						if(z == current_piece.display.images.length){
							z = 0;
							multiplier++;
						} 
						for(var x=0; x<multiplier;x++){
							imgs += "<img src='"+current_piece.display.images[z].src+"' class='wrapping-images' />";
							current_w += current_piece.display.images[z].width;
							if(current_w > w){
								current_w = 0;
								current_how_many_high++;
								if(current_how_many_high > how_many_high) height_reached = true;
							}
						}
						z++;
					}
					
				} else {
					for(var i=0; i <= how_many_high * how_many_wide;i++){
						if(z == current_piece.display.images.length){
							z = 0;
						} 
						imgs += "<img src='"+current_piece.display.images[z].src+"' class='wrapping-images' />";
						z++;
					}
					
				}
				
				$('#wrapping_images_container')
					.css('height', h + 'px')
					.css('width', w + 'px')
					.html(imgs);
				render_functions._last_file = current_piece.display.images[0];
			}
		},
		"image" : function(){
			if(!render_functions._last_file || render_functions._last_file != current_piece.display.src){
				$('#piece').html('').append($('<img>').attr('id', 'renderer_image').attr('src', current_piece.display.src));
			}
			render_functions._last_file = current_piece.display.src;
			
			var opts = current_piece.display.opts || {};
			
			$('#renderer_image')
				.css('height', __optimal_height(opts))
				.css('width', __optimal_width(opts))
				.css('margin-left', __optimal_left(opts));
			if(opts.border) $('#renderer_image').css('margin-top', opts.border);
			render_functions._handle_color();
			
			
		},
		"images" : {
			"resize" : function(){
				if(!render_functions._last_file || render_functions._last_file != current_piece.display.images[0].src){
					var img = $('<img>').attr('id', 'renderer_image');
					var chooser = $('<div>').attr('id', 'image_chooser');
					var images = [];
					$.each(current_piece.display.images, function(i,image){
						var img = new Image;
						img.src = image.src;
						images.push(img);
					});
					$('#piece')
						.html('')
						.append(img)
						.append(chooser)
						.data('image-i', 0)
						.data('images', images)
						.on('click', 'a.image-choose', function(){
							var i = parseInt($(this).text()) - 1;
							$('#piece').data('image-i', i);
							$('#renderer_image').fadeOut('fast', calculate_stage);
						});
				}
				var current_image_i = $('#piece').data('image-i');
				var choose_icons = '';
				$.each(current_piece.display.images, function(i, elem){
					var active = i === current_image_i ? 'active' : '';
					choose_icons += "<a class='pointer image-choose "+active+"'>"+(i+1)+"</a> ";
				});
				$('#image_chooser').html(choose_icons);
				
				var opts = current_piece.display.opts || {};
				opts.height = current_piece.display.images[current_image_i].height;
				opts.width = current_piece.display.images[current_image_i].width;
				
				var ri = $('#renderer_image')
							.attr('src', $('#piece').data('images')[current_image_i].src)
							.css('height', __optimal_height(opts))
							.css('width', __optimal_width(opts))
							.css('margin-left', __optimal_left(opts));
				if(opts.border) $('#renderer_image').css('margin-top', opts.border);
				if(ri.is(':hidden')) ri.fadeIn('slow');
				render_functions._handle_color();
				render_functions._last_file = current_piece.display.images[0].src;
			}
		},
		"static-image" : {
			"resize" : function(){
				var image_array = current_piece.display['static-images'] || current_piece.display.images;
				if(!render_functions._last_file || render_functions._last_file != image_array[0]){
					$('#piece').html('').append($('<img>').attr('id', 'renderer_image').attr('src', image_array[0]));
				}
				
				var image_to_use,smallest_image,stage_height=__stage_height(),stage_width=__stage_width();
				$.each(image_array, function(i, image){
					if(	!image_to_use ||
						(
							image.width <= stage_width 
							&& image.height <= stage_height
							&& image.width > image_to_use.width
							&& image.height > image_to_use.height
						)){
						image_to_use = image;
					}
					if(!smallest_image || image.width < smallest_image.width) smallest_image = image;
				});
				
				if(!image_to_use) image_to_use = smallest_image;
				
				$('#renderer_image')
					.attr('src', image_to_use.src)
					.css('margin-left', __margin_left_for_width(image_to_use.width))
					.css('margin-top', (image_to_use.height + 2 < stage_height) ? parseInt((stage_height-image_to_use.height) / 2) : 0)
					.css('height', image_to_use.height)
					.css('width', image_to_use.width);
					
				if(current_piece.display.opts && current_piece.display.opts.color) __to_color(current_piece.display.opts.color);
				else __to_white();
					
				render_functions._last_file = image_array[0];
			}
		},
		"zoom_images" : {
			"dependencies" : [
				"http://assets.artmicropatronage.org/artmicropatronage/site/js/jquery.smoothZoom.min.js"
			],
			"resize" : function(){
				var loading_int;
				
				function load_it(){
					$('#renderer_image_' + render_functions._image_i)
										.css('display', 'inline')
										.smoothZoom({
											"height" : __stage_height(),
											"width"  : __stage_width(),
											"button_BG_TRANSPARENCY" : 40,
											"button_ICON_IMAGE" : "http://assets.artmicropatronage.org/artmicropatronage/site/img/zoom-icons.png"
										});
				}
				
				// this is the first time
				if(!render_functions._last_file || render_functions._last_file != current_piece.display.images[0]){
					render_functions._image_i = 0;
					
					$('#piece').html('').append(
											$('<img>')	.attr('id', 'renderer_image_0')
														.addClass('renderer-image')
														.attr('src', current_piece.display.images[render_functions._image_i])
										);

					var loaded = false;
					loading_int = setInterval(function(){
						if(typeof $.fn.smoothZoom != 'undefined'){
							clearInterval(loading_int);
							load_it();
						}
					}, 100);
					
					if(current_piece.display.images.length > 1){
						for(var i in current_piece.display.images){
							if(i == 0) continue;
							$('#piece').append(
													$('<img>')	.attr('id', 'renderer_image_' + i)
																.css('display', 'none')
																.addClass('renderer-image')
																.attr('src', current_piece.display.images[i])
												);
							
						}
						var next_prev = $('<div>')	.attr('id', 'next_prev')
													.css('position', 'fixed')
													.css('bottom', pledgebar_height + 80 + 'px')
													.css('height', '18px')
													.css('z-index', 2)
													.css('width', '115px')
													.css('text-align', 'center')
													.css('right', '0px')
													.on('click', 'a.next-image', function(ev){
														render_functions._image_i++;
														$('#next_prev a').css('display', 'inline');
														if(render_functions._image_i == (current_piece.display.images.length - 1)) $(ev.target).css('display', 'none');
														calculate_stage();
													})
													.on('click', 'a.prev-image', function(ev){
														render_functions._image_i--;
														$('#next_prev a').css('display', 'inline');
														if(render_functions._image_i === 0) $(ev.target).css('display', 'none');
														calculate_stage();
													})
													;
						next_prev.append($('<a>').text('<< prev ').addClass('pointer prev-image').css('display', 'none'));
						next_prev.append($('<a>').text(' next >>').addClass('pointer next-image'));
						$('#piece').append(next_prev);
					}
					
				// this is resizing
				} else {
					clearTimeout(loading_int);
					loading_int = setTimeout(function(){
						$('img.renderer-image').hide().smoothZoom('destroy');
						clearTimeout(loading_int);
						setTimeout(load_it, 100)
					}, 300);
				}
				
				render_functions._last_file = current_piece.display.images[0];
			}
		},
		"video" : {
			"resize" : function(){
				if(!render_functions._last_file || render_functions._last_file != current_piece.display.file){
					if($('#jw_container').length < 1){
						$('#piece').html('').append($('<div>').attr('id', 'jw_container'));
					}
					$('#piece').css('overflow', 'visible');

					$('#jw_container').css('height', __optimal_height()).css('width', __optimal_width());
					
					var p = current_piece.display.file.split('/');
					var screenshot = p.slice(0, p.length-1).join('/') + '/screenshots/' + current_piece._id + '.jpg';
					var opts = current_piece.display.opts || {};
					
					jwplayer("jw_container").setup({
				        height: __optimal_height(),
				        width: __optimal_width(),
						skin : 'http://assets.thepresentgroup.com/artmicropatronage/skins/glow/glow.zip',
						image : "http://assets.thepresentgroup.com/" + screenshot,
						events : {
							onComplete :  function(){
								if(opts.loop) jwplayer("jw_container").play();
								else if(!$('button.info').hasClass('active')) $('button.info').click();
							}
						},
						modes : [
							{ type: "flash", 
						    	src: "http://assets.thepresentgroup.com/artmicropatronage/jwplayer.swf", 
						        config: {
						        	file: current_piece.display.file,
						            streamer: "rtmp://s25ttccebayj5n.cloudfront.net/cfx/st",
						            provider: "rtmp"
						        }
				            },
							{ type: "html5",
	 			              	config: {
					                file: "http://assets.thepresentgroup.com/" + current_piece.display.file
						    	}
						}]
				    });
					if(opts.autoplay) jwplayer("jw_container").play();
					render_functions._last_file = current_piece.display.file;
				} else {
					jwplayer().resize(__optimal_width(), __optimal_height());
				}
				$('#jw_container').css('margin-left', __optimal_left());
				__to_black();
			}
		},
		"svg" : {
			"resize" : function(){
				var opts = current_piece.display.opts || {};
				
				// initial setup
				if(!render_functions._last_file || render_functions._last_file != current_piece.display.src){
					if($('#svg').length < 1){
						var svg = $('<object>').attr('id', 'svg').attr('data', current_piece.display.src).attr('type', "image/svg+xml");
						$('#piece').html('').append(svg).css('overflow', 'hidden');
					}
				} // end initial setup
				$('#svg').css('height', __stage_height())
							.css('width', __stage_width())
							.css('margin-top', 0)
							.css('margin-left', 0);
				
				
				render_functions._last_file = current_piece.display.src;
			}
		},
		"tiled-image" : {
			"resize" : function(){
				if(!render_functions._last_file || render_functions._last_file != current_piece.display.src){
					if($('#tiled').length < 1){
						var tiled = $('<div>').attr('id', 'tiled');
						$('#piece').html('').append(tiled).css('overflow', 'hidden');
					}
					$('#tiled').css('background-image', "url('"+current_piece.display.src+"')");
				}
				$('#tiled').css('height', __stage_height())
							.css('width', __stage_width())
							.css('margin-top', 0)
							.css('margin-left', 0);
				
				render_functions._last_file = current_piece.display.src;
			}
		},
		"tiled-image-static-image" : {
			"resize" : function(){
				render_functions._switcher.resize(render_functions['static-image'].resize,render_functions['tiled-image'].resize);
			},
			"cleanup" : function(callback){
				render_functions._switcher.cleanup(callback);
			}
		},
		"wrapping-images-static-image" : {
			"resize" : function(){
				render_functions._switcher.resize(render_functions['static-image'].resize,render_functions['wrapping-images'].resize);
			},
			"cleanup" : function(callback){
				render_functions._switcher.cleanup(callback);
			}
		},
		_switcher : {
			"resize" : function(untile_function, tile_function){
				function toggle(){
					if(!$('#piece').hasClass('tiled')){
						tile_function();
						$('#piece').attr('title', "Click to view zoomed image");
						
					} else {
						untile_function();
						$('#piece').attr('title', "Click to view actual size image");
					}
				}
				toggle();
				$('#piece').addClass('pointer').unbind('click').click(function(){
					$(this).toggleClass('tiled');
					toggle();
				})
			},
			"cleanup" : function(callback){
				$('#piece')
					.removeClass('tiled')
					.attr('title', '')
					.removeClass('pointer')
					.unbind('click');
				callback();
			}
		},
		"tiled-image-svg" : {
			"resize" : function(){
				// initial setup
				if(!render_functions._last_file || render_functions._last_file != current_piece.display.svg){
					if($('#tiled').length < 1){
						var svg = $('<object>')
										.attr('height', __stage_height())
										.attr('width', __stage_width())
										.attr('id', 'svg')
										.attr('data', current_piece.display.svg)
										.attr('type', "image/svg+xml");
						var button = $('<input>')
										.attr('type', 'button')
										.attr('id', 'tile_button')
										.addClass('submitGray active')
										.val('Actual Size')
										.css('position', 'fixed')
										.css('bottom', (pledgebar_height + 10) + 'px')
										.css('right', '10px')
										.click(function(){
											$(this).toggleClass('tiled');
											if($(this).hasClass('tiled')){
												$('#tiled').css('background-image', "url('"+current_piece.display.src+"')");
												$('#svg').hide();
												$(this).val('zoom');
											} else {
												$('#tiled').css('background-image', "none");
												$('#svg').show();
												$(this).val('Actual Size');
											}
										});
						var tiled = $('<div>').attr('id', 'tiled').append(svg).append(button);
						$('#piece')
							.html('')
							.append(tiled)
							.css('overflow', 'hidden');
						var _mousemove_timeout;
						$(window).mousemove(function(){
							clearTimeout(_mousemove_timeout);
							var $button = $('#tile_button');
							_mousemove_timeout = setTimeout(function(){
								$('#tile_button').fadeOut('fast', function(){
									$(this).removeClass('active');
								})
							}, 2000);
							if($button.hasClass('active')) return;
							$button.addClass('active').fadeIn();
						})
					}
				} // end initial setup
				
				$('#svg,#tiled')
							.css('height', __stage_height())
							.css('width', __stage_width())
							.attr('height', __stage_height())
							.attr('width', __stage_width())
							.css('margin-top', 0)
							.css('margin-left', 0);
				
				render_functions._last_file = current_piece.display.src;
			}
		},
		"iframe" : {
			"cleanup" : function(callback){
				$('#frame').fadeOut('fast', function(){
					$(this).remove();
					callback();
				});
				$('#main').off('click.hide_flash');
				$('#stage').css('overflow','hidden');
				$('#pledgebar').css('position', 'absolute');
				if($('#cover')[0]) $('#cover').remove();
				
			},
			"resize" : function(){
				var opts = current_piece.display.opts || {};
				var width_height_selector = '#frame';
				
				// initial setup
				if(!render_functions._last_file || render_functions._last_file != current_piece.display.src){
					if($('#frame').length < 1){
						if(opts.top || opts.left){							
							var frame = $('<iframe>')
											.attr('id', 'frame')
											.css('overflow', 'hidden')
											.css('position', 'absolute')
											.attr('scrolling', 'no')
											.css('top', '-' + opts.top + 'px' )
											.css('left', '-' + opts.left + 'px');
							var frame_wrap = $('<div>')
												.attr('id', 'frame_wrap')
												.css('overflow', 'hidden')
												.css('position', 'relative')
												.append(frame);
							$('#piece').html('').append(frame_wrap);
							opts.overflow = "auto";
							$('#pledgebar').css('position', 'fixed');
							
						} else {
							var frame = $('<iframe>').attr('id', 'frame').css('overflow', 'hidden');
							$('#piece').html('').append(frame).css('overflow', 'hidden');
							
						}
						
					}
					var frame = $('#frame');
					if(current_piece.display.height) frame.css('height', current_piece.display.height);
					if(current_piece.display.width) frame.css('width', current_piece.display.width);
					if(opts.overflow) $('#stage').css('overflow', opts.overflow);
					if(opts['overflow-y']) frame.css('overflow-y', opts['overflow-y']);
					if(opts.cover){
						var cover = $("<div id='cover'>")
										.css('position', 'absolute')
										.css('top', 0)
										.css('left', 0)
										.css('z-index', 3);
						frame.css('z-index', 2);
						$('#stage').append(cover);
					}
					
					
					frame.attr('src', current_piece.display.src)
							   .attr('allowfullscreen', true)
							   .attr('webkitallowfullscreen', true)
							   .attr('mozallowfullscreen', true);
							
					if(opts.hide_flash_chrome && $.browser.chrome){
						// i dont like that this is so coupled
						function __check_hide(){
							$('#frame')[($('button.info').hasClass('active') ? 'hide' : 'show')]();
						}
						$('#main').on('click.hide_flash', '#exhibition_title,#closeBtn,button.info', __check_hide);
						__check_hide();
					}
				} // end initial setup
				
				if(opts.top || opts.left){
					if(current_piece.display.height && current_piece.display.width){
						$('#frame_wrap')
							.css('height', current_piece.display.height - opts.top)
							.css('width', current_piece.display.width)
							.css('margin-left', __margin_left_for_width(current_piece.display.width));
						if(opts.border) $('#frame_wrap').css('margin-top', opts.border + 10);
						
					} else {
						if(opts.top_border_chrome && $.browser.chrome){
							var top = 67;
							$('#frame').css('height', __stage_height() - top)
										.css('width', __stage_width())
										.css('margin-top', top)
										.css('margin-left', 0);
						} else {
							$('#frame').css('height', __stage_height())
										.css('width', __stage_width())
										.css('margin-top', 0)
										.css('margin-left', 0);
						}
					}
					
				} else {
					if(current_piece.display.height && current_piece.display.width){
						$('#frame').css('height', __optimal_height(opts)).css('width', __optimal_width(opts));
						$('#frame').css('margin-left', __optimal_left(opts));
						if(opts.border) $('#frame').css('margin-top', opts.border + 10);
					} else {
						if(opts.top_border_chrome && $.browser.chrome){
							var top = 67;
							$('#frame').css('height', __stage_height() - top)
										.css('width', __stage_width())
										.css('margin-top', top)
										.css('margin-left', 0);
						} else {
							$('#frame').css('height', current_piece.display.height || __stage_height())
										.css('width', current_piece.display.width ||__stage_width())
										.css('margin-top', 0)
										.css('margin-left', 0);
							if(opts.border) $('#frame').css('margin-top', opts.border + 10);
						}
					}
				}

				if(opts.cover){
					$('#cover').css('width', __stage_width()).css('height', __stage_height());
				}
				
				if(opts.color) __to_color(opts.color);
				else if(opts.black) __to_black();
				else __to_white();
				render_functions._last_file = current_piece.display.src;
				
			}
		}
	};
	
	function _clean_piece(callback){
		if(	!$.isEmptyObject(current_piece)
			&& typeof render_functions[current_piece.display.type] != 'function' 
			&& render_functions[current_piece.display.type].cleanup ){
					render_functions[current_piece.display.type].cleanup(callback);
					return;
		} 
		if(callback) callback();
	}
	
	var _dependencies_checked = false;
	var _dependencies_included = [];
	function __check_dependencies(){
		if(typeof Amp == 'undefined') return;
		if(_dependencies_checked === Amp.show()._id) return;
		_dependencies_checked = Amp.show()._id;
		
		function requireJs(url){
			if(_dependencies_included.indexOf(url) > -1) return;
			_dependencies_included.push(url);
			
			var s  = document.createElement('script');
			s.type = "text/javascript";
			s.src  = url;
			$("head").append(s);
			
		}
		
		$.each(Amp.show().pieces, function(i, piece){
			if(!piece.display) return;
			if(render_functions[piece.display.type].dependencies){
				var deps = render_functions[piece.display.type].dependencies;
				if(typeof deps == "object"){
					$.each(deps, function(i, url){
						requireJs(url);
					})
				} else {
					requireJs(deps);
				}
			}
		});
	}
		
	function calculate_stage(){		
		if($('#cart_page').is(':visible') || $('#cart_page_holder').hasClass('success')) return;
		__stage_width();
		__stage_height();
		$('#stage').css('width', stage.width).css('height', stage.height);
		__check_dependencies();
		$('#piece_description').css('height', stage.height - 373);
		// $('#piece').css('width', stage.width - 80).css('height', stage.height);
		var et = $('#exhibition_title');
		if(et[0]) et.width($('button.nextBtn').offset().left - $('button.info').offset().left - 61)
			.css('margin-top', (et.height() > 30 ? '-5' : '0' )+'px')
			.css('font-size', (et.height() > 30 ? '10' : '11' )+'px');
		
		
		if($('#piece').length < 1) $('#stage').append($('<div>').attr('id', 'piece'));
		
		if(!$.isEmptyObject(current_piece)){
			render_functions._handle_global_opts();
			if(typeof render_functions[current_piece.display.type] == 'function'){
				render_functions[current_piece.display.type]();
			} else {
				render_functions[current_piece.display.type].resize();
			}
		}
	}
	calculate_stage();
	
	function _toggle_pledgebar(){
		$('#pledgebar').slideToggle();
	}
	
	// PayPal /// // ///
	var paypal_stack = {};
	function _paypal_div(t, reload){
		return;
		
		var add = true;
		if(!$.isEmptyObject(paypal_stack)){
			for(var i in paypal_stack){
				if(i == t) add = false;
			}
		}
		if(add || reload){
			$('#' + t).unbind('click').click(_overlay_holder_out);
			paypal_stack[t] = new PAYPAL.apps.DGFlow({ trigger: t });
		} 
	}
	
	function _close_paypal(){
		var c = paypal_stack.length;
		for(var i in paypal_stack){
			var the_div = paypal_stack[i];
			the_div.closeFlow();
			delete paypal_stack[i];
		}
	}
	// END PayPal /// // //
	
	var _has_been_to_cart = false;
	function cart_page(show){
		if(show){
			__to_white();
			__show_nav();
			if($('#pledgebar').is(':visible')) $('#pledgebar').slideUp();
			$('#main').addClass('text');
			if($('#cart_page_holder').length < 1) $('#stage').after($('<div>').attr('id', 'cart_page_holder'));
			$('#stage').hide();
			
			var show = Amp.show();
			
			if(vm.is_member() || show._id != Amp.current_show_id){
				var successDiv = "<div style='padding:100px'><h1>That's it!</h1><p>You've reached the end of the show.  <a href='/exhibition/"+show._id+"'>view it again</a></p></div>";
				$('#cart_page_holder').html(successDiv).addClass('success');
				return;
			}
			
			if(!_has_been_to_cart){
				Amp.track_event('Movement', 'On Cart Page - ' + Amp.show().title, 'On Cart Page - ' + Amp.show().title, parseInt(vm.cart_total()*100));
				_has_been_to_cart = true;
			}
			var cart = vm.cart().slice(0);
			
			var data = { 
				items 	 : [], 
				subtotal : vm.cart_total().toFixed(2), 
				bank 	 : (Amp.patron().bank ? Amp.patron().bank.toFixed(2) : 0 )
			};
			data.total = (parseFloat(data.subtotal) - parseFloat(data.bank)).toFixed(2);
			data.abs_total = Math.abs(data.total).toFixed(2);
			data.nonneg_total = parseFloat(data.total) <= 0 ? '0.00' : data.total;
			data.has_more_dough = function(){
				return parseFloat(this.subtotal) > 0 && parseFloat(this.total) <= 0;
			};
			data.gots_to_pay = function(){
				return parseFloat(this.total) > 0;
			};
			data.has_bank_and_gots_to_pay = function(){
				return(parseFloat(this.bank) > 0 && this.gots_to_pay());
			};
			for(var z in show.pieces){
				var piece = show.pieces[z];
				piece.unpledged = true;
				piece.pledge = "0.00";
				for(var i in cart){
					var pledged_item = cart[i];
					if(piece._id == pledged_item._id){
						piece.pledge = pledged_item.pledge.toFixed(2);
						if(pledged_item.pledge > 0) piece.unpledged = false;
						// cart[i].name = piece.artist;
					}
				}
				data.items.push(piece);
			}
			var cart_obj = {cart : cart, email: Amp.patron().email, show : Amp.show()._id, user : Amp.patron()._id };
			if(data.has_bank_and_gots_to_pay()) cart_obj.bank_diff = data.total;

			data.cart_query = 'cart=' + encodeURIComponent(JSON.stringify(cart_obj));

			$('#cart_page_holder').html(Mustache.to_html($('#cart_tmpl').html(), data));
			if(data.gots_to_pay()) _paypal_div("paypal_link", true);
			if(data.has_bank_and_gots_to_pay){
				$('input[name=distribute]').unbind('click').click(function(){
					Amp.old_cart = cart.slice(0);
					Amp.clear_cart();
					for(var i in cart){
						var new_piece = cart[i];
						new_piece.pledge = parseFloat(new_piece.pledge) / parseFloat(data.subtotal) * parseFloat(data.bank);
						vm.add_to_cart(new_piece);
					}
					
				});
			}
			
		} else {
			if($('#cart_page').is(':visible')){
				
				$('#cart_page').fadeOut(function(){
					
					_toggle_pledgebar();
					$('#main').removeClass('text');
					$('#stage').show();
					$(this).remove();
					if(window.location.hash == '#cart')
						window.location.hash = '';
					else{
						__hide_nav();
						calculate_stage(); // show last piece
					}
						
					
				})
			}
		}
	}
	
	var menu_int;
	function __hide_menu(){
		if(!$('#menubar').hasClass('hidded')){
			__move_menu_up();
			$('#menubar').addClass('hidded').mouseenter(function(){
				clearInterval(menu_int);
				__move_menu_down();
			}).mouseleave(function(){
				menu_int = setInterval(__move_menu_up,1000);
			});
		} 
	}

	function __move_menu_up(){
		$('#menubar').addClass('moving').animate({
			top : '-25px'
		},500, function(){
			$(this).removeClass('moving');
		});
	}

	function __move_menu_down(){
		$('#menubar').addClass('moving').animate({
			top : '0px'
		}, 500, function(){
			$(this).removeClass('moving');
		});
	}
	
	function __show_menu(){
		if($('#menubar').hasClass('hidded')){
			clearInterval(menu_int);
			__move_menu_down();
			$('#menubar').unbind('mouseenter').unbind('mouseleave').removeClass('hidded');
		}
	}
	
	function __hide_nav(){
		$('ul#access').addClass('hidded');
		$('ul#access li.main:eq(2)').fadeOut(function(){
			$('ul#access li.main:eq(1)').fadeOut(function(){
				$('ul#access li.main:eq(0)').fadeOut(function(){
					$('ul#access li.main').hide(); // just in case
				});
			})
		})
	}
	
	function __show_nav(){
		$('ul#access').removeClass('hidded');
		$('ul#access li.main:eq(0)').fadeIn('fast', function(){
			$('ul#access li.main:eq(1)').fadeIn('fast', function(){
				$('ul#access li.main:eq(2)').fadeIn('fast', function(){
					$('ul#access li.main').show(); // just in case
				});
			})
		})
		
	}
	
	function _bank_success(message, patron){
		_close_paypal();
		Amp.patron(patron);
		_flash(message);
	}

	function _create_user_step(data){
		data.title = "Thank you for your donation";
		data.left = "<h2>Complete your account</h2><p>Right now you are an anonymous donor. By completing your patron account you'll be able to:"+
					"<ul><li>Manage your public profile</li><li>View your collection after the show has closed</li>"+
					"<li>Keep track of your favorite artists and donations</li></ul></p>";
		signup_form(data);
		window.Renderer.should_verify_public_profile_on_signup = true;
	}
	
	function _successful_order(message, user){
		_close_paypal();
		Amp.track_event('Pledges', 'Donated - ' + Amp.show().title, 'Donated - ' + Amp.show().title, parseInt(vm.cart_total()*100));
		
		Amp.clear_cart();
		Amp.clear_collection();
		
		// logged out
		if(Amp.patron().email == ''){
			// we know them
			if(user.timestamp){
				Amp.patron(user);
				_public_profile_verify();
				
			// present final steps form
			} else {
				_create_user_step(user);
			}
		} else {
			Amp.patron(user);
			_public_profile_verify();
		}
	}
	
	function _failed_order(message){
		_close_paypal();
		Renderer.flash(message);
	}
	
	function _public_profile_verify(){
		_flash("You did it! Thanks.");
		var successDiv = "<div style='padding:100px'><h1>Thank you for becoming a Patron of the Arts!</h1><p>Your donation will allow you continued access to the works of artists you donated to as long as our project exists.</p>"+   
						"<br/><h2>How would you like to be recognized for your generosity?</h2><p>You can manage your <a href='/myCollection#public'>public patron profile here</a>.</p>"+
						"<p>It may take a couple minutes before your profile shows up on the patrons page, but meanwhile, you can <a href='/myCollection'>review your collection</a>, <a href='/exhibition'>browse back through the show</a>, or <a href='myCollection/#account'>edit your information</a>.</p></div>";
		$('#cart_page_holder').html(successDiv).addClass('success');
	}
	
	
	function login_form(){
		var login_info = {
			title : "Login",
			left : "<h2>Oh hello again.</h2><p>Lovely to see you.</p>"
		};
		_overlay_template('login_tmpl', login_info, function(){
			$('a.forgot').click(function(){
				$('div.hide-me').toggle();
				$('div.forgot-me').toggle();
			});
			
			$('input[name=forgot]').click(function(){
				if($('input[name=email]').val() != ''){
					var butt = __disable_button($(this));
					$.ajax({
						url : '/forgot',
						type : 'post',
						dataType : 'json',
						data : {
							'email' : $('input[name=email]').val()
						},
						success : function(resp){
							_flash("We just sent you an email with your new password");
							_overlay_holder_out();
						}
					})
				}
			});
			
			$('#login_form input[type=submit]').click(function(){
				var me = $(this).parents('form:first');
				var butt = __disable_button($(this));
				$.ajax({
					url : '/login',
					type : 'post',
					data : {
						email : $('input[name=email]', me).val(),
						password : $('input[name=password]', me).val()
					}, 
					dataType : 'json',
					success : function(resp){
						if(resp.ok){
							Amp.patron(resp.user);
							_overlay_holder_out(function(){
								if(Amp.wants_to_bank){
									$('.banked').click();
									Amp.wants_to_bank = false;
								} 
							})
						} else {
							_error(resp.error);
						}
						__enable_button(butt);
					}
				});
				return false;
			});
		});
		
		
	}

	function __disable_button(me){
		return me.data('go-back', me.val()).val("Ok...").attr('disabled', 'disabled');
	}
	
	function __enable_button(me){
		me.val('Done!').attr('disabled', false);
		setTimeout(function(){
			me.val(me.data('go-back'));
		},1000);
		return me;
	}
	
	
	function signup_form(data){
		var signup_info = {
			title : "Sign up now",
			left : "<h2>Become a Patron of the Arts!</h2><p>By creating a <em>free</em> AMP account you will be able to:<br/><ul>"+
					"<li>Keep track of artists and work you've supported</li>"+
					"<li>Manage your public Patron Profile</li>"+
					"<li>Be notified about new shows</li>"+
					"<li>Create a bank account to make giving fun and easy</li></ul></p>"
		};
		signup_info = {
			title : "Sign up now",
			left : "<h2>Become a Patron of the Arts!</h2><p>We're in the process of setting up the next round of shows. If you sign up we'll let you know when they're up.</p>"
		};
		var d = $.extend(signup_info, data);
		_overlay_template('signup_tmpl', d, function(){
			$('#signup_form input[type=submit]').click(function(){
				var post = {};
				var ok = true;
				$(this).parents('form:first').find('input.req').each(function(){
					if($(this).val() == '' || $(this).attr('name') == 'email' && !$(this).val().match(/[^@]+@[^.]+\.[^.]+/)){
						ok = false;
						$(this).addClass('error');
					} else {
						$(this).removeClass(('error'));
					}
				});
				/*
				if($(this).parents('form:first').find('input[name=terms]').is(':checked')){
					$('p.terms').removeClass('error');
				} else {
					$('p.terms').addClass('error');
					ok = false;
					_error("You must agree to the Terms of Use before creating an account.");
				}
				*/
				if(ok){
					$(this).parents('form:first').find('input').each(function(){
						if(typeof $(this).val() != 'undefined')	post[$(this).attr('name')] = $(this).val();
					});
					
					
					var me = __disable_button($(this));
					var verify = Renderer.should_verify_public_profile_on_signup;
					$.ajax({
						url : '/signup',
						type : 'post',
						data : post,
						dataType : 'json',
						success : function(resp){
							if(resp.ok){
								Amp.patron(resp.user);
								if(verify){
									_next_flash("Thanks for signing up.");
									window.location.href = '/myCollection#public';
									return;
								}
								_overlay_holder_out(function(){
									if(Amp.wants_to_bank){
										$('.banked').click();
										Amp.wants_to_bank = false;
									} 
									
								})
							} else {
								_error(resp.error);
							}
							__enable_button(me);
						}
					})
				}
				return false;
			});
		});
	}
	
	// presents a flash on the next page
	var flash_key = 'next-flash';
	function _next_flash(message){
		$.jStorage.set(flash_key, message);
	}
	if($.jStorage.get(flash_key)){
		_flash($.jStorage.get(flash_key));
		$.jStorage.deleteKey(flash_key);
	}
	
	function _flash(message){
		if(arguments.length > 1 && arguments[1] === true) $('div.alert').addClass('red-alert');
		$('div.alert').text(message).slideDown();
		setTimeout(function() {
			$('div.alert').slideUp(function(){
				$(this).text('').removeClass('red-alert');
			});
		}, 3500);
	}
	
	function _error(message){
		_flash(message, true);
	}
	
	function _notification(message){
		var d = $('<div>').attr('id', 'notification').append($('<div>').attr('id', 'notification_text').html(message)).css('left', -1000);
		$('#main_header').append(d);
		d.delay(3000).animate({
			'left' : '0'
		}, 2500);
	}
	
	/* * * PUDDLIC METHUDZ * * */
	return {
		resize_stage 		: calculate_stage,
		clean_current_piece : _clean_piece,
		current_piece 		: function(){
								if(arguments.length > 0){
									current_piece = arguments[0];
									Renderer.resize_stage();
								} 
								return current_piece;
							},
		flash 				: _flash,
		error				: _error,
		notify				: _notification,
		successful_order 	: _successful_order,
		bank_success	 	: _bank_success,
		failed_order 		: _failed_order,
		paypal_div 			: _paypal_div,
		overlay_load 		: _overlay_load,
		overlay_clear 		: _overlay_holder_out,
		overlay_template	: _overlay_template,
		unlock_overlay		: _unlock_overlay,
		lock_overlay		: _lock_overlay,
		signup_form			: signup_form,
		create_form			: _create_user_step,
		login_form			: login_form,
		cart_page 			: cart_page,
		disable_button		: __disable_button,
		enable_button		: __enable_button,
		hide_nav			: __hide_nav,
		show_nav			: __show_nav,
		to_white			: __to_white,
		public_profile_verify : _public_profile_verify,
		default_thumb		: 'http://artmicropatronage.org/framework/img/medalion-no-amp-100x100.png',
		test_window			: function(){
			window.location.href = '/myCollection';
		}
	}
		
})();
