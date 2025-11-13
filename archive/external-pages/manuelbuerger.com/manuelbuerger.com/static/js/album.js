/* the whole album page thing! */
$(function(){
    var $album = $('#album');
    var $caption = $('#caption');

    var $images = $album.find('img').detach();
    var $captions = $album.find('p').detach();
    var $links = $album.find('a').detach();

    var delay = $links.data('delay') || 5000;
    
    var counter = 0;
    // add counter to slides
    $captions.each(function(){
        $('<span class="pagecount">' + (counter+1) + '/' + $images.length + '</span>')
            .appendTo(this);
        counter++;
    });

    var slides_ready = [];
    var slides = [];

    counter = 0;
    $images.each(function(){
        var img = this;

        var imgPreload = new Image();
        imgPreload.src = img.src;
        slides_ready.push(imgPreload);

        var $new_slide = $('<a class="slide">').css('background-image', 'url('+img.src+')');

        if ($links.length == $images.length)
            $new_slide.attr('href', $links.eq(counter).attr('href'))
        else
            $new_slide.attr('href', $links.eq(0).attr('href'));

        slides.push( $new_slide );
        counter++;
    });

    // align slides in pairs.
    var counter = [0,1]

    var makePair = function(){
        $('<div class="container">')
            .append(slides[counter[0]].clone().css('left', '0px'))
            .append(slides[counter[1]].clone().css('left', '100%'))
            .prependTo($album);

        $caption.prepend($captions.eq(counter[0]).clone());
        
        for(var i=0; i<counter.length; i++) {
            counter[i]++;
            if (counter[i]==slides.length) counter[i] = 0;
        }
    };

    makePair();
    $caption.find('p').eq(0).addClass('fadeIn');

    setInterval(function(){
        if(!slides_ready[counter[0]].complete) return;
        $album.find('.container').eq(1).remove();
        makePair();
        $caption.find('p').eq(1).removeClass('fadeIn');
        $caption.find('p').eq(2).remove();
        setTimeout(function(){
            $album.find('.container').eq(1).addClass('move');
            $caption.find('p').eq(0).addClass('fadeIn');
        }, 50);
    }, delay);

});