function reply(node) {

	url="";

	if(document.all) {	// Explorer-Extrawurst: Hier ist das Link-Objekt gleich der URL
		url = node;
	} else {

		for(i=0; i<node.attributes.length; i++) {
				if(node.attributes[i].nodeValue.indexOf("forum.pl") > -1) {
					url = node.attributes[i].nodeValue;
				}
		}
	}

	IFrame = document.createElement("iframe");
	IFrame.setAttribute("src", url);
	IFrame.setAttribute("border", "0");
	IFrame.setAttribute("frameborder", "0");

	node.parentNode.replaceChild(IFrame, node);

	return false;
}