$(function() {

    $('div.footnotes').addClass('footnotes-side');
    var moved = false;
    var place_footnotes = function() {
        var minTop = 0;
        $('div.footnotes > ol > li').each( function() {
        
            var anchor = this.id;
            var fnAnchor = null;
            
            if(moved) {
                fnAnchor = $('span.fn[data-ref='+anchor+']')
            } else {
                fnAnchor = $('a[href=#'+anchor+']')
            }

            var top = fnAnchor.parents('p, blockquote').position().top;
            
            top = Math.max(top, minTop);
            
            var fnHeight = $(this).css('top', top).height();
        
            minTop = top+fnHeight;
            
            if(!moved) {
                fnAnchor.replaceWith(function(){ 
                    return '<span class="fn" data-ref="'+anchor+'">'+$(this).text()+'</span>';
                });
            }
        
        });
    };
    
    place_footnotes();
    moved = true;
    $(window).bind('resize', place_footnotes);

});
