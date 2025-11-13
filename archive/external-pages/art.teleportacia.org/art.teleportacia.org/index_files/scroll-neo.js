$(function() {

    var COTU = $('#CenterOfTheUniverse');
    var BOOKS = $('#Books');
    var OBSERV = $('#Observation');
    var SKIP = $('#SkipIntro');
    var VIEW = $('#View');
    var SCROLL_STATE = false;

    var COTUpos = {left:3000, top: 5000};

    COTU.css({position: 'absolute', left: COTUpos.left +'px', top: COTUpos.top +'px'});

    $('#Teleportation, #View')
        .bind('click', function() {
            var goal = $('#CenterOfTheUniverse').offset();
            SCROLL_STATE = true;
            VIEW.fadeOut();
            $('body, html')
                .stop()
                .clearQueue()
                .animate({scrollTop: goal.top, scrollLeft: goal.left-12}, 2000, function() {
                    location.hash = 'CenterOfTheUniverse';
                    SCROLL_STATE = false;
                });
            return false;
        });
        
    $('#TeleportationBack')
        .bind('click', function() {
            var goal = $('#SkipIntro').offset();
            SCROLL_STATE = true;
            $('body, html')
                .stop()
                .clearQueue()
                .animate({scrollTop: goal.top, scrollLeft: goal.left}, 2000, function() {
                    location.hash = '';
                    SCROLL_STATE = false;
                });
            return false;
        });
 
    
    window_jq = $(window);
    VIEW_STATE = false;
    VIEW.hide();
    setTimeout(function() {
        window_jq.bind('scroll', function() {
            if(!isScrolledIntoView(COTU) && 
               !isScrolledIntoView(SKIP) && 
               !isScrolledIntoView(BOOKS) && 
               !isScrolledIntoView(OBSERV) &&
               !SCROLL_STATE) {
                if(VIEW_STATE == false) {
                    VIEW_STATE = 'animate';
                    VIEW.fadeIn(1000, function() {
                        VIEW_STATE = true;
                    });
                }
            } else {
                if(VIEW_STATE == true) {
                    VIEW_STATE = 'animate';
                    VIEW.fadeOut(1000, function() {
                        VIEW_STATE = false;
                    });
                }
            }
        
        });
    }, 1000);
    
    
    
    function isScrolledIntoView(elem){
        var docViewTop = window_jq.scrollTop();
        var docViewBottom = docViewTop + window_jq.height();
        
        var docViewLeft = window_jq.scrollLeft();
        var docViewRight = docViewLeft + window_jq.width();

        var elemTop = elem.offset().top;
        var elemBottom = elemTop + elem.height();
        
        var elemLeft = elem.offset().left;
        var elemRight = elemLeft + elem.width();

        return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemRight >= docViewLeft) && (elemLeft <= docViewRight));
    }
                                                                       
});
