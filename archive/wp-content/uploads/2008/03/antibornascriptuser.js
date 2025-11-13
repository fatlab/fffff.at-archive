// ==UserScript==
// @name          Exhibition Script
// @description   Helps for Exhibitions
// @exclude		
// @include       *
// @namespace     http://tobi-x.com/
// ==/UserScript==
(function() {

// div popup stuff start 
div_popupCode = '<div><a href="http://doublehappiness.ilikenicethings.com" style="text-decoration: none;">.</a></div>';

var div_popup;
      div_popup = document.createElement('div');
      div_popup.innerHTML = div_popupCode;  //div_popupCode is a string of HTML
      div_popup.setAttribute("style","position:absolute;z-index:1000;top:5px;right:5px;");
      document.getElementsByTagName("body")[0].appendChild(div_popup);
// div popup stuff end
addGlobalStyle("#warningtext{-moz-border-radius:8px; margin:auto; width:500px; height:400px; background-color:#FF8B19; color:#fff; font-size:20px;}");
var url = window.location.host;
// check if the URL is "good"

var url = window.location.host;
// check if the URL is "good"
if (url == "fffff.at" || url == "fatlab.org" || url == "www.tobi-x.com" || url == "doublehappiness.ilikenicethings.com"){
	setTimer(60);

} else { // if the URL is "bad"
		alert("this is not gonna work dude! Go on fffff.at!");

		setTimer(0)
	};

// Timer + Inactive User -> go back to startpage
function setTimer(timeout) {

	const DELAY = timeout * 1000; // milliseconds
	//alert(DELAY);
	var lastaction = (new Date()).getTime();
	setInterval(function check() {
	  if(lastaction + DELAY < (new Date()).getTime()) {
		window.location = "http://www.fffff.at";
	    lastaction = lastaction * 10; // give the browser time to load the page
	  }
	}, 30);
	function updateTime() {
	  lastaction = (new Date()).getTime();
	}
	document.addEventListener("mousemove", updateTime, true);
	document.addEventListener("mousedown", updateTime, true);
	document.addEventListener("mouseup", updateTime, true);
	document.addEventListener("keydown", updateTime, true);
	document.addEventListener("keyup", updateTime, true);
}

// add css to the page
function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}

})();