$(function() {

    var birdseye = function() {
        var w = {dimensions: {}}; // window
        var d = {dimensions: {}}; // document
        
        w['dimensions']['width']  = $(window).innerWidth();
        w['dimensions']['height'] = $(window).innerHeight();
        
        d['dimensions']['height'] = $('body').height();
        
        if(d.dimensions.height < (3*w.dimensions.height)) return;

        var canvas_width = 40; //*(w.dimensions.height/w.dimensions.width); //Math.round(w.dimensions.width/20);

        window.env = {}; // global var!!

        window.env.scale_x = canvas_width / w.dimensions.width;
        window.env.scale_y = w.dimensions.height / d.dimensions.height;

        $('#birdseye').remove();
        
        var canvas = $('<canvas id="birdseye">')
            .attr('height', w.dimensions.height)
            .attr('width', canvas_width)
            //.hide()
            .appendTo('body')[0];
            
        ctx = canvas.getContext('2d');
        
        var selectors = [
            {s:'p',                c:'#999'},
            {s:'div.footnotes li', c:'#666'},
            {s:'h1 > span, header ol li span',    c:'#000'},
            {s:'figure',           c:'#ccc'},
            {s:'a:link',           c:'#00f'},
            {s:'blockquote',       c:'#cc9'},
            {s:'q',                c:'#cc9'},
            {s:'strong',           c:'#000'},
            {s:'div.divider',      c:'#663'},
        ]
        
        for (var i=0; i<selectors.length; i++) {
            $(selectors[i].s).each(function() {
                var element = $(this);
                var coords = element.offset();
                var width = element.width();
                var height = element.height();
            
                ctx.fillStyle = selectors[i].c;
                
                ctx.fillRect (coords.left*window.env.scale_x, coords.top*window.env.scale_y, width*window.env.scale_x, height*window.env.scale_y)
            });
        }
        
        $('img').each(function() {
            
            var element = $(this);
            
            element.bind('load', function() {
                var coords = element.offset();
                var width = element.width();
                var height = element.height();
            
                ctx.drawImage(element[0], coords.left*window.env.scale_x, 
                            coords.top*window.env.scale_y, width*window.env.scale_x, height*window.env.scale_y);
            });
            
            if(element[0].complete) element.trigger('load');
            
        });
        
        //$(canvas).fadeIn();
    }
    birdseye();
    $(window).bind('resize', birdseye);
    
    

});
