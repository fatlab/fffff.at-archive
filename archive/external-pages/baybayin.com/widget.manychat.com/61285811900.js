window.mcwidget = {"pageId":"61285811900","host":"app.manychat.com"};

(function(d, s, id){
    var host = "mccdn.me";

    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) { return; }
    js = d.createElement(s); js.id = id;
    js.src = "//" + host + "/assets/js/widget.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, "script", "mcwidget-core"));

