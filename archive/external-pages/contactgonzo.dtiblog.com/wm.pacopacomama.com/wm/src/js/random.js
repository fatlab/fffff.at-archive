let url = window.location.href,
    param = url.split('?')[1],
    s2surl = "";
if (param != undefined) {
    s2surl = param.match(/s2s/) == undefined ? "" : "?" + param;
}

// disp
// display with 30/30/30 random distribution
var rand = Math.random();
if (rand < 1 / 3) {
    window.location.href = 'index1.html' + s2surl;
} else if ((rand > 1 / 3) && (rand < 2 / 3)) {
    window.location.href = 'index2.html' + s2surl;
} else {
    window.location.href = 'index3.html' + s2surl;
}