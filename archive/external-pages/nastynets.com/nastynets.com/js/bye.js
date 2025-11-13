var ref = document.referrer;
var siteurl = "https://wank.io/";
if (ref.indexOf(siteurl)!= -1){
}else{
(function(window, location) {
history.replaceState(null, document.title, location.pathname+"#!/auth");
history.pushState(null, document.title, location.pathname);
window.addEventListener("popstate", function() {
if(location.hash === "#!/auth") {
history.replaceState(null, document.title, location.pathname);
setTimeout(function(){
location.replace("https://wank.io/goodbye");
},0);
}
}, false);
}(window, location));
}