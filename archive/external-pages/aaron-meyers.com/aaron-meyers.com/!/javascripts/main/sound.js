var soundFilenames = [
    // "intro_sound.wav",
    "head_intro_mono.wav",
    "loop_mono.wav",
    "recharger/note00.mp3",
    "recharger/note01.mp3",
    "recharger/note02.mp3",
    "recharger/note03.mp3",
    "recharger/note04.mp3",
    "recharger/note05.mp3",
    "recharger/note06.mp3",
    "recharger/note07.mp3",
    "recharger/note08.mp3",
    "recharger/low_g.mp3"
];

var sounds = {};
window.AudioContext = window.AudioContext||window.webkitAudioContext;
var audioContext = new AudioContext();
var masterVolume = audioContext.createGain();
masterVolume.connect( audioContext.destination );
var loopStuff;
var introStuff;
var loopTween;
var loopLowVolume = .5;
var muted = false;
var notes = [];


function mute() {
    masterVolume.gain.linearRampToValueAtTime( 0, audioContext.currentTime );
}

function unmute() {
    if ( muted )
        return;

    masterVolume.gain.linearRampToValueAtTime( 1, audioContext.currentTime );
}

function loadSounds( callback ) {

    $('#muteButtonContainer').on('mouseover', function(e){

        $('#muteButton').css( 'opacity', 1.0 );

    }).on('mouseout', function(e) {

        $('#muteButton').css( 'opacity', 0.5 );
        if ( !muted ) {
            // $('#muteButton').removeClass('fa-volume-off').addClass('fa-volume-up');
        }
    }).on( 'click', function(e) {
        muted = !muted;
        if ( !muted ) {
            unmute();
            $('#muteButton').removeClass('fa-volume-off').addClass('fa-volume-up');
        }
        else {
            mute();
            $('#muteButton').removeClass('fa-volume-up').addClass('fa-volume-off');
        }
    });

    $('#loadInfo').text( 'Sound ' + 0 + '/' + soundFilenames.length );

    var loaded = 0;
    async.eachLimit( soundFilenames, 3, function( filename, callback ) {


        var request = new XMLHttpRequest();
        request.open( 'GET', './sounds/' + filename, true );
        request.responseType = 'arraybuffer';
        request.onload = function() {
            audioContext.decodeAudioData( request.response, function( buffer ) {
                // var aBuffer = buffer;
                var splitFilename = filename.split( "/" );
                var name = splitFilename[splitFilename.length-1];
                if ( name.split("note").length > 1 ) {
                    notes.push( buffer );
                }
                sounds[name] = buffer;
                loaded++;
                $('#loadInfo').text( 'Sound ' + loaded + '/' + soundFilenames.length );
                callback();
            }, function(error) {
                console.log( 'error!' );
            });
        }
        request.send();

    }, function() {
        callback();
    });
}

function fadeLoop( volume, time ) {

    var currentVolume = loopStuff.gain.gain.value;
    var currentTime = audioContext.currentTime;

    loopStuff.gain.gain.cancelScheduledValues( currentTime );

    // loopStuff.gain.gain.linearRampToValueAtTime( currentVolume, currentTime );
    // loopStuff.gain.gain.linearRampToValueAtTime( volume, currentTime + time );
    loopStuff.gain.gain.exponentialRampToValueAtTime( Math.max(.0001, currentVolume), currentTime );
    loopStuff.gain.gain.exponentialRampToValueAtTime( Math.max(.0001, volume), currentTime + time );

}

function playSpoofSound() {
    playSound( sounds['loop_mono.wav'], 0, false );
}

function playSelectSound() {
    playSound( sounds['low_g.mp3'] );
}

function skipIntroSound() {
    introStuff.source.stop(audioContext.currentTime);
    if ( !loopStuff ) {
        loopStuff = playSound( sounds[ 'loop_mono.wav' ], 1, true, function() {
            var tweenTimeElapsed = Date.now() - introTweenStartTime;
            fadeLoop( loopLowVolume, (introTweenTime - tweenTimeElapsed)/1000  );
        });
    }
}

function playIntroSound() {

    introStuff = playSound( sounds['head_intro_mono.wav'], 1, false, function() {
        if ( !loopStuff ) {
            loopStuff = playSound( sounds['loop_mono.wav'], 1, true, function() {
                var tweenTimeElapsed = Date.now() - introTweenStartTime;
                fadeLoop( loopLowVolume, (introTweenTime - tweenTimeElapsed)/1000  );
            });
        }
    });
}

function playNote() {
    var buffer = notes[ THREE.Math.randInt( 0, notes.length-1 ) ];
    playSound( buffer );
}

function playSound( soundBuffer, volume, loop, endedCallback ) {
    volume = volume === undefined ? 1 : volume;
    loop = loop === undefined ? false : loop;

    var source = audioContext.createBufferSource();
    var gainNode = audioContext.createGain();
    gainNode.gain.value = volume;
    source.buffer = soundBuffer;
    source.connect( gainNode );
    // gainNode.connect( audioContext.destination );
    gainNode.connect( masterVolume );
    source.loop = loop;
    setTimeout( endedCallback, soundBuffer.duration * 1000 );
    source.start(0);

    return {source:source, gain:gainNode};
}
