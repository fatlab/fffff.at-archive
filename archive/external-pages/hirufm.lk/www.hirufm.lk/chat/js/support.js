$(document).ready(function(){
        Cufon.replace('#status_box a,h3,h2,h1');
        $("#chat-list li").click(function(){
        window.location=$(this).find("a").attr("href"); return false;
});
});
var supportWindow=0;
function launchSupport(URLStr, left, top, width, height)
{
  if(supportWindow)
  {
    if(!supportWindow.closed) supportWindow.close();
  }

	var windowHeight = $(window).height();
	var windowWidth = $(window).width();
	var bxL = ((windowWidth - width)/2);
	var bxT = ((windowHeight - height)/2);

  supportWindow = open(URLStr, 'supportWindow', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=yes, resizable=no,copyhistory=yes, width='+width+', height='+height+', left='+bxL+', top='+bxT+', screenX='+left+', screenY='+top+'');
}
