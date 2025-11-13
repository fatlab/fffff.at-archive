/**
 * @name		Tooltip CK
 * @copyright	Copyright (C) 2016. All rights reserved.
 * @license		GNU General Public License version 2 or later; see LICENSE.txt
 * @author		Cédric KEIFLIN - https://www.joomlack.fr - https://www.template-creator.com - https://www.ceikay.com
 */
 
 /*
 * Version 2.2.9 : Fix issue with WP5.6 and jQuery update
 * Version 2.2.6 : Fix issue with fade effect, improve tipWidth setting with data attribute
 */

(function () {
	'use strict';

	var $;

	/*===========================
	Tooltipck
	===========================*/
	var Tooltipck = function (options) {
		if (!(this instanceof Tooltipck)) return new Tooltipck(options);

		if (typeof jQuery !== 'undefined'){
			$ = jQuery;
		}

		if (typeof $ === 'undefined') {
			console.log('Tooltip CK error : jQuery instance not found !');
			return;
		}

		// Tooltipck
		var t = this;

		// Settings
		var defaults = {
			fxTransition: 'linear',
			fxType: 'both',					// can be both, horizontal, vertical, fade
			fxDuration: 500,
			tipPosition: 'right',			// can be right, top, left, bottom
			delayIn: 0,
			delayOut: 500,
			isMobile: 0,
			opacity: 0.9,
			offsetx: 0,
			offsety: 0
			};
		options = options || {};
		options = $.extend(defaults, options);

		var tooltip;
		$('.tooltipck').each(function(i, tooltip) {
			tooltip = $(tooltip);
			if (tooltip.attr('data-done') == '1') return;

			tooltip = $.extend(tooltip, options);

			// quick fix for the height of the element
			tooltip.css('display', 'inline-block');
			tooltip.height = tooltip.height();
			tooltip.width = tooltip.width();
			tooltip.css('display', '');
			tooltip.attr('data-position', options.tipPosition);

			tooltip.tip = $('> .tooltipck-tip', tooltip);
			$(document.body).append(tooltip.tip);
			// tooltip.tipWidth = tooltip.tip.outerWidth() + parseInt(tooltip.tip.css('border-left-width')) + parseInt(tooltip.tip.css('border-right-width'));
			tooltip.tipWidth = parseInt(tooltip.tip.attr('data-width'));
			tooltip.tipHeight = tooltip.tip.outerHeight();

			tooltip.tip.css({
				'opacity': '0',
				'width': '0',
				'height': '0'
			});
			getTooltipParams();

			tooltip.attr('data-done', '1');

			if (options.isMobile == 1) {
				tooltip.click(function() {
					if (tooltip.data('status') != 'open' && tooltip.data('status') != 'opened') {
						showTip(tooltip);
						hideTipOutsideClick();
					} else {
						hideTip(tooltip);
					}
				});
				tooltip.tip.click(function() {
					if (tooltip.data('status') == 'opened') {
						hideTip(tooltip);
					}
				});
			} else {
				tooltip.mouseover(function() {
					showTip(tooltip);
				});
				tooltip.mouseleave(function() {
					hideTip(tooltip);
				});
			}

			function hideTipOutsideClick() {
				$(window).on('click', function(event){
					if ( 
						tooltip.data('status') == 'open'
						&&
						tooltip.has(event.target).length == 0 //checks if descendants was clicked
						&&
						!tooltip.is(event.target) //checks if itself was clicked
						){
						// is outside
						hideTip(tooltip);
					} else {
						// is inside, do nothing
					}
				});
			}

			function getTipPosition() {
				var prop1 ,val1, prop2, val2;

				switch(tooltip.tipPosition) {
					case 'right':
					default:
						prop1 = 'left';
						val1 = (tooltip.pointer.offset().left + parseInt(tooltip.offsetx)) + 'px';
						prop2 = 'top';
						val2 = (tooltip.pointer.offset().top + parseInt(tooltip.offsety)) + 'px';
						break;
					case 'left':
						prop1 = 'left';
						val1 = (tooltip.pointer.offset().left + parseInt(tooltip.offsetx) - tooltip.tipWidth - tooltip.width) + 'px';
						prop2 = 'top';
						val2 = (tooltip.pointer.offset().top + parseInt(tooltip.offsety)) + 'px';
						break;
					case 'top':
						prop1 = 'left';
						val1 = (tooltip.pointer.offset().left + parseInt(tooltip.offsetx) - (tooltip.tipWidth / 2) - (tooltip.width / 2)) + 'px';
						prop2 = 'top';
						val2 = (tooltip.pointer.offset().top + parseInt(tooltip.offsety) - tooltip.tipHeight - tooltip.height) + 'px';
						break;
					case 'bottom':
						prop1 = 'left';
						val1 = (tooltip.pointer.offset().left + parseInt(tooltip.offsetx) - (tooltip.tipWidth / 2) - (tooltip.width / 2)) + 'px';
						prop2 = 'top';
						val2 = (tooltip.pointer.offset().top + tooltip.height + parseInt(tooltip.offsety)) + 'px';
						break;
				}
				return Array(prop1, val1, prop2, val2);
			}

			function checkWithinBounds() {
				var boundTop = $(document).scrollTop();
				var boundBottom = boundTop + $(window).height();
				var boundLeft = $(document).scrollLeft();
				var boundRight = boundLeft + $(window).width();

				if (tooltip.tipPosition == 'right') {
					var tipPositionRight = tooltip.pointer.offset().left + parseInt(tooltip.tip.css('marginLeft')) + tooltip.tipWidth;
					var hOffset = boundRight - tipPositionRight;
					if (hOffset < 0) {
						tooltip.tip.css('marginLeft', '+=' + hOffset + 'px');
					}
				}

				// for position left, right, and bottom when the tip goes lower
				if (tooltip.tipPosition != 'top') {
					if (tooltip.tipPosition == 'bottom') {
						var tipPositionBottom = tooltip.pointer.offset().top + tooltip.tipHeight + parseInt(tooltip.tip.css('marginTop')) + tooltip.height;
					} else {
						var tipPositionBottom = tooltip.pointer.offset().top + tooltip.tipHeight + parseInt(tooltip.tip.css('marginTop'));
					}
					var vOffset = boundBottom - tipPositionBottom;
					if (vOffset < 0) {
						tooltip.tip.css('marginTop', '+=' + vOffset + 'px');
					}
				}
			}

			function checkWithinBoundsAfterAnimation() {
				var boundTop = $(document).scrollTop();
				var left = parseInt(tooltip.tip.css('left'));
				var marginLeft = parseInt(tooltip.tip.css('marginLeft'));
				var top = parseInt(tooltip.tip.position().top);
				var marginTop = parseInt(tooltip.tip.css('marginTop'));

				// init the limit
				tooltip.tip.css('max-width', '');
				tooltip.tip.css('max-height', '');

				if ((tooltip.tip.width() + 10) > $(window).width()) {
					tooltip.tip.css({
						'marginLeft': '0px'
						,'left': '5px'
						,'max-width': $(window).width() - 10 + 'px'
					});
				}
				if ((tooltip.tip.height() + 10) > $(window).height()) {
					tooltip.tip.css({
						'marginTop': '0px'
						,'top': '5px'
						,'max-height': $(window).height() - 10 + 'px'
					});
				}

				if (left + marginLeft < 0) {
					tooltip.tip.css({
						'left': '5px'
						,'marginLeft': '0'
					});
				}
				if (top + marginTop < boundTop) {
					tooltip.tip.css({
						'top': boundTop + 'px'
						,'marginTop': '0'
					});
				}
			}

			function showTip(el) {
				clearTimeout(el.timeout);
				el.timeout = setTimeout(function() {
					openTip(el);
				}, options.delayIn);
			}

			function hideTip(el) {
				clearTimeout(el.timeout);
				el.timeout = setTimeout(function() {
					if (tooltip.hasClass('tooltipck-paused')) return;
					$(el).data('status', 'hide')
					closeTip(el);
				}, tooltip.delayOut);
			}

			function openTip(el) {
				var tip = $(el.tip);
				el.data('status', 'open');
				if (el.data('status') == 'opened')
					return;
				
				// tip.css('display' ,'inline-block');
				tip.addClass('tooltipck-hover');
				// add a html pointer to get the correct tip position
				// if (! tooltip.find('.tooltipck-pointer').length) tooltip.append('<span class="tooltipck-pointer"></span>');
				tooltip.pointer = tooltip.find('.tooltipck-pointer');
				// check where to place the tooltip
				tooltip.checkedPositions = [];
				// empty the array
				while (tooltip.checkedPositions.length) { tooltip.checkedPositions.pop(); }
				tooltip.tipPosition = tooltip.attr('data-position');
				var tipPositionCss = getTipPosition();
				

				// reset all positions to avoid issues
				tip.css({
					'top': '',
					'bottom': '',
					'left': '',
					'right': '',
					'marginLeft': '',
					'marginTop': '',
				});
				tip.css(tipPositionCss[0], tipPositionCss[1]);
				tip.css(tipPositionCss[2], tipPositionCss[3]);
//				tip.css(tipPositionCss[4], tipPositionCss[5]);
//				tip.css(tipPositionCss[6], tipPositionCss[7]);
				checkWithinBounds();
//				$(document.body).append(tip);

				$('.tooltipck').removeClass('tooltipck-active');
				tooltip.addClass('tooltipck-active');

				switch(options.fxType) {
					case 'both':
					default:
						tip.css('display' ,'inline-block');
						tip.animate({
							'opacity' : options.opacity,
							'height' : el.tipHeight,
							'width' : el.tipWidth,
							// 'display' : 'inline-block',
							// 'zIndex' : '6001'
							}, {
								duration: parseInt(tooltip.fxDuration),
								transition:  options.fxTransition,
								complete: function() {
									el.data('status', 'opened');
									tip.css('height' ,'auto');
									checkWithinBoundsAfterAnimation();
//									checkWithinBounds();
								}
						});
						break;
					case 'horizontal':
						tip.css('height', el.tipHeight);
						tip.css('display' ,'inline-block');
						tip.animate({
							'opacity' : options.opacity,
							'width' : el.tipWidth,
							// 'display' : 'inline-block'
							}, {
								duration: parseInt(tooltip.fxDuration),
								transition:  options.fxTransition,
								complete: function() {
									el.data('status', 'opened');
									tip.css('height' ,'auto');
									checkWithinBoundsAfterAnimation();
								}
						});
						break;
					case 'vertical':
						tip.css('width', el.tipWidth);
						tip.css('display' ,'inline-block');
						tip.animate({
							'opacity' : options.opacity,
							'height' : el.tipHeight,
							// 'display' : 'inline-block'
							}, {
								duration: parseInt(tooltip.fxDuration),
								transition:  options.fxTransition,
								complete: function() {
									el.data('status', 'opened');
//									tip.css('height' ,'auto');
									checkWithinBoundsAfterAnimation();
								}
						});
						break;
					case 'fade':
						tip.css('height', el.tipHeight);
						tip.css('width', el.tipWidth);
						tip.css('display', 'inline-block');
						tip.animate({
							'opacity' : options.opacity
							// 'display' : 'inline-block'
							}, {
								duration: parseInt(tooltip.fxDuration),
								transition:  options.fxTransition,
									complete: function() {
									el.data('status', 'opened');
									tip.css('height' ,'auto');
									checkWithinBoundsAfterAnimation();
								}
						});
						break;
				}
				if (options.isMobile == 1) {
					
				} else {
					tip.mouseover(function() {
						tooltip.addClass('tooltipck-paused');
					}).mouseleave(function() {
						tooltip.removeClass('tooltipck-paused').trigger('mouseleave');
					});
				}
			}

			function closeTip(el) {
				var tip = $(el.tip);
				el.data('status', 'close');
				tip.stop(true, true);
				tip.css({
					'opacity': '0',
					'width': '0',
					'height': '0',
					'display' : 'none'
				});
				tooltip.removeClass('tooltipck-active');
				tip.removeClass('tooltipck-hover');
//				tooltip.append(tip);
				el.data('status', 'closed');
			}

			function getTooltipParams() {
				if (tooltip.attr('rel')) {
					var params = tooltip.attr('rel').split('|');
					for (var i = 0; i < params.length; i++) {
						var param = params[i];
						if (param.indexOf('time=') != -1)
							tooltip.fxDuration = parseInt(param.replace("time=", ""));
						if (param.indexOf('delayOut=') != -1)
							tooltip.delayOut = parseInt(param.replace("delayOut=", ""));
						if (param.indexOf('offsetx=') != -1)
							tooltip.offsetx = parseInt(param.replace("offsetx=", ""));
						if (param.indexOf('offsety=') != -1)
							tooltip.offsety = parseInt(param.replace("offsety=", ""));
						if (param.indexOf('position=') != -1)
							tooltip.tipPosition = param.replace("position=", "");
						// Legacy
						if (param.indexOf('mood=') != -1)
							tooltip.fxDuration = param.replace("mood=", "");
						if (param.indexOf('tipd=') != -1)
							tooltip.delayOut = param.replace("tipd=", "");
					}
				}
			}

			// used when mobile window is switched between landscape and portrait
			$(window).on('resize', function() { repositionTooltip(tooltip); });

			function repositionTooltip(tooltip) {
				if (tooltip.data('status') != 'open' || options.isMobile != '1') return;
				tooltip.tipPosition = options.tipPosition;
				var tipPositionCss = getTipPosition();
				var tip = tooltip.tip;
				// reset all positions to avoid issues
				tip.css(tipPositionCss[0], tipPositionCss[1]);
				tip.css(tipPositionCss[2], tipPositionCss[3]);
				tip.css(tipPositionCss[4], tipPositionCss[5]);
				tip.css(tipPositionCss[6], tipPositionCss[7]);
				// checkWithinBounds();
			}
		});
	};

	window.Tooltipck = Tooltipck;
})();
