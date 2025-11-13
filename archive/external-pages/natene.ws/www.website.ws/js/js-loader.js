(function() {
    var scriptIndex = window.jsLoaderScriptIndex || 0,
        _self = [].slice.call(document.getElementsByTagName('script'))
        .filter(function(s) {
            return s.src && s.src.indexOf('js-loader.js') !== -1;
        })[scriptIndex++],
        load = _self.src.split('#').pop().split(';'),
        script;

    window.jsLoaderScriptIndex = scriptIndex;

    for (var index = 0; index < load.length; index++) {
        var src = unescape(load[index]);

        if (src) {
            script = document.createElement('script')
            script.src = src;
            document.head.appendChild(script)
        }
    }
})();
