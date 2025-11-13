(function($) {
	$(document).ready(function() {
		var os = getMobileOperatingSystem();
		if (/^(iOS|Android)$/i.test(os)) {
			return;
		}

		var $emojis = $('.emoji-span');
		if ($emojis.length > 0) {
			var emoji = new EmojiConvertor();
			emoji.img_sets.apple.path = '/images/img-apple-64/';
			emoji.avoid_ms_emoji = false;
			emoji.include_text = true;

			$emojis.each(function() {
				var originalText = $(this).text();
				var useFallback = shouldFallbackToImages(originalText, emoji);

				if (useFallback) {
					$(this).html(emoji.replace_unified( originalText ));
				}
			});
		}

		/**
		 * Determine the mobile operating system.
		 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
		 *
		 * @returns {String}
		 */
		function getMobileOperatingSystem() {
			var userAgent = navigator.userAgent || navigator.vendor || window.opera;

			// Windows Phone must come first because its UA also contains "Android"
			if (/windows phone/i.test(userAgent)) {
				return "Windows Phone";
			}

			if (/android/i.test(userAgent)) {
				return "Android";
			}

			// iOS detection from: http://stackoverflow.com/a/9039885/177710
			if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
				return "iOS";
			}

			return "non iOS/android";
		}

		function shouldFallbackToImages(str, emojiConverter) {
			var fallback = false;

			// We use those spans for width testing to check how emojis are
			// rendered
			var $testDiv = $(
			"<div style='visibility:hidden'>" +
				"<span id='char-to-check' style='font-size: 144px;'></span>" +
			"</div>" +
			"<div style='visibility:hidden'>" +
				"<span id='not-renderable-1' style='font-size: 144px;'>&#xfffd;</span>" +
			"</div>" +
			"<div style='visibility:hidden'>" +
				"<span id='not-renderable-2' style='font-size: 144px;'>&#x10ffff;</span>" +
			"</div>"
			).appendTo(document.body);

			var $checkSpan = $('#char-to-check');
			var testWidth1 = $('#not-renderable-1').width();
			var testWidth2 = $('#not-renderable-2').width();

			// Check characters we can render with js-emoji
			emojiConverter.init_unified();

			var match;
			while (match = emojiConverter.rx_unified.exec(str)) {
				var m = match[0];

				var arr = Array.from(m);
				if (arr.length > 1) {
					// We have emoji sequence - test width of separately
					// rendered characters vs width of sequence
					var totalLength = 0;
					for (var i = 0; i < arr.length; i++) {
						$checkSpan.html(arr[i]);
						totalLength += $checkSpan.width()
					}

					$checkSpan.html(m);
					// If length the same sequence were rendered as separate
					// characters - we should use image replacements
					if (totalLength == $checkSpan.width()) {
						fallback = true;
						break;
					}
				}
				else {
					// Single emoji - try to guess if it is rendered, we do this
					// by comparing it's width to width of non renderable
					// characters
					$checkSpan.html(m);
					if ($checkSpan.width() == testWidth1 || $checkSpan.width() == testWidth2) {
						fallback = true;
						break;
					}
				}
			};

			$testDiv.remove();
			return fallback;
		}
	});
})(jQuery);
