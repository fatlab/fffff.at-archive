


    $(window).load(function(){
   /** Instafeed.js plugin controller **/
        if($('#instagram-feed').attr('data-instagram-accesstoken') == ''){
            
    if ( document.location.href.indexOf('customize') > -1 ) {
        
        var instagramToken = '5602567692.1677ed0.c4162d5bc1594e61ba01f3441624def0';
        var datauserID = instagramToken.split('.')[0];
    }
        }else{
            
        
        var instagramToken = $('#instagram-feed').attr('data-instagram-accesstoken');
        var datauserID = instagramToken.split('.')[0];
        }
    var feed = new Instafeed({
        get: 'user',
        userId: datauserID,
        accessToken: instagramToken,
        target: 'instagram-feed',
        limit: 8,
        resolution: 'low_resolution',
        after: function(){
            $('.instagram-feed-container').show()
            $('.instagram-feed-container a').attr('target','_blank')
        }
    });
    
        /** Ren feed **/
	feed.run();
        /** Ren feed **/
        /** Instafeed.js plugin controller **/

		})
    
    
    $(document).ready(function(){
        
    $('.tmblr-iframe').attr('id','tumblr_controls')
        $(window).scroll(function(){
            $('.haha').css({'position':'fixed'})
        })
    $(window).resize(function(){
        themeElement()
    });
    $('.not-mobile .menu-trigger').live('click', function(){
        $('.trigger-buttons,.max-width-fix,footer,.salvia-header,.scrolling,.copyrighting,.load-more-container,.paginate-it-container').css({'transform':'translateX(260px)'})
        $('.hidden-menu').css({'transform':'translateX(260px)'})
        $(this).attr('data-icon',$(this).attr('close-icon'))
        $(this).addClass('opened')
    })
    $('.not-mobile .menu-trigger.opened').live('click', function(){
        $('.trigger-buttons,.max-width-fix,.salvia-header,footer,.scrolling,.copyrighting,.load-more-container,.paginate-it-container').css({'transform':'translateX(0px)'})
        $('.hidden-menu').css({'transform':'translateX(0px)'})
        $(this).attr('data-icon',$(this).attr('original-icon'))
        $(this).removeClass('opened')
    })
    
    
    $('.this-mobile .menu-trigger').live('click', function(){
        $('.hidden-menu').css({'transform':'translateX(260px)'})
        $(this).attr('data-icon',$(this).attr('close-icon'))
        $(this).addClass('opened')
    })
    $('.this-mobile .menu-trigger.opened').live('click', function(){
        $('.hidden-menu').css({'transform':'translateX(0px)'})
        $(this).attr('data-icon',$(this).attr('original-icon'))
        $(this).removeClass('opened')
    }) 
    $('.hidden-menu-close').click(function(){
        
        $('.hidden-menu').css({'transform':'translateX(0px)'})
        $('.this-mobile .menu-trigger.opened').attr('data-icon',$('.this-mobile .menu-trigger.opened').attr('original-icon'))
        $('.this-mobile .menu-trigger.opened').removeClass('opened')
    })
    
        themeElement();
		
    });
    
 function themeElement() {
     $('.header').css({'height':$(window).height()+'px'})
        var occupationSize = 0;
        $('.salvia-occupations a').each(function(){
            occupationSize += $(this).width() + 50;
        })
        if($(window).width() < occupationSize + 40){
            $('.salvia-header').removeClass('this-not-overflow').addClass('this-overflow')
        }else{
            
            $('.salvia-header').addClass('this-not-overflow').removeClass('this-overflow')
        }
        
        
		}
		
function customScriptRecallResize(){
         
     }
     
        
function customScript(){
         
}