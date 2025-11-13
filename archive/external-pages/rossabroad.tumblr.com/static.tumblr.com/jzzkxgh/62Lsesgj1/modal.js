/*
    stash Modal
    Version: 1.5
    Development
    
    http://stashthemes.com
*/
(function($) {
	$window = $(window);
    manualState = true;
	clickDisabled = false;
	stashContent = $(".stash-container .stash-content");
	stashControls = $(".stash-controls");
	stashCaption = $('.stash-caption');
	stashCaptionInner = $('.stash-caption .inner');
    noMorePosts = false;
	load = new TimelineMax();
	var TUMBLR_API_KEY = "5c9EqEvjoBVXriaQDOluhj9kUOElq0oIl9EQCxSWTmQ0Ifk7Cs";

	$(window).load(function() {
		var History = window.History,
			State = History.getState();
	});

	document.onmousemove = function(e) {
		e = e || window.event;

		if ( $('html').hasClass('modal-open') ) {
			var windowWidth = $(window).width(),
				newWindowWidth = windowWidth - 120,
				windowHeight = $(window).height(),
				thisImg = $('.stash-content img');
				// thisImgWidth = thisImg.width(),
				// thisImgHeight = thisImg.height(),
				// range = { 
				// 	X: ((thisImgWidth - newWindowWidth) / newWindowWidth),  
				// 	Y: ((thisImgHeight - windowHeight) / windowHeight) 
				// },
				// cursor = { 
				// 	X: thisImgWidth > newWindowWidth ? e.pageX * range.X : 0, 
				// 	Y: thisImgHeight > windowHeight ? e.clientY * range.Y : 0
				// };

		  //       if ( thisImg.width() > windowWidth ) {
				// 	stashContent.addClass('big-width');
				// } else {
				// 	stashContent.removeClass('big-width');
				// }
		  //       if ( thisImg.height() > windowHeight ) {
		  //       	stashContent.addClass('big-height');
		  //       } else {
		  //       	stashContent.removeClass('big-height');
		  //       }

			// TweenLite.to( thisImg, 3, { y: -Math.abs(cursor.Y), ease: Expo.easeOut });

		}
	}

	$(document).on('click', '.stash-overlay .open-modal', function(e){
		clickDisabled = true;
	});

	$(document).on('click', '.post-photo .media > a, .open-modal, .photoset-count', function(e){
		if (clickDisabled) return;
		e.preventDefault();
		var thisID = $(this).attr('data-id'),
			thisPostType = $('#' + thisID).attr('data-pt');
		postRequest(thisID, 1);
		nextPost(thisID, true, thisPostType);
		manualState = false;
		clickDisabled = true;
		setTimeout(function(){clickDisabled = false;}, 500);

	});

	$('.stash-back-btn, .close, .go-back, .close-modal, .close-mobile-modal, .progress-indicator').on('click', function(e){
		if (clickDisabled) return;
		var History = window.History,
			State = History.getState(),
			thisID = State.data.id,
			stateData = { id:2, state: 0 },
        	title = TUMBLR_TITLE,
        	url = TUMBLR_URL;
		closeModal(thisID);
		History.pushState(stateData, title, url);
        manualState = false;
		clickDisabled = true;
		setTimeout(function(){clickDisabled = false;}, 500);
	});

	$('.stash-navigation .stash-next-btn, .stash-navigation .stash-prev-btn').on('click', function(e){
		if (clickDisabled) return;
		var History = window.History,
			State = History.getState(),
			thisID = $(this).attr('post-id'),
			thisPostType = $(this).attr('data-pt'),
			currID = State.data.id;
		$('.stash-caption').removeClass('visible');
		$('.stash-caption .inner').empty();
		$('#' + currID).removeClass('modal-active');
		postRequest(thisID, 2);
		nextPost(thisID, false, thisPostType);
		manualState = false;
		clickDisabled = true;
		setTimeout(function(){clickDisabled = false;}, 500);
	});

    $('body, .stash-overlay').click(function(e) {
        if (!$(e.target).closest('.photo-inner img, .stash-post-meta, .stash-back-btn, .stash-navigation, .stash-container .inside').length && $('html').hasClass( "modal-open" )){
			if (clickDisabled) return;
			var History = window.History,
				State = History.getState(),
				thisID = State.data.id,
				stateData = { id:2, state: 0 },
	        	title = TUMBLR_TITLE,
	        	url = TUMBLR_URL;
			closeModal(thisID);
			History.pushState(stateData, title, url);
	        manualState = false;
			clickDisabled = true;
			setTimeout(function(){clickDisabled = false;}, 500);
        }
    });


    function openCaption() {
    	disablePostScrolling();
		$('.stash-post-meta .post-meta').addClass('active');	
    }

    function closeCaption() {
		  if (isCaptionOpen)
		    return;
		enablePostScrolling();
		load.to( stashCaption, 1, { left: -Math.abs($('.stash-caption').outerWidth()), ease: Expo.easeInOut })
		.to($('.stash-post-meta .post-meta'), 1, { ease:Linear.easeNone });
		$('.stash-post-meta .post-meta').removeClass('active');
    }

    function modalPostScrollAmount() {

       // Project Loading Indicator

        var $prog2 = $('.progress-indicator-2');
        function updateProgress(perc){
            $prog2.css({width : perc*100 + '%'});
        }

        (function(){
            var $w = $('.stash-overlay');
            var $circ = $('.animated-circle');
            var $progCount = $('.progress-count');
            var $prog2 = $('.progress-indicator-2');
            var wh = $w.height();
            var h = $('.stash-container').outerHeight();
            var sHeight = h - wh;
            $w.on('scroll', function(){
                var perc = Math.max(0, Math.min(1, $w.scrollTop()/sHeight));
                updateProgress(perc);
            });
         
            function updateProgress(perc){
                var circle_offset = 126 * perc;
                $circ.css({
                    "stroke-dashoffset" : 126 - circle_offset
                });
                $progCount.html(Math.round(perc * 100) + "%");
         
                $prog2.css({width : perc*100 + '%'});
            }
         
        }());
    }


   //  $('body').click(function(e) {
   //      if (!$(e.target).closest(stashCaption).length && $('.stash-post-meta .post-meta').hasClass('active')){
			// function removeActive(){
			// 	$('.stash-post-meta .post-meta').removeClass('active');
			// }
  	// 		load.to( stashCaption, 1, { left: -Math.abs($('.stash-caption').outerWidth()), ease: Expo.easeInOut })
			// 	.to($('.stash-post-meta .post-meta'), .4, { ease:Linear.easeNone, onComplete: removeActive });	
   //      }
   //  });
	$(document).keyup(function(e) {
		if (clickDisabled) return;
		var History = window.History,
			State = History.getState(),
			thisID = State.data.id,
			prevPostType = $('.stash-navigation .stash-prev-btn').attr('data-pt'),
			prevID = $('.stash-navigation .stash-prev-btn').attr('post-id'),
			nextPostType = $('.stash-navigation .stash-next-btn').attr('data-pt'),
			nextID = $('.stash-navigation .stash-next-btn').attr('post-id'),
			stateData = { id:2, state: 0 },
        	title = TUMBLR_TITLE,
        	url = TUMBLR_URL;
        if ( $('html').hasClass('modal-open') ) {
			if (e.keyCode == 27 ) {
				// ESC
				closeModal(thisID);
				History.pushState(stateData, title, url);
			}
			if (e.keyCode == 37 || e.keyCode == 38) {
				// LEFT - UP
				$('.stash-caption').removeClass('visible');
				$('.stash-caption .inner').empty();
				$('#' + thisID).removeClass('modal-active');
				postRequest(prevID, 2);
				nextPost(prevID, false, prevPostType);
			}
			if (e.keyCode == 39 || e.keyCode == 40) {
				// RIGHT - DOWN
				$('.stash-caption').removeClass('visible');
				$('.stash-caption .inner').empty();
				$('#' + thisID).removeClass('modal-active');
				postRequest(nextID, 2);
				nextPost(nextID, false, nextPostType);
			}
	        manualState = false;
	        clickDisabled = true;
			setTimeout(function(){clickDisabled = false;}, 700);
		}
	});

	function postRequest(postID, dataState) {
		var History = window.History,
			State = History.getState();
		$.ajax({
		    type: 'GET',
		    url: "https://api.tumblr.com/v2/blog/" + TUMBLR_HOSTNAME + "/posts?api_key=" + TUMBLR_API_KEY + "&notes_info=true&id=" + postID,
		    dataType: 'jsonp'
		}).done(function(data) {
			var thisID = data.response.posts[0].id_string,
		    	postURL = TUMBLR_URL + "post/" + thisID + "/" + data.response.posts[0].slug,
        		postTitle = TUMBLR_TITLE + " - " + data.response.posts[0].summary,
        		thisPostType = data.response.posts[0].type,
		    	contentLoad = new TimelineMax();

			if ( thisPostType == "photo" ) {
				if ( data.response.posts[0].photoset_layout ) thisPostType = "photoset";
			}

		    var stateData = { id:thisID, state: dataState, postType: thisPostType };


		    if(modalOpen == true) {
				stashCaptionInner.append("<div class='caption'></div>");
			
				// Caption
				if ( data.response.posts[0].caption != "" && typeof data.response.posts[0].caption != "undefined" ) {
					stashCaptionInner.find('.caption').append( data.response.posts[0].caption);
				} else {
					// Caption New
					var thisCaption = $('#' + thisID).find('.content').html();
					stashCaptionInner.find('.caption').append(thisCaption);
				}

				stashCaptionInner.append( "<div class='post-meta'><div class='inner cl'><div class='meta'></div></div></div>" );
	  
	        	// Post date / note count
				stashCaption.find('.post-meta .meta').append("<time class='meta-date'></time>");
		        var rawDate = data.response.posts[0].date.slice(0,10),
	       			postDate = $.datepicker.formatDate('d MM yy', new Date( rawDate ));
		        var postDateHTML =  "Posted on: <a href='" + data.response.posts[0].post_url + "'>" + postDate + "</a> ";
		        stashCaption.find('.meta-date').append( postDateHTML );
		        // var postNotesHTML =  " <a class='meta-notes' href='" + data.response.posts[0].post_url + "#notes" + "'>" + data.response.posts[0].note_count + " notes" + "</a>";
		        // stashCaption.find('.meta-date').append( postNotesHTML );
		        $('.more-note-count').text(data.response.posts[0].note_count + ' notes');
		    } else {
		    	setTimeout(function(){
					stashCaptionInner.append("<div class='caption'></div>");

					// Caption
					if ( data.response.posts[0].caption != "" && typeof data.response.posts[0].caption != "undefined" ) {
						stashCaptionInner.find('.caption').append( data.response.posts[0].caption);
					} else {
						// Caption New
						var thisCaption = $('#' + thisID).find('.content').html();
						stashCaptionInner.find('.caption').append(thisCaption);
					}

					stashCaptionInner.append( "<div class='post-meta'><div class='inner cl'><div class='meta'></div></div></div>" );
		  
		        	// Post date / note count
					stashCaption.find('.post-meta .meta').append("<time class='meta-date'></time>");
			        var rawDate = data.response.posts[0].date.slice(0,10),
		       			postDate = $.datepicker.formatDate('d MM yy', new Date( rawDate ));
			        var postDateHTML =  "Posted on: <a href='" + data.response.posts[0].post_url + "'>" + postDate + "</a> ";
			        stashCaption.find('.meta-date').append( postDateHTML );
			        // var postNotesHTML =  " <a class='meta-notes' href='" + data.response.posts[0].post_url + "#notes" + "'>" + data.response.posts[0].note_count + " notes" + "</a>";
			        // stashCaption.find('.meta-date').append( postNotesHTML );
			        $('.more-note-count').text(data.response.posts[0].note_count + ' notes');
			    }, 1000);
		    }


			if(SHOW_POST_NOTES == true) {
		   		// Notes
		   		stashCaptionInner.append('<div class="post-notes"></div>');
		   		$('.post-notes').load(postURL + ' #post-notes-url', function(s, si, j){
			   		j.done(function(){
		   				ntsURL = $('#post-notes-url').val();
			   		});
			   	});


		   		setTimeout(function(){
			   		$('.post-notes').load(ntsURL);
		   		},1000);
			}

	   		// Share
			var shareBtns = $('#' + thisID + ' .post-meta .share').clone();
			$('.stash-post-meta .post-meta .inner').append(shareBtns);

			$('.stash-navigation .stash-show-share').remove();
			var modalShareBtns = $('#' + thisID + ' .stash-show-share').clone();
			$('.stash-navigation').append(modalShareBtns);

			History.pushState(stateData, postTitle, postURL);
		});
	}

	function closeModal(thisID) {
		var	load = new TimelineMax();
		$('html').removeClass('modal-open');

		TweenLite.to($('.stash-overlay'), 0.7, {y:'100%', ease:Power3.easeInOut, force3D:true, onComplete: completeClose});
	    TweenLite.to($('.dark-overlay'), 0.7, {opacity:0, ease:Power2.easeOut, onComplete:closeDarkOverlay});

	    function closeDarkOverlay() {
	    	$('.dark-overlay').css('visibility', '');
	    }

		function completeClose() {
			$('.more-note-count').empty();
			$('.stash-overlay').attr('class', 'stash-overlay');
			$('#' + thisID).removeClass('modal-active');
			$('.stash-caption, .stash-content').removeClass('visible');
			$('.stash-caption .inner, .stash-content').empty();	
			$('.stash-container').removeAttr('style');
		}
	  //   load
			// .to( $('.stash-post-meta .close, .stash-post-meta .post-meta'), 1, { opacity: 0, ease: Expo.easeInOut });

		// TweenLite.to($('.stash-overlay'), 0.5, {y:'100%', opacity:0, force3D:true, ease:Power3.easeInOut});

		enablePostScrolling();
	}

	function nextPost(thisID,open,thisPostType) {
		disablePostScrolling();
		var	scrollTop = $window.scrollTop(),
			stashContainer = $(".stash-container"),
			nextIDS = $('article#' + thisID).nextAll().slice(0, 3),
			prevIDS = $('article#' + thisID).prevAll().slice(0, 3),
   			nextID,
        	prevID,
        	nextPostType,
        	prevPostType,
        	windowCentDiv = $('#' + thisID).offset().top - 80;

        if ( nextIDS.length <= 1 ) {
        	if (!noMorePosts) {
				$("#stash-post-loader").trigger("click");
        	}
        } else if ( nextIDS.length == 0 ) {
        	noMorePosts = true;
        }

		$.each(nextIDS, function(i,v){
			if ( i === 0 && v.localName == 'article' ) {
				nextID = v.attributes["data-id"].value;
				nextPostType = v.attributes["data-pt"].value;
				return (i !== 0);
			} else if ( i === 1 && v.localName == 'article' ) {
				nextID = v.attributes["data-id"].value;
				if (v.attributes["data-pt"]) {
					nextPostType = v.attributes["data-pt"].value;
				}
			}
		});
		$.each(prevIDS, function(i,v){
			if ( i === 0 && v.localName == 'article' ) {
				prevID = v.attributes["data-id"].value;
				prevPostType = v.attributes["data-pt"].value;
				return (i !== 0);
			} else if ( i === 1 && v.localName == 'article') {
				prevID = v.attributes["data-id"].value;
				if (v.attributes["data-pt"]) {
					prevPostType = v.attributes["data-pt"].value;
				}
			}
		});	

		$('html').addClass('modal-open');
		$('#' + thisID).addClass('modal-active');
        	
        // caption fixes
		$(".stash-post-meta .post-meta").removeClass('active');
		// $('.stash-caption').empty();

		windowHeight = $window.height();

		$('.stash-navigation .stash-prev-btn').attr({
			'post-id': prevID,
			'data-pt': prevPostType
		});
        $('.stash-navigation .stash-next-btn').attr({
        	'post-id': nextID,
			'data-pt': nextPostType
        });

        mainTrans(open, thisPostType, thisID);
   //      setTimeout(function(){
			// TweenLite.to( window, .3, {scrollTo:{y: windowCentDiv-20 }, ease:Power2.easeOut});
   //      }, 1400);

	}
	function mainTrans(open, thisPostType, thisID) {
        if ( open == true ) {
			stashContent.empty().append("<div class='coverlay' />");
			$('.stash-overlay').addClass(thisPostType);
			$('.stash-overlay').addClass('visible');
			TweenLite.to($('.stash-overlay'), 0.7, {y:'0%', delay:0.4, force3D:true, ease:Power3.easeOut});
	    	TweenLite.to($('.dark-overlay'), 0.7, {opacity:1, delay:0.2, visibility:'visible', ease:Power2.easeOut});

			setTimeout(function(){
			    load
			    	// .to( $('.stash-overlay'), 0.7, { opacity: 1, ease:Linear.easeNone })
					.to( $('.stash-post-meta .close, .stash-post-meta .post-meta'), 1, { opacity: 1, ease: Linear.easeNone });
			}, 0);
			
			postTypes(thisPostType, thisID);
	    	
	    } else {
		    function completeAni() {
				$('.stash-content .coverlay').next().wrap("<div class='ol'></div>");
				function deletes(){
					stashContent.attr('style', '');
					stashContent.find('.ol').remove();
					postTypes(thisPostType, thisID);
				}
			    load.to( stashContent.find('.ol'), .3, { opacity: 0, ease:Expo.easeInOut, onComplete: deletes });
		    }
			$('.stash-overlay').attr('class', 'stash-overlay visible ' + thisPostType );
			load.to( stashContent, .3, { opacity: 0, ease:Expo.easeInOut, onComplete: completeAni });
		}
	}
	function postTypes(thisPostType, thisID) {
		var	thisDiv = $('#' + thisID),
			thisA = $('#' + thisID + ' a'),
			thisImgSrc = $('#' + thisID + ' a img').attr('src');
			hqImage = $('#' + thisID + ' a img').attr('data-img-hq');

		if (thisPostType == "photo") {

			stashContent.append("<div class='inner'><div class='photo-inner'><img src='" + thisImgSrc + "'></div></div>");


			setTimeout(function(){
    			load
    				.to( stashContent, .7, { opacity: 1, ease:Expo.easeInOut });
			}, 200);


   //      	if ( $window.width() >= 740 ) {
			// }
		} else if (thisPostType == "photoset") {
			var photosetContent = thisDiv.find('.stash-photoset').clone(false);
			photosetContent.removeClass('cps').addClass('ips');

			stashContent.append("<div class='nu' style='opacity: 0'></div>");
			stashContent.find('.nu').append(photosetContent);
			
	    	$('.nu .stash-photoset').unwrap();
        	$('.stash-content .stash-photoset .photoset-count span').text('1');
        	$('.stash-content .stash-photoset .photo-slideshow').attr('style', '');
        	$('.stash-content .stash-photoset .single-photoset').attr('style', '').removeClass('active');
        	stashContent.find('.stash-photoset').stashIPS();
        	$('.stash-content .stash-photoset').css({'height':'', 'width':''});

        	setTimeout(function(){
				$( ".stash-overlay .single-photoset" ).each(function(i, v) {
					console.log(i);
					console.log(v);
				  var thisHqImage = $(this).children('img').attr('data-img-hq');
				  $(this).children('img').attr('src', '');
				  $(this).children('img').attr('src', thisHqImage);
				});
			}, 500);

	    	function unwrappp(){

	    	}

			load
				.to( stashContent.find('.nu'), .7, { opacity: 1, ease:Expo.easeInOut })
				.to( stashContent, .7, { opacity: 1, ease:Expo.easeInOut });

		} else if (thisPostType == "video") {
			var elseContent = thisDiv.find('.inside').clone();
			
			elseContent.find('.post-meta, .content').remove();

			stashContent.append("<div class='nu' style='opacity: 0'></div>");
			stashContent.find('.nu').append(elseContent);

	    	function unwrapa(){
	    		$('.nu .inside').unwrap();
				// $('.stash-content').css({'height':'', 'width':''});
	    	}

    			load
    				.to( stashContent.find('.nu'), .7, { opacity: 1, ease:Expo.easeInOut })
    				.to( stashContent, .7, { opacity: 1, ease:Expo.easeInOut, onComplete: unwrapa });

		} else if (thisPostType == "audio") {
			var elseContent = thisDiv.find('.inside').clone();
			
			elseContent.find('.post-meta, .content').remove();

			stashContent.append("<div class='nu' style='opacity: 0'></div>");
			stashContent.find('.nu').append(elseContent);

	    	function unwrapa(){
	    		$('.nu .inside').unwrap();
				// $('.stash-content').css({'height':'', 'width':''});
	    	}

    			load
    				.to( stashContent.find('.nu'), .7, { opacity: 1, ease:Expo.easeInOut })
    				.to( stashContent, .7, { opacity: 1, ease:Expo.easeInOut, onComplete: unwrapa });

		} else {
			var elseContent = thisDiv.find('.inside').clone();
			
			elseContent.find('.post-meta').remove();

			stashContent.append("<div class='nu' style='opacity: 0'></div>");
			stashContent.find('.nu').append(elseContent);

	    	function unwrapa(){
	    		$('.nu .inside').unwrap();
				// $('.stash-content').css({'height':'', 'width':''});
	    	}

    			load
    				.to( stashContent.find('.nu'), .7, { opacity: 1, ease:Expo.easeInOut })
    				.to( stashContent, .7, { opacity: 1, ease:Expo.easeInOut, onComplete: unwrapa });

		}
	}
    History.Adapter.bind( window, 'statechange', function() {
		if (clickDisabled) return;
		var History = window.History,
			State = History.getState(),
			savedStates = History.savedStates,
			prevUrlIndex = savedStates.length - 2;
			
		if ( manualState == true ) {
			if (State.data.state === 0) {
				var thisID = savedStates[prevUrlIndex].data.id;
				closeModal(thisID);
			} else  {
				var thisID = State.data.id,
					thisPostType = State.data.postType;
				postRequest(thisID, State.data.state);
				if ( $('html').hasClass('modal-open') ) {
					nextPost(thisID, false, thisPostType);
				} else {
					nextPost(thisID, true, thisPostType);
				}
			}
		}
		manualState = true;
    });

	// Stop/Start Scroll

	function disablePostScrolling() {

	    var selScrollable = '.stash-overlay, .stash-caption';
	    // Uses document because document will be topmost level in bubbling
	    $(document).on('touchmove',function(e){
	      e.preventDefault();
	    });
	    // Uses body because jQuery on events are called off of the element they are
	    // added to, so bubbling would not work if we used document instead.
	    $('body').on('touchstart', selScrollable, function(e) {
	      if (e.currentTarget.scrollTop === 0) {
	        e.currentTarget.scrollTop = 1;
	      } else if (e.currentTarget.scrollHeight === e.currentTarget.scrollTop + e.currentTarget.offsetHeight) {
	        e.currentTarget.scrollTop -= 1;
	      }
	    });
	    $('body').on('touchmove', selScrollable, function(e) {
	        // Only block default if internal div contents are large enough to scroll
	        // Warning: scrollHeight support is not universal. (http://stackoverflow.com/a/15033226/40352)
	        if($(this)[0].scrollHeight > $(this).innerHeight()) {
	            e.stopPropagation();
	        }
	    });

	}

	function enablePostScrolling() {
	    $(document).off('touchmove');
	    $('body').off('touchmove touchstart', '.stash-overlay, .stash-caption')
	}

})(jQuery);