/*
 * File Name: mto.js
 * 	Secure email addresses
 */
function mto (eml,text)
{       var Me,To,eml;
		eml = mto_decrypt(eml);
        Me = 'm'+'a'+'i';
        To = 'l'+'to:';
        if ( typeof text == 'undefined' || text == '' )
        {       text = eml;
        }
        document.write('<a href="' + Me + To + eml + '">' + text + '</a>');
}
function mto_href (eml)
{       var Me,To,eml;
		eml = mto_decrypt(eml);
        Me = 'm'+'a'+'i';
        To = 'l'+'to:';

        document.write(Me + To + eml);
}
function mto_img (eml,img,alt)
{		var Me,To,eml;
		eml = mto_decrypt(eml);
        Me = 'm'+'a'+'i';
        To = 'l'+'to:';
        if ( typeof alt == 'undefined' || alt == '' )
        {       alt = 'e-mail';
        }
        document.write('<a href="' + Me + To + eml + '" title="' + alt + '">' + '<img src="' + img + '" border="0" alt="' + alt + '">' + '</a>');
}
function mto_decrypt(s)
{       var n=0;
        var r="";
        for(var i=0; i < s.length; i++) {
                n=s.charCodeAt(i);
                if (n>=8364) {n = 128;}
                r += String.fromCharCode(n-(3));
        }
        return r;
}