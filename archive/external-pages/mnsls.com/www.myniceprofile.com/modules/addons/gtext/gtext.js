var gtext_deffont_li;

function select_deffont(font)
{
    var el = document.getElementById("ct_deffont");
    el.value = font;
    var el = document.getElementById("li_"+font);
    gtext_deffont_li.style.background='#fff';
    gtext_deffont_li = el;
    el.style.background='#bfffbf';
    return false;
}

function init_deffont(el_id) {
    gtext_deffont_li = document.getElementById(el_id);
}
