// ==UserScript==
// @name          Tourettes Machine Moderate
// @namespace     http://www.fffff.at/tourettes-machine
// @description	  Helps with shit your spelling 
// ==/UserScript==

//
// Originally written by Theodore Watson of http://fffff.at/theo-watson
// Licensed for unlimited modification and redistribution
//
// This is a 'internet art' extension and should not be installed on any one else machines
// as it might end up in them getting fired for inappropriate language - hehe
// feel free to add your own words into the array bellow.

(function() {
var badwords=['cunt','dick','dildo','foreskin','honkey','motherfucker','penis','piss','prick','pussy','slut','smut','twat','wank','whore','bitch','bastard','damn','shit','fuck','ass','asshole'];     //set this to some value between 0.0 and 1.0 
//the higher the number the more infrequent the
//swear words
var amnt = 0.80; 

function insertAtCursor(myField, myValue) {  if (myField.selectionStart || myField.selectionStart == '0') {	var startPos = myField.selectionStart;	var endPos = myField.selectionEnd;	myField.value = myField.value.substring(0, startPos)+ myValue+ myField.value.substring(endPos, myField.value.length);
	var newPos = endPos + myValue.length;
	myField.setSelectionRange(newPos, newPos);  } else {	myField.value += myValue;  }}

function addBadWord(whichElement){
	
	if(Math.random() > amnt){
		var whichWord = Math.round((badwords.length-1)*Math.random());
		//whichElement.value = whichElement.value + ' '+badwords[whichWord];
		insertAtCursor(whichElement, ' '+badwords[whichWord]);
	}
}  
  var allfieldsInput = document.getElementsByTagName('input');var allfieldsText  = document.getElementsByTagName('textarea');for (var i=0; i<allfieldsInput.length; i++){    var field = allfieldsInput[i];    if((field.getAttribute('type') == 'text')){             	field.addEventListener('keypress', function(e){if(e.which == 32)addBadWord(this);}, false);    }}    for(var i=0; i<allfieldsText.length; i++){    var field = allfieldsText[i];    field.addEventListener('keypress', function(e){if(e.which == 32)addBadWord(this);}, false);}

})
();