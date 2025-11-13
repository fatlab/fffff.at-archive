/* -*- C++ -*- */

/**
 * Sup boners? It's the YTMND loader.
 *
 * We are the music makers... and we are the dreamer of dreams.
 *
 * $Id: ytmnd_loader.js 2263 2011-07-15 06:59:40Z max $
 */

/**
 * Now on to the guts.
 */

(function(){

  if (typeof ytmnd == 'undefined') {
    ytmnd = {};
  }

  ytmnd.site_template = function()
  {

    /**
     * UI functionality for controls and non-site elements (e.g. info bar, restart button, etc)
     */

    this.ui     = {};

    /**
     * Handles loading of site data, assets, etc may be modular.
     */

    this.loader = {};

    /**
     * Handles playing sound.
     */

    this.player = {};

    /**
     * A copy of the site info JSON package
     */

    this.data   = {};

    /**
     * Handles site-specific layout stuff (e.g. image placement, zooming text, etc)
     */

    this.layout = {};

    /**
     * Global foreground and background image handles so we can restart animated GIFs,
     * and keep track of load status.
     */


    this.foreground = { handle: $('<div id="foreground_image">'),
                           img: $('<img id="foreground_img" alt="">'),
                        loader: new Image(),
                        loaded: false };


    this.background = { handle: $('body'),
                           img: $('<img id="background_img" alt="">'),
                        loader: new Image(),
                        loaded: false };

    /**
     * Set the cache validation to 'never', this ensures that
     * the image will be loaded from the cache if possible, and
     * the browser should not check for an updated version.
     *
     * Since all our assets have immutable URLs, they'll never change.
     * We also want to make sure when we're moving the image around
     * we won't have accidentally load the image twice.
     */

    /*
    this.foreground.loader.validate = 'never';
    this.background.loader.validate = 'never';
    */

    /**
     * Keep track to differentiate between a full start and a restart.
     */

    this.is_playing = false;


    /**
     * UI
     */

    /**
     * Keep track of the rotations of the secret restart button.
     */

    this.ui.restart_button_rotation = 0;


    /**
     * Populate the info box with all of the site information.
     */

    this.ui.populate_info_box =  function(data)
    {
      /**
       * Set the logo on the left side of the info bar based on the score of the site.
       */

      var closest_star = Math.round(data.score.computed_score);

      $('#info_box_closer').removeClass('logo5').addClass('logo' + closest_star);


      /**
       * Add the title.
       */

      $('#site_title').html(ytmnd.site_link(data.site_id, data.domain,
                                            data.title, false, (data.work_safe == 'n'), true));

      /**
       * Add user and site links.
       */

      $('#author').html(ytmnd.user_link(data.user.user_id, data.user.user_name));
      $('#site_profile_link').attr('href', 'http://' + ytmnd.domain + '/sites/' + data.site_id + '/profile');
      $('#comments_link').attr('href',     'http://' + ytmnd.domain + '/sites/' + data.site_id + '/profile#comments');


      /**
       * Add a starbar and initialize it.
       */

      $('#score').html(starbar.add(data.site_id,data.score.computed_score, false, ['wsc', 'fav'], false));

      starbar.pageLoad();


      /**
       * Handle all the credits for asset, and the description.
       */

      $('#fg_image_origin').html(data.fg_image_origin);

      if (data.background.type == 'image') {
        $('#bg_image_origin').html(data.bg_image_origin);
      }
      else {
        $('#bg_image_origin_wrapper').hide();
      }

      $('#sound_origin').html(data.sound_origin);
      $('#description').html(data.description).addClass('selected');

      /**
       * Ghetto accordion to show large content blocks.
       */

      $("#site_info_right label").click(function() {
          $("#site_info_right > div > div").removeClass('selected');
          $(this).parent().children('div').addClass('selected');
        });

      /**
       * Handle all the keywords.
       */

      var keyword_html = '';

      for (var i = 0; i <= data.keywords.length - 1; ++i) {
        keyword_html += '<div class="keyword">';
        keyword_html += '  <a class="keyword" href="http://' + ytmnd.domain + '/keywords/' + data.keywords[i] + '">' + data.keywords[i] + '</a>';
        keyword_html += '</div>';
      }

      $('#keyword_list').html(keyword_html);

      /**
       * Parse Richtext
       */

      $('.rt_parse').richtext_parse();

      /**
       * Set up the click event handlers to open and close the infobar.
       */

      $('#corner').click(function(event){

          /**
           * TODO look into doing this with media queries.
           */

          var window_width = $(window).width();

          if (window_width >= 610 && window_width < 1180) {
            var max_width = (window_width - 150) + 'px';

            $('#site_info').css({'width': max_width, 'max-width': max_width, 'min-width': max_width});
            $('#site_info_right').hide();
          }
          else {
            $('#site_info').css({'width': '1180px', 'max-width': '1180px', 'min-width': '1180px'});
            $('#site_info_right').show();
          }


          $('#infobar').css('visibility', 'visible').show();
          $('#corner').hide();
          event.preventDefault();
        });

      $('#info_box_closer').click(function(event){
          $('#infobar').hide();
          $('#corner').show();
          event.preventDefault();
        });


      /**
       * Make the corner image visible.
       */

      $('#corner').css('visibility', 'visible');
    };


    /**
     * Hide the loader/player.
     */

    this.ui.hide_loader = function()
    {
      $('#player_div, #loader').remove();
    };


    this.ui.show_loader = function()
    {
      $('#loader').show();
    };

    this.ui.set_stars_to_percent = function (percent)
    {

      /**
       * These are timings that describe at which percent stars should start their animations.
       */

      if (typeof this.star_animation_timing == 'undefined') {
        this.star_animation_timing = {
          star_11_s         :  9, star_23_m         : 15, star_4_s          : 19, star_14_m         : 24,
          star_17_m         : 27, star_22_m         : 33, star_15_m         : 35, star_5_s          : 39,
          star_25_l         : 43, star_12_s         : 49, star_2_s          : 51, star_28_s_notrail : 52,
          star_18_m         : 53, star_26_s_notrail : 54, star_6_s          : 55, star_13_s         : 57,
          star_24_l         : 57, star_21_m         : 63, star_29_s_notrail : 64, star_7_s          : 64,
          star_1_s          : 66, star_10_s         : 67, star_3_s          : 68, star_16_m         : 70,
          star_19_m         : 75, star_27_s_notrail : 78, star_20_m         : 82, star_8_s          : 86,
        };
      }

      this.svg = document.getElementById('logo_svg').contentDocument;

      if (this.svg == null || typeof this.svg.getElementById != 'function') {
        return false;
      }

      if (this.all_stars_shown == 1) {
        return false;
      }

      for (var id in this.star_animation_timing) {
        if (this.star_animation_timing[id] <= percent) {
          var star = this.svg.getElementById(id);

          star.style.animationPlayState = 'running';
          star.style.animationDelay = Math.floor(this.star_animation_timing[id]) + 'ms';

          //MARK clean this all up.

          if (id == 'star_8_s' && star != null) {

            this.all_stars_shown = 1;


            //star.addEventListener('animationend', () => {
            $(star).one('animationend', () => {
                console.max('animation ended on the final star!');

                /*
                this.svg.getElementById('flare_top').style.display = 'block';
                this.svg.getElementById('flare_bottom').style.display = 'block';
                this.svg.getElementById('flare_top').style.animationPlayState = 'running';
                this.svg.getElementById('flare_bottom').style.animationPlayState = 'running';
                */

                this.svg.getElementById('flare_top').classList.add('activated');
                this.svg.getElementById('flare_bottom').classList.add('activated');

                this.svg.getElementById('flare_bottom').addEventListener('animationend', (event) => {

                    if (event.animationName != 'flare_scale') {
                      return false;
                    }

                    this.svg.getElementById('full_logo').classList.add('activated');

                    /*
                this.svg.getElementById('full_logo').style.animationName = 'zoom_out';
                this.svg.getElementById('full_logo').style.animationDuration = '200ms';
                this.svg.getElementById('full_logo').style.animationDelay = '300ms';
                this.svg.getElementById('full_logo').style.animationFillMode = 'forwards';
                this.svg.getElementById('full_logo').style.transformOrigin = 'center';
                    */
                this.svg.getElementById('full_logo').addEventListener('animationend', () => {
                    //$('#logo_svg').css('cursor', 'pointer');

                    this.svg.getElementById('play_button').classList.add('activated');

                    /*
                    this.svg.getElementById('play_button').style.animationName = 'play_boner';
                    this.svg.getElementById('play_button').style.animationDuration = '500ms';
                    this.svg.getElementById('play_button').style.animationDelay = '300ms';
                    this.svg.getElementById('play_button').style.animationFillMode = 'forwards';
                    this.svg.getElementById('play_button').style.transformOrigin = 'center';

                    this.svg.getElementById('play_button').style.display = 'block';
                    */
                    //$('#loader').append('<h1><a href="#">CLICK HERE TO PLAY, YOU DUMB IDIOT</a></h1>');
                    $('#loading_status .numerical').html('');

                  });
                  });
              });
          }
        }
      }
    };

    this.ui.set_loader_percent = function(loading_data)
    {

      if (typeof this.current_percent == 'undefined') {
        this.current_percent = 0;
      }

      /**
       * Animate the SVG
       */

      var svg = document.getElementById('logo_svg').contentDocument;


      if (typeof this.logo_animation_finished == 'undefined' && svg.getElementById('ytmnd_logo') != null && svg.getElementById('ytmnd_logo') != null) {
        this.logo_animation_finished = false;

        svg.getElementById('ytmnd_logo').addEventListener('animationend', () => {
            console.max('ANIMATION ENDED');
            this.logo_animation_finished = true;
            this.set_stars_to_percent(this.current_percent);
        });
      }

      this.set_stars_to_percent(loading_data.percent_loaded);
      this.current_percent = loading_data.percent_loaded;

      $('#loading_status .textual').html('Loading site junk...');
      $('#loading_status .numerical').html(this.current_percent + '% - ' + Math.trunc(loading_data.bytes_loaded/1000) + 'kB / ' + Math.trunc(loading_data.bytes_total/1000) + 'kb');
    }


    /**
     * Layout-related functions.
     */

    /**
     * Image placement abbreviation map.
     */

    this.layout.placements = { 't': 'top',
                               'm': 'center',
                               'b': 'bottom',
                               'l': 'left',
                               'c': 'center',
                               'r': 'right' };


    /**
     * Create the CSS properties for an image given the placement and URL.
     */

    this.layout.image_css = function(placement, url)
    {
      var css = {'background-image': 'url("' + url + '")',
                 'background-position': '',
                 //'background-attachment' : 'fixed',
                 'background-repeat': 'no-repeat' };

      if (placement == 'tile') {
        css['background-repeat'] = 'repeat';
      }
      else {
        css['background-position']  = this.placements[placement.substr(0, 1)] + ' ';
        css['background-position'] += this.placements[placement.substr(1, 1)];
      }

      return css;
    }

    /**
     * Holds compiled zoom_text html that can be generated before display-time.
     */

    this.layout.compiled_zooming_text = $('<div id="zoom_text">');

    /**
     * Archaic function to make the zooming text on YTMNDs.
     *
     * Due to the way it changes based on length, we continue to use this dumb
     * function to ensure zooming text always looks the same.
     */

    this.layout.make_zooming_text = function (zoom_text)
    {
      var max_len = Math.max(zoom_text.line_1.length,
                             zoom_text.line_2.length,
                             zoom_text.line_3.length);

      if (max_len > 0) {

        var j, i, z, cur_line, cur_spacing;
        var font_size = 50;

        if      (max_len >= 20) { font_size = 21; }
        else if (max_len >= 15) { font_size = 25; }
        else if (max_len >= 13) { font_size = 30; }
        else if (max_len >= 12) { font_size = 35; }
        else if (max_len >= 10) { font_size = 40; }
        else if (max_len >= 10) { font_size = 45; }
        else { font_size = 50; }

        var spacing = (font_size*2) + 25;

        var zin = 100;

        for (var j = 2; j >= 0; --j) {
          cur_spacing = (spacing * j) * 2;


          for(var i = 1; i <= font_size; ++i) {
            zin++;
            var z = (i == font_size) ? '00' : ((i<4)?'0':'')+(i*4).toString(16);

            cur_line = $('<div>'+ zoom_text['line_' + (j+1)] + '</div>').css({'z-index': zin,
                'left': (i*2) + 'px',
                'top':  (i+cur_spacing) + 'px',
                'color': '#'+z+z+z,
                'font-size': (i*2) + 'pt'});
            this.compiled_zooming_text.append(cur_line);
          }
        }
      }
    }

    this.layout.compile_zooming_text = function(zoom_text)
    {
      if (zoom_text.style == 'default') {
        var max_len = Math.max(zoom_text.line_1.length,
                               zoom_text.line_2.length,
                               zoom_text.line_3.length);

        if (max_len > 0) {
          this.make_zooming_text(zoom_text);
        }
      }
      else if (zoom_text.style == 'image') {

        /**
         * Only make the zooming text image as tall as it has to be.
         */

        var height = 750;

        if (zoom_text.line_3.trim() == '') {
          height = 480;
        }

        if (zoom_text.line_2.trim() == '') {
          height = 220;
        }

        var zoom_text_image_css = {"background-image" : "url('" + ytmnd.loader.zt_image_handle.src + "')",
                                   "background-repeat": "no-repeat",
                                   "height"           : height + "px" };


        this.compiled_zooming_text.css(zoom_text_image_css);
      }

      console.max('Compiled zooming text.');
    }



    /**
     * Main
     */

    /**
     * This function is called as soon as we have the data package with all the site
     * layout information, assets and meta-data.
     */

    this.parse_site_data = function(site_data)
    {
      console.max('Site data loaded.');

      this.data = site_data;

      /**
       * Now figure out our capabilities.
       */

      var html5_audio = false;
      var html5_support_matrix = ytmnd.loader.find_supported_audio();

      /**
       * Even if we can support html5 audio, we need to make sure one of the sound files
       * we have is playable.
       */

      if (typeof html5_support_matrix[this.data.site.sound.type] != 'undefined' &&
          html5_support_matrix[this.data.site.sound.type] == true) {

        html5_audio = this.data.site.sound;
      }
      else if (typeof this.data.site.sound.alternatives != 'undefined') {
        for (var codec in this.data.site.sound.alternatives) {
          if (typeof html5_support_matrix[codec] != 'undefined' &&
              html5_support_matrix[codec] == true) {

            html5_audio = this.data.site.sound.alternatives[codec];
            break;
          }
        }
      }

      /**
       * Now choose which to use.
       */

      if (html5_audio == false) {
        //MARK - show real error.
        alert("We can't play audio on your dumb browser, either due to a lack of the HTML5/codec support.");
        return false;
      }

      console.max('calling loader_init();');

      this.loader = ytmnd.loader;
      this.player = ytmnd.player;

      this.loader.loader_init();

      /**
       * Set up the info box.
       */

      this.ui.populate_info_box(this.data.site);

      /**
       * Start waiting for assets to load.
       */

      this.ui.show_loader();

      console.max('Starting asset wait...');

      this.wait_for_assets();
    }


    /**
     * Sit around and wait for all the assets to load up.
     */

    this.wait_for_assets = function()
    {
      /**
       * If the loader reports that the assets aren't loaded or the user is viewing an ad, try again in fifty milliseconds.
       */


      if (this.loader.are_assets_loaded() == false) {

        /**
         * Calculate percent loaded and then restart this function.
         */

        this.ui.set_loader_percent(this.loader.get_loading_status());

        setTimeout(function(){ ytmnd.site.wait_for_assets(); }, 50);
        return false;
      }

      /**
       * Run this one last time so it gets to 100%
       */

      this.ui.set_loader_percent(this.loader.get_loading_status());
      console.max('wait_for_assets() ended in main');

      this.init_ytmnd();
    }


    /**
     * It's go time, set up the layout and prepare to display the YTMND.
     *
     * At this point all the assets have been preloaded.
     */

    this.init_ytmnd = function(callback)
    {

      /**
       * Copy the data URLs from the loader into the foreground/background handles.
       */

      var fg_image_css = ytmnd.site.layout.image_css(ytmnd.site.data.site.foreground.placement, this.loader.fg_image_handle.src);

      ytmnd.site.foreground.handle.css(fg_image_css);

      /**
       * Precompile zoom_text.
       */

      this.layout.compile_zooming_text(this.data.site.zoom_text);

      /**
       * Start the loop which waits for everything to be ready.
       */

      //MARK turn off autoplay for now because it's annoying.
      //this.loader.audio_can_autoplay = false;

      console.max('Assets all loaded.');
      if (this.loader.audio_can_autoplay == true) {
        console.max('It appears we can autoplay, so trying that now.');
        ytmnd.site.ui.show_ytmnd();
        ytmnd.site.player.start_sound();
      }
      else {
        console.max('AutoPlay prevented. Showing play link...');
        var play_link = function(event)
        {
          console.max('AutoPlay-override play link clicked!');
          event.preventDefault();
          ytmnd.site.ui.show_ytmnd();
          ytmnd.site.player.start_sound();

          /**
           * Once we've clicked play, we can safely autoplay again (on restart)
           */

          ytmnd.site.loader.audio_can_autoplay = true;
          $('#loader').html('<h1><a href="#">Loading..</a></h1>')
        };

        $('#loading_status .textual').html('Waiting for your dumbass to hit play...');
        $('#loader, #play_link').click(play_link);
      }
    }


    this.ui.show_ytmnd = function(data)
    {
      /**
       * Add the foreground image and set the bg image if need be.
       */

      $('body').append(ytmnd.site.foreground.handle);

      if (ytmnd.site.data.site.background.type == 'image') {
        var bg_image_css = ytmnd.site.layout.image_css(ytmnd.site.data.site.background.placement, ytmnd.loader.bg_image_handle.src);

        ytmnd.site.background.handle.css(bg_image_css);
      }

      /**
       * Remove the loader if need be.
       */

      if ($('#foreground_img').length > 0) {
        $('#foreground_img').remove();
      }

      if (ytmnd.site.is_playing == false) {

        /**
         * Set the background color
         */

        $('body').css('background-color', '#' + ytmnd.site.data.site.background.color);


        /**
         * Add the zooming text to the page.
         */

        $('body').append(ytmnd.site.layout.compiled_zooming_text);


        /**
         * Make the restart button visible on hover.
         */

        $('#restart_button').css('visibility', 'visible');


        /**
         * Hide the loader
         */

        console.max('HIDING LOADER');

        this.hide_loader();

        /**
         * Set up the restart button.
         */

        $('#restart_button').click(ytmnd.site.restart);
      }


      /**
       * If the page is larger than the image, make the image wrapper the size of the page,
       * so when you scroll it will tile properly.
       */

      if ($(document).height() > ytmnd.site.foreground.handle.height()) {
        console.max('SETTING HEIGHT TO:', $(document).height());

        ytmnd.site.foreground.handle.css('min-height', $(document).height() + 'px');
        ytmnd.site.foreground.handle.css('height', '100%');
      }

      ytmnd.site.is_playing = true;
    }



    this.hide_loader = function()
    {
      this.ui.hide_loader();

      /**
       * Tell the player we're hiding it.
       */

      try {
        this.player.js_hide_player();
      }
      catch (player_error) {
        alert(player_error);
      }
    }



    /**
     * Restart function which stops the sound and animated gifs and then restarts them again,
     * effectively synchronizing the site.
     */

    this.restart = function (event)
    {
      ytmnd.site.ui.restart_button_rotation += 90;

      if (ytmnd.site.ui.restart_button_rotation == 360) {
        ytmnd.site.ui.restart_button_rotation= 0;
      }

      var ie_rotation = ytmnd.site.ui.restart_button_rotation/90;

      //MARK - modern

      if ($.browser.msie) {
        $(this).css('filter', 'progid:DXImageTransform.Microsoft.BasicImage(rotation=' + ie_rotation + ')');
      }
      else if ($.browser.webkit) {
        $(this).css('-webkit-transform', 'rotate(' + ytmnd.site.ui.restart_button_rotation + 'deg)');
      }
      else if ($.browser.mozilla) {
        $(this).css('-moz-transform', 'rotate(' + ytmnd.site.ui.restart_button_rotation + 'deg)');
      }
      else if ($.browser.opera) {
        $(this).css('-o-transform', 'rotate(' + ytmnd.site.ui.restart_button_rotation + 'deg)');
      }

      ytmnd.site.player.stop_sound();

      /**
       * To "restart" a gif, we have to unload it from memory and then add it back to the DOM.
       *
       * We do this by calling window.URL.revokeObjectURL() on the data-url and then creating a new
       * one from the data blob the loader saved.
       */

      window.URL.revokeObjectURL(ytmnd.loader.fg_image_handle.src);
      ytmnd.loader.fg_image_handle.src = window.URL.createObjectURL(ytmnd.loader.fg_image_blob);

      if (ytmnd.site.data.site.background.type == 'image') {
        window.URL.revokeObjectURL(ytmnd.loader.bg_image_handle.src);
        ytmnd.loader.bg_image_handle.src = window.URL.createObjectURL(ytmnd.loader.bg_image_blob);
      }

      setTimeout(() => { ytmnd.site.init_ytmnd(); }, 20);
    };
  }

  ytmnd.site = new ytmnd.site_template();
})();


/**
 * Main loop.
 */

$(document).ready(function() {
    console.max('Document loaded.');

    document.getElementById('logo_svg').addEventListener('load', function() {
        console.max('Logo SVG load()');

        /**
         * SVG in <object> will fire load/DOMContentLoaded before it's really ready to use. This supposedly forces it to calculate css/etc.
         */

        if (document.getElementById('logo_svg').contentDocument) {
          document.getElementById('logo_svg').contentDocument.lastElementChild.style.offsetTop;
        }

        /**
         * Check that the YTMND parent object and needed info exist.
         */

        if (typeof ytmnd == 'undefined' || typeof ytmnd.site_data_url == 'undefined') {
          ytmnd = {};
          alert('ERROR: 1');
          return;
        }

        /**
         * Before we do anything, initialize the global site object.
         */

        ytmnd.site = new ytmnd.site_template();


        /**
         * Now load the site data.
         */

        var ytmnd_data_fetch_success = function(data, textStatus, jqXHR)
        {
          ytmnd.site.parse_site_data(data);
        }

        var ytmnd_data_fetch_error = function (jqXHR, textStatus, errorThrown)
        {

        }

        if (document.getElementById('logo_svg').contentDocument) {
          document.getElementById('logo_svg').contentDocument.getElementById('ytmnd_logo').addEventListener('animationend', () => {
              console.max('Logo SVG title animation ended. Starting data fetch..');
              $.getJSON(ytmnd.site_data_url, function(data){ ytmnd.site.parse_site_data(data); });
            });
        }
        else {
          console.max('Logo SVG animation failed.');
          setTimeout(function(){ console.max('Logo SVG title animation ended. Starting data fetch..'); }, 2000);
        }
      });
});


