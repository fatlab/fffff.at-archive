// HTML 5 audio support check
var AUDIO, AUDIO_MP3, AUDIO_OGG;
(function() {
    try {
        var obj = new Audio('');
        AUDIO = true;
        AUDIO_OGG = (obj.canPlayType('audio/ogg')) ?  true : false;
        AUDIO_MP3 = (obj.canPlayType('audio/mpeg')) ? true : false;
    } catch(e) {
        AUDIO = false;
        AUDIO_MP3 = false;
        AUDIO_OGG = false;
    }
})();

var APPLE = ( navigator.userAgent.indexOf('OS X') != -1 );
var IPAD =     ( navigator.userAgent.indexOf('iPad') != -1 )
            || ( navigator.userAgent.indexOf('iPhone') != -1 )
            || ( navigator.userAgent.indexOf('iPod') != -1 );

// Apple & Opera did a good job in positioning the checkboxes within the text flow ...
// so no css needed to align them better
if(APPLE || $.browser.opera) {
    $(document).ready(function() {
        $('input[type=checkbox]').css('position','static');
    });
}

// Nice sound effects at key presses etc

var CircleSound = function(audiofiles) {

    var CS = {audioplayers: [], cursor: 0};
    audiofiles.map(function(file) {
        var element = document.createElement('audio');
        element.src = file;
        element.load();
        /*element.addEventListener('ended', function(event) {
            //this.pause();
            this.currentTime = 0;
        }, true); */
        CS.audioplayers.push(element);
    });
    return function() {
        if(CS.cursor>=CS.audioplayers.length) CS.cursor = 0;
        CS.audioplayers[CS.cursor].pause();
        CS.audioplayers[CS.cursor].currentTime = 0;
        CS.audioplayers[CS.cursor].play();
        CS.cursor++;
    }
}

// SFX = CircleSound(['sfx/pluck1.oga','sfx/pluck2.oga','sfx/pluck3.oga','sfx/pluck4.oga','sfx/pluck3.oga','sfx/pluck2.oga']);
// document.addEventListener('keypress', SFX, true);

/**
 * ASCIIAudioPlayer -- aewsoem GUI for the <audio> element
 */

var ASCIIAudioPlayer = function(element) {

    var self = this;

    this.audio = element;
    
    this.id = $(element).parents('div.tune')[0].id;

    this.wantPlay = false; // if audio should play back ASAP

    // functions for the button
    this.click = function() {

        if(this.audio.paused && !this.wantPlay) { // nothing is playing right now
            this.stopOthers();
            this.wantPlay = true;
            if(this.audio.readyState == this.audio.HAVE_ENOUGH_DATA) {  // is data is fully loaded??
                this.wantPlay = false;
                this.audio.play();  // play immediatly
            } else {
                // to force the "canplaythrough"-event do this:
                // pretend to play that stuff, then immediatly stop
                this.audio.play();
                this.audio.pause();
            }
            this.button.textContent = 'stop';

        } else {
            this.audio.pause();
            this.audio.currentTime = 0;
            this.button.textContent = 'play';
            this.wantPlay = false;
        }
    }

    this.button = $('<button type="button" disabled="disabled">wait</button>')[0];
    this.button.addEventListener('click', function() {
        self.click.call(self);
    }, true);
    this.loadinginterval = setInterval(function() {
        if(self.button.textContent == 'pls') {
            self.button.textContent = 'wait'
        } else {
            self.button.textContent = 'pls';
        }
    }, 500);

    // as soon as metadata is known, enable pressing 'play'
    this.audio.addEventListener('loadedmetadata', function(e) {
        clearInterval(self.loadinginterval);
        self.button.disabled = false;
        self.button.textContent = 'play';
    }, true);

    // ready to play
    this.audio.addEventListener('canplaythrough', function() {
        if(self.wantPlay) {
            self.audio.play();
            self.wantPlay = false;
        }
    }, true);

    // stop others
    this.stopOthers = function() {
        self.others.map(function(obj) {
            if(obj != self) {
                obj.wantPlay = false;
                if(obj.audio.currentTime>0) {
                    obj.audio.pause();
                    obj.button.textContent = 'play';
                    obj.audio.currentTime = 0;
                }
            }
        });
    }


    // drawing loading and playing progress

    this.bar = document.createElement('input');
    this.bar.setAttribute('type', 'text');
    this.bar.setAttribute('size', 1);
    this.bar.setAttribute('readonly', 'readonly');

    this.asciiCursor = 0;
    this.barLoaded = ''; for(var i=0;i<256;i++) this.barLoaded += '-';
    
    // copy UTF8 animations from generated object
    this.progressAnimation = [];
    for(var i=0; i<Animation[this.id].length; i++) {
        var frame = Animation[this.id][i];
        var line = ''; 
        if(frame.length<256)    
            for(var ii=0; ii<(256/frame.length); ii++)
                line += frame;
        this.progressAnimation.push(line);
    };
    
    this.asciiLoop = this.progressAnimation.length;

    this.loaded = 0;
    this.total = 0;

    this.drawBar = function() {
        var percentPlayed = Math.round(
            (this.audio.duration>0) ? ((this.audio.currentTime/this.audio.duration) * this.bar.size) : 0
        );
        // if audio is playing, always show something!
        if(this.audio.currentTime>0) percentPlayed = Math.max(1, percentPlayed);

        var percentLoaded = Math.round((this.loaded/this.total) * this.bar.size);

        this.bar.value =
            this.progressAnimation[this.asciiCursor].substr(0, percentPlayed) +
            this.barLoaded.substr(0, percentLoaded-percentPlayed);

        this.asciiCursor++;
        if(this.asciiCursor == this.asciiLoop) this.asciiCursor = 0;
    }


    // parts of the audio file are arriving ... show me dat!
    this.progress = function(event) {
        if(event.lengthComputable) {
            this.loaded = event.loaded;
            this.total = event.total;
        }
    }

    // depending on the length of the audio, draw longer bars
    this.audio.addEventListener('durationchange', function() {
        // 2.5 second = 1 character
        self.bar.setAttribute('size', Math.round(self.audio.duration/2.5));
    }, true);

    // loading the filezzz
    this.audio.addEventListener('progress', function(event) {
        self.progress.call(self, event);
        self.drawBar.call(self);
    }, true);

    // the audio file is being played ... show me dat!
    this.audio.addEventListener('timeupdate', function() {
        self.drawBar.call(self);
    }, true);

    // audio file playback reached the end ... reeeeewind!
    this.audio.addEventListener('ended', function() {
        self.audio.currentTime = 0;
        self.audio.pause();
        self.button.innerHTML = 'play';
    }, true);

    // Errors: deactivate buttons
    // not on Safari tho coz it throws errors
    // even when nothing happened
    this.audio.addEventListener('error', function() {
        if(self.audio.error==null) return;
        self.button.disabled = true;
        self.bar.value = self.audio.error;
        self.bar.size = self.bar.value.length;
    }, true);

    // everything is contained in div.AudioPlayer
    this.wrapper = document.createElement('div');
    this.wrapper.setAttribute('class', 'AudioPlayer');

    // Put them together ...
    this.wrapper.appendChild(this.button);
    this.wrapper.appendChild(this.bar);

    // ... and into the document!!
    this.audio.parentNode.insertBefore(this.wrapper, this.audio);

    // this.audio.controls = false; // progressive enhancement, dudes!!
}

// now set it all up
// but only on browsers that support it

if(AUDIO) {
    var AudioPlayers = []; // List of all players

    $(document).ready(function() {
        if(AUDIO && !IPAD) {
            $('div.tune audio').hide().each( function() {
                AudioPlayers.push( new ASCIIAudioPlayer(this) );
            });
            ASCIIAudioPlayer.prototype.others = AudioPlayers;
        }
    });
// otherwise try to embed the flash player
// __HATE__!!
} else {
    // fetch idiotic javascript _ansynchronously_ so i can be sure
    // it is already loaded
    $.ajax({
        url: 'flash/audio-player.js',
        dataType: 'script',
        async: false
    });
    AudioPlayer.setup('flash/player.swf', {
        width: 290,
        initialvolume: 100
    });
    $(document).ready(function() {
        for(var tune in Animation) {
            $('#'+tune+' h3').after('<div id="flash_'+tune+'"><div>');
            AudioPlayer.embed('flash_'+tune, {soundFile: 'compositions/low/'+tune+'.mp3'});  
        }
    });
}


/**
 * Shop -- cool ASCII shopping cart
 */

var Shop = {
    count: function() {
        var amount = 0; 
        $('div.tune input:checkbox').each(function() {
            if(this.checked) {
                amount++;
                $('label[for='+this.id+']').css({fontWeight: 'bold'});
            } else {
                $('label[for='+this.id+']').css({fontWeight: 'normal'});
            }
        });
        var sum = (amount*Shop.price)/100;
        if (Shop.currency == 'B') {
            var sum = (amount*Shop.BTCprice)/100;
        }
        Shop.tunes = amount;
        Shop.sum = sum;

        if(amount>0) $('#error_noneselected').hide();

        // format price
        sum = sum.toString();
        dot = sum.indexOf('.');
        
        if(dot==-1) { // no decimal point
            switch(sum.length) {
                case 1:
                    sum = '·'+sum+'.00'
                    break;
                case 2:
                    sum += '.00'
                    break;
            }
        } else if(dot==0) { // decimal point is first char
            switch(sum.length) {
                case 2:
                    sum = '·0'+sum+'0'
                    break;
                case 3:
                    sum = '·0'+sum
                    break;
                
            }
        } else if(dot==1) { // decimal point is second char
            switch(sum.length) {
                case 3:
                    sum = '·'+sum+'0'
                    break;
                case 4:
                    sum = '·'+sum
                    break;
            }
        }

        var plural = '·';
        if(amount>1 || amount==0) plural = 's';
        
        amount = amount.toString();
        if(amount.length==1)
            amount = '·'+amount;        
        
        $('#currency').text(Shop.currency);
        $('#sum').text(sum);
        $('#tunes').text(amount);
        $('#plural').text(plural);
        
    }
}

// Set up the shopping cart and the help bubbles
$(document).ready(function() {

    $('select[name=currency]').bind('change', function() {
        Shop.currency = {'pp':'€', 'BTC':'B'}[$(this).val()];
        Shop.count();
    });

    Shop.count();
    $('div.tune input:checkbox').bind('click', Shop.count);
    setInterval(function() {$('#dummycheck').click()}, 1000);
    $('#pp_checkout').bind('click', function() {
        if(Shop.tunes<1) {
            $('#error_noneselected').show();
            return false;
        } else {
            //this.disabled = true;
            for(var i=0;i<AudioPlayers.length;i++) {
                AudioPlayers[i].audio.pause();
                AudioPlayers[i].audio.currentTime = 0;
                AudioPlayers[i].button.textContent = 'play';
            }
        }
    })[0].disabled = false;
    
    // help bubbles for Contact form
    $('input#Contact_email, input#Contact_url, textarea#Contact_message')
        .bind('focus', function() {
            var bubble = $('pre.bubble[for=' + this.id + ']').show();
            var bWidth = bubble.outerWidth();
            var bHeight = bubble.outerHeight();
            var eWidth = $(this).outerWidth();
            var eHeight = $(this).outerHeight();
            var ePos = $(this).position();
            bubble.css({
                left: ePos.left+eWidth,
                top:  ePos.top -bHeight/2
            });
        })
        .bind('blur', function() {
            $('pre.bubble[for=' + this.id + ']').hide();
        });
});

/**
 * Superb Feedback Form!!
 */
 
$(document).ready( function() {
    $('#feedback').find('input[type=text], textarea, button')
        .removeAttr('disabled')
        .val('');

    $('#feedback').bind('submit', function() {
    
        var data = $(this).serialize();
        $(this).find('input[type=text], textarea, button').attr('disabled','disabled');
        
        $.ajax({
            type: 'POST',
            url: 'feedback.pl',
            data: data,
            success: function(reply) {
                if(reply=='ok') {
                
                    $('#feedback').find('input[type=text], textarea').each(function() {
                        var self = this;
                        var clear = function() {
                            var val = $(self).val();
                            val = val.substring(1);
                            $(self).val(val);
                            if(val.length>0) {
                                setTimeout(clear, 25);
                            } else { 
                                $(self).removeAttr('disabled').one('focus',function(){this.value=''}).val('✔');
                            }
                        }
                        clear();
                    });
                    
                    var button = $('#feedback button');
                    var buttonBackOn = function() {
                        var backOn = true;
                        $('#feedback').find('input, textarea').each(function() {
                            if (this.disabled) backOn = false;
                        });
                        if(backOn) {
                            button[0].disabled = false
                        } else {
                            setTimeout(buttonBackOn, 1000)
                        }
                    }
                    buttonBackOn();
                
                
                
                } else {
                    $('#feedback')
                        .animate({left:'-20'},50)
                        .animate({left:'20'},50)
                        .animate({left:'-20'},50)
                        .animate({left:'20'},50)
                        .animate({left:'0'},25)
                        .find('input, textarea, button').removeAttr('disabled');
                }
            },
            dataType: 'text'
        });

        
        return false;
    
    });

});



