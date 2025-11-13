function zoom(bild, width, height)
	{
		
	var winname = "zoomwin"+Math.round(Math.random(4096));
	
	var zoomwin = 
		window.open(homedir + "zoom.pl?datei=" + bild + "&width=" + width + "&height=" + height + "&bild=" + winname, winname, "width="+width+",height="+height);

	zoomwin.focus();		
		
	return false;
	}