
    
    
    
$(window).load(function(){
    
    
	/** Trigger pagiantion **/
    $('#ind.load-more #posts').infinitescroll('pause');
    
		/** Trigger pagiantion **/
    $(window).trigger('resize');
    
    
    /** load more function **/

$('.load-more-container').click(function(){
        selectsPosts.infinitescroll('retrieve', function() {
            $('#posts').masonry();

        });

        $('.load-label').text('Loading...');
        $('.load-more-scroll-down').css({'opacity':'0'});
        return false;

    });

    /** load more function **/

/** scrolling **/
 $('div.scrolling').click(function() {
        $('html, body').stop().animate({
            scrollTop: 0
        }, 800);
        return false;
    });
var timer;

$(window).scroll(function() {

    /* clear the old timeout */
    clearTimeout(timer);
    /* wait until 400 ms for callback */
    timer = setTimeout(scrollEvt, 400);
});
/** scrolling **/

    
selectsPosts.masonry();
})
    
        $(document).ready(function(){
            
      
            
            
            /** Masonry container **/
            selectsPosts.masonry({ 
        itemSelector: ".post-container",
        isFitWidth: true
    });
            /** Masonry container **/
            
            /** for load more **/

    $('#ind.not-mobile.load-more:not(.this-is-tag)').find(selectsPosts).infinitescroll({
        binder: $(window),
        state: {
            isPaused: true
        },
        navSelector: "#pagination",
        nextSelector: "#pagination a.pagination_nextlink",
        itemSelector: ".post-container:not(.header)",  
        loading: {
            finishedMsg: function() {
        $('.load-label').text('No more posts');
        $('.load-more-scroll-down').css({'opacity':'0'});

            },
            msg: function() {

        $('.load-label').text('Loading...');
        $('.load-more-scroll-down').css({'opacity':'0'});
            },
        },
    }, function(t) {
        var i = $(t),
            o = 0,
            e = $(".post-container");
        a = i.map(function() {
                return this.id
            }).get(),
            o = 0,
            selectsPosts.masonry("appended", i, 1),
            Tumblr.LikeButton.get_status_by_post_ids(a),
            
            selectsPosts.imagesLoaded({
                background: true
            }, function() {
                resize();
                recall();
     customScriptRecallResize();
                if($('html').attr('data-layout').indexOf("columns") > -1){
                    fixedColumns();
                }
                setTimeout(function(){ 
            $('.load-label').text('Loaded! More?')
            $('.load-more-scroll-down').hide()
                },1200);
            })
                
    })
            
            /** for load more **/
            
            
            /** for not infinite **/
    
    
    
    $('#ind.not-mobile.infinite,#ind.this-mobile,#ind.this-is-tag').find(selectsPosts).infinitescroll({
        bufferPx: 2000 + $(window).height() / 2,
        navSelector: "#pagination",
        nextSelector: "#pagination a.pagination_nextlink",
        itemSelector: ".post-container:not(.header)",  
    }, function(t) {
        var i = $(t),
            o = 0,
            e = $(".post-container");
        a = i.map(function() {
                return this.id
            }).get(),
            o = 0,
            selectsPosts.masonry("appended", i, 1),
            Tumblr.LikeButton.get_status_by_post_ids(a),
            
            selectsPosts.imagesLoaded({
                background: true
            }, function() {
                if($('html').attr('data-layout').indexOf("columns") > -1){
                    fixedColumns();
                }
                
                recall();
                resize();
     customScriptRecallResize();
            })
                


    })
            /** for not infinite **/
    
    /** addClass attributes **/
    
    if (document.location.href.indexOf('customize') > -1) {
        html.addClass('customize');
    };
        if (document.location.href.indexOf('/page/') > -1) {
        html.addClass('in-page');
    };
    if ($('#per .post.text h3 a').text().indexOf("Not") > -1) {

        if ($('#per .post.text h3 a').text().indexOf("Found") > -1) {
        html.addClass('not-found');
    }
    }
    if(html.is('.no-results')){
        
    }
        
    /** addClass attributes **/
    
    
    
    /** Post share **/
    
    $('#posts').on('click', '.table-cell.share', function(){
        
        if($(this).parents('.post-container').is('.share-mode')){
        $(this).parents('.post-container').removeClass('share-mode');}else{
            
        $(this).parents('.post-container').addClass('share-mode')
        }
    });
    /** Post Share **/
    
    /** fix the link to href **/
    $('.href-fix a').each(function(){
        var thisAhref = $(this).attr('href');
        
            $(this).not('[href$="http"]').attr('href','https://'+thisAhref)
        
    })
    
    /** fix the link to href **/
    
    
    /** open video **/
    
    $('#posts').on('click', '.video-trigger', function(){
        
               if ($(this).parents('.post-container.video').is('.instagram-not-loaded')) {
                   window.parent.open($('blockquote.instagram-media a').attr('href'))
               }else{
               if ($(this).parents('.post-container.video').find('.video-content').attr('src') !== '') {
         $('.video-container iframe').attr('src', $(this).parents('.post-container.video').find('.video-content iframe').attr('src') + '&autoplay=1')
         
            $('.video-container').fadeIn(300).addClass('opened');
               }}
                    return false;
                     
    });
    /** open video **/
    
    /** close video **/
    
    $(document).keyup(function(e) {
        if (e.keyCode === 13) {

        if($('.video-container').is('.opened')){
            $('.video-container').fadeOut();

            $('.video-container iframe').attr('src', '')}
        }; // enter
        if (e.keyCode === 27) {

        if($('.video-container').is('.opened')){
            $('.video-container').fadeOut();

            $('.video-container iframe').attr('src', '')}
        } // esc

    });
    /** close video **/
    
/** search trigger **/

$('.search-trigger').click(function(){
    $('.search-container').fadeIn();
    return false;
})
/** search trigger **/



/** search close **/

$('.search-close').click(function(){
    $('.search-container').fadeOut();
    return false;
})
/** search close **/


    if (window.location.href.indexOf("ask-trigger") > -1) {
        $('.ask-container').fadeIn();
    }

    if (window.location.href.indexOf("submit") > -1) {
        $('.submit-container').fadeIn();
    }
    $('.ask-trigger').click(function() {
        $('.ask-container').fadeIn();
    return false;
    });
    $('.ask-container').click(function() {
        $('.ask-container').fadeOut();
    return false;
    });


    $('.submit-trigger').click(function() {
        $('.submit-container').fadeIn();
    return false;
    });
    $('.submit-container').click(function() {
        $('.submit-container').fadeOut();
    return false;
    });
    $('.close-this').click(function(){
        $('.not-found-container').fadeOut()
    })
    
    if (window.location.href.indexOf("not-found") > -1) {
        $('.not-found-container').fadeIn()
    }

         $('html').attr('data-first-width', $('#posts .post-container:first-child').width())

/** ends **/
         photoWidth =  $('html').attr('data-first-width');
    
     
     /** resize **/
     $(window).resize(function(){
         photoWidth = $('html').attr('data-first-width');
         resize();
     recall();
     
     customScriptRecallResize();
         
                if($('html').attr('data-layout').indexOf("columns") > -1){
                    fixedColumns();
                }
                selectsPosts.masonry();
                
                 $('.post iframe').each(function() {
                selectsPosts.masonry();
            });
     });
     /** resize **/
     

     /** call functions **/
     resize();
     recall();
	 selectsPosts.masonry();
     
    if($('html').attr('data-layout').indexOf("columns") > -1){
                    fixedColumns();
                }
     /** call functions **/

        selectsPosts.masonry();
             minHeightLayout();
    
        html.animate({'opacity':'1'},function(){
$('footer').show()})
    
    /** fixes disqus error **/
    if(html.is('#per')){
    var interval = setInterval(function() {
    var $ = jQuery;
    var disqusHeight = $('#disqus-container').height();
    if ( disqusHeight > 202 ) {  // height 52px is header of Disqus, more than 52px means that disqus load comments
      // Your code
        clearInterval(interval); // after loaded comment we stop this script
    }
}, 200);}
    /** fixes disqus error **/


    /** fixes disqus error **/
     customScriptRecallResize();

     customScript();
    /** fixes disqus error **/
    
    
    /** recall **/
setTimeout(function(){ recall(); }, 600);

            selectsPosts.imagesLoaded(function(){
    $(window).trigger('resize')
    /** recall **/
    postHeight()
    
            });

            /** mobile portrait **/
            
            

        })
        
        function minHeightLayout(){
            
            var winHeight;
            var layoutOffset;
            setTimeout(function(){
            winHeight = window.innerHeight;
            layoutOffset = document.getElementById('posts').offsetTop;
document.getElementById('posts').style.minHeight = winHeight - layoutOffset +'px';
            },100)
            
            
        }
        
        
        
     /** for fixed columns **/
        function fixedColumns(){
            var postPadding = root.getAttribute('data-post-padding');
            var windowWidth = $(window).width();
            var twoColumns;
            var threeColumns; 
            var fourColumns;
            var fiveColumns;
            var sixColumns;
            
            var twoColumns = $('#ind.not-mobile.two-columns:not(.this-is-tag) .post-container');
            var threeColumns = $('#ind.not-mobile.three-columns:not(.this-is-tag) .post-container');
            var fourColumns = $('#ind.not-mobile.four-columns:not(.this-is-tag) .post-container');
            var fiveColumns = $('#ind.not-mobile.five-columns:not(.this-is-tag) .post-container');
            
    if(html.is('.two-columns')){
            twoColumns.css({'width':(windowWidth/2) -  (postPadding * 2.5)+'px'})
            
    if (windowWidth < 500) {
        
            twoColumns.css({'width':windowWidth+ (postPadding * 2.5)+'px'})
    }
                
            }
            /** layout **/
            
            /** layout three columns **/
            
            if(html.is('.three-columns')){
            threeColumns.css({'width':(windowWidth/3) -  (postPadding * 2.5)+'px'})
            
    if (windowWidth < 900) {
        
            threeColumns.css({'width':(windowWidth/2) -  (postPadding * 2.5)+'px'})
    }
            
    if (windowWidth < 500) {
        
            threeColumns.css({'width':windowWidth -  (postPadding * 2.5)+'px'})
    }
            }
            /** layout three columns **/
        
            /** layout four columns **/
            
            if(html.is('.four-columns')){
            fourColumns.css({'width':(windowWidth/4) - (postPadding * 2.5) +'px'})
            
    if (windowWidth < 1200) {
        
           fourColumns.css({'width':(windowWidth/3) - (postPadding * 2.5) +'px'})
    }
    if (windowWidth < 900) {
        
            fourColumns.css({'width':(windowWidth/2) -(postPadding * 2.5) +'px'})
    }
            
    if (windowWidth < 500) {
        
            fourColumns.css({'width':windowWidth - (postPadding * 2.5) +'px'})
    }
    
            }
            /** layout four columns **/
            
            if(html.is('.five-columns')){
            fiveColumns.css({'width':(windowWidth/5) -  (postPadding * 2.5)+'px'+'px'})
            
              if (windowWidth < 1500) {
        
           fiveColumns.css({'width':(windowWidth/4) -  (postPadding * 2.5)+'px'+'px'})
    }
              if (windowWidth < 1200) {
        
           fiveColumns.css({'width':(windowWidth/3) -  (postPadding * 2.5)+'px'+'px'})
    }
    if (windowWidth < 900) {
        
            fiveColumns.css({'width':(windowWidth/2) -  (postPadding * 2.5)+'px'+'px'})
    }
            
    if (windowWidth < 500) {
        
            fiveColumns.css({'width':windowWidth -  (postPadding * 2.5) +'px'})
    }
            }
    
    
    
            /** layout four columns **/
            
            if(html.is('.six-columns')){
                
            sixColumns.css({'width':(windowWidth/6) -  (postPadding * 2.5)+'px'+'px'})
              if (windowWidth < 1900) {
            sixColumns.css({'width':(windowWidth/5) -  (postPadding * 2.5)+'px'+'px'})
              }
              if (windowWidth < 1500) {
        
           sixColumns.css({'width':(windowWidth/4) -  (postPadding * 2.5)+'px'+'px'})
    }
              if (windowWidth < 1200) {
        
           sixColumns.css({'width':(windowWidth/3) -  (postPadding * 2.5)+'px'+'px'})
    }
    if (windowWidth < 900) {
        
            sixColumns.css({'width':(windowWidth/2) -  (postPadding * 2.5)+'px'+'px'})
    }
            
    if (windowWidth < 500) {
        
            sixColumns.css({'width': (postPadding * 2.5)+'px'})
    }
            }
    
    
        }
     /** for fixed columns **/
     
     
     
        function resize(){
            
    if(root.className.indexOf('columns') !== -1){
        
            html.addClass('this-over-600-px')
    }else{
        if(photoWidth > 600){
            html.addClass('this-over-600-px')
        }else{
            
            html.removeClass('this-over-600-px')
		}
        }
            
        }
        /** recalling **/
        function recall(){
            postHeight()
            $('html#ind .post.photo').each(function(){
                
                 var thisParents = $(this).parents('html');
                 var imageSelector = $('#changeWidth', this);
                 var thisSelector = $(this);
                  
                    
                     if(root.className.indexOf('this-mobile') === -1){
                         
                  if(root.className.indexOf('not-high-res') !== -1){
                    /** desktop **/ 
                 if (photoWidth <= 300){
        imageSelector.attr('src',thisSelector.attr('data-image-element-perma'))
                       
                 }else if (photoWidth <= 400){
                
                       imageSelector.attr('src',thisSelector.attr('data-image-400'))
                                
                            }else if(photoWidth <= 500){
                
                       imageSelector.attr('src',thisSelector.attr('data-image-element-perma-ipad'))
                            }else if(photoWidth > 600){
                
                       imageSelector.attr('src',thisSelector.attr('data-image-retina'))
                            }
                                
                    /** desktop **/
                       }else {
						   imageSelector.attr('src',thisSelector.attr('data-image-retina'))
						   
                       }
                 
                 }else{
                 
                 /** mobiles **/
                    if(thisParents.is('.this-mobile.mobile-version')){
                       imageSelector.attr('src',thisSelector.attr('data-image-element-perma'))
                        
                }else if(thisParents.is('.this-mobile.tablet-version')){
                       imageSelector.attr('src',thisSelector.attr('data-image-400'))
                    }
                     
                 /** mobiles **/
                 }
                     
                           
                    
                     if(root.className.indexOf('hd-image') !== -1 && root.className.indexOf('mobile-version') !== -1){
                       imageSelector.attr('src',thisSelector.attr('data-image-retina'))
                     }
               imageSelector.removeAttr('id')
            
                    
                            
            })
            
            $('.post.video').each(function(){
                
        
        if (String($('.video-image img', this).attr('src')).indexOf("staticflickr") >= 0) {
            $(this).parents('.post-container').addClass('flickr')
        }
        
        
        if (String($('.video-image img', this).attr('src')).indexOf("instagram") >= 0) {
            if($('blockquote', this).is('.instagram-media')){
               $(this).parents('.post-container').addClass('instagram-not-loaded')
            }else{
                
            $(this).parents('.post-container').addClass('instagram')
            }
        }
    
        
        if (String($('.video-image img', this).attr('src')).indexOf("vine") >= 0) {
            $(this).parents('.post-container').addClass('vine')
        }
          if (String($('.video-content iframe', this).attr('src')).indexOf("vimeo") >= 0) {
            $(this).parents('.post-container').addClass('vimeo')
        }
            })
            
            
            /** page bug **/
       if(html.is('.this-is-page')){     
    $('.inner_container img').each(function() {
        var text = String($(this).attr('src'))
        $(this).attr('src', text.replace('500', '1280'))
    })}
            /** page bug **/
            
            
            
            /** infinite scroll smooth loading **/
            $("#ind #posts .not-animated").each(function(index) {
                var thisPost = $(this);
            $(this).delay(100).delay(50 * index).velocity({
                '': ''
            }, 0, function() {
                    
                
            thisPost.imagesLoaded(function(){
                thisPost.find('.reblogged.index').show();
                    thisPost.find('ol#post_ul').css({
                    'opacity': '1'
                })
				
        selectsPosts.masonry();
        
            })
                
                
                    thisPost.removeClass('not-animated')
                
            });

    });
            /** infinite scroll smooth loading **/



        }
        /** recalling **/
        
        function postHeight(){
            
            
            $('#posts .photo-content').each(function(){
                 var imageSelector = $('.post-height', this);
             if(imageSelector.width() <= photoWidth){
                 imageSelector.addClass('more-height')
             }
            });
            
        }
        
        
function scrollEvt() {
    /* scroll actions */
    
        if ($(window).scrollTop() > $(window).height()) {
            $('.scrolling').fadeIn();

        } else {
            $('.scrolling').fadeOut();

        }
           if(html.is('#per')){
   if($(window).scrollTop() + $(window).height() > $(document).height() - 200) {
                selectsPosts.masonry();
                $(window).trigger('resize')
        }
        
   if($(window).scrollTop() + $(window).height() > $(document).height() - 100) {
                selectsPosts.masonry();
                $(window).trigger('resize')
        }}
        
} 

	
    /** Lightbox **/
        $(document).ready(function(e){
            
    var selectorLightbox = '.hover-search';
    var lightboxpluginContainer = $('.lightbox-plugin');
    var boxImage = $('.lightbox-image-share');
$('#posts').on('click', selectorLightbox,function(){
    
  var newValuePlus = parseInt($('.lightbox-plugin').attr('data-number'));
  var thisSe = $(this);
    html.addClass('lightbox-on')
    
    
    $('.lightbox-link img').attr('src',$(this).attr('data-lightbox'))
    $('.lightbox-image-share').css({'width': thisSe.attr('data-width')+'px'})
    
    imageReposition()
            boxImage.imagesLoaded(function(){
                
    imageReposition()
            });
    


    lightboxpluginContainer.find('.lightbox-link,.lightbox-plugin #share-perma a').attr('href',thisSe.attr('data-lightbox-link'))
    
    
    
    lightboxpluginContainer.find('#share-reblog a').attr('href',thisSe.attr('data-reblog'))
    
      lightboxpluginContainer.find('#share-pinterest a').attr('href', thisSe.attr('data-pinterest'))
        
    lightboxpluginContainer.find('#share-facebook a').attr('href', thisSe.attr('data-facebook'))
    lightboxpluginContainer.find('#share-twitter a').attr('href', thisSe.attr('data-twitter'))
    
    if(thisSe.attr('data-reblog-avatar')){
    lightboxpluginContainer.find('#reblog-avatar-lightbox img').attr('src',thisSe.attr('data-reblog-avatar'))
    lightboxpluginContainer.find('a#reblogurl').attr('href', thisSe.attr('data-reblog-url')).text(thisSe.attr('data-reblog-name'))}else{
        $('.lightbox-plugin .reblogged.index').addClass('remove-reblog');
    }
    
    
    
    
	$('#posts').children('#ind .post-container').each(function(index) {
	  $(this).attr('data-number',$(this).index('#ind .post-container'))  
	})

    lightboxpluginContainer.attr('data-number-fade',newValuePlus)
    


    })
 
	
    
        $('#close,.lightbox-plugin').click(function(){
            
    root.classList.remove('lightbox-on');
        })
        
  boxImage.click(function(event){
     event.stopPropagation();
 });
 
 
function imageReposition(){
    var contentHeight = ($(window).height()/2) +  - (boxImage.height()/2);
    
    if( contentHeight > 0) {
    boxImage.css({'margin-top':contentHeight + 'px'})
    boxImage.css({'margin-bottom':contentHeight + 'px'})
}else{
    boxImage.css({'margin-top':60 + 'px'})
    boxImage.css({'margin-bottom':60 + 'px'})
    
}

}
})
 
     
/** Lightbox **/
        
function customScriptRecallResize(){
         
     }
     
        
function customScript(){
         
}