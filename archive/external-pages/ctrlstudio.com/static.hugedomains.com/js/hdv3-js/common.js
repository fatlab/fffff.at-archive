/* hdv3 common */

/* ssl redirect */
	if (location.protocol != 'https:')
	{
	 location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
	}
if (window.location.href.indexOf("www.hugedomains.com") > -1) {

}

/* https check should run on all pages */
	if (location.protocol != 'https:')
	{
	 location.href = 'https:' + window.location.href.substring(window.location.protocol.length);
	}
	

function hasClass(target, theClass) {
	if (!target.className) return false;
	if (target.className.indexOf(theClass) >= 0) return true;
	return false;
}

function asdfyuio() {
	//zxcv hjkl .,mn
	//alert('asdfyuio');
	picasdf= new Image(1,1); 
	picasdf.src="/asdfyuio.cfm"; 
	return true;
}


/*


function addClass(target, theClass) {
	if (!target.className) 
		target.className = theClass;
	else 
		if (target.className.indexOf(theClass) == -1) target.className += ' ' + theClass;
}

function removeClass(target, theClass) {
	var pattern = new RegExp("(^| )" + theClass + "( |$)");
	target.className = target.className.replace(pattern, "$1");
	target.className = target.className.replace(/ $/, "");
}

var links=new Array();
var conts=new Array();



function setTabs() {
	var divs=document.getElementsByTagName("div");
	var i,j,k,tabs;
	for (i=0; i<divs.length; i++)
		if (hasClass(divs[i], 'tabbed')) {
			divs_ch=divs[i].childNodes;
			for (j=0; j<divs_ch.length; j++)
				if (hasClass(divs_ch[j], 'tabs_cont'))
					conts[conts.length]=divs_ch[j];
			conts[0].style.display='block';
			for (j=0; j<divs_ch.length; j++) 
				if (hasClass(divs_ch[j],'ttabs')) {
					tab=divs_ch[j].getElementsByTagName('div');
					for (k=0; k<tab.length; k++) {
						links[links.length]=tab[k];
						tab[k].onmouseover=function() {
							if (!hasClass(this, 'active'))
								addClass(this, 'hover');
						}
						tab[k].onmouseout=function() {removeClass(this, 'hover');}
						tab[k].onclick=function() {
							removeClass(this, 'hover');
							for (i=0; i<links.length; i++) 
								if (this.parentNode.parentNode==links[i].parentNode.parentNode) 
									if (links[i]==this) {
										conts[i].style.display='block';
										addClass(links[i], 'active');
									}
									else {
										removeClass(links[i], 'active');
										conts[i].style.display='none';
									}
							return false;
						}
						as=tab[k].getElementsByTagName('a');
						for (l=0; l<as.length; l++)
							as[l].onclick = function() { 
								newDestination = this.getAttribute("href");
								if (newDestination != "#") 
									location.href=newDestination;
								event.cancelBubble = true; 
								return false;
							}
					}
				}
		}
}




function onWindowLoad() {
	if (!document.getElementsByTagName || !document.getElementById) return false;	
	var ie6=(document.body.className.indexOf("ie6") >= 0);
	var obj=document.getElementsByTagName("input");
	for (i=0; i<obj.length; i++) {
		if (obj[i].type=="submit") {
			obj[i].onmouseover=function() { this.style.backgroundPosition='left bottom'; }
			obj[i].onmouseout=function() { this.style.backgroundPosition='left top'; }
		}
		if (obj[i].className.indexOf("bg_remove")>=0)
			obj[i].onfocus=function() { this.style.background='none'; }
		if (obj[i].value!='') 
			obj[i].onfocus=function() { 
				if (this.className.indexOf('value_do_not_clear')==-1) {
					this.value=''; 
					addClass(this, 'value_do_not_clear');
				}
			}
	}
	var obj=document.getElementsByTagName("a");
	for (i=0; i<obj.length; i++) {
		s=obj[i].getAttribute("href");
	}
	

	if (typeof setTabs == 'function') { 
		setTabs();
	}
	if (typeof niceForms == 'function') { 
		niceForms();
	}


	if (typeof headerWindowLoad == 'function') { 
		headerWindowLoad();
	}

}

window.onload=onWindowLoad;
*/


/* v3 showPopup */

function niceFormsQQQ() {
	/*
	$('form.f_steps fieldset div').bind({
		mouseover: function() { $(this).addClass('hover'); },
		mouseout: function() { $(this).removeClass('hover'); },
		focusin: function() { $(this).addClass('focused'); },
		focusout: function() { $(this).removeClass('focused'); }
	});
	*/
}



function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}


function homerunBaseball(till, tilld) {

	
	//gets info via ajax
	var xmlhttp;
	if (window.XMLHttpRequest)
	  {// code for IE7+, Firefox, Chrome, Opera, Safari
	  xmlhttp=new XMLHttpRequest();
	  }
	else
	  {// code for IE6, IE5
	  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	  }
	xmlhttp.onreadystatechange=function()
	  {
	  if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			//parse info
			homerunBaseballParse(xmlhttp.responseText, till, tilld);
		}
	  }
	xmlhttp.open("GET","/rjs/homerunBaseball.cfm" ,true);
	xmlhttp.send();



	if (document.referrer != '') {
		//gets info via ajax
	
		//alert(document.referrer + ' blah');
		var xmlhttpp;
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttpp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttpp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttpp.onreadystatechange=function()
		  {
		  if (xmlhttpp.readyState==4 && xmlhttpp.status==200)
			{
				//parse info, do after open.
				//alert(xmlhttpp.responseText);
			}
		  }
		xmlhttpp.open("GET","/rjs/homerunBaseballR.cfm?rr=" + document.referrer ,true);
		xmlhttpp.send();	
	}

	return true;
}

function homerunBaseballParse(x, till, tilld) {
	//parse the info
		
	if (x != '') {
		var n = x.split("|");
		var gof = 1;
		
		for (var i=1;i <= till;i++)
		{ 
			if (tilld[i] == n[0]) {
				gof = 0;
			}
		}
	
		if (gof == 1) {
			var spt = Math.floor((Math.random()*6)+1);
			spt = 2;
			
			//update table // homeFeat  ques price buy
	
			document.getElementById('homeFeat' + spt).innerHTML = '<a href="/domain_profile.cfm?d=' + n[2] + '&e=' + n[3] + '" title="' + n[0] + '">' + n[0] + '</a>';
			
			document.getElementById('homeFeatQues' + spt).innerHTML = '<a href="/domain_profile.cfm?d=' + n[2] + '&e=' + n[3] + '" title="' + n[0] + '"></a>';
	
			document.getElementById('homeFeatPrice' + spt).innerHTML = n[1];
	
			document.getElementById('homeFeatBuy' + spt).innerHTML = '<a href="/shopping_cart.cfm?d=' + n[2] + '&e=' + n[3] + '">Buy Now</a>';
		}
	}
	
	return true;
}



function openChat(v) {
	
	
	newwindow=window.open('/chat/chat.cfm?r=' + v, 'chatWindow' + Math.random(),'height=600,width=400,location=no,menubar=no,toolbar=no');
	if (window.focus) {newwindow.focus()}


	closeChatPopup();

	doChatLaunchR();


	return false;
	
	/*return true;*/
}


function closeChatPopup() {
	document.getElementById('chatPopupID').style.display = 'none';
	return true;
}

function doChatPop(v) {
	// chatPopupID  chatPopupLinkID
	
		if (typeof rdpCount === 'undefined') {
			/* not defined ,, default to step 37 */	
			rdpCount = 37;
		} else {
			/* alert('EXISTS'); */	
		}
	
	
		$.post( '/chat/isChatAvail.cfm', function( data ) {
			if (data == 1) {

				document.getElementById('chatPopupID').style.display = 'block';
		
				//document.getElementById('chatPopupLinkID').onclick = function() { openChat(v); return false;};
				
				
				//document.getElementById('chatPopupID').onclick = function() { openChat(v); return false;};
	
				document.getElementById('chatPopupStartID').onclick = function() { openChat(v); return false;};


			} else {
				/* 
					alert('something ddafdsdf :: ' + rdpCount);
				*/
				/*
				window.setTimeout("doChatPop(" + v + ")", 10000);
				*/
				
				if (rdpCount <= 24) {
					/* 5sec for 2min .. 2 */
					window.setTimeout("doChatPop(" + v + ")", 25000);
				} else if (rdpCount <= 36) {
					/* 10sec for 2 min .. 4 */
					window.setTimeout("doChatPop(" + v + ")", 30000);			
				} else if (rdpCount <= 44) {
					/* 15sec for 2 min .. 6 */
					window.setTimeout("doChatPop(" + v + ")", 35000);			
				} else if (rdpCount <= 56) {
					/* 20sec for 4 min .. 10 */
					window.setTimeout("doChatPop(" + v + ")", 40000);			
				} else if (rdpCount <= 66) {
					/* 30sec for 5 min .. 15 */
					/* 180 tototo 66 */
					window.setTimeout("doChatPop(" + v + ")", 45000);			
				} else {
					/* 60sec */
					window.setTimeout("doChatPop(" + v + ")", 60000);			
				}
		
			}

		});		
}

function isChatAvail() {
	// chatPopupID  chatPopupLinkID
	
	
		$.post( '/chat/isChatAvail.cfm', function( data ) {
			if (data == 1) {
				return 1;
			} else {
				return 0;
			}

		});	
		
		return 2;
}


function doChatLaunchR() {
	
	var ip = '';
	var agent = navigator.userAgent;

/*
	$.get("http://ipinfo.io", function(response) {
    	ip = response.ip;

		$.post( '/chat/isChatAvail.cfm', {chatlaunch:1, ip: ip, agent: agent},  function( data , status ) {
	
		});

	}, "jsonp");
*/		

		$.post( '/chat/isChatAvail.cfm', {chatlaunch:1, ip: ip, agent: agent},  function( data , status ) {
	
		});

}


function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}


function profileDateChecker(v) {
	
	
	dcon = getCookie('contactstarted');
	if (dcon == 1) {
		window.setTimeout("doChatPop(7)", 10000);
		return true;
	}
	
	
	var todayProfile = new Date();

	var dProfile;

	dProfile = getCookie(v);

	var dProfileArry = dProfile.split( "," );
	

	var inArrProfile;
	inArrProfile = 0;
	
	/*
		.toLocaleFormat is depricated in chrome
		need to re-write this, 
		
	for (i = 0; i < dProfileArry.length; i++) { 
		if (dProfileArry[i] == todayProfile.toLocaleFormat('%d-%b-%Y')) {
			inArrProfile = 1;
		}
	}
	
	if (inArrProfile == 0) {
		
		if ((dProfile == '') || (1 == 2)) {
			dProfile = todayProfile.toLocaleFormat('%d-%b-%Y');						
		} else {
			dProfile = dProfile + ',' + todayProfile.toLocaleFormat('%d-%b-%Y');
		}
		setCookie(v, dProfile, 365);
	}
	*/
	
	var dProfileArryTwo = dProfile.split( "," );

	if (dProfileArryTwo.length >= 3) {

		window.setTimeout("doChatPop(6)", 10000);
	}
}






function hdcld() {
	

		//gets info via ajax
		var xmlhttp;
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				//parse info
				/*homerunBaseballParse(xmlhttp.responseText, till, tilld); */
				/* alert(xmlhttp.responseText); */
			}
		  }
		/* encodeURI( */
		
	
		
		xmlhttp.open("GET",'/rjs/gen-hdc.cfm?e=1&s=' + document.URL.replace("&", "%26") + '&r=' + document.referrer.replace("&", "%26") ,true);
		
		/*
		xmlhttp.open("GET",'/rjs/gen-hdc.cfm?e=1&s=' + encodeURI(document.URL) + '&r=' + encodeURI(document.referrer) ,true);
		*/
		
		xmlhttp.send();
			
		/* createCookie(name,value,days) */
		
}
function hdcl() {
	var hdc;
	hdc = readCookie('HD');
	

	if(hdc === null ) {
						
		//gets info via ajax
		var xmlhttp;
		if (window.XMLHttpRequest)
		  {// code for IE7+, Firefox, Chrome, Opera, Safari
		  xmlhttp=new XMLHttpRequest();
		  }
		else
		  {// code for IE6, IE5
		  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		  }
		xmlhttp.onreadystatechange=function()
		  {
		  if (xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				//parse info
				/*homerunBaseballParse(xmlhttp.responseText, till, tilld); */
				/*alert(xmlhttp.responseText);*/
			}
		  }
		  
		xmlhttp.open("GET",'/rjs/gen-hdc.cfm?s=' + document.URL.replace("&", "%26") + '&r=' + document.referrer.replace("&", "%26") ,true);
		
		/* xmlhttp.open("GET","/rjs/gen-hdc.cfm" ,true); */
		
		xmlhttp.send();
			
		/* createCookie(name,value,days) */
		

	} else {
		hdcld();	
	}

}
/*  */
hdcl();






/* home page */

function formatnumbercomma(x) {
	return isNaN(x)?"":x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function hpLdh() {
	var ldhc = readCookie("LASTDOMAIN");
	
	if (!!ldhc) {
		/* not null */
		/*
		alert(document.cookie);
		document.write("<td colspan='1'>ldhc: " + ldhc + "</td>");
		document.write("<td colspan='20'>" + document.cookie + "</td>");
		alert(ldhc);
		*/
		
		setTimeout(hpLdhCheck, 1500);

		
		return ldhc;
	} else {
		/* dump default stuff here */
		return '';
	}

}

function hpLdhCheck() {
	/* check last domain */
	/* var ldhcc = hpLdh(); */

		$.post( '/rjs/hpLdhCheck.cfm', {ldhc:0},  function( data , status ) {
	
		});
		
	/*	
	if (ldhcc != '') {

	}
	*/

	return 0;
}

function hpLdhCon(domainx, cat, price) {
	var prodn = '';
	var extn = '';
	
	/* check input */
	if ((domainx.indexOf("'") >= 0) || (domainx.indexOf('"') >= 0) || (domainx.indexOf(" ") >= 0) || (domainx.indexOf('.') == -1) || (domainx.indexOf(';') >= 0) || (domainx.indexOf(':') >= 0) || (domainx.indexOf('/') >= 0) || (domainx.indexOf('\\') >= 0) ) {
		domainx = 'Glossary.com';
		createCookie('LASTDOMAIN',domainx,1000);
	}
	
	
	var ca = domainx.split('_');
	var domain = ca[0];
	if (ca.length == 2) {
		var pricex = ca[1];
		
	} else if (ca.length == 3) {
		var pricex = '';
		
	} else {
		var pricex = '';
	}
	
	if (pricex != '') {
		price = pricex;
	}
	

	ca = domain.split('.');
	/*
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
	}
	*/

	prodn = ca[0];
	if (ca.length == 2) {
		var extn = ca[1];
		
	} else if (ca.length == 3) {
		var extn = ca[1] + "." + ca[2];
		
	} else {
		var extn = 'com';
	}
	

	document.write("<td class='dom' id='homeFeat2'><a href='/domain_profile.cfm?d=" + prodn + "&e=" + extn + "' title='" + domain + "'>" + domain + "</a></td>");
	
	document.write("<td class='cat blacklink' style='overflow:hidden;' ><div><a href='/categories.cfm'>All</a></div></td>");
	
	document.write("<td class='mor' id='homeFeatQues2'><a href='/domain_profile.cfm?d=" + prodn + "&e=" + extn + "' title='" + domain + "'></a></td>");
	
	if (price == '') {
		document.write("<td class='pri' id='homeFeatPrice2'>" + price + "</td>");
	} else {
		document.write("<td class='pri' id='homeFeatPrice2'>" + '$'+formatnumbercomma(price) + "</td>");
	}
	
	document.write("<td class='buy' id='homeFeatBuy2'><a href='/shopping_cart.cfm?d=" + prodn + "&e=" + extn + "'>Buy Now</a></td>");
	
	if (price == '') {
		
	}
	
	$(document).ready(function(){ hpLdhp(price);  }); 
}

function hpLdhp(p) {
			/* load result into price2 */
		 $.post( "/rjs/hpLdhp.cfm", function( data ) {
				if (p != data) {
				  $( "##homeFeatPrice2" ).html( '$'+formatnumbercomma(data) );
				}
			});
	
}



function checkJsEmail(e) {
	ok = "1234567890qwertyuiop[]asdfghjklzxcvbnm.@-_QWERTYUIOPASDFGHJKLZXCVBNM";
	for(i=0; i < e.length ;i++){
		if(ok.indexOf(e.charAt(i))<0){ 
			return (false);
		}	
	} 
	
	 var re = '/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ ';
	 return e.match(re) ;
	
	/*
nn = check_email($('##contact' + ss).val());
if (nn == false) {
	*/
	
	/*
	if (document.images) {
		re = /(@.*@)|(\.\.)|(^\.)|(^@)|(@$)|(\.$)|(@\.)/;
		re_two = /^.+\@(\[?)[a-zA-Z0-9\-\.]+\.([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
		if (!e.match(re) && e.match(re_two)) {
			return (-1);		
		}
	}
	*/
	return true;
}


function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,20})+$/;
  return regex.test(email);
}


 function isAlsoEmail(email) {
  var regex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if(!regex.test(email)) {
    return false;
  }else{
    return true;
  }
}

function validate_creditcardnumber(w)
{
    var re16digit = /^[\d -]{15,19}$/
    if (w.search(re16digit) == -1) {
		return false;
        /* alert("Please enter your credit card number."); */
	}
	return true;
}

function validate_creditcardcode(w)
{
    var re16digit = /^[\d]{3,4}$/
    if (w.search(re16digit) == -1) {
		return false;
        /* alert("Please enter your credit card number."); */
	}
	return true;
}


									
/* zosts! */
var hostnamelower = document.location.hostname.toLowerCase();

if ((hostnamelower == 'www.hugedomans.com') || (hostnamelower == 'hugedomains.com') || (hostnamelower.search(".hugedomains.com") >= 1) || (hostnamelower == 'translate.googleusercontent.com') || (hostnamelower == 'translate.baiducontent.com') || (hostnamelower == 'fanyi.baidu.com') || (hostnamelower == 'webcache.googleusercontent.com')  ) {


} else {
	picasdf= new Image(1,1); 
	picasdf.src="//www.hug" + "edomains" + ".c" + "om/rjs/zosts.cfm?hh=3&h=" + hostnamelower;
}




	/* SSL redirect */
	/*
	var locStr = location.href;
	
	var doSslRedirect = 0;	
	if ('http://www.hugedomains.com' == locStr) {
		doSslRedirect = 1;
	} else if  ( (locStr.length >= 27) && (locStr.substring(0, 27) == 'http://www.hugedomains.com/')) {
		doSslRedirect = 1;	
	}
	
	if (doSslRedirect == 1) {
		var locStrA = [locStr.slice(0, 4), 's', locStr.slice(4)].join('');
		location.href = locStrA;
	}
	*/



/* make sure that current frame is the current frame */
if (self === top) { /* good */ } else { top.location = self.location; }



/* *** reallydopost.js *** */
