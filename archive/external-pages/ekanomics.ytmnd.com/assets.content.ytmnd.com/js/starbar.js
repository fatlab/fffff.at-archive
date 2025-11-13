/* -*- C++ -*- */

/**
 * Old starbar. documentation to come soon.
 *
 * $Id: starbar.js 2132 2011-06-28 04:33:43Z max $
 */

var starbar = {

  /**
   * name MUST be the name of this object (should be 'starbar').
   */

   name: 'starbar',

   /**
    * Width and height of a single star bar. All measurements are in pixels.
    */

   height    : 12,
   width     : 60,

   star_width: 12,
   star_count: 5,

   gap_width : 1, //gap between each star.

   min_score : 0,
   max_score : 5,

   score_step: 2.5, // stepping amount for score images.

   image_root: ytmnd.cdn_url + 'images/starbar/',
   image_type: 'png',

   vote_url  : '/voting/',
   vote_auth : '/' + me.user_id + '/' + me.auth_hash + '/',

   tooltips  : ['garbage','bad','mediocre','good','spectacular'],

   addons    : {},  // holds addon objects
   bars      : [], // array of our bar objects.
   images    : [], // array of images we are currently using, sans url (uri+filename)
   timers    : [], // timers for individual bars
   site_ids  : [], // site_ids[bar_id] = <real site_id>
   bar_addons: [], // a simple list of bar_ids and what addons they have.

   lookups   : ['votes','predictions', 'either'],
   initiated:     false,
   enable_clicks: false,

   last_hovered: -1,

   init: function () {

     this.types =
     {
       score   : { title: 'Score',     order: 10, color: 'red',    type: 'default'},
       rating  : { title: 'Voted',     order: 20, color: 'blue',   type: 'voted'  },
       rate    : { title: '',          order: 30, color: 'orange', type: 'hover'  },
       predict : { title: '',          order: 40, color: 'gold',   type: 'normal' },
       empty   : { title: '',          order: 50, color: 'white',   type: 'normal' },
       fav     : { title: 'Favorite!', order: 60, color: 'fav',    type: 'special'},
       unfav   : { title: '',          order: 70, color: 'unfav',  type: 'special'},
       unrate  : { title: '',          order: 80, color: 'unrate', type: 'special'}
     };

     this.modes =
     {
       favd   : { type : this.types.fav,
                  hover: this.types.fav,
                  data : 'is_fav',
                  click: 'unfav'},
       rated  : { type : [this.types.score, this.types.rating],
                  hover: this.types.rating,
                  data : ['score', 'rating'],
                  click: 'vote'},
       predict: { type : [this.types.score, this.types.predict],
                  hover: this.types.rating,
                  data : ['score', 'prediction'],
                  click: 'vote'},
       normal : { type : this.types.score,
                  hover: this.types.rating,
                  data : 'score',
                  click: 'vote'}
     };
     this.initiated = true;
    }
};


//var interface = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject("MSXML2.XMLHTTP.3.0");


function bar ()
{
  /**
   * Info variables
   */

  this.site_id    = -1;
  this.score      = 0.0;
  this.rating     = false;
  this.prediction = false;
  this.is_fav     = false;


  this.addons = [];


  /**
   * Display variables
   */

  this.mode         = false;
  this.mode_stuck   = false;

  this.is_clickable = (typeof me.user_id == 'undefined' || me.user_id <= 0) ? false : true;  // boolean

  this.image        = false;  // full url to current image
  this.normal_image = false;  // full url to normal (non hover) image
  this.lookup       = false;  // what kind of extra data we should look up.
  this.alt_text     = '';

  /*
   * These functions can be overridden if necessary.
   */

  this.m_over     = starbar.m_over;
  this.m_out      = starbar.m_out;
  this.on_click   = starbar.on_click;

  this.ref = function() {
    return '.bars['+this.bar_id+']';
  };

  return this;
}



starbar.pageLoad = function()
{
  starbar.fetchVoteData();
  starbar.enable_clicks = true;
};



/**
 * Default mouse/click functions. These can be overridden globally or per bar.
 */

starbar.m_over = function (bar_id, star)
{
  if (typeof this.bars[bar_id] == 'undefined') return false;

  var sb = this.bars[bar_id];

  if (this.timers[bar_id] !== 0) {
    window.clearTimeout(this.timers[bar_id]);
    this.timers[bar_id] = 0;
  }

  if (this.last_hovered >= 0 && (this.last_hovered != bar_id || this.last_hovered == bar_id && star < 0)) {
    this.restoreBarImage(this.last_hovered);
  }

  this.last_hovered = bar_id;

  if (star > 0) {
    this.swapBarImage(bar_id, sb.mode.hover, star, true);
    window.status = this.tooltips[star - 1];
  }

  return false;
};


starbar.m_out = function (bar_id)
{
  window.status = "";

  if (this.timers[bar_id] === 0) {
    this.timers[bar_id] = window.setTimeout(this.name + '.restoreBarImage(' + bar_id + ')', 100);
  }

  return false;
};


starbar.on_click = function (bar_id, star)
{
  if (this.enable_clicks === false) {
    return false;
  }

  if (typeof bar_id == 'undefined' || typeof this.bars[bar_id] == 'undefined') {
    return false;
  }
  else {
    var sb = this.bars[bar_id];
  }

  this.enable_clicks = false;
  vote_url = this.vote_url + sb.mode.click + this.vote_auth  + sb.site_id + '/' + star;

  //window.setTimeout(this.name+'.restoreBarImage('+bar_id+');', 10);

  this.fetchVoteData(vote_url);
  return false;
};



/**
 * Bar Image functions.
 */


starbar.restoreBarImage = function (bar_id)
{
  $('#sb_img_' + bar_id).attr('src', this.bars[bar_id].normal_image);
  $('#sb_img_' + bar_id).attr('alt', this.bars[bar_id].alt_text);

  //document.getElementById('sb_img_' + bar_id).src = this.bars[bar_id].normal_image;
  //document.getElementById('sb_img_' + bar_id).alt = this.bars[bar_id].alt_text;

  window.status = "";

  this.timers[bar_id] = 0;

  if (this.last_hovered == bar_id) {
    this.last_hovered = -1;
  }
};


starbar.swapBarImage = function (bar_id, bar_type, stars)
{
  if (typeof stars == 'undefined') stars = 0.0;

  $('#sb_img_' + bar_id).attr('src', this.getBarImage(bar_type, stars, true));

  //document.getElementById('sb_img_' + bar_id).src = this.getBarImage(bar_type, stars, true);
};


starbar.addBarAddon = function (bar_id, addon)
{

 if (typeof bar_id == 'undefined' || typeof this.bars[bar_id] == 'undefined') {
    console.log('RETURNED FALSE, CANT FIND BAR_ID' + bar_id);
    return false;
  }
  else {
    var sb = this.bars[bar_id];
  }

 if (typeof this.addons[addon] == 'undefined') {
   return false;
 }
 else {
   if (typeof this.bar_addons[bar_id] == 'undefined') {
     this.bar_addons[bar_id] = [];
   }

   this.bar_addons[bar_id][addon] = true;
   sb.addons[this.addons[addon].name] = true;
   return true;
 }

};




// TODO: no site_id, check score parsing, make do_write.
// add(site_id, [score, rating, fav, predict], [addons], [do_write])

starbar.add = function (site_id, score, force_type, addon, do_write, jq_obj)
{
  if (this.initiated === false) { this.init(); }
  if (typeof site_id  == 'undefined') var site_id = false;
  if (typeof do_write != 'undefined') {
    if (do_write == false) {
      do_write = false;
    }
    else {
      do_write = true;
    }
  } else {
    do_write = true;
  }

  var sb = new bar();

  sb.bar_id = this.bars.length;

  this.bars.push(sb);
  this.timers[sb.bar_id] = 0;

  if (site_id !== false && site_id >= 1) {
    sb.site_id = site_id;
    this.site_ids.push(site_id);
  }
  else {
    sb.site_id = false;
    this.site_ids.push(false);
    sb.is_clickable = false;
  }

  if (typeof score != 'undefined') {
    sb.score = parseFloat(score);
  }
  else if (typeof score == 'object') {
    switch (score.length) {
      case 4: sb.prediction = score[3];
      case 3: sb.is_fav     = true;
      case 2: sb.rating     = score[1];
      case 1: sb.score      = score[0];
      break;
    }
  }

  if (typeof force_type != 'undefined' && typeof this.modes[force_type] != 'undefined') {
    sb.mode = this.modes[force_type];
    sb.mode_stuck = true;
    //this.guessBarMode(sb.bar_id);
  }
  else {
    this.guessBarMode(sb.bar_id);
  }

  //ADDONS
  if (typeof addon != 'undefined') {
    if (typeof addon == 'object') {
      for (var i in addon) {
        this.addBarAddon(sb.bar_id, addon[i]);
      }
    }
    else {
      this.addBarAddon(sb.bar_id, addon);
    }
  }



  with (document) {
    return this.insert(sb.bar_id, do_write, jq_obj);
  }
};



starbar.guessBarMode = function (bar_id)
{
  if (typeof this.bars[bar_id] == 'undefined') return false;

  var sb = this.bars[bar_id];

  if (sb.mode_stuck === true) {
    return false;
  }

  for (var mode in this.modes) {
    var matches_mode = false;
    var mode_data = this.modes[mode].data;

    if (typeof mode_data == 'object') {
      matches_mode = 0;
      for (var data in mode_data) {
        if (sb[mode_data[data]] !== false) { matches_mode++; }
      }

      if (matches_mode == mode_data.length) { matches_mode = true; } else { matches_mode = false; }
    }
    else {
      if (sb[mode_data] !== false) {
        matches_mode = true;
      }
    }

    if (matches_mode === true) {
      sb.mode = this.modes[mode];
      break;
    }
  }

  //MARK FINISH THIS OFF

  if (sb.mode == this.modes.favd) {
    sb.alt_text = this.types.fav.title;
  }
  else if (sb.mode == this.modes.rated) {
    sb.alt_text = this.types.rating.title + ': ' + sb.rating + ' stars';
  }
  else {
    sb.alt_text = this.types.score.title + ': ' + sb.score + ' stars';

    if (sb.prediction !== false) {
      sb.alt_text += ' Prediction: ' + sb.prediction + ' stars';
    }
  }

  if (sb.is_clickable === true) {
    var step = (this.score_step/10);

    for (var i = this.min_score; i <= this.max_score; i = i + step ) {
      if (i % 1 === 0) {
        var hover_image = this.getBarImage(sb.mode.hover, i, true);
        if (typeof this.images[hover_image] == 'undefined') {
          this.images[hover_image] === false;
        }
      }
    }
  }
};

/**
 * get the image path/filename for a bar type.
 */

starbar.getBarImage = function (in_type, score, is_single)
{
  if (typeof is_single != 'boolean') is_single = true;

  var image_dir = '';
  var image_name = '';

  var primary_score, primary_type, secondary_score, secondary_type;

  if (is_single === true) {
    primary_type   = in_type;
    secondary_type = false;

    primary_score  = this.normalizeScore(score);
    is_single = true;
  }
  else {
    primary_type    = in_type[0];
    secondary_type  = in_type[1];

    primary_score   = this.normalizeScore(score[0]);
    secondary_score = this.normalizeScore(score[1]);
    is_single = false;
  }

  if (typeof primary_type == 'undefined') {
    //ERROR_REPORTING
  }


  if (primary_type.type == 'special') {
    image_name = primary_type.color;
  }
  else if (is_single === false && secondary_type.type == 'special') {
    image_name = secondary_type.color;
  }
  else if (is_single === true) {
    image_dir  = primary_type.color + '/';
    image_name = primary_score;
  }
  else {
    if (primary_type.order < secondary_type.order) {
      image_dir  = primary_type.color + '/' + secondary_type.color + '/';
      image_name = primary_score + '_' + secondary_score;
    }
    else {
      image_dir  = secondary_type.color + '/' + primary_type.color + '/';
      image_name = secondary_score + '_' + primary_score;
    }
  }

  var image_url = this.image_root + image_dir + image_name + '.' + this.image_type;

  if (typeof this.images[image_url] == 'undefined') {
    this.images[image_url] = false;
  }

  return image_url;
}


/**
 * set a bar's image to whatever the current settings are.
 */

starbar.setBarImage = function (bar_id)
{
  if (typeof bar_id == 'undefined' || typeof this.bars[bar_id] == 'undefined') {
    console.log('RETURNED FALSE, CANT FIND BAR_ID' + bar_id);
    return false;
  }
  else {
    var sb = this.bars[bar_id];

    if (sb.mode === false) {
      this.guessBarMode(bar_id);
    }
  }

  var score;
  var single = true;
  var field;

  if (typeof sb.mode.data == 'object') {
    score = []; single = false;
    for (field in sb.mode.data) {
      score.push(sb[sb.mode.data[field]]);
    }
  }
  else {
    score = sb[sb.mode.data];
  }

  sb.normal_image = sb.image = this.getBarImage(sb.mode.type, score, single);
  return sb.image;
}

/**
 * turn a float score into an internal score and apply stepping if necessary.
 */

starbar.normalizeScore = function (score) {
  if (typeof score == 'undefined') score = 0;

  var score, score_modulo;

  score = Math.min(Math.max(score, this.min_score), this.max_score);
  score = Math.round(score * 10);

  score_modulo = (score % this.score_step);

  if (score_modulo !== 0) {
    if (score_modulo >= (this.score_step/2)) {
      score += (this.score_step - score_modulo);
    }
    else {
      score -= score_modulo;
    }
  }

  score *= 10;

  return score;
}



starbar.insert = function (bar_id, do_write, jq_obj)
{
  var bar_html = '';
  var sb = false;
  var img_attributes;
  var img_map = '';
  var alt_text = '';

  if (typeof bar_id == 'undefined' || typeof this.bars[bar_id] == 'undefined') {
    console.log('RETURNED FALSE, CANT FIND BAR_ID' + bar_id);
    return false;
  }
  else {
    sb = this.bars[bar_id];
  }

  if (sb.image === false) {
    this.setBarImage(bar_id);
  }

  this.preloadBarImages();

  //MARK figure out display text.

  if (sb.is_clickable === true) {

    /**
     * figure out if we should use default mouseovers/mouseouts/clicks
     *
     * and then make a text version of whichever we choose.
     */

    var mouse_over = this.name;
    var mouse_out  = this.name;
    var on_click   = this.name;

    if (sb.m_over   != this.m_over)   { mouse_over = this.name+sb.ref(); }
    if (sb.m_out    != this.m_out)    { mouse_out  = this.name+sb.ref(); }
    if (sb.on_click != this.on_click) { on_click   = this.name+sb.ref(); }

    mouse_over += '.m_over(' + sb.bar_id + ', ';
    mouse_out  += '.m_out(' + sb.bar_id + ')';
    on_click   += '.on_click(' + sb.bar_id + ', ';

    /**
     * Mouseover + Click image map.
     */

    var top_coord    = 0;
    var bottom_coord = this.height - 1;

    img_map = '<map class="sb_map" id="sb_imgmap_' + sb.bar_id + '" name="sb_imgmap_' + sb.bar_id + '">';
    for (var i = 1; i <= this.star_count; i++) {
      var area_name   = 'sb_map_' + sb.bar_id + '_' + i;
      var left_coord  = (i - 1) * (this.star_width + this.gap_width);
      var right_coord = Math.min(left_coord + this.star_width + this.gap_width - 1, this.width);

      var coords = left_coord + ',' + top_coord + ',' + right_coord + ',' + bottom_coord;

      img_map += '<area href="#" name="'+area_name+'" onClick="' + on_click + i + '); return false;" alt="';
      img_map += this.tooltips[i - 1] + '" onMouseOver="' + mouse_over + i + ');" onMouseOut="' + mouse_out +'" ';
      img_map += 'shape="rectangle" coords="' + coords +'">';
    }
    img_map += "</map>";

    // bar_html += img_map;
  }

  img_attributes  = ' src="' + sb.image + '" alt="' + sb.alt_text + '"  width="' + this.width;
  img_attributes += '" height="' + this.height + '" border="0" usemap="#sb_imgmap_' + sb.bar_id + '" ';
  img_attributes += ' name="sb_img_' + sb.bar_id + '" class="sb_image" id="sb_img_' + sb.bar_id + '"';

  bar_html += '<img' + img_attributes + '>';

  for (var addon in sb.addons) {
    var addon_html = this.addons[addon].getHtml(sb.bar_id);
    img_map  += addon_html[0];
    bar_html += addon_html[1];
  }

  bar_html = img_map+bar_html;

  with (document) {
    if (do_write) {

      jq_obj.html(bar_html);
      //$('.starbar.sitid_' + sb.site_id)
    }
    else {
      return bar_html;
    }
  }
}


/**
 * Preload any images in starbar.images[] that haven't been loaded already.
 */

starbar.preloadBarImages = function ()
{
  var image_url;

  for (image_url in this.images) {
    if (this.images[image_url] === false) {
      this.images[image_url]     = new Image(this.width, this.height);
      this.images[image_url].src = image_url;
    }
  }
}


/**
 * Parse data we got back from the ajax interface.
 */

starbar.parseAjax = function(new_data)
{

  if (typeof new_data.error != 'undefined') {
    alert(new_data.error);
    return;
  }

  var affected_bars = [];
  var i, id, site_id;

  /**
   * Loop through each site in the new data, then loop through each bar, if bar.site_id matches the data row
   * loop through each attribute and add it to the bar, then add it to a list of affected bars so afterwards
   * we can change the bar modes/images if necessary and refresh their images.
   */

  for (site_id in new_data) {
    for (id in this.bars) {
      if (this.bars[id].site_id == site_id) {
        for (i in new_data[site_id]) {
          switch(i) {

            case 'f':
            if (new_data[site_id][i] == false) {
              this.bars[id].is_fav = false;
            }
            else {
              this.bars[id].is_fav = true;
            }

            if (this.bars[id].addons['fav'] === true) {
              this.addons.fav.update(id, new_data[site_id][i]);
            }

            break;

            case 'p':
            this.bars[id].prediction = new_data[site_id][i];
            break;
            case 'v':
            this.bars[id].rating = new_data[site_id][i];
            break;
            case 's':
            this.bars[id].score = new_data[site_id][i];
            break;
            case 'w':
            if (this.bars[id].addons['wsc'] === true) {
              this.addons.wsc.update(id, new_data[site_id][i]);
            }
            case 'i':
            //MARK
            break;
            case 'u':
            window.location = new_data[site_id][i];
            break;
          }
        }
        affected_bars.push(id);
      }
    }
  }

  for (i in affected_bars) {
    var bar_id = affected_bars[i];
    this.guessBarMode(bar_id);
    this.setBarImage(bar_id);
  }

  this.preloadBarImages();

  for (i in affected_bars) {
    var bar_id = affected_bars[i];
    this.restoreBarImage(bar_id);
  }

  this.enable_clicks = true;
}


/**
 * This is the interface to the main site.
 *
 * You can pass in a url (such as an action like voting), but if no url is given
 * it just fetches data for everything in starbar.site_ids
 */

starbar.fetchVoteData = function(url)
{
  if (me.user_id == false) {
    return false;
  }

  if (typeof url == 'undefined') {

    var addons = [];

    for (var bar_id in this.bar_addons) {
      if (typeof this.bar_addons[bar_id] == 'object') {
        for (var addon in this.bar_addons[bar_id]) {
          if (typeof addons[addon] == 'undefined') {
            addons[addon] = [];
          }

          addons[addon].push(this.site_ids[bar_id]);
        }
      }
    }

    var addon_string = '';

    for (addon in addons) {
      addon_string += '&' + addon + '=';
      addon_string += addons[addon].join(',');
    }

    var query_url = this.vote_url + 'lookup' + this.vote_auth;

    var site_id_list = [];

    for (bar_id in this.site_ids) {
      if (this.site_ids[bar_id] != false) {
        site_id_list.push(this.site_ids[bar_id]);
      }
    }

    if (site_id_list.length == 0) {
      return false;
    }

    query_url += site_id_list.join(',');
    query_url += '?' + addon_string;
  }
  else {
    //MARK
    //var query_url = this.vote_url + url;
    var query_url = url;
  }


  $.getJSON(query_url, function(data){starbar.parseAjax(data);});
}


//TODO make fetch grab addon data.

wsc_addon = function ()
{

  this.name = 'wsc';
  this.image_root = starbar.image_root;

  this.defaultMapHtml = '';
  this.defaultImgHtml = '';

  this.default_image = this.image_root + 'nsw_check.png';
  this.images        = [];
  this.alt_text      = '';

  this.last_hovered = -1;
  this.timers       = [];

  this.update = function(bar_id, in_data) {
    this.images[bar_id] = this.image_root + 'nsw_' + in_data + '.png';
    this.restore(bar_id);
  };

  this.getHtml = function(bar_id) {
    var img_map, img;

    var mouse_over = 'starbar.addons.wsc.m_over(';
    var mouse_out  = 'starbar.addons.wsc.m_out(';
    var on_click   = 'starbar.addons.wsc.on_click(';
    var area_name   = 'sb_wsc_imgmap_' + bar_id + '_' ;

    img_map  = '<map class="sb_map" id="sb_wsc_imgmap_' + bar_id + '" name="sb_wsc_imgmap_' + bar_id + '">';

    img_map += '<area href="#" onclick="'+on_click+bar_id+',\'red\'); return false;" onmouseover="'+mouse_over+bar_id+',\'red\');"';
    img_map += ' onmouseout="'+mouse_out+bar_id+');" name="' + area_name + 'red" ';
    img_map += 'shape="rectangle" coords="0,0,32,12" alt="not work-safe">';
    img_map += '<area href="#" onclick="'+on_click+bar_id+',\'green\'); return false;" onmouseover="'+mouse_over+bar_id+',\'green\');"';
    img_map += ' onmouseout="'+mouse_out+bar_id+');" name="' + area_name + 'green" ';
    img_map += 'shape="rectangle" coords="32,0,65,12" alt="work-safe">';

    img_map += "</map>";

    img  =  '&nbsp;<img class="sb_image" border="0" src="' + this.default_image + '" name="sb_wsc_img_' + bar_id + '" ';
    img +=  'id="sb_wsc_img_' + bar_id + '" usemap="#sb_wsc_imgmap_' + bar_id + '">';

    return [img_map,img];

  };


  this.m_over = function (bar_id, which) {
    if (typeof starbar.bars[bar_id] == 'undefined') return false;
    if (typeof which == 'undefined') which = false;

    if (this.timers[bar_id] !== 0) {
      window.clearTimeout(this.timers[bar_id]);
      this.timers[bar_id] = 0;
    }

    if (this.last_hovered >= 0) {
      if (this.last_hovered != bar_id || this.last_hovered == bar_id && which === false) {
        this.restore(this.last_hovered);
      }
    }

    this.last_hovered = bar_id;

    if (which !== false) {

      $('#sb_wsc_img_' + bar_id).attr('src', this.image_root + 'nsw_'+which+'.png');

      //document.getElementById('sb_wsc_img_' + bar_id).src = this.image_root + 'nsw_'+which+'.png';
    }
  }

  this.m_out = function (bar_id) {
    if (this.timers[bar_id] === 0 || typeof this.timers[bar_id] == 'undefined') {
      this.timers[bar_id] = window.setTimeout('starbar.addons.wsc.restore('+ bar_id +')', 100);
    }
  }

  this.on_click = function (bar_id, which) {
    if (starbar.enable_clicks === false) {
      return false;
    }

    if (typeof bar_id == 'undefined' || typeof starbar.bars[bar_id] == 'undefined') {
      return false;
    }
    else {
      var sb = starbar.bars[bar_id];
    }

    starbar.enable_clicks = false;

    //MARK FUCK
    //vote_url = '&a=w&s=' + sb.site_id + '&v=' + which;
    vote_url = starbar.vote_url + 'ws_vote' + starbar.vote_auth + sb.site_id + '/' + which;

    starbar.fetchVoteData(vote_url);
    return false;
  }

  this.restore = function (bar_id) {

    if (this.images[bar_id] == '' ||  typeof this.images[bar_id] == 'undefined') {
      var new_img = this.default_image;
    }
    else {
      var new_img = this.images[bar_id];
    }

    $('#sb_wsc_img_'+bar_id).attr('src', new_img);
    $('#sb_wsc_img_'+bar_id).attr('alt', this.alt_text);

    //document.getElementById("sb_wsc_img_"+bar_id).src = new_img;
    //document.getElementById("sb_wsc_img_"+bar_id).alt = this.alt_text;

    this.timers[bar_id] = 0;

    if (this.last_hovered == bar_id) {
      this.last_hovered = -1;
    }
  }
}




fav_addon = function ()
{

  this.name = 'fav';
  this.image_root = starbar.image_root;

  this.default_image = this.image_root + 'plusfav.png';

  this.alt_text      = 'Fav it!';

  this.update = function(bar_id, in_data) {

    if (in_data == true) {
      $('#sb_fav_img_'+bar_id).css('display', 'none');
      //document.getElementById("sb_fav_img_"+bar_id).style.display = 'none';
    }
    else {
      $('#sb_fav_img_'+bar_id).css('display', '');
      //document.getElementById("sb_fav_img_"+bar_id).style.display = '';
    }
  };

  this.getHtml = function(bar_id) {
    var img_map, img;

    var on_click   = 'starbar.addons.fav.on_click(';
    var area_name  = 'sb_fav_imgmap_' + bar_id + '_' ;

    img_map  = '<map class="sb_map" id="sb_fav_imgmap_' + bar_id + '" name="sb_fav_imgmap_' + bar_id + '">';

    img_map += '<area href="#" onclick="'+on_click+bar_id+'); return false;" ';
    img_map += 'shape="rectangle" coords="0,0,34,12" alt="'+this.alt_text+'">';
    img_map += "</map>";

    img  =  '&nbsp;<img class="sb_image" border="0" src="' + this.default_image + '" name="sb_fav_img_' + bar_id + '" ';
    img +=  'id="sb_fav_img_' + bar_id + '" usemap="#sb_fav_imgmap_' + bar_id + '">';

    return [img_map,img];
  };

  this.on_click = function (bar_id) {
    if (starbar.enable_clicks === false) {
      return false;
    }

    if (typeof bar_id == 'undefined' || typeof starbar.bars[bar_id] == 'undefined') {
      return false;
    }
    else {
      var sb = starbar.bars[bar_id];
    }

    starbar.enable_clicks = false;

    vote_url = starbar.vote_url + 'fav' + starbar.vote_auth + sb.site_id;

    //vote_url = '&a=f&s=' + sb.site_id;
    starbar.fetchVoteData(vote_url);
    return false;
  }

}


starbar.addons.wsc = new wsc_addon;
starbar.addons.fav = new fav_addon;



$(document).ready(function(){
  $('.starbar').each(function(){
    //console.log($(this).attr('class'));

    var addons  = [];
    var score   = 0;
    var site_id = 0;
    var force   = false;

    var bar_attributes = $(this).attr('class').substr(8).split(' ');

    for (attr in bar_attributes) {
      var field = bar_attributes[attr].substr(0, 5);
      var value = bar_attributes[attr].substr(6);

      switch (field) {
      case 'sitid':
        site_id = value;
        break;

      case 'score':
        score = value;
        break;

      case 'addon':
        addons.push(value);
        break;

      case 'force':
        force = value;
        break;
      }
    }

    //console.log(site_id + 'has score ' + score);

    //console.log('adding for site id ' + site_id);

    starbar.add(site_id, score, force, addons, true, $(this));

    //var bar_html = '<script type="text/javascript">starbar.add('+site_id+', '+score+',';
    //bar_html    += force+','+addons.toString()+');</script>';
    //console.log(addons.toString());

    //$(this).html(bar_html);
  });

  if (typeof ytmnd.defer_starbar == 'undefined') {
    setTimeout(starbar.pageLoad, 1000);
  }
});
