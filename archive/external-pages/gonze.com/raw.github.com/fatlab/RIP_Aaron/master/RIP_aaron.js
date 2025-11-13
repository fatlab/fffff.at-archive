function RIP_Aaron() {
  // Check via cookie if user hasn't seen message
  if (!document.cookie.match(/aaron_moment/i)) {
    document.cookie = 'aaron_moment='+ (new Date()).getTime();

    // Hide everything
    var els = document.body.getElementsByTagName("*");
    document.body.old_body_bg = document.body.style.background;
    document.body.old_body_bg_color = document.body.style.backgroundColor;
    document.body.style.background = 'none';
    document.body.style.backgroundColor = '#000000';
    for (var i=0; i<els.length; i++) {
      try {
        if (els[i].style.visibility != 'hidden') {
          els[i].style.visibility = 'hidden';
          els[i].for_aaron = true;
        }
      } catch(e) {}
    }

    // Show RIP message
    var h1 = document.createElement('h1'), ct = document.createElement('span'), div = document.createElement('div');
    div.id = 'aaron_moment'; div.setAttribute('id', 'aaron_moment');
    ct.id = 'aaron_ct'; ct.setAttribute('id', 'aaron_ct');
    h1.innerHTML = 'A moment of silence for <a href="http://boingboing.net/2013/01/12/rip-aaron-swartz.html" target="_blank" style="color:#ffffff;text-decoration:underline;">Aaron Swartz</a>.';
    ct.innerHTML = 6;
    h1.style.color = '#ffffff';
    h1.style.fontSize = '32px;'
    h1.style.textAlign = 'center';
    h1.style.fontFamily = ct.style.fontFamily = 'Arial,Helvetica,sans-serif'
    ct.style.position = 'fixed';
    ct.style.top = '10px';
    ct.style.right = '10px';
    ct.style.color = '#444444';
    div.style.position = 'fixed';
    div.style.top = '33%';
    div.style.left = '10%';
    div.style.right = '10%';
    div.appendChild(ct);
    div.appendChild(h1);
    document.body.appendChild(div);

    // Counter in top right
    var aaron_ct = setInterval(function() {
      var el = document.getElementById('aaron_ct'),
          t = parseInt(el.innerHTML);
      el.innerHTML = (t-1);
    }, 1000);


    // Clear out after 5 econds
    setTimeout(function() {
      // Remove Aaron message
      var m = document.getElementById('aaron_moment');
      try {m.parentNode.removeChild(m);} catch(e) {}
      clearInterval(aaron_ct);

      // Nice 1 second of pure black before reverting everything
      setTimeout(function() {
        var els = document.body.getElementsByTagName("*");
        for (var i=0; i<els.length; i++) {
          try {
            if (!!els[i].for_aaron) els[i].style.visibility = 'visible';
          } catch(e) {}
        }
        document.body.style.background = document.body.old_body_bg;
        document.body.style.backgroundColor = document.body.old_body_bg_color;
        delete document.body.old_body_bg_color;
        delete document.body.old_bg_color;
      }, 1000);
    }, 5000);
  }
}


// Wait until window loads
if (window.addEventListener) {
  window.addEventListener("load", RIP_Aaron, false);
} else if (window.attachEvent) {
  window.attachEvent("onload", RIP_Aaron);
} else {
  RIP_Aaron();
}
