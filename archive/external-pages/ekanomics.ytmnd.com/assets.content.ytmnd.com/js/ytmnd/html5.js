/* -*- C++ -*- */

/**
 * YTMND Site->HTML5 Audio Interface
 *
 * TODO: set up priority based on supported types e.g. OGG->WAV->MP3?
 *
 * $Id: html5.js 2404 2012-05-05 21:24:17Z max $
 */


(function(){

  ytmnd.loader = {

    /**
     * The audioContext which will play/loop the audio.
     */

    audio_context  : null,

    /**
     * The AudioBufferSourceNode we load the audio into.
     */

    audio_source   : null,

    /**
     * The XMLHttpRequest used to load the audio file.
     */

    audio_xhr      : null,

    /**
     * Using the audio context, we can figure out if we are allowed to autoplay
     */

    audio_can_autoplay: false,

    /**
     * Image XMLHttpRequests to load the image files (zt is zooming text).
     */

    fg_image_xhr   : null,
    bg_image_xhr   : null,
    zt_image_xhr   : null,

    /**
     * Image handles. These are Image() objects.
     */

    fg_image_handle: null,
    bg_image_handle: null,
    zt_image_handle: null,

    /**
     * Image blobs, we save the original blobs for when the user restarts.
     */

    fg_image_blob: null,
    bg_image_blob: null,
    zt_image_blob: null,

    /**
     * Variables to keep track of state/progress
     */

    assets: { audio   : { bytes_loaded: 0,
                          bytes_total : 0,
                          ready       : false},
              fg_image: { bytes_loaded: 0,
                          bytes_total : 0,
                          ready       : false},
              bg_image: { bytes_loaded: 0,
                          bytes_total : 0,
                          ready       : false},
              zt_image: { bytes_loaded: 0,
                          bytes_total : 0,
                          ready       : false}

    },

    /**
     * List of audio codecs in order of what we would most like to play.
     */

    codecs: {'ogg' : 'audio/ogg; codecs="opus"',
             'mp3' : 'audio/mpeg',
             'flac': 'audio/flac',
             'wav' : 'audio/wav'},

    /**
     * Figure out our audio playing capabilities.
     *
     * Returns a matrix of audio formats this browser supports.
     */

    find_supported_audio: function()
    {

      try {
        var audio_tag = document.createElement('audio');
        var audio_obj = new Audio();
      }
      catch (error) {
        console.max('received error in find_supported_audio:');
        console.max(error);

        var audio_tag = {};
        var audio_obj = {};
      }

      /**
       * Set up the array of supported methods and codecs.
       */

      var supported = {'tag': !!(audio_tag.canPlayType),
                       'obj': !!(audio_obj.canPlayType) };

      for (var codec in ytmnd.loader.codecs) {
        supported[codec] = false;
      }

      if (supported.obj == false) {
        return supported;
      }

      /**
       * Go through all our codecs and see which work.
       *
       * canPlayType currently returns "", "maybe", or "probably", we'll take anything that isn't "".
       */

      for (var codec in ytmnd.loader.codecs) {

        supported[codec] = (audio_obj.canPlayType(ytmnd.loader.codecs[codec]) != "");

        console.max('Testing audio codec for ' + codec + '[' + ytmnd.loader.codecs[codec] + ']: ',
                    audio_obj.canPlayType(ytmnd.loader.codecs[codec]));

      }

      return supported;
    },

    /**
     *
     */

    loader_init: function()
    {

      console.max('inside html5 loader_init');

      /**
       * Set up Audio player and preloader.
       */

      this.audio_context = new (window.AudioContext || window.webkitAudioContext)();
      this.audio_source  = this.audio_context.createBufferSource();
      this.audio_xhr     = new XMLHttpRequest();
      this.audio_xhr.responseType = 'arraybuffer';

      /**
       * Pause the audio if it's running.
       */

      if (this.audio_context.state == 'running') {
        this.audio_can_autoplay = true;
      }

      this.audio_context.suspend();

      /**
       * Update progress during loading.
       */

      this.audio_xhr.onprogress = (event) => {
        if (this.assets.audio.bytes_total == 0) {
          this.assets.audio.bytes_total = parseInt(event.total);
        }

        this.assets.audio.bytes_loaded = parseInt(event.loaded);
      };

      /**
       * When it is finially finished loading, decode the audio.
       */

      this.audio_xhr.onload = function(event) {
        if (ytmnd.loader.assets.audio.bytes_loaded == ytmnd.loader.assets.audio.bytes_total) {
          console.max('audio fully loaded');
        }

        var audio_data = ytmnd.loader.audio_xhr.response


        /**
         * For some reason, the audio context will randomly start playing, despite us suspending it after initialization.
         *
         * Because of that, we're going to suspend() a few times.
         */

        ytmnd.loader.audio_context.decodeAudioData(audio_data, (audio_buffer) => {
            console.max('Audio context decoded.');
            ytmnd.loader.audio_source.buffer = audio_buffer;
            ytmnd.loader.audio_source.connect(ytmnd.loader.audio_context.destination);
            ytmnd.loader.audio_source.loop = true;
            ytmnd.loader.audio_context.suspend();
            /**
             * Start the audio at frame 0. we still need to resume() on the context before the audio actually starts playing.
             */

            ytmnd.loader.audio_source.start(0);
            ytmnd.loader.audio_context.suspend();
            ytmnd.loader.assets.audio.ready = true;
            ytmnd.player.audio_context = ytmnd.loader.audio_context;
            ytmnd.player.audio_buffer = audio_buffer;
          });
      };


      /**
       * Set up Foreground Image Preloader
       */

      this.fg_image_handle = new Image();
      this.fg_image_xhr    = new XMLHttpRequest();
      this.fg_image_xhr.responseType = 'arraybuffer';

      this.fg_image_xhr.onprogress = function(event) {
        if (ytmnd.loader.assets.fg_image.bytes_total == 0) {
          ytmnd.loader.assets.fg_image.bytes_total = parseInt(event.total);
        }

        ytmnd.loader.assets.fg_image.bytes_loaded = parseInt(event.loaded);
      }

      this.fg_image_xhr.onload = (event) => {
        this.fg_image_blob = new Blob([this.fg_image_xhr.response]);
        this.fg_image_handle.src = window.URL.createObjectURL(this.fg_image_blob);
        this.assets.fg_image.ready = true;
        console.max('fg_image fully loaded');
      };

      /**
       * Set up a Background Image Preloader if needed.
       */

      if (ytmnd.site.data.site.background.type == 'image') {
        this.bg_image_handle = new Image();
        this.bg_image_xhr    = new XMLHttpRequest();
         this.bg_image_xhr.responseType = 'arraybuffer';

        this.bg_image_xhr.onprogress = function(event) {

          if (ytmnd.loader.assets.bg_image.bytes_total == 0) {
            ytmnd.loader.assets.bg_image.bytes_total = parseInt(event.total);
          }

          ytmnd.loader.assets.bg_image.bytes_loaded = parseInt(event.loaded);
        };

        this.bg_image_xhr.onload = (event) => {
          this.bg_image_blob = new Blob([this.bg_image_xhr.response]);
          this.bg_image_handle.src = window.URL.createObjectURL(this.bg_image_blob);
          this.assets.bg_image.ready = true;
          console.max('bg_image fully loaded');
        };
      }
      else {
        ytmnd.loader.assets.bg_image.ready = true;
      }

      /**
       * Same for zoom-text image if necessary.
       */

      if (ytmnd.site.data.site.zoom_text.style == 'image') {
        this.zt_image_handle = new Image();
        this.zt_image_xhr    = new XMLHttpRequest();
        this.zt_image_xhr.responseType = 'arraybuffer';

        this.zt_image_xhr.onprogress = function(event) {

          if (ytmnd.loader.assets.zt_image.bytes_total == 0) {
            ytmnd.loader.assets.zt_image.bytes_total = parseInt(event.total);
          }

          ytmnd.loader.assets.zt_image.bytes_loaded = parseInt(event.loaded);
        };

        this.zt_image_xhr.onload = (event) => {
          this.zt_image_blob = new Blob([this.zt_image_xhr.response]);
          this.zt_image_handle.src = window.URL.createObjectURL(this.zt_image_blob);
          this.assets.zt_image.ready = true;
          console.max('zt_image fully loaded');
        };
      }
      else {
        ytmnd.loader.assets.zt_image.ready = true;
      }


      /**
       * Start the loading of assets.
       */

      console.max('Beginning asset GETs');

      //MARK - ensure the browser can play this type, or use an alternative.

      this.audio_xhr.open('GET', ytmnd.site.data.site.sound.url, true);
      this.audio_xhr.send();
      this.fg_image_xhr.open('GET', ytmnd.site.data.site.foreground.url, true);
      this.fg_image_xhr.send();

      if (ytmnd.site.data.site.background.type == 'image') {
        this.bg_image_xhr.open('GET', ytmnd.site.data.site.background.url, true);
        this.bg_image_xhr.send();
      }

      if (ytmnd.site.data.site.zoom_text.style == 'image') {
        this.zt_image_xhr.open('GET', ytmnd.site.data.site.zoom_text.url, true);
        this.zt_image_xhr.send();
      }
   },


    are_assets_loaded: function()
    {
      if (ytmnd.loader.assets.fg_image.ready == true &&
          ytmnd.loader.assets.bg_image.ready == true &&
          ytmnd.loader.assets.zt_image.ready == true &&
          ytmnd.loader.assets.audio.ready == true) {
        console.max('All assets are loaded and ready to use!');
        return true;
      }
      else {
        return false;
      }
    },

    get_loading_status: function()
    {
      var bytes_loaded = ytmnd.loader.assets.fg_image.bytes_loaded + ytmnd.loader.assets.bg_image.bytes_loaded + ytmnd.loader.assets.zt_image.bytes_loaded + ytmnd.loader.assets.audio.bytes_loaded;
      var bytes_total = ytmnd.loader.assets.fg_image.bytes_total + ytmnd.loader.assets.bg_image.bytes_total + ytmnd.loader.assets.zt_image.bytes_total + ytmnd.loader.assets.audio.bytes_total;
      var percent_loaded = Math.round(parseInt((bytes_loaded / bytes_total) * 100))

      return {bytes_loaded: isNaN(bytes_loaded) ? 0 : bytes_loaded,
              bytes_total: isNaN(bytes_total) ? 0 : bytes_total,
              percent_loaded: isNaN(percent_loaded) ? 0 : percent_loaded };
    },

  };

  /**
   * Player
   */

  ytmnd.player = {

    /**
     * Audio context object for pausing/playing audio.
     */

    audio_context: null,

    /**
     * Raw audio buffer. Only really needed if the user wants to restart a YTMND.
     */

    audio_buffer   : null,

    /**
     * Starts the sound from the current cue point
     */

    start_sound : function()
    {

      console.dir(this.audio_context);

      if (this.audio_context.state == 'running') {
        return false;
      }

      console.max('Starting sound via audio_context.resume()');

      this.audio_context.resume();
    },

    /**
     * Stops the sound and sets the cue point to the first frame.
     */

    stop_sound : function()
    {
      if (this.audio_context.state == 'suspended') {
        return false;
      }

      console.max('Pausing audio via audio_context.suspsend(), and creating a new audio_context at frame 0');

      /**
       * Pause the audio and free up the memory it's using.
       */

      this.audio_context.suspend();
      this.audio_context.close();

      /**
       * Create a new context and load the raw PCM data into it.
       */

      this.audio_context = new (window.AudioContext || window.webkitAudioContext)();
      audio_source = this.audio_context.createBufferSource();
      audio_source.buffer = this.audio_buffer;
      audio_source.connect(this.audio_context.destination);
      audio_source.loop = true;
      audio_source.start(0);

      return true;
    }
  };
})();

