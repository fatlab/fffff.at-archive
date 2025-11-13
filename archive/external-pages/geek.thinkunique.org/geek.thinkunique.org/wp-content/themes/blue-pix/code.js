var isInternetExplorer = navigator.appName.indexOf("Microsoft") != -1;
var bShowing=false;
function showKonami() {
    if(bShowing) return;
    var oFrame = isInternetExplorer ? document.all.konami : document.getElementById('konami');
    oFrame.setAttribute('height',30);
    oFrame.contentWindow.location.replace("http://geek.thinkunique.org/wp-content/themes/blue-pix/music.html");
    bShowing=true;
}
	  
var kkeys = [];
var konamiString = "38,38,40,40,37,39,37,39,66,65";
// up, up, down, down, left, right, left, right, B, A

function setupStuff() {
    if (window.addEventListener) {
        //alert("firefox");
        window.addEventListener('keydown', function(e) {
            kkeys.push(e.keyCode );
            if (kkeys.toString().indexOf(konamiString) >= 0 )
                showKonami();
        }, true)
    }
    else if(document.body.attachEvent) {
        //alert("ie detected");
	    document.body.attachEvent('onkeydown', function(e){
            kkeys.push(e.keyCode);
            if (kkeys.toString().indexOf(konamiString) >= 0)		
                showKonami();
	    }, true)
    }
}
