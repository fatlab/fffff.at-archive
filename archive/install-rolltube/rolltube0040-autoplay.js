// ==UserScript==
// @name         Roll-Tube
// @namespace    http://fffff.at/rickroll-the-firefox-addon
// @description	 You've been rick rolled!
// ==/UserScript==

//
// Originally written by Theodore Watson of http://fffff.at/theo-watson
// Licensed for unlimited modification and redistribution
//
// This is a 'internet art' extension and should not be installed on any one else machines
// as it might end up in them getting fired for inappropriate rick rollidge action

(function() {

var autoplay = true;
 
var id = "gQCOQ63otnk";

if(autoplay){
	id+= "&autoplay=1";
}

var objects = document.getElementsByTagName('object');

for (var i=0; i< objects.length; i++){

    var handle = objects[i].getElementsByTagName("param");

    if(objects[i].getElementsByTagName("param") ){
     	
	var foundVideo = false;
	
	var w = 425;
	var h = 355;

	var source =  handle[0].getAttribute("value");
	
	if(source.indexOf('youtube.com') != -1){
		foundVideo = true;
		w = objects[i].getAttribute("width");
		h = objects[i].getAttribute("height");
	}
 	
	var dataH;
	if( !foundVideo && ( (dataH =  objects[i].getAttribute("data") ) != null )){

		if(dataH.indexOf('youtube.com') != -1){
			foundVideo = true;
			w = objects[i].getAttribute("width");
			h = objects[i].getAttribute("height");
		}
	}
	if( !foundVideo ){

			var embedH = objects[i].getElementsByTagName("embed");
			if(embedH == null || embedH[0] == null)continue;

			var embSrc = embedH[0].getAttribute("src");
			if( embSrc == null )continue;
			
			if(embSrc.indexOf('/player2.swf') != -1){
				//alert("YES!");
				foundVideo = true;
				w = embedH[0].getAttribute("width");
				h = embedH[0].getAttribute("height");
			}
		
        }

	if( foundVideo  ){
		//alert("switching video");
		var newP = document.createElement("object");

		var obj = document.createElement('object');
		obj.id = 'objectID';

		obj.setAttribute('width', w);
		obj.setAttribute('height', h);

		var param = document.createElement('param');
		param.setAttribute('name', 'movie');
		param.setAttribute('value', 'http://www.youtube.com/v/'+id);
		obj.appendChild(param);

		var param = document.createElement('param');
		param.setAttribute('name', 'wmode');
		param.setAttribute('value', 'transparent');
		obj.appendChild(param);

		var embed = document.createElement('embed');
		embed.setAttribute('width', w);
		embed.setAttribute('height', h);
		embed.setAttribute('wmode', 'transparent');
		embed.setAttribute('type', 'application/x-shockwave-flash');
		embed.setAttribute('src', 'http://www.youtube.com/v/' +id);
		obj.appendChild(embed);
		
		objects[i].parentNode.replaceChild(obj,objects[i]);
	}
    }    
}

//for youtube.com
var embeds = document.getElementsByTagName('embed');
for (var i=0; i< embeds.length; i++){	
	//alert("embeds");
	var name =  embeds[i].getAttribute("name");
	if(name == "movie_player"){

		//alert("found you tube video");

		var fVars = embeds[i].getAttribute("flashvars");

		if(fVars == null) continue;

		var w = 480;
		var h = 395;

		var obj = document.createElement('object');
		obj.id = 'objectID';

		obj.setAttribute('width', w);
		obj.setAttribute('height', h);

		var param = document.createElement('param');
		param.setAttribute('name', 'movie');
		param.setAttribute('value', 'http://www.youtube.com/v/'+id);
		obj.appendChild(param);

		var param = document.createElement('param');
		param.setAttribute('name', 'wmode');
		param.setAttribute('value', 'transparent');
		obj.appendChild(param);

		var embed = document.createElement('embed');
		embed.setAttribute('width', w);
		embed.setAttribute('height', h);
		embed.setAttribute('wmode', 'transparent');
		embed.setAttribute('type', 'application/x-shockwave-flash');
		embed.setAttribute('src', 'http://www.youtube.com/v/' +id);
		obj.appendChild(embed);
		
		embeds[i].parentNode.replaceChild(obj, embeds[i]);
	}
}


})
();