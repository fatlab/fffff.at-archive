<!--
function Add(href) {
  WebRing[++NumInWebRing] = new WebRingObject(href);
  if (location.href.indexOf(href) > -1) 
    WhereInRing = NumInWebRing;
}
 
function WebRingObject(href) {
  this.href = href;
}
 
var WhereInRing = 0, NumInWebRing = 0, WebRing = new Array();
 
function IO(U, V) {
  var X = !window.XMLHttpRequest ? new ActiveXObject('Microsoft.XMLHTTP') : new XMLHttpRequest();
  X.open(V ? 'PUT' : 'GET', U, false );
  X.setRequestHeader('Content-Type', 'text/html');
  X.send(V ? V : '');
  return X.responseText;
}
 
var lines=IO("sites.txt").split(/\r?\n/g);
for (i=0;i<(lines.length);i=i+1)
{
Add(lines[i]);
}


function letsgo(){

  if (WhereInRing <= 1) {
    PrevInRing = NumInWebRing;
  } else {
    PrevInRing = WhereInRing - 1;
  }
 
  if (WhereInRing >= NumInWebRing) {
    NextInRing = 1;
  } else {
    NextInRing = WhereInRing + 1;
    }
}

var blah = letsgo()

function nextlink() {
  parent.frames[0].location = WebRing[NextInRing].href;
  WhereInRing = WhereInRing + 1;
  if (WhereInRing >= NumInWebRing) 
    WhereInRing = 0;
  letsgo()
}
function prevurl() {
  parent.frames[0].location = WebRing[PrevInRing].href;
  WhereInRing = WhereInRing - 1;
  if (WhereInRing <= 0) 
    WhereInRing = NumInWebRing;
  letsgo()   
}

function getRandom() {
  return Math.random()
}

function randurl() {
  var myrand = Math.round(getRandom()*NumInWebRing)
  parent.frames[0].location = WebRing[myrand].href;
  WhereInRing = myrand
  letsgo()
} 
 
-->
