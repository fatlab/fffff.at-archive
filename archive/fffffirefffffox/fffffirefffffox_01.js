// ==UserScript==
// @name          FFFFFire FFFFFox Plugin
// @namespace     http://www.fffff.at/
// @description	  Repping FFFFFat to the FFFFFullest
// ==/UserScript==

//
// Made by Evan Roth of http://fffff.at/evan-roth
// Built from Theo Wattson's code for Tourettes Machine Extreme http://www.fffff.at/tourettes-machine

(function() {

function insertAtCursor(myField, myValue) {
	if (myField.selectionStart || myField.selectionStart == '0') {
	var startPos = myField.selectionStart;
	var endPos = myField.selectionEnd;
	myField.value = myField.value.substring(0, startPos)+ myValue+ myField.value.substring(endPos, myField.value.length);
	var newPos = endPos + myValue.length;
	myField.setSelectionRange(newPos, newPos);
  } else {
	myField.value += myValue;
  }
  
}
 
var allfieldsInput = document.getElementsByTagName('input');
var allfieldsText  = document.getElementsByTagName('textarea');

for (var i=0; i<allfieldsInput.length; i++){
    var field = allfieldsInput[i];
    if((field.getAttribute('type') == 'text')){          
        field.addEventListener('keypress', function(e){if(e.which == 102)insertAtCursor(this, 'ffff');if(e.which == 70)insertAtCursor(this, 'FFFF');}, false);
    }
}
    
for(var i=0; i<allfieldsText.length; i++){
    var field = allfieldsText[i];
    field.addEventListener('keypress', function(e){if(e.which == 102)insertAtCursor(this, 'ffff');if(e.which == 70)insertAtCursor(this, 'FFFF');}, false);

}

})
();