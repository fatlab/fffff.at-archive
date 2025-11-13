/* -*- C++ -*- */

/**
 * YTMND global common js.
 *
 * TODO clean this mess up.
 */

if (typeof ytmnd == 'undefined') {
  ytmnd = {}
}

if (typeof me == 'undefined') {
  me = {'auth_hash': null, 'user_id': null};
}

ytmnd.domain        = 'ytmnd.com';
ytmnd.nsfw_domain   = 'ytmnd.com';
ytmnd.url           = 'https://ytmnd.com/';
ytmnd.theme_img_url = 'https://assets.content.ytmnd.com/images/themes/2011/';
ytmnd.cdn_url       = 'https://assets.content.ytmnd.com/';

ytmnd.debug = true;

/**
 * Get a string represntation of a number like:
 * 1 -> 1st,
 * 2 -> 2nd, etc.
 */

ytmnd.number_ordinal = function (n)
{
  if (typeof this.number_ordinal.ordinals == 'undefined') {
    this.number_ordinal.ordinals =  { 0: 'th', 1: 'st', 2: 'nd', 3: 'rd' };
  }

  var if_teen = n.toString().substr(-2, 2);
  var single  = n.toString().substr(-1, 1);

  if (if_teen >= 11 && if_teen <= 19) {
    return n + 'th';
  }
  else {
    return n + (single > 3 ? 'th' : this.number_ordinal.ordinals[single]);
  }

}

/**
 * Parse one of javascript's terrible timestamps into something more usable.
 */

ytmnd.parse_ts = function (ts, b_ampm) {

  if (typeof this.parse_ts.month_labels == 'undefined') {
    this.parse_ts.month_labels = ["January", "February", "March", "April", "May", "June", "July",
                             "August", "September", "October", "November", "December"];
  }

  var temp = new Date(ts*1000);
  var time_zone_offset = temp.getTimezoneOffset() * (-1);
  var tz_tmp = temp.toString().match(/(E|C|M|P)[a-z]+ (S|D)[a-z]+ (T)ime/);

  if (tz_tmp != null) {
    var time_zone_abbrev = tz_tmp[1] + tz_tmp[2] + tz_tmp[3];
  }
  else {
    var time_zone_abbrev = 'FGT';
  }

  var m = this.parse_ts.month_labels[temp.getMonth()];
  var d = this.number_ordinal(temp.getDate());

  var h = temp.getHours();

  var am_pm = 'AM';

  if (h > 11) {
    am_pm = 'PM';
    if (h > 12) {
      h -= 12;
    }
  }

  if (h == 0) {
    h = 12;
  }

  if (b_ampm) {
    am_pm = '<strong>' + am_pm + '</strong>';
  }

  var mm = temp.getMinutes();
  if (mm.toString().length == 1) {
    mm = '0' + mm;
  }

  var s = temp.getSeconds();
  if (s.toString().length == 1) {
    s = '0' + s;
  }


  return { date: m + ' ' + d + ', ' + temp.getFullYear(),
           time: h + ':' + mm + ':' + s + ' ' + am_pm + ' ' + time_zone_abbrev };
}


/**
 * User Link Wrapper
 */

ytmnd.user_link = function (user_id, user_name, css_addon, page)
{
  var link = '<a title="' + user_name + '" class="user_name un_' + user_name + ' ';

  if (user_id == me.user_id) {
    link += 'owner ';
  }

  link += 'ul_uid_' + user_id + ' ';

  if (css_addon) {
    link += css_addon;
  }

  link += '" href="' + ytmnd.url + 'users/' + user_name;

  if (page) {
    link += '/' + page;
  }

  link += '">' + user_name + '</a>';

  return link;
}

/**
 * Site Link Wrapper
 */

ytmnd.site_link = function (site_id, domain, title, css, nsfw, no_profile, shorten, new_window)
{
  var link = '';
  if (typeof css == 'undefined')        { css = false; }
  if (typeof nsfw == 'undefined')       { nsfw = null; }
  if (typeof shorten == 'undefined')    { shorten = false; }
  if (typeof new_window == 'undefined') { new_window = false; }

  if (no_profile != true) {
    link += '<a class="site_link_profile ';

    if (css != false) {
      link +=  css;
    }

    link += '" href="/sites/' + site_id + '/profile';
    link += '">&#63;</a>&nbsp;';
  }

  if (shorten != false && title.length > shorten) {
    var safe_title = title.substr(0, shorten - 3) + '&#8230;';
    var shortened = true;
  }
  else {
    var safe_title = title;
    var shortened = false;
  }

  // word replacements here.

  if (safe_title == '') {
    safe_title = '&lt;&nbsp;untitled&nbsp;&gt;';
  }

  //MARK make sure we pass true instead of false.
  if (nsfw == true) {
    safe_title = '(<span class="nsfw_warn">nsfw</span>)&nbsp;' + safe_title;
    var full_domain = 'http://' + domain + '.' + ytmnd.nsfw_domain;
  }
  else {
    var full_domain = 'http://' + domain + '.' + ytmnd.domain;
  }

  link += '<a class="site_link_full';

  if (css != false) {
    link += ' ' + css;
  }

  link += '" href="' + full_domain + '"';
/*
  if (ytmnd.preferences.new_window == true) {
    if (ytmnd.preferences.share_new_window == true) {
      link += 'target="_ytmnd_site"';
    }
    else {
      link += ' target="_blank"';
    }
  }
*/
  link +=' rel="external"';
  link += '>' + safe_title + '</a>';

  if (shortened == true) {
    link = '<acronym title="' + title + '">' + link + '</acronym>';
  }

  return link;
}

/**
 * Site Image Link Wrapper
 */

ytmnd.site_image_link = function(site_id, site_domain, title, is_sfw, image_url)
{
  var link = '';
  var full_domain = '';

  if (is_sfw === false || is_sfw === 'n') {
    full_domain = 'http://' + site_domain + '.' + ytmnd.nsfw_domain;
  }
  else {
    full_domain = 'http://' + site_domain + '.' + ytmnd.domain;
    //image_url   = ytmnd.theme_img_url . 'sites/nsfw_site_preview_160x120.png';
  }

  if (title == '') {
    title = '&lt; untitled &gt;';
  }

  link += '<a class="site_image_link" href="' + full_domain + '" title="' + title + '" ';
  link += ' rel="external"';
  link += '><img src="' + image_url + '" alt="' + title + '" class="site_image_link" /></a>';

  return link;
}


/**
 * function to hash authentication information.
 */

ytmnd.hash_authentication = function (password)
{
  var server_salt = '0-0YtMNd$@@!webSit3!S4LT';
  var salted_pass = '';
  var return_data = {password_hash: '', authentication_salt: ''};

  salted_pass = $.sha1($.md5(password) + server_salt);

  return_data.authentication_salt = $.sha1(Math.random().toString()).substr(0,8);
  return_data.password_hash = $.sha1(salted_pass + return_data.authentication_salt);

  return return_data;
}


/**
 * Safely quote a regular expression.
 */

ytmnd.quote_regex = function (str)
{
  return (str+'').replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g, "\\$1");
}

/**
 * Temporary.
 */

ytmnd.richtext_user = function (user_name, profile_tab)
{
  document.write('user link to ' + user_name + ' -> ' + profile_tab);
}

ytmnd.richtext_site = function (user_name, site_area)
{
  document.write('site link to ' + user_name + ' -> ' + site_area);
}

/**
 * Easily make text unselectable (like labels)
 */

jQuery.fn.extend({
  disableSelection : function() {
    this.each(function() {
      this.onselectstart = function() { return false; };
      this.unselectable = "on";
      jQuery(this).css('-moz-user-select', 'none');
    });
  }
});

/**
 * Text counter/helper jQuery plugin.
 *
 * @author max@ytmnd.com
 */

jQuery.fn.html_length = function() {

  var len = 0;

  this.each(function(){
    var text = $('<div/>').text($(this).val().trim()).html().replace(/\"/gm, '&quot;').replace(/\'/, '&#39;');
    text.replace(/\n/gm, '<br />');
    len = text.length;
  });

  return len;
}

jQuery.fn.text_counter = function(counter, options) {

  var html_encode = function(value){

    //MARK
    /*
    $comment = text::scrub($comment);
    $comment = text::safe_wordwrap($comment, 70, "\n", true);
    $comment = text::standardize_line_breaks($comment);
    $comment = text::line_breaks_to_html($comment);
    */

    return $('<div/>').text(value).html().replace(/\"/gm, '&quot;').replace(/\'/, '&#39;').replace(/\n/gm, '<br />');
  };

  var html_decode = function(value){
    return $('<div/>').html(value).text();
  };

  var settings = jQuery.extend({
      max_length: 1000,
      get_length: function(string) { return html_encode(string).length },
      cut: false
  }, options);

  this.each(function(){

    /**
     * Set up keyup trigger.
     */

      var check = function(){
        var text = $(this).val();
        var len  = settings.get_length(text);

        if (len > settings.max_length) {

          if (settings.cut == true) {
            $(this).val(text.substr(0, settings.max_length));
          }
          else {
            $(counter).addClass('error_message');
          }
        }
        else {
          $(counter).removeClass('error_message');
        }

        $(counter).text(len);
      };

      if ($(this).is('input[type="hidden"]')){
        $(this).change(check);
      }
      else {
        $(this).keyup(check);
      }

    /**
     * Initialize
     */

    $(this).keyup();
  });

  return this;
};

jQuery.fn.html_encode = function() {

  this.each(function(){

    var val     = $(this).val();
    var new_val = '';


    if (typeof val == 'undefined') {
      return false;
    }

    for (var i = 0; i < val.length; i++) {
      if (val.charCodeAt(i) > 127) {
        new_val += '&#' + val.charCodeAt(i) + ';';
      }
      else if (val.charCodeAt(i) == 10) {
        new_val += '<br />';
      }
      else {
        new_val+= val.charAt(i);
      }
    }

    $(this).val(new_val);
  });

  return this;
}

/**
 * Function to re-apply zebra striping to a table, since i seem to be doing it everywhere.
 */

jQuery.fn.rezebra = function(apply_to_option) {

  if (typeof apply_to_option == 'undefined') {
    apply_to_option = 'odd';
  }

  this.each(function(){

      var $table = $(this);

      // wonder if this is faster than find.

      if ($table.children('tbody').length == 1) {
        $table = $table.children('tbody');
      }

      $table.children('tr').removeClass('even odd');
      $table.children('tr:visible:' + apply_to_option).addClass('even');
  });

  return this;
}


jQuery.fn.richtext_parse = function() {

  var html = {
    bold: { regex: /\[b\]([\s\S]*?)\[\/b\]/gim,              open: '<span class="rt_bold">', close: '</span>' },
    italic: { regex: /\[i\]([\s\S]*?)\[\/i\]/gim,            open: '<span class="rt_it">',   close: '</span>' },
    underline: { regex: /\[u\]([\s\S]*?)\[\/u\]/gim,         open: '<span class="rt_ul">',   close: '</span>' },
    code: {      regex: /\[code\]([\s\S]*?)\[\/code\]/gim,   open: '<code class="rt_code">', close: '</code>' },
    spoiler: { regex: /\[spoil\]([\s\S]*?)\[\/spoil\]/gim,   open: '<span class="rt_splr">', close: '</span>' },

    asset: { regex: /\[asset ([\s\S]*?)\]/gim,               open: '<span class="rt_asst">', close: '</span>' },
    user_link: { regex: /\[user ([\s\S]*?)\]/gim,            open: '<span class="rt_ulnk">', close: '</span>' },
    site_link: { regex: /\[site ([\s\S]*?)\]/gim,            open: '<span class="rt_slnk">', close: '</span>' }
    };

  /*
    var binds = { 'description': generic_rt_binds };
    richtext.init(binds);
  */

  ulin = function(str, u_name, page, offset, s)
  {
    return ytmnd.user_link(null, u_name, 'rt_user', page);
  }

  alin = function(str, asset_md5, offset, s)
  {
    return '<a href="/assets/' + asset_md5 + '" title="asset link" class="asset_link rt_asset">' + asset_md5 + '</a>';
  }

  /**
   * Pointless to create a real site link since we have no meta-data about it.
   */

  slin = function(str, domain, page,  offset, s)
  {

    //"Possible options are 'site' (link to the actual YTMND), 'profile' or 'comments'."}

    var html = '';

    if (typeof page == 'undefined') {
      return false;
    }

    if (page == 'site') {
      html  = '<a class="rt_site" href="http://' + domain + '.' + ytmnd.domain;
      html += '" rel="external">' +  domain + '.' + ytmnd.domain + '</a>';
    }
    else if (page == 'profile') {
      html = '<a class="rt_site" href="/sites/' + domain + '/profile" rel="external">' +  domain + '/profile</a>';
    }
    else if (page == 'comments') {
      html = '<a class="rt_site" href="/sites/' + domain + '/profile#comments" rel="external">' +  domain + '/comments</a>';
    }

    return html;
  }

  this.each(function(){
    if (!$(this).html().match(/\[|\]/)) {
      return;
    }
    else {
      var new_html = $(this).html();
    }

    for (var i in html) {
      var t = html[i];

      if (i == 'asset') {
        new_html = new_html.replace(/\[asset ([aA-fF0-9]{32})\]/gi, alin);
        continue;
      }
      else if (i == 'user_link') {
        new_html = new_html.replace(/\[user ([aA-zZ]{1}[aA-zZ0-9]{0,31})\:(profile|sites|votes|favorites|comments|frienemies|lists)\]/gi, ulin);
        continue;
      }
      else if (i == 'site_link') {
        new_html = new_html.replace(/\[site ([aA-zZ]{1}[aA-zZ0-9\-]{0,63})\:(site|profile|comments)\]/, slin);
        continue;
      }

      new_html = new_html.replace(t.regex, t.open + '$1' + t.close);
    }

    $(this).html(new_html);

  });

  return this;
}



/**
 * Hacky method of copying an element's css.
 */

jQuery.fn.get_css = function()
{
  if (arguments.length > 0) {
    return this;
  }

  var attr = ['font-family','font-size','font-weight','font-style','color',
              'text-transform','text-decoration','letter-spacing','word-spacing',
              'line-height','text-align','vertical-align','direction','background-color',
              'background-image','background-repeat','background-position',
              'background-attachment','opacity','width','height','top','right','bottom',
              'left','margin-top','margin-right','margin-bottom','margin-left',
              'padding-top','padding-right','padding-bottom','padding-left',
              'border-top-width','border-right-width','border-bottom-width',
              'border-left-width','border-top-color','border-right-color',
              'border-bottom-color','border-left-color','border-top-style',
              'border-right-style','border-bottom-style','border-left-style','position',
              'display','visibility','z-index','overflow-x','overflow-y','white-space',
              'clip','float','clear','cursor','list-style-image','list-style-position',
              'list-style-type','marker-offset'];

  var len = attr.length;
  var obj = {};

  for (var i = 0; i < len; i++) {
    obj[attr[i]] = jQuery.fn.css.call(this, attr[i]);
  }

  return obj;
}

/**
 * Preview a richtext field.
 *
 * WONT WORK WITH MORE THAN 1 PREVIEW AT A TIME!
 */

jQuery.fn.richtext_preview = function()
{
  this.each(function(){

      $this = $(this);

      if ($('#rich_text_preview').length > 0) {
        $('#rich_text_preview').fadeOut('fast', function(){ $(this).remove(); $this.show(); });
        return this;
      }

      var parent = $this.parent();

      var x = $('<div>').attr('id', 'rich_text_preview').html($this.val());

      x.css($this.get_css());

      /**
       * Force display block or it doesn't apply sizing.
       */

      x.css('display', 'block');
      x.css('cursor', 'pointer');
      x.click(function(event){ $(this).fadeOut('fast', function(){ $(this).remove(); $this.show(); }); });
      x.richtext_parse();

      $this.fadeOut('fast', function(){ parent.append(x); });
  });
}

/**
 * Bastardized version of http://plugins.jquery.com/files/jquery.cookie.js.txt
 */

jQuery.cookie = function(name, value, options)
{
  defaults = { path: '/',
               domain: '.' + ytmnd.domain,
               expires: null };


  if (typeof options == 'undefined') {
    options = {};
  }

  settings = jQuery.extend({}, defaults, options);


  /**
   * Setting cookies.
   */

  if (typeof value != 'undefined') {

    if (value === null || value == '') {
      value = '';
      settings.expires = -1;
    }

    /**
     * Figure out expiry date.
     */

    var expires = '';

    if (typeof settings.expires != 'undefined') {
      var date = null;

      if (typeof options.expires == 'number') {
        date = new Date();
        date.setTime(date.getTime() + (options.expires * 86400000))
      }
      else if (typeof options.expires == 'object' && typeof options.expires.toUTCString == 'function') {
        date = options.expires;
      }

      if (date !== null) {
        expires = '; expires=' + date.toUTCString(); //HTTP 1.0, should be changed to max-age in the future.
      }
    }

    /**
     * Path and domain.
     */

    var path = options.path     ? '; path='   + (options.path)   : '';
    var domain = options.domain ? '; domain=' + (options.domain) : '';
    document.cookie = [name, '=', encodeURIComponent(value), expires, path, domain].join('');
  }
  else {
    /**
     * Getting cookies.
     */

    var cookie_value = null;

    if (document.cookie && document.cookie != '') {
      var cookies = document.cookie.split(';');
      for (var i = 0; i < cookies.length; i++) {
        var cookie = jQuery.trim(cookies[i]);
        // Does this cookie string begin with the name we want?
        if (cookie.substring(0, name.length + 1) == (name + '=')) {
          cookie_value = decodeURIComponent(cookie.substring(name.length + 1));
          break;
        }
      }
    }
    return cookie_value;
  }
};

/**
 * String prototypes to make my life less of a pain in the ass.
 */

String.prototype.trim = function()
{
  return $.trim(this);
}

String.prototype.toHTML = function()
{
  return this.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\"/g, "&quot;");
}

String.prototype.linkify = function ()
{
  return this.replace(/https?:\/\/([-\w\.]+)+(:\d+)?(\/([^\s]*(\?\S+)?)?)?/g, '<a target="_blank" href="$&">$&</a>');
}

if (!window.console || !window.console.log || !window.console.dir || !window.console.debug)
{

  if (!!window.console && !!window.console.log && !!window.console.dir) {
    window.console.debug = window.console.log;
  }
  else {
    var overloads = ["log", "debug", "info", "warn", "error", "assert", "dir", "dirxml",
                     "group", "groupEnd", "time", "timeEnd", "count", "trace", "profile", "profileEnd"];

    window.console = console = {};

    for (var i = 0; i < overloads.length; ++i) {
      window.console[overloads[i]] = function() {};
    }
  }
}

console.max = function(){
  for (var i = arguments.length - 1; i >= 0; i--) {
    arguments[i+1] = arguments[i];
  }

  arguments.length++;
  arguments[0] = new ytmnd.timestamp().toString();

  try {
    if (!console.log.apply) {
      if (console.dir) {
        console.dir(arguments);
      }

      return false;
    }

    console.log.apply(this, arguments);
  }
  catch (error) {}
}


ytmnd.timestamp = function (date)
{
  if (typeof date == 'undefined') {
    var date = new Date();
  }

  var minutes = date.getMinutes().toString();
  var hours   = date.getHours().toString();
  var seconds = date.getSeconds().toString();
  var milliseconds = date.getMilliseconds().toString();

  this.value = this.int_pad(hours) + ':' + this.int_pad(minutes) + ':' + this.int_pad(seconds) + '.' + this.int_pad(milliseconds);
}

ytmnd.timestamp.prototype.toString = function()
{
  return this.value + '   ';
};

ytmnd.timestamp.prototype.int_pad = function(source, target_length)
{
  if (typeof target_length == 'undefined') {
    var target_length = 2;
  }

  source = source.toString();

  while (source.length < target_length) {
    source = '0' + source;
  }

  return source;
};



$(document).ready(function(){

    /**
     * Set up a default AJAX error handler
     */

    $.ajaxSetup({
      error: function(jqXHR, textStatus, errorThrown){

          if (textStatus == 'parsererror') {

            if (typeof errorThrown != 'string') {
              errorThrown = errorThrown.toString();
            }

            try {
              var error_page = jqXHR.responseText.match(/id="error_url" href="(.*)"\>/m);
            }
            catch(e){}


            try {
              var down_page = jqXHR.responseText.match(/id="sound_obj"/m);
            }
            catch(e){}

            /**
             * Hit the down page.
             */

            if (down_page) {
/*
              var message = "Oops, looks like YTMND is down. Can we send you to ";
              message += "main page so you can join in on the festivities? ";

              var should_i_stay_or_should_i_go = confirm(message);

              if (should_i_stay_or_should_i_go) {
                window.onbeforeunload = function(){};
                window.location = ytmnd.url;
              }

              return false;
*/
            }


            /**
             * We hit a YTMND error, let's redirect the user.
             */

            if (error_page) {

              /**
               * If there's an onbeforeunload function, check it.
               */

              if (typeof window.onbeforeunload != 'undefined' && window.onbeforeunload != null) {
                console.log(window.onbeforeunload);
                var before_unload_text = window.onbeforeunload({});
              }
              else {
                var before_unload_text = 'None!';
              }

              if (typeof before_unload_text != 'undefined' || before_unload_text == '') {

                var message = "Oops, we've encountered an error on YTMND. We'd like to send you to the error ";
                message += "page to give you some more information, but something else on this page is worried";
                message += " you'll lose data:\n\n" + before_unload_text + "\n\n";
                message += "Would you like to be redirected to the error page?\n";

                var should_i_stay_or_should_i_go = confirm(message);

                if (should_i_stay_or_should_i_go) {
                  window.onbeforeunload = function(){};
                  window.location = error_page[1];
                }

                return;
              }




              window.location = error_page[1];
            }
            else if (typeof ytmnd.is_posting_error == 'undefined' || ytmnd.is_posting_error != true) {

              /**
               * Didn't look like a YTMND error, let's prompt them to send it off.
               */

              var message = "Hi! YTMND just encountered some sort of error on your computer! We'd like you to email ";
              message += " it us, that way we can fix things and make YTMND better. Here's the error:\n\n\n";
              message += "textStatus: " + textStatus + "\n";
              message += "errorThrown: " + errorThrown + "\n\n\n";
              message += "Is it okay if we send it to our server so we can fix the problem?\n\n";
              message += "If all goes well you'll be redirected to an error page.\n";

              var should_i_stay_or_should_i_go = confirm(message);

              if (should_i_stay_or_should_i_go) {

                /**
                 * Swapout the error onbeforeunload function if there is one
                 */

                var temp = window.onbeforeunload;
                window.onbeforeunload = function(){};

                /**
                 * Create variables for the error handler.
                 */

                var error_message = 'YTMND JavaScript Error: ' + textStatus + ' at ' + window.location;
                var error_code    = "CS0001";
                var error_data    = {textStatus: textStatus, errorThrown: errorThrown};

                var user_note = prompt("Do you have anything to add to this error report?\n" +
                                       "Specifics of what you were doing at the time are helpful!\n\n" +
                                       "Feel free to leave this empty.");

                error_data.raw_response = jqXHR.responseText;
                error_data.user_note    = user_note;

                var callback = function(data){
                  ytmnd.is_posting_error = false;

                  if (typeof data.error != 'undefined') {
                    alert('We hit an error reporting your error, the world is going to end, sorry.\n\n' + data.error);
                  }
                  else {
                    window.onbeforeunload = temp;
                    window.location = data.redirect_url;
                  }
                };

                ytmnd.send_error(error_message, error_code, error_data, callback);

                //
              }
            }
          }
        }});


    $('a[rel="external"]').attr({ target: "_blank" });

    /**
     * Update auth hashes every 7.5 minutes.
     */

    ytmnd.update_auth = function() {
      $.getJSON(ytmnd.url + 'auth', function(data){
          if (data && typeof data.auth != 'undefined') {
            me.auth_hash = data.auth;
          }
        });
    };

    if (me.user_id >= 1) {
      setInterval(ytmnd.update_auth, 450000);
    }

    /**
     * Functionality to send error report data to the server.
     */

    ytmnd.is_posting_error = false;

    ytmnd.send_error = function (error_message, error_code, error_data, callback)
    {
      if (typeof callback != "function") {
        callback = function(){};
      }


      if (ytmnd.is_posting_error == true) {
        callback({'error': "Sending error in progress, can not send another"});
        return false;
      }

      /**
       * Set up a flag in case we hit an error inside an error.
       */

      ytmnd.is_posting_error = true;




      /**
       * Bastardized from the lovely folks at PHPJS.org
       */

      var strip_tags = function(input, allowed) {
        allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
        var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
        commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
        return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
            return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
          });
      };

      var var_export = function (mixed_expression) {

        var  iret = '', cnt = 0, x = [], i = 0, idtLevel = arguments[2] || 2,
        innerIndent = '',
        outerIndent = '';

        var getFuncName = function (fn) {
          var name = (/\W*function\s+([\w\$]+)\s*\(/).exec(fn);
          if (!name) {
            return '(Anonymous)';
          }
          return name[1];
        };

        var _makeIndent = function (idtLevel) {
          return (new Array(idtLevel + 1)).join(' ');
        };

        var __getType = function (inp) {
          var i = 0;
          var match, type = typeof inp;

          if (inp === null) {
            return null;
          }
          if (type === 'function') {
            return 'function';
          }
          if (type === 'object' && !inp) {
            return 'null'; // Should this be just null?
          }
          if (type === "object") {
            if (!inp.constructor) {
              return 'object';
            }
            var cons = inp.constructor.toString();
            match = cons.match(/(\w+)\(/);
            if (match) {
              cons = match[1].toLowerCase();
            }
            var types = ["boolean", "number", "string", "array"];
            for (i = 0; i < types.length; i++) {
              if (cons === types[i]) {
                type = types[i];
                break;
              }
            }
          }
          return type;
        };

        var type = __getType(mixed_expression);

        if (type === null) {
          return "NULL";
        } else if (type === 'array' || type === 'object') {
          outerIndent = _makeIndent(idtLevel - 2);
          innerIndent = _makeIndent(idtLevel);
          for (i in mixed_expression) {
            var value = var_export(mixed_expression[i], true, idtLevel + 2);
            value = typeof value === 'string' ? value.replace(/</g, '&lt;').replace(/>/g, '&gt;') : value;
            x[cnt++] = innerIndent + i + ' => ' + (__getType(mixed_expression[i]) === 'array' ? '\n' : '') + value;
          }
          iret = x.join(',\n');
          return outerIndent + "array (\n" + iret + '\n' + outerIndent + ')';
        } else if (type === 'function') {
          return "function()";
          //funcParts = mixed_expression.toString().match(/function .*?\((.*?)\) \{([\s\S]*)\}/);
          //retstr = "create_function ('" + funcParts[1] + "', '" + funcParts[2].replace(new RegExp("'", 'g'), "\\'") + "')";
        } else if (type === 'resource') {
          return "NULL";
        } else { return (typeof(mixed_expression) !== 'string') ? mixed_expression : "'" +
                 mixed_expression.replace(/([\"\'])/g, "\\$1").replace(/\0/g, "\\0") + "'";
        }
      }

      /**
       * Clean up what we can.
       */

      try{
        if (typeof error_data.raw_response != 'undefined') {
          error_data.stripped_response = strip_tags(error_data.raw_response);
        }
      } catch (e){}

      /**
       * Create data package.
       */

      var ajax_data = var_export({browser: $.browser,
                                  support: $.support,
                                     user: me,
                                    ytmnd: ytmnd,
                                 location: window.location,
                            error_message: error_message,
                               error_code: error_code,
                               error_data: error_data }, true);


      var error_data = {"url": "/interface/errors.php",
                        "type": "POST",
                        "data": {'error_data': ajax_data,
                                 'error_message': error_message,
                                 'error_code': error_code}};

      error_data.complete = function(){is_posting_error=false;};
      error_data.success = function(data){callback(data);};

      $.ajax(error_data);
    }


    var rolled = 0;

    var barrel_roll = function(){
      rolled++;
      var barrel = "rotate(-" + rolled +  "deg)";

      $('html').css({"-moz-transform": barrel, "-o-transfom": barrel, "-webkit-transform": barrel });

      if (rolled >= 360) { rolled = 0; return false; }

      setTimeout(barrel_roll, 10);
    }


    var last_keypress = null;

    /*
    $('body').keyup(function(event){
        //Z = 90, R = 82

        console.max(event);

        if (rolled > 0) {
          return false;
        }

        if ((event.keyCode == 90 && last_keypress == 90) || (event.keyCode == 82 && last_keypress == 82)) {
          barrel_roll();
        }

        last_keypress = event.keyCode;
      });
    */

    /**
     * Tracking junk.
     */

    /**
     * Ads junk.
     */

    var aids_timer = null;

    var update_aids = function(){
      clearTimeout(aids_timer);

      var ts = Math.random(1, new Date().getMilliseconds().toString());

      console.log('aids updated');

      $('#aids_sky_side').attr('src', ytmnd.url + 'aids/vertical?' + ts);
      $('#aids_sky_box').attr('src', ytmnd.url + 'aids/box?' + ts);
      $('#aids_sky_horizontal').attr('src', ytmnd.url + 'aids/horizontal?' + ts);

      aids_timer = setTimeout(update_aids, 300000);
    }
    //update_aids();
});

/**
 * Google Analytics.


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-65515-1']);
_gaq.push(['_setDomainName', '.' + ytmnd.domain]);
_gaq.push(['_trackPageview']);

(function() {
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
})();
 */
