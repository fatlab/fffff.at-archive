;(function($,window,undefined){'use strict';var YOUTUBE_REGEXP=/^.*(youtu\.be\/|youtube\.com\/v\/|youtube\.com\/embed\/|youtube\.com\/watch\?v=|youtube\.com\/watch\?.*\&v=)([^#\&\?]*).*/i;$.fn.backstretch=function(images,options){var args=arguments;if($(window).scrollTop()===0){window.scrollTo(0,0);}
var returnValues;this.each(function(eachIndex){var $this=$(this),obj=$this.data('backstretch');if(obj){if(typeof args[0]==='string'&&typeof obj[args[0]]==='function'){var returnValue=obj[args[0]].apply(obj,Array.prototype.slice.call(args,1));if(returnValue===obj){returnValue=undefined;}
if(returnValue!==undefined){returnValues=returnValues||[];returnValues[eachIndex]=returnValue;}
return;}
options=$.extend(obj.options,options);if(typeof obj==='object'&&'destroy'in obj){obj.destroy(true);}}
if(!images||(images&&images.length===0)){var cssBackgroundImage=$this.css('background-image');if(cssBackgroundImage&&cssBackgroundImage!=='none'){images=[{url:$this.css('backgroundImage').replace(/url\(|\)|"|'/g,"")}];}
else{$.error('No images were supplied for Backstretch, or element must have a CSS-defined background image.');}}
obj=new Backstretch(this,images,options||{});$this.data('backstretch',obj);});return returnValues?returnValues.length===1?returnValues[0]:returnValues:this;};$.backstretch=function(images,options){return $('body').backstretch(images,options).data('backstretch');};$.expr[':'].backstretch=function(elem){return $(elem).data('backstretch')!==undefined;};$.fn.backstretch.defaults={duration:5000,transition:'fade',transitionDuration:0,animateFirst:true,alignX:0.5,alignY:0.5,paused:false,start:0,preload:2,preloadSize:1,resolutionRefreshRate:2500,resolutionChangeRatioThreshold:0.1};var styles={wrap:{left:0,top:0,overflow:'hidden',margin:0,padding:0,height:'100%',width:'100%',zIndex:-999999},itemWrapper:{position:'absolute',display:'none',margin:0,padding:0,border:'none',width:'100%',height:'100%',zIndex:-999999},item:{position:'absolute',margin:0,padding:0,border:'none',width:'100%',height:'100%',maxWidth:'none'}};var optimalSizeImages=(function(){var widthInsertSort=function(arr){for(var i=1;i<arr.length;i++){var tmp=arr[i],j=i;while(arr[j-1]&&parseInt(arr[j-1].width,10)>parseInt(tmp.width,10)){arr[j]=arr[j-1];--j;}
arr[j]=tmp;}
return arr;};var selectBest=function(containerWidth,containerHeight,imageSizes){var devicePixelRatio=window.devicePixelRatio||1;var deviceOrientation=getDeviceOrientation();var windowOrientation=getWindowOrientation();var wrapperOrientation=(containerHeight>containerWidth)?'portrait':(containerWidth>containerHeight?'landscape':'square');var lastAllowedImage=0;var testWidth;for(var j=0,image;j<imageSizes.length;j++){image=imageSizes[j];if(typeof image==='string'){image=imageSizes[j]={url:image};}
if(image.pixelRatio&&image.pixelRatio!=='auto'&&parseFloat(image.pixelRatio)!==devicePixelRatio){continue;}
if(image.deviceOrientation&&image.deviceOrientation!==deviceOrientation){continue;}
if(image.windowOrientation&&image.windowOrientation!==deviceOrientation){continue;}
if(image.orientation&&image.orientation!==wrapperOrientation){continue;}
lastAllowedImage=j;testWidth=containerWidth;if(image.pixelRatio==='auto'){containerWidth*=devicePixelRatio;}
if(image.width>=testWidth){break;}}
return imageSizes[Math.min(j,lastAllowedImage)];};var replaceTagsInUrl=function(url,templateReplacer){if(typeof url==='string'){url=url.replace(/{{(width|height)}}/g,templateReplacer);}
else if(url instanceof Array){for(var i=0;i<url.length;i++){if(url[i].src){url[i].src=replaceTagsInUrl(url[i].src,templateReplacer);}
else{url[i]=replaceTagsInUrl(url[i],templateReplacer);}}}
return url;};return function($container,images){var containerWidth=$container.width(),containerHeight=$container.height();var chosenImages=[];var templateReplacer=function(match,key){if(key==='width'){return containerWidth;}
if(key==='height'){return containerHeight;}
return match;};for(var i=0;i<images.length;i++){if($.isArray(images[i])){images[i]=widthInsertSort(images[i]);var chosen=selectBest(containerWidth,containerHeight,images[i]);chosenImages.push(chosen);}
else{if(typeof images[i]==='string'){images[i]={url:images[i]};}
var item=$.extend({},images[i]);item.url=replaceTagsInUrl(item.url,templateReplacer);chosenImages.push(item);}}
return chosenImages;};})();var isVideoSource=function(source){return YOUTUBE_REGEXP.test(source.url)||source.isVideo;};var preload=(function(sources,startAt,count,batchSize,callback){var cache=[];var caching=function(image){for(var i=0;i<cache.length;i++){if(cache[i].src===image.src){return cache[i];}}
cache.push(image);return image;};var exec=function(sources,callback,last){if(typeof callback==='function'){callback.call(sources,last);}};return function preload(sources,startAt,count,batchSize,callback){if(typeof sources==='undefined'){return;}
if(!$.isArray(sources)){sources=[sources];}
if(arguments.length<5&&typeof arguments[arguments.length-1]==='function'){callback=arguments[arguments.length-1];}
startAt=(typeof startAt==='function'||!startAt)?0:startAt;count=(typeof count==='function'||!count||count<0)?sources.length:Math.min(count,sources.length);batchSize=(typeof batchSize==='function'||!batchSize)?1:batchSize;if(startAt>=sources.length){startAt=0;count=0;}
if(batchSize<0){batchSize=count;}
batchSize=Math.min(batchSize,count);var next=sources.slice(startAt+batchSize,count-batchSize);sources=sources.slice(startAt,batchSize);count=sources.length;if(!count){exec(sources,callback,true);return;}
var countLoaded=0;var loaded=function(){countLoaded++;if(countLoaded!==count){return;}
exec(sources,callback,!next);preload(next,0,0,batchSize,callback);};var image;for(var i=0;i<sources.length;i++){if(isVideoSource(sources[i])){continue;}
else{image=new Image();image.src=sources[i].url;image=caching(image);if(image.complete){loaded();}
else{$(image).on('load error',loaded);}}}};})();var processImagesArray=function(images){var processed=[];for(var i=0;i<images.length;i++){if(typeof images[i]==='string'){processed.push({url:images[i]});}
else if($.isArray(images[i])){processed.push(processImagesArray(images[i]));}
else{processed.push(processOptions(images[i]));}}
return processed;};var processOptions=function(options,required){if(options.centeredX||options.centeredY){if(window.console&&window.console.log){window.console.log('jquery.backstretch: `centeredX`/`centeredY` is deprecated, please use `alignX`/`alignY`');}
if(options.centeredX){options.alignX=0.5;}
if(options.centeredY){options.alignY=0.5;}}
if(options.speed!==undefined){if(window.console&&window.console.log){window.console.log('jquery.backstretch: `speed` is deprecated, please use `transitionDuration`');}
options.transitionDuration=options.speed;options.transition='fade';}
if(options.resolutionChangeRatioTreshold!==undefined){window.console.log('jquery.backstretch: `treshold` is a typo!');options.resolutionChangeRatioThreshold=options.resolutionChangeRatioTreshold;}
if(options.fadeFirst!==undefined){options.animateFirst=options.fadeFirst;}
if(options.fade!==undefined){options.transitionDuration=options.fade;options.transition='fade';}
if(options.scale){options.scale=validScale(options.scale);}
return processAlignOptions(options);};var processAlignOptions=function(options,required){if(options.alignX==='left'){options.alignX=0.0;}
else if(options.alignX==='center'){options.alignX=0.5;}
else if(options.alignX==='right'){options.alignX=1.0;}
else{if(options.alignX!==undefined||required){options.alignX=parseFloat(options.alignX);if(isNaN(options.alignX)){options.alignX=0.5;}}}
if(options.alignY==='top'){options.alignY=0.0;}
else if(options.alignY==='center'){options.alignY=0.5;}
else if(options.alignY==='bottom'){options.alignY=1.0;}
else{if(options.alignX!==undefined||required){options.alignY=parseFloat(options.alignY);if(isNaN(options.alignY)){options.alignY=0.5;}}}
return options;};var SUPPORTED_SCALE_OPTIONS={'cover':'cover','fit':'fit','fit-smaller':'fit-smaller','fill':'fill'};function validScale(scale){if(!SUPPORTED_SCALE_OPTIONS.hasOwnProperty(scale)){return'cover';}
return scale;}
var Backstretch=function(container,images,options){this.options=$.extend({},$.fn.backstretch.defaults,options||{});this.firstShow=true;processOptions(this.options,true);this.images=processImagesArray($.isArray(images)?images:[images]);if(this.options.paused){this.paused=true;}
if(this.options.start>=this.images.length){this.options.start=this.images.length-1;}
if(this.options.start<0){this.options.start=0;}
this.isBody=container===document.body;var $window=$(window);this.$container=$(container);this.$root=this.isBody?supportsFixedPosition?$window:$(document):this.$container;this.originalImages=this.images;this.images=optimalSizeImages(this.options.alwaysTestWindowResolution?$window:this.$root,this.originalImages);preload(this.images,this.options.start||0,this.options.preload||1);var $existing=this.$container.children(".backstretch").first();this.$wrap=$existing.length?$existing:$('<div class="backstretch"></div>').css(this.options.bypassCss?{}:styles.wrap).appendTo(this.$container);if(!this.options.bypassCss){if(!this.isBody){var position=this.$container.css('position'),zIndex=this.$container.css('zIndex');this.$container.css({position:position==='static'?'relative':position,zIndex:zIndex==='auto'?0:zIndex});this.$wrap.css({zIndex:-999998});}
this.$wrap.css({position:this.isBody&&supportsFixedPosition?'fixed':'absolute'});}
this.index=this.options.start;this.show(this.index);$window.on('resize.backstretch',$.proxy(this.resize,this)).on('orientationchange.backstretch',$.proxy(function(){if(this.isBody&&window.pageYOffset===0){window.scrollTo(0,1);this.resize();}},this));};var performTransition=function(options){var transition=options.transition||'fade';if(typeof transition==='string'&&transition.indexOf('|')>-1){transition=transition.split('|');}
if(transition instanceof Array){transition=transition[Math.round(Math.random()*(transition.length-1))];}
var $new=options['new'];var $old=options['old']?options['old']:$([]);switch(transition.toString().toLowerCase()){default:case'fade':$new.fadeIn({duration:options.duration,complete:options.complete,easing:options.easing||undefined});break;case'fadeinout':case'fade_in_out':var fadeInNew=function(){$new.fadeIn({duration:options.duration/2,complete:options.complete,easing:options.easing||undefined});};if($old.length){$old.fadeOut({duration:options.duration/2,complete:fadeInNew,easing:options.easing||undefined});}
else{fadeInNew();}
break;case'pushleft':case'push_left':case'pushright':case'push_right':case'pushup':case'push_up':case'pushdown':case'push_down':case'coverleft':case'cover_left':case'coverright':case'cover_right':case'coverup':case'cover_up':case'coverdown':case'cover_down':var transitionParts=transition.match(/^(cover|push)_?(.*)$/);var animProp=transitionParts[2]==='left'?'right':transitionParts[2]==='right'?'left':transitionParts[2]==='down'?'top':transitionParts[2]==='up'?'bottom':'right';var newCssStart={'display':''},newCssAnim={};newCssStart[animProp]='-100%';newCssAnim[animProp]=0;$new.css(newCssStart).animate(newCssAnim,{duration:options.duration,complete:function(){$new.css(animProp,'');options.complete.apply(this,arguments);},easing:options.easing||undefined});if(transitionParts[1]==='push'&&$old.length){var oldCssAnim={};oldCssAnim[animProp]='100%';$old.animate(oldCssAnim,{duration:options.duration,complete:function(){$old.css('display','none');},easing:options.easing||undefined});}
break;}};Backstretch.prototype={resize:function(){try{var $resTest=this.options.alwaysTestWindowResolution?$(window):this.$root;var newContainerWidth=$resTest.width();var newContainerHeight=$resTest.height();var changeRatioW=newContainerWidth/(this._lastResizeContainerWidth||0);var changeRatioH=newContainerHeight/(this._lastResizeContainerHeight||0);var resolutionChangeRatioThreshold=this.options.resolutionChangeRatioThreshold||0.0;if((newContainerWidth!==this._lastResizeContainerWidth||newContainerHeight!==this._lastResizeContainerHeight)&&((Math.abs(changeRatioW-1)>=resolutionChangeRatioThreshold||isNaN(changeRatioW))||(Math.abs(changeRatioH-1)>=resolutionChangeRatioThreshold||isNaN(changeRatioH)))){this._lastResizeContainerWidth=newContainerWidth;this._lastResizeContainerHeight=newContainerHeight;this.images=optimalSizeImages($resTest,this.originalImages);if(this.options.preload){preload(this.images,(this.index+1)%this.images.length,this.options.preload);}
if(this.images.length===1&&this._currentImage.url!==this.images[0].url){var that=this;clearTimeout(that._selectAnotherResolutionTimeout);that._selectAnotherResolutionTimeout=setTimeout(function(){that.show(0);},this.options.resolutionRefreshRate);}}
var bgCSS={left:0,top:0,right:'auto',bottom:'auto'},boxWidth=this.isBody?this.$root.width():this.$root.innerWidth(),boxHeight=this.isBody?(window.innerHeight?window.innerHeight:this.$root.height()):this.$root.innerHeight(),naturalWidth=this.$itemWrapper.data('width'),naturalHeight=this.$itemWrapper.data('height'),ratio=(naturalWidth/naturalHeight)||1,alignX=this._currentImage.alignX===undefined?this.options.alignX:this._currentImage.alignX,alignY=this._currentImage.alignY===undefined?this.options.alignY:this._currentImage.alignY,scale=validScale(this._currentImage.scale||this.options.scale);var width,height;if(scale==='fit'||scale==='fit-smaller'){width=naturalWidth;height=naturalHeight;if(width>boxWidth||height>boxHeight||scale==='fit-smaller'){var boxRatio=boxWidth/boxHeight;if(boxRatio>ratio){width=Math.floor(boxHeight*ratio);height=boxHeight;}
else if(boxRatio<ratio){width=boxWidth;height=Math.floor(boxWidth/ratio);}
else{width=boxWidth;height=boxHeight;}}}
else if(scale==='fill'){width=boxWidth;height=boxHeight;}
else{width=Math.max(boxHeight*ratio,boxWidth);height=Math.max(width/ratio,boxHeight);}
bgCSS.top=-(height-boxHeight)*alignY;bgCSS.left=-(width-boxWidth)*alignX;bgCSS.width=width;bgCSS.height=height;if(!this.options.bypassCss){this.$wrap.css({width:boxWidth,height:boxHeight}).find('>.backstretch-item').not('.deleteable').each(function(){var $wrapper=$(this);$wrapper.find('img,video,iframe').css(bgCSS);});}
var evt=$.Event('backstretch.resize',{relatedTarget:this.$container[0]});this.$container.trigger(evt,this);}
catch(err){}
return this;},show:function(newIndex,overrideOptions){if(Math.abs(newIndex)>this.images.length-1){return;}
var that=this,$oldItemWrapper=that.$wrap.find('>.backstretch-item').addClass('deleteable'),oldVideoWrapper=that.videoWrapper,evtOptions={relatedTarget:that.$container[0]};that.$container.trigger($.Event('backstretch.before',evtOptions),[that,newIndex]);this.index=newIndex;var selectedImage=that.images[newIndex];clearTimeout(that._cycleTimeout);delete that.videoWrapper;var isVideo=isVideoSource(selectedImage);if(isVideo){that.videoWrapper=new VideoWrapper(selectedImage);that.$item=that.videoWrapper.$video.css('pointer-events','none');}
else{that.$item=$('<img />');}
that.$itemWrapper=$('<div class="backstretch-item">').append(that.$item);if(this.options.bypassCss){that.$itemWrapper.css({'display':'none'});}
else{that.$itemWrapper.css(styles.itemWrapper);that.$item.css(styles.item);}
that.$item.bind(isVideo?'canplay':'load',function(e){var $this=$(this),$wrapper=$this.parent(),options=$wrapper.data('options');if(overrideOptions){options=$.extend({},options,overrideOptions);}
var imgWidth=this.naturalWidth||this.videoWidth||this.width,imgHeight=this.naturalHeight||this.videoHeight||this.height;$wrapper.data('width',imgWidth).data('height',imgHeight);var getOption=function(opt){return options[opt]!==undefined?options[opt]:that.options[opt];};var transition=getOption('transition');var transitionEasing=getOption('transitionEasing');var transitionDuration=getOption('transitionDuration');var bringInNextImage=function(){if(oldVideoWrapper){oldVideoWrapper.stop();oldVideoWrapper.destroy();}
$oldItemWrapper.remove();if(!that.paused&&that.images.length>1){that.cycle();}
if(!that.options.bypassCss&&!that.isBody){that.$container.css('background-image','none');}
$(['after','show']).each(function(){that.$container.trigger($.Event('backstretch.'+this,evtOptions),[that,newIndex]);});if(isVideo){that.videoWrapper.play();}};if((that.firstShow&&!that.options.animateFirst)||!transitionDuration||!transition){$wrapper.show();bringInNextImage();}
else{performTransition({'new':$wrapper,old:$oldItemWrapper,transition:transition,duration:transitionDuration,easing:transitionEasing,complete:bringInNextImage});}
that.firstShow=false;that.resize();});that.$itemWrapper.appendTo(that.$wrap);that.$item.attr('alt',selectedImage.alt||'');that.$itemWrapper.data('options',selectedImage);if(!isVideo){that.$item.attr('src',selectedImage.url);}
that._currentImage=selectedImage;return that;},current:function(){return this.index;},next:function(){var args=Array.prototype.slice.call(arguments,0);args.unshift(this.index<this.images.length-1?this.index+1:0);return this.show.apply(this,args);},prev:function(){var args=Array.prototype.slice.call(arguments,0);args.unshift(this.index===0?this.images.length-1:this.index-1);return this.show.apply(this,args);},pause:function(){this.paused=true;if(this.videoWrapper){this.videoWrapper.pause();}
return this;},resume:function(){this.paused=false;if(this.videoWrapper){this.videoWrapper.play();}
this.cycle();return this;},cycle:function(){if(this.images.length>1){clearTimeout(this._cycleTimeout);var duration=(this._currentImage&&this._currentImage.duration)||this.options.duration;var isVideo=isVideoSource(this._currentImage);var callNext=function(){this.$item.off('.cycle');if(!this.paused){this.next();}};if(isVideo){if(!this._currentImage.loop){var lastFrameTimeout=0;this.$item.on('playing.cycle',function(){var player=$(this).data('player');clearTimeout(lastFrameTimeout);lastFrameTimeout=setTimeout(function(){player.pause();player.$video.trigger('ended');},(player.getDuration()-player.getCurrentTime())*1000);}).on('ended.cycle',function(){clearTimeout(lastFrameTimeout);});}
this.$item.on('error.cycle initerror.cycle',$.proxy(callNext,this));}
if(isVideo&&!this._currentImage.duration){this.$item.on('ended.cycle',$.proxy(callNext,this));}
else{this._cycleTimeout=setTimeout($.proxy(callNext,this),duration);}}
return this;},destroy:function(preserveBackground){$(window).off('resize.backstretch orientationchange.backstretch');if(this.videoWrapper){this.videoWrapper.destroy();}
clearTimeout(this._cycleTimeout);if(!preserveBackground){this.$wrap.remove();}
this.$container.removeData('backstretch');}};var VideoWrapper=function(){this.init.apply(this,arguments);};VideoWrapper.prototype.init=function(options){var that=this;var $video;var setVideoElement=function(){that.$video=$video;that.video=$video[0];};var videoType='video';if(!(options.url instanceof Array)&&YOUTUBE_REGEXP.test(options.url)){videoType='youtube';}
that.type=videoType;if(videoType==='youtube'){VideoWrapper.loadYoutubeAPI();that.ytId=options.url.match(YOUTUBE_REGEXP)[2];var src='https://www.youtube.com/embed/'+that.ytId+'?rel=0&autoplay=0&showinfo=0&controls=0&modestbranding=1'+'&cc_load_policy=0&disablekb=1&iv_load_policy=3&loop=0'+'&enablejsapi=1&origin='+encodeURIComponent(window.location.origin);that.__ytStartMuted=!!options.mute||options.mute===undefined;$video=$('<iframe />').attr({'src_to_load':src}).css({'border':0,'margin':0,'padding':0}).data('player',that);if(options.loop){$video.on('ended.loop',function(){if(!that.__manuallyStopped){that.play();}});}
that.ytReady=false;setVideoElement();if(window['YT']&&window['YT'].loaded){that._initYoutube();$video.trigger('initsuccess');}
else{$(window).one('youtube_api_load',function(){that._initYoutube();$video.trigger('initsuccess');});}}
else{$video=$('<video>').prop('autoplay',false).prop('controls',false).prop('loop',!!options.loop).prop('muted',!!options.mute||options.mute===undefined).prop('preload','auto').prop('poster',options.poster||'');var sources=(options.url instanceof Array)?options.url:[options.url];for(var i=0;i<sources.length;i++){var sourceItem=sources[i];if(typeof(sourceItem)==='string'){sourceItem={src:sourceItem};}
$('<source>').attr('src',sourceItem.src).attr('type',sourceItem.type||null).appendTo($video);}
if(!$video[0].canPlayType||!sources.length){$video.trigger('initerror');}
else{$video.trigger('initsuccess');}
setVideoElement();}};VideoWrapper.prototype._initYoutube=function(){var that=this;var YT=window['YT'];that.$video.attr('src',that.$video.attr('src_to_load')).removeAttr('src_to_load');var hasParent=!!that.$video[0].parentNode;if(!hasParent){var $tmpParent=$('<div>').css('display','none !important').appendTo(document.body);that.$video.appendTo($tmpParent);}
var player=new YT.Player(that.video,{events:{'onReady':function(){if(that.__ytStartMuted){player.mute();}
if(!hasParent){if(that.$video[0].parentNode===$tmpParent[0]){that.$video.detach();}
$tmpParent.remove();}
that.ytReady=true;that._updateYoutubeSize();that.$video.trigger('canplay');},'onStateChange':function(event){switch(event.data){case YT.PlayerState.PLAYING:that.$video.trigger('playing');break;case YT.PlayerState.ENDED:that.$video.trigger('ended');break;case YT.PlayerState.PAUSED:that.$video.trigger('pause');break;case YT.PlayerState.BUFFERING:that.$video.trigger('waiting');break;case YT.PlayerState.CUED:that.$video.trigger('canplay');break;}},'onPlaybackQualityChange':function(){that._updateYoutubeSize();that.$video.trigger('resize');},'onError':function(err){that.hasError=true;that.$video.trigger({'type':'error','error':err});}}});that.ytPlayer=player;return that;};VideoWrapper.prototype._updateYoutubeSize=function(){var that=this;switch(that.ytPlayer.getPlaybackQuality()||'medium'){case'small':that.video.videoWidth=426;that.video.videoHeight=240;break;case'medium':that.video.videoWidth=640;that.video.videoHeight=360;break;default:case'large':that.video.videoWidth=854;that.video.videoHeight=480;break;case'hd720':that.video.videoWidth=1280;that.video.videoHeight=720;break;case'hd1080':that.video.videoWidth=1920;that.video.videoHeight=1080;break;case'highres':that.video.videoWidth=2560;that.video.videoHeight=1440;break;}
return that;};VideoWrapper.prototype.play=function(){var that=this;that.__manuallyStopped=false;if(that.type==='youtube'){if(that.ytReady){that.$video.trigger('play');that.ytPlayer.playVideo();}}
else{that.video.play();}
return that;};VideoWrapper.prototype.pause=function(){var that=this;that.__manuallyStopped=false;if(that.type==='youtube'){if(that.ytReady){that.ytPlayer.pauseVideo();}}
else{that.video.pause();}
return that;};VideoWrapper.prototype.stop=function(){var that=this;that.__manuallyStopped=true;if(that.type==='youtube'){if(that.ytReady){that.ytPlayer.pauseVideo();that.ytPlayer.seekTo(0);}}
else{that.video.pause();that.video.currentTime=0;}
return that;};VideoWrapper.prototype.destroy=function(){var that=this;if(that.ytPlayer){that.ytPlayer.destroy();}
that.$video.remove();return that;};VideoWrapper.prototype.getCurrentTime=function(seconds){var that=this;if(that.type==='youtube'){if(that.ytReady){return that.ytPlayer.getCurrentTime();}}
else{return that.video.currentTime;}
return 0;};VideoWrapper.prototype.setCurrentTime=function(seconds){var that=this;if(that.type==='youtube'){if(that.ytReady){that.ytPlayer.seekTo(seconds,true);}}
else{that.video.currentTime=seconds;}
return that;};VideoWrapper.prototype.getDuration=function(){var that=this;if(that.type==='youtube'){if(that.ytReady){return that.ytPlayer.getDuration();}}
else{return that.video.duration;}
return 0;};VideoWrapper.loadYoutubeAPI=function(){if(window['YT']&&window['__yt_load_event_interval__']){return;}
if(!window['YT']&&!$('script[src*=www\\.youtube\\.com\\/iframe_api]').length){$('<script type="text/javascript" src="https://www.youtube.com/iframe_api">').appendTo('body');}
window['__yt_load_event_interval__']=setInterval(function(){if(window['YT']&&window['YT'].loaded){$(window).trigger('youtube_api_load');clearTimeout(window['__yt_load_event_interval__']);delete window['__yt_load_event_interval__'];}},50);};var getDeviceOrientation=function(){if('matchMedia'in window){if(window.matchMedia("(orientation: portrait)").matches){return'portrait';}
else if(window.matchMedia("(orientation: landscape)").matches){return'landscape';}}
if(screen.height>screen.width){return'portrait';}
return'landscape';};var getWindowOrientation=function(){if(window.innerHeight>window.innerWidth){return'portrait';}
if(window.innerWidth>window.innerHeight){return'landscape';}
return'square';};var supportsFixedPosition=(function(){var ua=navigator.userAgent,platform=navigator.platform,wkmatch=ua.match(/AppleWebKit\/([0-9]+)/),wkversion=!!wkmatch&&wkmatch[1],ffmatch=ua.match(/Fennec\/([0-9]+)/),ffversion=!!ffmatch&&ffmatch[1],operammobilematch=ua.match(/Opera Mobi\/([0-9]+)/),omversion=!!operammobilematch&&operammobilematch[1],iematch=ua.match(/MSIE ([0-9]+)/),ieversion=!!iematch&&iematch[1];return!(((platform.indexOf("iPhone")>-1||platform.indexOf("iPad")>-1||platform.indexOf("iPod")>-1)&&wkversion&&wkversion<534)||(window.operamini&&({}).toString.call(window.operamini)==="[object OperaMini]")||(operammobilematch&&omversion<7458)||(ua.indexOf("Android")>-1&&wkversion&&wkversion<533)||(ffversion&&ffversion<6)||("palmGetResource"in window&&wkversion&&wkversion<534)||(ua.indexOf("MeeGo")>-1&&ua.indexOf("NokiaBrowser/8.5.0")>-1)||(ieversion&&ieversion<=6));}());}(jQuery,window));
/*!
 * jQuery Expander Plugin - v2.0.1 - 2020-02-20
 * https://kswedberg.github.io/jquery-expander/
 * Copyright (c) 2016 Karl Swedberg
 * Licensed MIT (http://www.opensource.org/licenses/mit-license.php)
 */
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof module==='object'&&typeof module.exports==='object'){module.exports=factory;}else{factory(jQuery);}})(function($){$.expander={version:'2.0.1',defaults:{slicePoint:100,sliceOn:null,preserveWords:true,normalizeWhitespace:true,showWordCount:false,detailPrefix:' ',wordCountText:' ({{count}} words)',widow:4,expandText:'read more',expandPrefix:'&hellip; ',expandAfterSummary:false,wordEnd:/(&(?:[^;]+;)?|[0-9a-zA-Z\u00C0-\u0100]+|[^\u0000-\u007F]+)$/,summaryClass:'summary',detailClass:'details',moreClass:'read-more',lessClass:'read-less',moreLinkClass:'more-link',lessLinkClass:'less-link',collapseTimer:0,expandEffect:'slideDown',expandSpeed:250,collapseEffect:'slideUp',collapseSpeed:200,userCollapse:true,userCollapseText:'read less',userCollapsePrefix:' ',onSlice:null,beforeExpand:null,afterExpand:null,onCollapse:null,afterCollapse:null}};$.fn.expander=function(options){var meth='init';if(typeof options==='string'){meth=options;options={};}
var opts=$.extend({},$.expander.defaults,options);var rSelfClose=/^<(?:area|br|col|embed|hr|img|input|link|meta|param).*>$/i;var rAmpWordEnd=opts.wordEnd;var rOpenCloseTag=/<\/?(\w+)[^>]*>/g;var rOpenTag=/<(\w+)[^>]*>/g;var rCloseTag=/<\/(\w+)>/g;var rLastCloseTag=/(<\/([^>]+)>)\s*$/;var rTagPlus=/^(<[^>]+>)+.?/;var rMultiSpace=/\s\s+/g;var delayedCollapse;var removeSpaces=function(str){return opts.normalizeWhitespace?$.trim(str||'').replace(rMultiSpace,' '):str;};var methods={init:function(){this.each(function(){var i,l,tmp,newChar,summTagless,summOpens,summCloses,lastCloseTag,detailText,detailTagless,html,expand;var $thisDetails,$readMore;var slicePointChanged;var openTagsForDetails=[];var closeTagsForsummaryText=[];var strayChars='';var defined={};var thisEl=this;var $this=$(this);var $summEl=$([]);var o=$.extend({},opts,$this.data('expander')||{});var hasDetails=!!$this.find('.'+o.detailClass).length;var hasBlocks=!!$this.find('*').filter(function(){var display=$(this).css('display');return(/^block|table|list/).test(display);}).length;var el=hasBlocks?'div':'span';var detailSelector=el+'.'+o.detailClass;var moreClass=o.moreClass+'';var lessClass=o.lessClass+'';var expandSpeed=o.expandSpeed||0;var allHtml=removeSpaces($this.html());var summaryText=allHtml.slice(0,o.slicePoint);o.moreSelector='span.'+moreClass.split(' ').join('.');o.lessSelector='span.'+lessClass.split(' ').join('.');if($.data(this,'expanderInit')){return;}
$.data(this,'expanderInit',true);$.data(this,'expander',o);$.each(['onSlice','beforeExpand','afterExpand','onCollapse','afterCollapse'],function(index,val){defined[val]=$.isFunction(o[val]);});summaryText=backup(summaryText);summTagless=summaryText.replace(rOpenCloseTag,'').length;while(summTagless<o.slicePoint){newChar=allHtml.charAt(summaryText.length);if(newChar==='<'){newChar=allHtml.slice(summaryText.length).match(rTagPlus)[0];}
summaryText+=newChar;summTagless++;}
if(o.sliceOn){slicePointChanged=changeSlicePoint({sliceOn:o.sliceOn,slicePoint:o.slicePoint,allHtml:allHtml,summaryText:summaryText});summaryText=slicePointChanged.summaryText;}
summaryText=backup(summaryText,o.preserveWords&&allHtml.slice(summaryText.length).length);summOpens=summaryText.match(rOpenTag)||[];summCloses=summaryText.match(rCloseTag)||[];tmp=[];$.each(summOpens,function(index,val){if(!rSelfClose.test(val)){tmp.push(val);}});summOpens=tmp;l=summCloses.length;for(i=0;i<l;i++){summCloses[i]=summCloses[i].replace(rCloseTag,'$1');}
$.each(summOpens,function(index,val){var thisTagName=val.replace(rOpenTag,'$1');var closePosition=$.inArray(thisTagName,summCloses);if(closePosition===-1){openTagsForDetails.push(val);closeTagsForsummaryText.push('</'+thisTagName+'>');}else{summCloses.splice(closePosition,1);}});closeTagsForsummaryText.reverse();if(!hasDetails){detailText=allHtml.slice(summaryText.length);detailTagless=$.trim(detailText.replace(rOpenCloseTag,''));if(detailTagless===''||detailTagless.split(/\s+/).length<o.widow){return;}
lastCloseTag=closeTagsForsummaryText.pop()||'';summaryText+=closeTagsForsummaryText.join('');detailText=openTagsForDetails.join('')+detailText;}else{detailText=$this.find(detailSelector).remove().html();summaryText=$this.html();allHtml=summaryText+detailText;lastCloseTag='';}
o.moreLabel=$this.find(o.moreSelector).length?'':buildMoreLabel(o,detailText);if(hasBlocks){detailText=allHtml;}else if(summaryText.charAt(summaryText.length-1)==='&'){strayChars=/^[#\w\d\\]+;/.exec(detailText);if(strayChars){detailText=detailText.slice(strayChars[0].length);summaryText+=strayChars[0];}}
summaryText+=lastCloseTag;o.summary=summaryText;o.details=detailText;o.lastCloseTag=lastCloseTag;if(defined.onSlice){tmp=o.onSlice.call(thisEl,o);o=tmp&&tmp.details?tmp:o;}
html=buildHTML(o,hasBlocks);$this.empty().append(html);$thisDetails=$this.find(detailSelector);$readMore=$this.find(o.moreSelector);if(o.collapseEffect==='slideUp'&&o.expandEffect!=='slideDown'||$this.is(':hidden')){$thisDetails.css({display:'none'});}else{$thisDetails[o.collapseEffect](0);}
$summEl=$this.find('div.'+o.summaryClass);expand=function(event){event.preventDefault();var exSpeed=event.startExpanded?0:expandSpeed;$readMore.hide();$summEl.hide();if(defined.beforeExpand){o.beforeExpand.call(thisEl);}
$thisDetails.stop(false,true)[o.expandEffect](exSpeed,function(){$thisDetails.css({zoom:''});if(defined.afterExpand){o.afterExpand.call(thisEl);}
delayCollapse(o,$thisDetails,thisEl);});};$readMore.find('a').off('click.expander').on('click.expander',expand);if(o.userCollapse&&!$this.find(o.lessSelector).length){$this.find(detailSelector).append('<span class="'+o.lessClass+'">'+o.userCollapsePrefix+'<a href="#" class="'+o.lessLinkClass+'">'+o.userCollapseText+'</a></span>');}
$this.find(o.lessSelector+' a').off('click.expander').on('click.expander',function(event){event.preventDefault();clearTimeout(delayedCollapse);var $detailsCollapsed=$(this).closest(detailSelector);reCollapse(o,$detailsCollapsed);if(defined.onCollapse){o.onCollapse.call(thisEl,true);}});if(o.startExpanded){expand({preventDefault:function(){},startExpanded:true});}});},destroy:function(){this.each(function(){var o,details;var $this=$(this);if(!$this.data('expanderInit')){return;}
o=$.extend({},$this.data('expander')||{},opts);details=$this.find('.'+o.detailClass).contents();$this.removeData('expanderInit');$this.removeData('expander');$this.find(o.moreSelector).remove();$this.find('.'+o.summaryClass).remove();$this.find('.'+o.detailClass).after(details).remove();$this.find(o.lessSelector).remove();});}};if(methods[meth]){methods[meth].call(this);}
function buildHTML(o,blocks){var el='span';var summary=o.summary;var closingTagParts=rLastCloseTag.exec(summary);var closingTag=closingTagParts?closingTagParts[2].toLowerCase():'';if(blocks){el='div';if(closingTagParts&&closingTag!=='a'&&!o.expandAfterSummary){summary=summary.replace(rLastCloseTag,o.moreLabel+'$1');}else{summary+=o.moreLabel;}
summary='<div class="'+o.summaryClass+'">'+summary+'</div>';}else{summary+=o.moreLabel;}
return[summary,o.detailPrefix||'','<',el+' class="'+o.detailClass+'"','>',o.details,'</'+el+'>'].join('');}
function buildMoreLabel(o,detailText){var ret='<span class="'+o.moreClass+'">'+o.expandPrefix;if(o.showWordCount){o.wordCountText=o.wordCountText.replace(/\{\{count\}\}/,detailText.replace(rOpenCloseTag,'').replace(/&(?:amp|nbsp);/g,'').replace(/(?:^\s+|\s+$)/,'').match(/\w+/g).length);}else{o.wordCountText='';}
ret+='<a href="#" class="'+o.moreLinkClass+'">'+o.expandText+o.wordCountText+'</a></span>';return ret;}
function backup(txt,preserveWords){if(txt.lastIndexOf('<')>txt.lastIndexOf('>')){txt=txt.slice(0,txt.lastIndexOf('<'));}
if(preserveWords){txt=txt.replace(rAmpWordEnd,'');}
return $.trim(txt);}
function reCollapse(o,el){el.stop(true,true)[o.collapseEffect](o.collapseSpeed,function(){var prevMore=el.prev('span.'+o.moreClass).show();if(!prevMore.length){el.parent().children('div.'+o.summaryClass).show().find('span.'+o.moreClass).show();}
if(o.afterCollapse){o.afterCollapse.call(el);}});}
function delayCollapse(option,$collapseEl,thisEl){if(option.collapseTimer){delayedCollapse=setTimeout(function(){reCollapse(option,$collapseEl);if($.isFunction(option.onCollapse)){option.onCollapse.call(thisEl,false);}},option.collapseTimer);}}
function changeSlicePoint(info){var sliceOnTemp='ExpandMoreHere374216623';var summaryTextClean=info.summaryText.replace(info.sliceOn,sliceOnTemp);summaryTextClean=$('<div>'+summaryTextClean+'</div>').text();var sliceOnIndexClean=summaryTextClean.indexOf(sliceOnTemp);var sliceOnIndexHtml=info.summaryText.indexOf(info.sliceOn);if(sliceOnIndexClean!==-1&&sliceOnIndexClean<info.slicePoint){info.summaryText=info.allHtml.slice(0,sliceOnIndexHtml);}
return info;}
return this;};$.fn.expander.defaults=$.expander.defaults;});
(function(fn){if(typeof define==='function'&&define.amd){define([],fn);}else if((typeof module!=="undefined"&&module!==null)&&module.exports){module.exports=fn;}else{fn();}})(function(){var assign=Object.assign||window.jQuery&&jQuery.extend;var threshold=8;var requestFrame=(function(){return(window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(fn,element){return window.setTimeout(function(){fn();},25);});})();(function(){if(typeof window.CustomEvent==="function")return false;function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:undefined};var evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt;}
CustomEvent.prototype=window.Event.prototype;window.CustomEvent=CustomEvent;})();var ignoreTags={textarea:true,input:true,select:true,button:true};var mouseevents={move:'mousemove',cancel:'mouseup dragstart',end:'mouseup'};var touchevents={move:'touchmove',cancel:'touchend',end:'touchend'};var rspaces=/\s+/;var eventOptions={bubbles:true,cancelable:true};var eventsSymbol=typeof Symbol==="function"?Symbol('events'):{};function createEvent(type){return new CustomEvent(type,eventOptions);}
function getEvents(node){return node[eventsSymbol]||(node[eventsSymbol]={});}
function on(node,types,fn,data,selector){types=types.split(rspaces);var events=getEvents(node);var i=types.length;var handlers,type;function handler(e){fn(e,data);}
while(i--){type=types[i];handlers=events[type]||(events[type]=[]);handlers.push([fn,handler]);node.addEventListener(type,handler);}}
function off(node,types,fn,selector){types=types.split(rspaces);var events=getEvents(node);var i=types.length;var type,handlers,k;if(!events){return;}
while(i--){type=types[i];handlers=events[type];if(!handlers){continue;}
k=handlers.length;while(k--){if(handlers[k][0]===fn){node.removeEventListener(type,handlers[k][1]);handlers.splice(k,1);}}}}
function trigger(node,type,properties){var event=createEvent(type);if(properties){assign(event,properties);}
node.dispatchEvent(event);}
function Timer(fn){var callback=fn,active=false,running=false;function trigger(time){if(active){callback();requestFrame(trigger);running=true;active=false;}
else{running=false;}}
this.kick=function(fn){active=true;if(!running){trigger();}};this.end=function(fn){var cb=callback;if(!fn){return;}
if(!running){fn();}
else{callback=active?function(){cb();fn();}:fn;active=true;}};}
function noop(){}
function preventDefault(e){e.preventDefault();}
function isIgnoreTag(e){return!!ignoreTags[e.target.tagName.toLowerCase()];}
function isPrimaryButton(e){return(e.which===1&&!e.ctrlKey&&!e.altKey);}
function identifiedTouch(touchList,id){var i,l;if(touchList.identifiedTouch){return touchList.identifiedTouch(id);}
i=-1;l=touchList.length;while(++i<l){if(touchList[i].identifier===id){return touchList[i];}}}
function changedTouch(e,data){var touch=identifiedTouch(e.changedTouches,data.identifier);if(!touch){return;}
if(touch.pageX===data.pageX&&touch.pageY===data.pageY){return;}
return touch;}
function mousedown(e){if(!isPrimaryButton(e)){return;}
if(isIgnoreTag(e)){return;}
on(document,mouseevents.move,mousemove,e);on(document,mouseevents.cancel,mouseend,e);}
function mousemove(e,data){checkThreshold(e,data,e,removeMouse);}
function mouseend(e,data){removeMouse();}
function removeMouse(){off(document,mouseevents.move,mousemove);off(document,mouseevents.cancel,mouseend);}
function touchstart(e){if(ignoreTags[e.target.tagName.toLowerCase()]){return;}
var touch=e.changedTouches[0];var data={target:touch.target,pageX:touch.pageX,pageY:touch.pageY,identifier:touch.identifier,touchmove:function(e,data){touchmove(e,data);},touchend:function(e,data){touchend(e,data);}};on(document,touchevents.move,data.touchmove,data);on(document,touchevents.cancel,data.touchend,data);}
function touchmove(e,data){var touch=changedTouch(e,data);if(!touch){return;}
checkThreshold(e,data,touch,removeTouch);}
function touchend(e,data){var touch=identifiedTouch(e.changedTouches,data.identifier);if(!touch){return;}
removeTouch(data);}
function removeTouch(data){off(document,touchevents.move,data.touchmove);off(document,touchevents.cancel,data.touchend);}
function checkThreshold(e,data,touch,fn){var distX=touch.pageX-data.pageX;var distY=touch.pageY-data.pageY;if((distX*distX)+(distY*distY)<(threshold*threshold)){return;}
triggerStart(e,data,touch,distX,distY,fn);}
function triggerStart(e,data,touch,distX,distY,fn){var touches=e.targetTouches;var time=e.timeStamp-data.timeStamp;var template={altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,startX:data.pageX,startY:data.pageY,distX:distX,distY:distY,deltaX:distX,deltaY:distY,pageX:touch.pageX,pageY:touch.pageY,velocityX:distX/time,velocityY:distY/time,identifier:data.identifier,targetTouches:touches,finger:touches?touches.length:1,enableMove:function(){this.moveEnabled=true;this.enableMove=noop;e.preventDefault();}};trigger(data.target,'movestart',template);fn(data);}
function activeMousemove(e,data){var timer=data.timer;data.touch=e;data.timeStamp=e.timeStamp;timer.kick();}
function activeMouseend(e,data){var target=data.target;var event=data.event;var timer=data.timer;removeActiveMouse();endEvent(target,event,timer,function(){setTimeout(function(){off(target,'click',preventDefault);},0);});}
function removeActiveMouse(){off(document,mouseevents.move,activeMousemove);off(document,mouseevents.end,activeMouseend);}
function activeTouchmove(e,data){var event=data.event;var timer=data.timer;var touch=changedTouch(e,event);if(!touch){return;}
e.preventDefault();event.targetTouches=e.targetTouches;data.touch=touch;data.timeStamp=e.timeStamp;timer.kick();}
function activeTouchend(e,data){var target=data.target;var event=data.event;var timer=data.timer;var touch=identifiedTouch(e.changedTouches,event.identifier);if(!touch){return;}
removeActiveTouch(data);endEvent(target,event,timer);}
function removeActiveTouch(data){off(document,touchevents.move,data.activeTouchmove);off(document,touchevents.end,data.activeTouchend);}
function updateEvent(event,touch,timeStamp){var time=timeStamp-event.timeStamp;event.distX=touch.pageX-event.startX;event.distY=touch.pageY-event.startY;event.deltaX=touch.pageX-event.pageX;event.deltaY=touch.pageY-event.pageY;event.velocityX=0.3*event.velocityX+0.7*event.deltaX/time;event.velocityY=0.3*event.velocityY+0.7*event.deltaY/time;event.pageX=touch.pageX;event.pageY=touch.pageY;}
function endEvent(target,event,timer,fn){timer.end(function(){trigger(target,'moveend',event);return fn&&fn();});}
function movestart(e){if(e.defaultPrevented){return;}
if(!e.moveEnabled){return;}
var event={startX:e.startX,startY:e.startY,pageX:e.pageX,pageY:e.pageY,distX:e.distX,distY:e.distY,deltaX:e.deltaX,deltaY:e.deltaY,velocityX:e.velocityX,velocityY:e.velocityY,identifier:e.identifier,targetTouches:e.targetTouches,finger:e.finger};var data={target:e.target,event:event,timer:new Timer(update),touch:undefined,timeStamp:e.timeStamp};function update(time){updateEvent(event,data.touch,data.timeStamp);trigger(data.target,'move',event);}
if(e.identifier===undefined){on(e.target,'click',preventDefault);on(document,mouseevents.move,activeMousemove,data);on(document,mouseevents.end,activeMouseend,data);}
else{data.activeTouchmove=function(e,data){activeTouchmove(e,data);};data.activeTouchend=function(e,data){activeTouchend(e,data);};on(document,touchevents.move,data.activeTouchmove,data);on(document,touchevents.end,data.activeTouchend,data);}}
on(document,'mousedown',mousedown);on(document,'touchstart',touchstart);on(document,'movestart',movestart);if(!window.jQuery){return;}
var properties=("startX startY pageX pageY distX distY deltaX deltaY velocityX velocityY").split(' ');function enableMove1(e){e.enableMove();}
function enableMove2(e){e.enableMove();}
function enableMove3(e){e.enableMove();}
function add(handleObj){var handler=handleObj.handler;handleObj.handler=function(e){var i=properties.length;var property;while(i--){property=properties[i];e[property]=e.originalEvent[property];}
handler.apply(this,arguments);};}
jQuery.event.special.movestart={setup:function(){on(this,'movestart',enableMove1);return false;},teardown:function(){off(this,'movestart',enableMove1);return false;},add:add};jQuery.event.special.move={setup:function(){on(this,'movestart',enableMove2);return false;},teardown:function(){off(this,'movestart',enableMove2);return false;},add:add};jQuery.event.special.moveend={setup:function(){on(this,'movestart',enableMove3);return false;},teardown:function(){off(this,'movestart',enableMove3);return false;},add:add};});
;
/*!
* FitVids 1.1
*
* Copyright 2013, Chris Coyier - http://css-tricks.com + Dave Rupert - http://daverupert.com
* Credit to Thierry Koblentz - http://www.alistapart.com/articles/creating-intrinsic-ratios-for-video/
* Released under the WTFPL license - http://sam.zoy.org/wtfpl/
*
*/
(function($){'use strict';$.fn.fitVids=function(options){var settings={customSelector:null,ignore:null};if(!document.getElementById('fit-vids-style')){var head=document.head||document.getElementsByTagName('head')[0];var css='.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}';var div=document.createElement("div");div.innerHTML='<p>x</p><style id="fit-vids-style">'+css+'</style>';head.appendChild(div.childNodes[1]);}
if(options){$.extend(settings,options);}
return this.each(function(){var selectors=['iframe[src*="player.vimeo.com"]','iframe[src*="youtube.com"]','iframe[src*="youtube-nocookie.com"]','iframe[src*="kickstarter.com"][src*="video.html"]','object','embed'];if(settings.customSelector){selectors.push(settings.customSelector);}
var ignoreList='.fitvidsignore';if(settings.ignore){ignoreList=ignoreList+', '+settings.ignore;}
var $allVideos=$(this).find(selectors.join(','));$allVideos=$allVideos.not('object object');$allVideos=$allVideos.not(ignoreList);$allVideos.each(function(count){var $this=$(this);if($this.parents(ignoreList).length>0){return;}
if(this.tagName.toLowerCase()==='embed'&&$this.parent('object').length||$this.parent('.fluid-width-video-wrapper').length){return;}
if((!$this.css('height')&&!$this.css('width'))&&(isNaN($this.attr('height'))||isNaN($this.attr('width'))))
{$this.attr('height',9);$this.attr('width',16);}
var height=(this.tagName.toLowerCase()==='object'||($this.attr('height')&&!isNaN(parseInt($this.attr('height'),10))))?parseInt($this.attr('height'),10):$this.height(),width=!isNaN(parseInt($this.attr('width'),10))?parseInt($this.attr('width'),10):$this.width(),aspectRatio=height/width;if(!$this.attr('id')){var videoID='fitvid'+count;$this.attr('id',videoID);}
$this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top',(aspectRatio*100)+'%');$this.removeAttr('height').removeAttr('width');});});};})(window.jQuery||window.Zepto);
;(function($){$.flexslider=function(el,options){var slider=$(el);slider.vars=$.extend({},$.flexslider.defaults,options);var namespace=slider.vars.namespace,msGesture=window.navigator&&window.navigator.msPointerEnabled&&window.MSGesture,touch=(("ontouchstart"in window)||msGesture||window.DocumentTouch&&document instanceof DocumentTouch)&&slider.vars.touch,eventType="click touchend MSPointerUp",watchedEvent="",watchedEventClearTimer,vertical=slider.vars.direction==="vertical",reverse=slider.vars.reverse,carousel=(slider.vars.itemWidth>0),fade=slider.vars.animation==="fade",asNav=slider.vars.asNavFor!=="",methods={},focused=true;$.data(el,"flexslider",slider);methods={init:function(){slider.animating=false;slider.currentSlide=parseInt((slider.vars.startAt?slider.vars.startAt:0),10);if(isNaN(slider.currentSlide))slider.currentSlide=0;slider.animatingTo=slider.currentSlide;slider.atEnd=(slider.currentSlide===0||slider.currentSlide===slider.last);slider.containerSelector=slider.vars.selector.substr(0,slider.vars.selector.search(' '));slider.slides=$(slider.vars.selector,slider);slider.container=$(slider.containerSelector,slider);slider.count=slider.slides.length;slider.syncExists=$(slider.vars.sync).length>0;if(slider.vars.animation==="slide")slider.vars.animation="swing";slider.prop=(vertical)?"top":"marginLeft";slider.args={};slider.manualPause=false;slider.stopped=false;slider.started=false;slider.startTimeout=null;slider.transitions=!slider.vars.video&&!fade&&slider.vars.useCSS&&(function(){var obj=document.createElement('div'),props=['perspectiveProperty','WebkitPerspective','MozPerspective','OPerspective','msPerspective'];for(var i in props){if(obj.style[props[i]]!==undefined){slider.pfx=props[i].replace('Perspective','').toLowerCase();slider.prop="-"+slider.pfx+"-transform";return true;}}
return false;}());if(slider.vars.controlsContainer!=="")slider.controlsContainer=$(slider.vars.controlsContainer).length>0&&$(slider.vars.controlsContainer);if(slider.vars.manualControls!=="")slider.manualControls=$(slider.vars.manualControls).length>0&&$(slider.vars.manualControls);if(slider.vars.randomize){slider.slides.sort(function(){return(Math.round(Math.random())-0.5);});slider.container.empty().append(slider.slides);}
slider.doMath();slider.setup("init");if(slider.vars.controlNav)methods.controlNav.setup();if(slider.vars.directionNav)methods.directionNav.setup();if(slider.vars.keyboard&&($(slider.containerSelector).length===1||slider.vars.multipleKeyboard)){$(document).bind('keyup',function(event){var keycode=event.keyCode;if(!slider.animating&&(keycode===39||keycode===37)){var target=(keycode===39)?slider.getTarget('next'):(keycode===37)?slider.getTarget('prev'):false;slider.flexAnimate(target,slider.vars.pauseOnAction);}});}
if(slider.vars.mousewheel){slider.bind('mousewheel',function(event,delta,deltaX,deltaY){event.preventDefault();var target=(delta<0)?slider.getTarget('next'):slider.getTarget('prev');slider.flexAnimate(target,slider.vars.pauseOnAction);});}
if(slider.vars.pausePlay)methods.pausePlay.setup();if(slider.vars.slideshow&&slider.vars.pauseInvisible)methods.pauseInvisible.init();if(slider.vars.slideshow){if(slider.vars.pauseOnHover){slider.hover(function(){if(!slider.manualPlay&&!slider.manualPause)slider.pause();},function(){if(!slider.manualPause&&!slider.manualPlay&&!slider.stopped)slider.play();});}
if(!slider.vars.pauseInvisible||!methods.pauseInvisible.isHidden()){(slider.vars.initDelay>0)?slider.startTimeout=setTimeout(slider.play,slider.vars.initDelay):slider.play();}}
if(asNav)methods.asNav.setup();if(touch&&slider.vars.touch)methods.touch();if(!fade||(fade&&slider.vars.smoothHeight))$(window).bind("resize orientationchange focus",methods.resize);slider.find("img").attr("draggable","false");setTimeout(function(){slider.vars.start(slider);},200);},asNav:{setup:function(){slider.asNav=true;slider.animatingTo=Math.floor(slider.currentSlide/slider.move);slider.currentItem=slider.currentSlide;slider.slides.removeClass(namespace+"active-slide").eq(slider.currentItem).addClass(namespace+"active-slide");if(!msGesture){slider.slides.on(eventType,function(e){e.preventDefault();var $slide=$(this),target=$slide.index();var posFromLeft=$slide.offset().left-$(slider).scrollLeft();if(posFromLeft<=0&&$slide.hasClass(namespace+'active-slide')){slider.flexAnimate(slider.getTarget("prev"),true);}else if(!$(slider.vars.asNavFor).data('flexslider').animating&&!$slide.hasClass(namespace+"active-slide")){slider.direction=(slider.currentItem<target)?"next":"prev";slider.flexAnimate(target,slider.vars.pauseOnAction,false,true,true);}});}else{el._slider=slider;slider.slides.each(function(){var that=this;that._gesture=new MSGesture();that._gesture.target=that;that.addEventListener("MSPointerDown",function(e){e.preventDefault();if(e.currentTarget._gesture)
e.currentTarget._gesture.addPointer(e.pointerId);},false);that.addEventListener("MSGestureTap",function(e){e.preventDefault();var $slide=$(this),target=$slide.index();if(!$(slider.vars.asNavFor).data('flexslider').animating&&!$slide.hasClass('active')){slider.direction=(slider.currentItem<target)?"next":"prev";slider.flexAnimate(target,slider.vars.pauseOnAction,false,true,true);}});});}}},controlNav:{setup:function(){if(!slider.manualControls){methods.controlNav.setupPaging();}else{methods.controlNav.setupManual();}},setupPaging:function(){var type=(slider.vars.controlNav==="thumbnails")?'control-thumbs':'control-paging',j=1,item,slide;slider.controlNavScaffold=$('<ol class="'+namespace+'control-nav '+namespace+type+'"></ol>');if(slider.pagingCount>1){for(var i=0;i<slider.pagingCount;i++){slide=slider.slides.eq(i);item=(slider.vars.controlNav==="thumbnails")?'<img src="'+slide.attr('data-thumb')+'"/>':'<a>'+j+'</a>';if('thumbnails'===slider.vars.controlNav&&true===slider.vars.thumbCaptions){var captn=slide.attr('data-thumbcaption');if(''!=captn&&undefined!=captn)item+='<span class="'+namespace+'caption">'+captn+'</span>';}
slider.controlNavScaffold.append('<li>'+item+'</li>');j++;}}
(slider.controlsContainer)?$(slider.controlsContainer).append(slider.controlNavScaffold):slider.append(slider.controlNavScaffold);methods.controlNav.set();methods.controlNav.active();slider.controlNavScaffold.delegate('a, img',eventType,function(event){event.preventDefault();if(watchedEvent===""||watchedEvent===event.type){var $this=$(this),target=slider.controlNav.index($this);if(!$this.hasClass(namespace+'active')){slider.direction=(target>slider.currentSlide)?"next":"prev";slider.flexAnimate(target,slider.vars.pauseOnAction);}}
if(watchedEvent===""){watchedEvent=event.type;}
methods.setToClearWatchedEvent();});},setupManual:function(){slider.controlNav=slider.manualControls;methods.controlNav.active();slider.controlNav.bind(eventType,function(event){event.preventDefault();if(watchedEvent===""||watchedEvent===event.type){var $this=$(this),target=slider.controlNav.index($this);if(!$this.hasClass(namespace+'active')){(target>slider.currentSlide)?slider.direction="next":slider.direction="prev";slider.flexAnimate(target,slider.vars.pauseOnAction);}}
if(watchedEvent===""){watchedEvent=event.type;}
methods.setToClearWatchedEvent();});},set:function(){var selector=(slider.vars.controlNav==="thumbnails")?'img':'a';slider.controlNav=$('.'+namespace+'control-nav li '+selector,(slider.controlsContainer)?slider.controlsContainer:slider);},active:function(){slider.controlNav.removeClass(namespace+"active").eq(slider.animatingTo).addClass(namespace+"active");},update:function(action,pos){if(slider.pagingCount>1&&action==="add"){slider.controlNavScaffold.append($('<li><a>'+slider.count+'</a></li>'));}else if(slider.pagingCount===1){slider.controlNavScaffold.find('li').remove();}else{slider.controlNav.eq(pos).closest('li').remove();}
methods.controlNav.set();(slider.pagingCount>1&&slider.pagingCount!==slider.controlNav.length)?slider.update(pos,action):methods.controlNav.active();}},directionNav:{setup:function(){var directionNavScaffold=$('<ul class="'+namespace+'direction-nav"><li><a class="'+namespace+'prev" href="#">'+slider.vars.prevText+'</a></li><li><a class="'+namespace+'next" href="#">'+slider.vars.nextText+'</a></li></ul>');if(slider.controlsContainer){$(slider.controlsContainer).append(directionNavScaffold);slider.directionNav=$('.'+namespace+'direction-nav li a',slider.controlsContainer);}else{slider.append(directionNavScaffold);slider.directionNav=$('.'+namespace+'direction-nav li a',slider);}
methods.directionNav.update();slider.directionNav.bind(eventType,function(event){event.preventDefault();var target;if(watchedEvent===""||watchedEvent===event.type){target=($(this).hasClass(namespace+'next'))?slider.getTarget('next'):slider.getTarget('prev');slider.flexAnimate(target,slider.vars.pauseOnAction);}
if(watchedEvent===""){watchedEvent=event.type;}
methods.setToClearWatchedEvent();});},update:function(){var disabledClass=namespace+'disabled';if(slider.pagingCount===1){slider.directionNav.addClass(disabledClass).attr('tabindex','-1');}else if(!slider.vars.animationLoop){if(slider.animatingTo===0){slider.directionNav.removeClass(disabledClass).filter('.'+namespace+"prev").addClass(disabledClass).attr('tabindex','-1');}else if(slider.animatingTo===slider.last){slider.directionNav.removeClass(disabledClass).filter('.'+namespace+"next").addClass(disabledClass).attr('tabindex','-1');}else{slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');}}else{slider.directionNav.removeClass(disabledClass).removeAttr('tabindex');}}},pausePlay:{setup:function(){var pausePlayScaffold=$('<div class="'+namespace+'pauseplay"><a></a></div>');if(slider.controlsContainer){slider.controlsContainer.append(pausePlayScaffold);slider.pausePlay=$('.'+namespace+'pauseplay a',slider.controlsContainer);}else{slider.append(pausePlayScaffold);slider.pausePlay=$('.'+namespace+'pauseplay a',slider);}
methods.pausePlay.update((slider.vars.slideshow)?namespace+'pause':namespace+'play');slider.pausePlay.bind(eventType,function(event){event.preventDefault();if(watchedEvent===""||watchedEvent===event.type){if($(this).hasClass(namespace+'pause')){slider.manualPause=true;slider.manualPlay=false;slider.pause();}else{slider.manualPause=false;slider.manualPlay=true;slider.play();}}
if(watchedEvent===""){watchedEvent=event.type;}
methods.setToClearWatchedEvent();});},update:function(state){(state==="play")?slider.pausePlay.removeClass(namespace+'pause').addClass(namespace+'play').html(slider.vars.playText):slider.pausePlay.removeClass(namespace+'play').addClass(namespace+'pause').html(slider.vars.pauseText);}},touch:function(){var startX,startY,offset,cwidth,dx,startT,scrolling=false,localX=0,localY=0,accDx=0;if(!msGesture){el.addEventListener('touchstart',onTouchStart,false);function onTouchStart(e){if(slider.animating){e.preventDefault();}else if((window.navigator.msPointerEnabled)||e.touches.length===1){slider.pause();cwidth=(vertical)?slider.h:slider.w;startT=Number(new Date());localX=e.touches[0].pageX;localY=e.touches[0].pageY;offset=(carousel&&reverse&&slider.animatingTo===slider.last)?0:(carousel&&reverse)?slider.limit-(((slider.itemW+slider.vars.itemMargin)*slider.move)*slider.animatingTo):(carousel&&slider.currentSlide===slider.last)?slider.limit:(carousel)?((slider.itemW+slider.vars.itemMargin)*slider.move)*slider.currentSlide:(reverse)?(slider.last-slider.currentSlide+slider.cloneOffset)*cwidth:(slider.currentSlide+slider.cloneOffset)*cwidth;startX=(vertical)?localY:localX;startY=(vertical)?localX:localY;el.addEventListener('touchmove',onTouchMove,false);el.addEventListener('touchend',onTouchEnd,false);}}
function onTouchMove(e){localX=e.touches[0].pageX;localY=e.touches[0].pageY;dx=(vertical)?startX-localY:startX-localX;scrolling=(vertical)?(Math.abs(dx)<Math.abs(localX-startY)):(Math.abs(dx)<Math.abs(localY-startY));var fxms=500;if(!scrolling||Number(new Date())-startT>fxms){e.preventDefault();if(!fade&&slider.transitions){if(!slider.vars.animationLoop){dx=dx/((slider.currentSlide===0&&dx<0||slider.currentSlide===slider.last&&dx>0)?(Math.abs(dx)/cwidth+2):1);}
slider.setProps(offset+dx,"setTouch");}}}
function onTouchEnd(e){el.removeEventListener('touchmove',onTouchMove,false);if(slider.animatingTo===slider.currentSlide&&!scrolling&&!(dx===null)){var updateDx=(reverse)?-dx:dx,target=(updateDx>0)?slider.getTarget('next'):slider.getTarget('prev');if(slider.canAdvance(target)&&(Number(new Date())-startT<550&&Math.abs(updateDx)>50||Math.abs(updateDx)>cwidth/2)){slider.flexAnimate(target,slider.vars.pauseOnAction);}else{if(!fade)slider.flexAnimate(slider.currentSlide,slider.vars.pauseOnAction,true);}}
el.removeEventListener('touchend',onTouchEnd,false);startX=null;startY=null;dx=null;offset=null;}}else{el.style.msTouchAction="none";el._gesture=new MSGesture();el._gesture.target=el;el.addEventListener("MSPointerDown",onMSPointerDown,false);el._slider=slider;el.addEventListener("MSGestureChange",onMSGestureChange,false);el.addEventListener("MSGestureEnd",onMSGestureEnd,false);function onMSPointerDown(e){e.stopPropagation();if(slider.animating){e.preventDefault();}else{slider.pause();el._gesture.addPointer(e.pointerId);accDx=0;cwidth=(vertical)?slider.h:slider.w;startT=Number(new Date());offset=(carousel&&reverse&&slider.animatingTo===slider.last)?0:(carousel&&reverse)?slider.limit-(((slider.itemW+slider.vars.itemMargin)*slider.move)*slider.animatingTo):(carousel&&slider.currentSlide===slider.last)?slider.limit:(carousel)?((slider.itemW+slider.vars.itemMargin)*slider.move)*slider.currentSlide:(reverse)?(slider.last-slider.currentSlide+slider.cloneOffset)*cwidth:(slider.currentSlide+slider.cloneOffset)*cwidth;}}
function onMSGestureChange(e){e.stopPropagation();var slider=e.target._slider;if(!slider){return;}
var transX=-e.translationX,transY=-e.translationY;accDx=accDx+((vertical)?transY:transX);dx=accDx;scrolling=(vertical)?(Math.abs(accDx)<Math.abs(-transX)):(Math.abs(accDx)<Math.abs(-transY));if(e.detail===e.MSGESTURE_FLAG_INERTIA){setImmediate(function(){el._gesture.stop();});return;}
if(!scrolling||Number(new Date())-startT>500){e.preventDefault();if(!fade&&slider.transitions){if(!slider.vars.animationLoop){dx=accDx/((slider.currentSlide===0&&accDx<0||slider.currentSlide===slider.last&&accDx>0)?(Math.abs(accDx)/cwidth+2):1);}
slider.setProps(offset+dx,"setTouch");}}}
function onMSGestureEnd(e){e.stopPropagation();var slider=e.target._slider;if(!slider){return;}
if(slider.animatingTo===slider.currentSlide&&!scrolling&&!(dx===null)){var updateDx=(reverse)?-dx:dx,target=(updateDx>0)?slider.getTarget('next'):slider.getTarget('prev');if(slider.canAdvance(target)&&(Number(new Date())-startT<550&&Math.abs(updateDx)>50||Math.abs(updateDx)>cwidth/2)){slider.flexAnimate(target,slider.vars.pauseOnAction);}else{if(!fade)slider.flexAnimate(slider.currentSlide,slider.vars.pauseOnAction,true);}}
startX=null;startY=null;dx=null;offset=null;accDx=0;}}},resize:function(){if(!slider.animating&&slider.is(':visible')){if(!carousel)slider.doMath();if(fade){methods.smoothHeight();}else if(carousel){slider.slides.width(slider.computedW);slider.update(slider.pagingCount);slider.setProps();}
else if(vertical){slider.viewport.height(slider.h);slider.setProps(slider.h,"setTotal");}else{if(slider.vars.smoothHeight)methods.smoothHeight();slider.newSlides.width(slider.computedW);slider.setProps(slider.computedW,"setTotal");}}},smoothHeight:function(dur){if(!vertical||fade){var $obj=(fade)?slider:slider.viewport;(dur)?$obj.animate({"height":slider.slides.eq(slider.animatingTo).height()},dur):$obj.height(slider.slides.eq(slider.animatingTo).height());}},sync:function(action){var $obj=$(slider.vars.sync).data("flexslider"),target=slider.animatingTo;switch(action){case"animate":$obj.flexAnimate(target,slider.vars.pauseOnAction,false,true);break;case"play":if(!$obj.playing&&!$obj.asNav){$obj.play();}break;case"pause":$obj.pause();break;}},uniqueID:function($clone){$clone.find('[id]').each(function(){var $this=$(this);$this.attr('id',$this.attr('id')+'_clone');});return $clone;},pauseInvisible:{visProp:null,init:function(){var prefixes=['webkit','moz','ms','o'];if('hidden'in document)return'hidden';for(var i=0;i<prefixes.length;i++){if((prefixes[i]+'Hidden')in document)
methods.pauseInvisible.visProp=prefixes[i]+'Hidden';}
if(methods.pauseInvisible.visProp){var evtname=methods.pauseInvisible.visProp.replace(/[H|h]idden/,'')+'visibilitychange';document.addEventListener(evtname,function(){if(methods.pauseInvisible.isHidden()){if(slider.startTimeout)clearTimeout(slider.startTimeout);else slider.pause();}
else{if(slider.started)slider.play();else(slider.vars.initDelay>0)?setTimeout(slider.play,slider.vars.initDelay):slider.play();}});}},isHidden:function(){return document[methods.pauseInvisible.visProp]||false;}},setToClearWatchedEvent:function(){clearTimeout(watchedEventClearTimer);watchedEventClearTimer=setTimeout(function(){watchedEvent="";},3000);}};slider.flexAnimate=function(target,pause,override,withSync,fromNav){if(!slider.vars.animationLoop&&target!==slider.currentSlide){slider.direction=(target>slider.currentSlide)?"next":"prev";}
if(asNav&&slider.pagingCount===1)slider.direction=(slider.currentItem<target)?"next":"prev";if(!slider.animating&&(slider.canAdvance(target,fromNav)||override)&&slider.is(":visible")){if(asNav&&withSync){var master=$(slider.vars.asNavFor).data('flexslider');slider.atEnd=target===0||target===slider.count-1;master.flexAnimate(target,true,false,true,fromNav);slider.direction=(slider.currentItem<target)?"next":"prev";master.direction=slider.direction;if(Math.ceil((target+1)/slider.visible)-1!==slider.currentSlide&&target!==0){slider.currentItem=target;slider.slides.removeClass(namespace+"active-slide").eq(target).addClass(namespace+"active-slide");target=Math.floor(target/slider.visible);}else{slider.currentItem=target;slider.slides.removeClass(namespace+"active-slide").eq(target).addClass(namespace+"active-slide");return false;}}
slider.animating=true;slider.animatingTo=target;if(pause)slider.pause();slider.vars.before(slider);if(slider.syncExists&&!fromNav)methods.sync("animate");if(slider.vars.controlNav)methods.controlNav.active();if(!carousel)slider.slides.removeClass(namespace+'active-slide').eq(target).addClass(namespace+'active-slide');slider.atEnd=target===0||target===slider.last;if(slider.vars.directionNav)methods.directionNav.update();if(target===slider.last){slider.vars.end(slider);if(!slider.vars.animationLoop)slider.pause();}
if(!fade){var dimension=(vertical)?slider.slides.filter(':first').height():slider.computedW,margin,slideString,calcNext;if(carousel){margin=slider.vars.itemMargin;calcNext=((slider.itemW+margin)*slider.move)*slider.animatingTo;slideString=(calcNext>slider.limit&&slider.visible!==1)?slider.limit:calcNext;}else if(slider.currentSlide===0&&target===slider.count-1&&slider.vars.animationLoop&&slider.direction!=="next"){slideString=(reverse)?(slider.count+slider.cloneOffset)*dimension:0;}else if(slider.currentSlide===slider.last&&target===0&&slider.vars.animationLoop&&slider.direction!=="prev"){slideString=(reverse)?0:(slider.count+1)*dimension;}else{slideString=(reverse)?((slider.count-1)-target+slider.cloneOffset)*dimension:(target+slider.cloneOffset)*dimension;}
slider.setProps(slideString,"",slider.vars.animationSpeed);if(slider.transitions){if(!slider.vars.animationLoop||!slider.atEnd){slider.animating=false;slider.currentSlide=slider.animatingTo;}
slider.container.unbind("webkitTransitionEnd transitionend");slider.container.bind("webkitTransitionEnd transitionend",function(){slider.wrapup(dimension);});}else{slider.container.animate(slider.args,slider.vars.animationSpeed,slider.vars.easing,function(){slider.wrapup(dimension);});}}else{if(!touch){slider.slides.eq(slider.currentSlide).css({"zIndex":1}).animate({"opacity":0},slider.vars.animationSpeed,slider.vars.easing);slider.slides.eq(target).css({"zIndex":2}).animate({"opacity":1},slider.vars.animationSpeed,slider.vars.easing,slider.wrapup);}else{slider.slides.eq(slider.currentSlide).css({"opacity":0,"zIndex":1});slider.slides.eq(target).css({"opacity":1,"zIndex":2});slider.wrapup(dimension);}}
if(slider.vars.smoothHeight)methods.smoothHeight(slider.vars.animationSpeed);}};slider.wrapup=function(dimension){if(!fade&&!carousel){if(slider.currentSlide===0&&slider.animatingTo===slider.last&&slider.vars.animationLoop){slider.setProps(dimension,"jumpEnd");}else if(slider.currentSlide===slider.last&&slider.animatingTo===0&&slider.vars.animationLoop){slider.setProps(dimension,"jumpStart");}}
slider.animating=false;slider.currentSlide=slider.animatingTo;slider.vars.after(slider);};slider.animateSlides=function(){if(!slider.animating&&focused)slider.flexAnimate(slider.getTarget("next"));};slider.pause=function(){clearInterval(slider.animatedSlides);slider.animatedSlides=null;slider.playing=false;if(slider.vars.pausePlay)methods.pausePlay.update("play");if(slider.syncExists)methods.sync("pause");};slider.play=function(){if(slider.playing)clearInterval(slider.animatedSlides);slider.animatedSlides=slider.animatedSlides||setInterval(slider.animateSlides,slider.vars.slideshowSpeed);slider.started=slider.playing=true;if(slider.vars.pausePlay)methods.pausePlay.update("pause");if(slider.syncExists)methods.sync("play");};slider.stop=function(){slider.pause();slider.stopped=true;};slider.canAdvance=function(target,fromNav){var last=(asNav)?slider.pagingCount-1:slider.last;return(fromNav)?true:(asNav&&slider.currentItem===slider.count-1&&target===0&&slider.direction==="prev")?true:(asNav&&slider.currentItem===0&&target===slider.pagingCount-1&&slider.direction!=="next")?false:(target===slider.currentSlide&&!asNav)?false:(slider.vars.animationLoop)?true:(slider.atEnd&&slider.currentSlide===0&&target===last&&slider.direction!=="next")?false:(slider.atEnd&&slider.currentSlide===last&&target===0&&slider.direction==="next")?false:true;};slider.getTarget=function(dir){slider.direction=dir;if(dir==="next"){return(slider.currentSlide===slider.last)?0:slider.currentSlide+1;}else{return(slider.currentSlide===0)?slider.last:slider.currentSlide-1;}};slider.setProps=function(pos,special,dur){var target=(function(){var posCheck=(pos)?pos:((slider.itemW+slider.vars.itemMargin)*slider.move)*slider.animatingTo,posCalc=(function(){if(carousel){return(special==="setTouch")?pos:(reverse&&slider.animatingTo===slider.last)?0:(reverse)?slider.limit-(((slider.itemW+slider.vars.itemMargin)*slider.move)*slider.animatingTo):(slider.animatingTo===slider.last)?slider.limit:posCheck;}else{switch(special){case"setTotal":return(reverse)?((slider.count-1)-slider.currentSlide+slider.cloneOffset)*pos:(slider.currentSlide+slider.cloneOffset)*pos;case"setTouch":return(reverse)?pos:pos;case"jumpEnd":return(reverse)?pos:slider.count*pos;case"jumpStart":return(reverse)?slider.count*pos:pos;default:return pos;}}}());return(posCalc*-1)+"px";}());if(slider.transitions){target=(vertical)?"translate3d(0,"+target+",0)":"translate3d("+target+",0,0)";dur=(dur!==undefined)?(dur/1000)+"s":"0s";slider.container.css("-"+slider.pfx+"-transition-duration",dur);slider.container.css("transition-duration",dur);}
slider.args[slider.prop]=target;if(slider.transitions||dur===undefined)slider.container.css(slider.args);slider.container.css('transform',target);};slider.setup=function(type){if(!fade){var sliderOffset,arr;if(type==="init"){slider.viewport=$('<div class="'+namespace+'viewport"></div>').css({"overflow":"hidden","position":"relative"}).appendTo(slider).append(slider.container);slider.cloneCount=0;slider.cloneOffset=0;if(reverse){arr=$.makeArray(slider.slides).reverse();slider.slides=$(arr);slider.container.empty().append(slider.slides);}}
if(slider.vars.animationLoop&&!carousel){slider.cloneCount=2;slider.cloneOffset=1;if(type!=="init")slider.container.find('.clone').remove();methods.uniqueID(slider.slides.first().clone().addClass('clone').attr('aria-hidden','true')).appendTo(slider.container);methods.uniqueID(slider.slides.last().clone().addClass('clone').attr('aria-hidden','true')).prependTo(slider.container);}
slider.newSlides=$(slider.vars.selector,slider);sliderOffset=(reverse)?slider.count-1-slider.currentSlide+slider.cloneOffset:slider.currentSlide+slider.cloneOffset;if(vertical&&!carousel){slider.container.height((slider.count+slider.cloneCount)*200+"%").css("position","absolute").width("100%");setTimeout(function(){slider.newSlides.css({"display":"block"});slider.doMath();slider.viewport.height(slider.h);slider.setProps(sliderOffset*slider.h,"init");},(type==="init")?100:0);}else{slider.container.width((slider.count+slider.cloneCount)*200+"%");slider.setProps(sliderOffset*slider.computedW,"init");setTimeout(function(){slider.doMath();slider.newSlides.css({"width":slider.computedW,"float":"left","display":"block"});if(slider.vars.smoothHeight)methods.smoothHeight();},(type==="init")?100:0);}}else{slider.slides.css({"width":"100%","float":"left","marginRight":"-100%","position":"relative"});if(type==="init"){if(!touch){slider.slides.css({"opacity":0,"display":"block","zIndex":1}).eq(slider.currentSlide).css({"zIndex":2}).animate({"opacity":1},slider.vars.animationSpeed,slider.vars.easing);}else{slider.slides.css({"opacity":0,"display":"block","webkitTransition":"opacity "+slider.vars.animationSpeed/1000+"s ease","zIndex":1}).eq(slider.currentSlide).css({"opacity":1,"zIndex":2});}}
if(slider.vars.smoothHeight)methods.smoothHeight();}
if(!carousel)slider.slides.removeClass(namespace+"active-slide").eq(slider.currentSlide).addClass(namespace+"active-slide");slider.vars.init(slider);};slider.doMath=function(){var slide=slider.slides.first(),slideMargin=slider.vars.itemMargin,minItems=slider.vars.minItems,maxItems=slider.vars.maxItems;slider.w=(slider.viewport===undefined)?slider.width():slider.viewport.width();slider.h=slide.height();slider.boxPadding=slide.outerWidth()-slide.width();if(carousel){slider.itemT=slider.vars.itemWidth+slideMargin;slider.minW=(minItems)?minItems*slider.itemT:slider.w;slider.maxW=(maxItems)?(maxItems*slider.itemT)-slideMargin:slider.w;slider.itemW=(slider.minW>slider.w)?(slider.w-(slideMargin*(minItems-1)))/minItems:(slider.maxW<slider.w)?(slider.w-(slideMargin*(maxItems-1)))/maxItems:(slider.vars.itemWidth>slider.w)?slider.w:slider.vars.itemWidth;slider.visible=Math.floor(slider.w/(slider.itemW));slider.move=(slider.vars.move>0&&slider.vars.move<slider.visible)?slider.vars.move:slider.visible;slider.pagingCount=Math.ceil(((slider.count-slider.visible)/slider.move)+1);slider.last=slider.pagingCount-1;slider.limit=(slider.pagingCount===1)?0:(slider.vars.itemWidth>slider.w)?(slider.itemW*(slider.count-1))+(slideMargin*(slider.count-1)):((slider.itemW+slideMargin)*slider.count)-slider.w-slideMargin;}else{slider.itemW=slider.w;slider.pagingCount=slider.count;slider.last=slider.count-1;}
slider.computedW=slider.itemW-slider.boxPadding;};slider.update=function(pos,action){slider.doMath();if(!carousel){if(pos<slider.currentSlide){slider.currentSlide+=1;}else if(pos<=slider.currentSlide&&pos!==0){slider.currentSlide-=1;}
slider.animatingTo=slider.currentSlide;}
if(slider.vars.controlNav&&!slider.manualControls){if((action==="add"&&!carousel)||slider.pagingCount>slider.controlNav.length){methods.controlNav.update("add");}else if((action==="remove"&&!carousel)||slider.pagingCount<slider.controlNav.length){if(carousel&&slider.currentSlide>slider.last){slider.currentSlide-=1;slider.animatingTo-=1;}
methods.controlNav.update("remove",slider.last);}}
if(slider.vars.directionNav)methods.directionNav.update();};slider.addSlide=function(obj,pos){var $obj=$(obj);slider.count+=1;slider.last=slider.count-1;if(vertical&&reverse){(pos!==undefined)?slider.slides.eq(slider.count-pos).after($obj):slider.container.prepend($obj);}else{(pos!==undefined)?slider.slides.eq(pos).before($obj):slider.container.append($obj);}
slider.update(pos,"add");slider.slides=$(slider.vars.selector+':not(.clone)',slider);slider.setup();slider.vars.added(slider);};slider.removeSlide=function(obj){var pos=(isNaN(obj))?slider.slides.index($(obj)):obj;slider.count-=1;slider.last=slider.count-1;if(isNaN(obj)){$(obj,slider.slides).remove();}else{(vertical&&reverse)?slider.slides.eq(slider.last).remove():slider.slides.eq(obj).remove();}
slider.doMath();slider.update(pos,"remove");slider.slides=$(slider.vars.selector+':not(.clone)',slider);slider.setup();slider.vars.removed(slider);};methods.init();};$(window).blur(function(e){focused=false;}).focus(function(e){focused=true;});$.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:false,animationLoop:true,smoothHeight:false,startAt:0,slideshow:true,slideshowSpeed:7000,animationSpeed:600,initDelay:0,randomize:false,thumbCaptions:false,pauseOnAction:true,pauseOnHover:false,pauseInvisible:true,useCSS:true,touch:true,video:false,controlNav:true,directionNav:true,prevText:"Previous",nextText:"Next",keyboard:true,multipleKeyboard:false,mousewheel:false,pausePlay:false,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:1,maxItems:0,move:0,allowOneSlide:true,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){},init:function(){}};$.fn.flexslider=function(options){if(options===undefined)options={};if(typeof options==="object"){return this.each(function(){var $this=$(this),selector=(options.selector)?options.selector:".slides > li",$slides=$this.find(selector);if(($slides.length===1&&options.allowOneSlide===true)||$slides.length===0){$slides.fadeIn(400);if(options.start)options.start($this);}else if($this.data('flexslider')===undefined){new $.flexslider(this,options);}});}else{var $slider=$(this).data('flexslider');switch(options){case"play":$slider.play();break;case"pause":$slider.pause();break;case"stop":$slider.stop();break;case"next":$slider.flexAnimate($slider.getTarget("next"),true);break;case"prev":case"previous":$slider.flexAnimate($slider.getTarget("prev"),true);break;default:if(typeof options==="number")$slider.flexAnimate(options,true);}}};})(jQuery);
/*!
 * jScrollPane - v2.0.19 - 2013-11-16
 * http://jscrollpane.kelvinluck.com/
 *
 * Copyright (c) 2013 Kelvin Luck
 * Dual licensed under the MIT or GPL licenses.
 */
(function(plugin,window){var factory=function($){return plugin($,window);}
if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){module.exports=factory;}else{factory(jQuery);}}(function($,window,undefined){$.fn.jScrollPane=function(settings)
{function JScrollPane(elem,s)
{var settings,jsp=this,pane,paneWidth,paneHeight,container,contentWidth,contentHeight,percentInViewH,percentInViewV,isScrollableV,isScrollableH,verticalDrag,dragMaxY,verticalDragPosition,horizontalDrag,dragMaxX,horizontalDragPosition,verticalBar,verticalTrack,scrollbarWidth,verticalTrackHeight,verticalDragHeight,arrowUp,arrowDown,horizontalBar,horizontalTrack,horizontalTrackWidth,horizontalDragWidth,arrowLeft,arrowRight,reinitialiseInterval,originalPadding,originalPaddingTotalWidth,previousContentWidth,wasAtTop=true,wasAtLeft=true,wasAtBottom=false,wasAtRight=false,originalElement=elem.clone(false,false).empty(),mwEvent=$.fn.mwheelIntent?'mwheelIntent.jsp':'mousewheel.jsp';if(elem.css('box-sizing')==='border-box'){originalPadding=0;originalPaddingTotalWidth=0;}else{originalPadding=elem.css('paddingTop')+' '+
elem.css('paddingRight')+' '+
elem.css('paddingBottom')+' '+
elem.css('paddingLeft');originalPaddingTotalWidth=(parseInt(elem.css('paddingLeft'),10)||0)+
(parseInt(elem.css('paddingRight'),10)||0);}
function initialise(s)
{var isMaintainingPositon,lastContentX,lastContentY,hasContainingSpaceChanged,originalScrollTop,originalScrollLeft,maintainAtBottom=false,maintainAtRight=false;settings=s;if(pane===undefined){originalScrollTop=elem.scrollTop();originalScrollLeft=elem.scrollLeft();elem.css({overflow:'hidden',padding:0});paneWidth=elem.innerWidth()+originalPaddingTotalWidth;paneHeight=elem.innerHeight();elem.width(paneWidth);pane=$('<div class="jspPane" />').css('padding',originalPadding).append(elem.children());container=$('<div class="jspContainer" />').css({'width':paneWidth+'px','height':paneHeight+'px'}).append(pane).appendTo(elem);}else{elem.css('width','');maintainAtBottom=settings.stickToBottom&&isCloseToBottom();maintainAtRight=settings.stickToRight&&isCloseToRight();hasContainingSpaceChanged=elem.innerWidth()+originalPaddingTotalWidth!=paneWidth||elem.outerHeight()!=paneHeight;if(hasContainingSpaceChanged){paneWidth=elem.innerWidth()+originalPaddingTotalWidth;paneHeight=elem.innerHeight();container.css({width:paneWidth+'px',height:paneHeight+'px'});}
if(!hasContainingSpaceChanged&&previousContentWidth==contentWidth&&pane.outerHeight()==contentHeight){elem.width(paneWidth);return;}
previousContentWidth=contentWidth;pane.css('width','');elem.width(paneWidth);container.find('>.jspVerticalBar,>.jspHorizontalBar').remove().end();}
pane.css('overflow','auto');if(s.contentWidth){contentWidth=s.contentWidth;}else{contentWidth=pane[0].scrollWidth;}
contentHeight=pane[0].scrollHeight;pane.css('overflow','');percentInViewH=contentWidth/paneWidth;percentInViewV=contentHeight/paneHeight;isScrollableV=percentInViewV>1;isScrollableH=percentInViewH>1;if(!(isScrollableH||isScrollableV)){elem.removeClass('jspScrollable');pane.css({top:0,left:0,width:container.width()-originalPaddingTotalWidth});removeMousewheel();removeFocusHandler();removeKeyboardNav();removeClickOnTrack();}else{elem.addClass('jspScrollable');isMaintainingPositon=settings.maintainPosition&&(verticalDragPosition||horizontalDragPosition);if(isMaintainingPositon){lastContentX=contentPositionX();lastContentY=contentPositionY();}
initialiseVerticalScroll();initialiseHorizontalScroll();resizeScrollbars();if(isMaintainingPositon){scrollToX(maintainAtRight?(contentWidth-paneWidth):lastContentX,false);scrollToY(maintainAtBottom?(contentHeight-paneHeight):lastContentY,false);}
initFocusHandler();initMousewheel();initTouch();if(settings.enableKeyboardNavigation){initKeyboardNav();}
if(settings.clickOnTrack){initClickOnTrack();}
observeHash();if(settings.hijackInternalLinks){hijackInternalLinks();}}
if(settings.autoReinitialise&&!reinitialiseInterval){reinitialiseInterval=setInterval(function()
{initialise(settings);},settings.autoReinitialiseDelay);}else if(!settings.autoReinitialise&&reinitialiseInterval){clearInterval(reinitialiseInterval);}
originalScrollTop&&elem.scrollTop(0)&&scrollToY(originalScrollTop,false);originalScrollLeft&&elem.scrollLeft(0)&&scrollToX(originalScrollLeft,false);elem.trigger('jsp-initialised',[isScrollableH||isScrollableV]);}
function initialiseVerticalScroll()
{if(isScrollableV){container.append($('<div class="jspVerticalBar" />').append($('<div class="jspCap jspCapTop" />'),$('<div class="jspTrack" />').append($('<div class="jspDrag" />').append($('<div class="jspDragTop" />'),$('<div class="jspDragBottom" />'))),$('<div class="jspCap jspCapBottom" />')));verticalBar=container.find('>.jspVerticalBar');verticalTrack=verticalBar.find('>.jspTrack');verticalDrag=verticalTrack.find('>.jspDrag');if(settings.showArrows){arrowUp=$('<a class="jspArrow jspArrowUp" />').bind('mousedown.jsp',getArrowScroll(0,-1)).bind('click.jsp',nil);arrowDown=$('<a class="jspArrow jspArrowDown" />').bind('mousedown.jsp',getArrowScroll(0,1)).bind('click.jsp',nil);if(settings.arrowScrollOnHover){arrowUp.bind('mouseover.jsp',getArrowScroll(0,-1,arrowUp));arrowDown.bind('mouseover.jsp',getArrowScroll(0,1,arrowDown));}
appendArrows(verticalTrack,settings.verticalArrowPositions,arrowUp,arrowDown);}
verticalTrackHeight=paneHeight;container.find('>.jspVerticalBar>.jspCap:visible,>.jspVerticalBar>.jspArrow').each(function()
{verticalTrackHeight-=$(this).outerHeight();});verticalDrag.hover(function()
{verticalDrag.addClass('jspHover');},function()
{verticalDrag.removeClass('jspHover');}).bind('mousedown.jsp',function(e)
{$('html').bind('dragstart.jsp selectstart.jsp',nil);verticalDrag.addClass('jspActive');var startY=e.pageY-verticalDrag.position().top;$('html').bind('mousemove.jsp',function(e)
{positionDragY(e.pageY-startY,false);}).bind('mouseup.jsp mouseleave.jsp',cancelDrag);return false;});sizeVerticalScrollbar();}}
function sizeVerticalScrollbar()
{verticalTrack.height(verticalTrackHeight+'px');verticalDragPosition=0;scrollbarWidth=settings.verticalGutter+verticalTrack.outerWidth();pane.width(paneWidth-scrollbarWidth-originalPaddingTotalWidth);try{if(verticalBar.position().left===0){pane.css('margin-left',scrollbarWidth+'px');}}catch(err){}}
function initialiseHorizontalScroll()
{if(isScrollableH){container.append($('<div class="jspHorizontalBar" />').append($('<div class="jspCap jspCapLeft" />'),$('<div class="jspTrack" />').append($('<div class="jspDrag" />').append($('<div class="jspDragLeft" />'),$('<div class="jspDragRight" />'))),$('<div class="jspCap jspCapRight" />')));horizontalBar=container.find('>.jspHorizontalBar');horizontalTrack=horizontalBar.find('>.jspTrack');horizontalDrag=horizontalTrack.find('>.jspDrag');if(settings.showArrows){arrowLeft=$('<a class="jspArrow jspArrowLeft" />').bind('mousedown.jsp',getArrowScroll(-1,0)).bind('click.jsp',nil);arrowRight=$('<a class="jspArrow jspArrowRight" />').bind('mousedown.jsp',getArrowScroll(1,0)).bind('click.jsp',nil);if(settings.arrowScrollOnHover){arrowLeft.bind('mouseover.jsp',getArrowScroll(-1,0,arrowLeft));arrowRight.bind('mouseover.jsp',getArrowScroll(1,0,arrowRight));}
appendArrows(horizontalTrack,settings.horizontalArrowPositions,arrowLeft,arrowRight);}
horizontalDrag.hover(function()
{horizontalDrag.addClass('jspHover');},function()
{horizontalDrag.removeClass('jspHover');}).bind('mousedown.jsp',function(e)
{$('html').bind('dragstart.jsp selectstart.jsp',nil);horizontalDrag.addClass('jspActive');var startX=e.pageX-horizontalDrag.position().left;$('html').bind('mousemove.jsp',function(e)
{positionDragX(e.pageX-startX,false);}).bind('mouseup.jsp mouseleave.jsp',cancelDrag);return false;});horizontalTrackWidth=container.innerWidth();sizeHorizontalScrollbar();}}
function sizeHorizontalScrollbar()
{container.find('>.jspHorizontalBar>.jspCap:visible,>.jspHorizontalBar>.jspArrow').each(function()
{horizontalTrackWidth-=$(this).outerWidth();});horizontalTrack.width(horizontalTrackWidth+'px');horizontalDragPosition=0;}
function resizeScrollbars()
{if(isScrollableH&&isScrollableV){var horizontalTrackHeight=horizontalTrack.outerHeight(),verticalTrackWidth=verticalTrack.outerWidth();verticalTrackHeight-=horizontalTrackHeight;$(horizontalBar).find('>.jspCap:visible,>.jspArrow').each(function()
{horizontalTrackWidth+=$(this).outerWidth();});horizontalTrackWidth-=verticalTrackWidth;paneHeight-=verticalTrackWidth;paneWidth-=horizontalTrackHeight;horizontalTrack.parent().append($('<div class="jspCorner" />').css('width',horizontalTrackHeight+'px'));sizeVerticalScrollbar();sizeHorizontalScrollbar();}
if(isScrollableH){pane.width((container.outerWidth()-originalPaddingTotalWidth)+'px');}
contentHeight=pane.outerHeight();percentInViewV=contentHeight/paneHeight;if(isScrollableH){horizontalDragWidth=Math.ceil(1/percentInViewH*horizontalTrackWidth);if(horizontalDragWidth>settings.horizontalDragMaxWidth){horizontalDragWidth=settings.horizontalDragMaxWidth;}else if(horizontalDragWidth<settings.horizontalDragMinWidth){horizontalDragWidth=settings.horizontalDragMinWidth;}
horizontalDrag.width(horizontalDragWidth+'px');dragMaxX=horizontalTrackWidth-horizontalDragWidth;_positionDragX(horizontalDragPosition);}
if(isScrollableV){verticalDragHeight=Math.ceil(1/percentInViewV*verticalTrackHeight);if(verticalDragHeight>settings.verticalDragMaxHeight){verticalDragHeight=settings.verticalDragMaxHeight;}else if(verticalDragHeight<settings.verticalDragMinHeight){verticalDragHeight=settings.verticalDragMinHeight;}
verticalDrag.height(verticalDragHeight+'px');dragMaxY=verticalTrackHeight-verticalDragHeight;_positionDragY(verticalDragPosition);}}
function appendArrows(ele,p,a1,a2)
{var p1="before",p2="after",aTemp;if(p=="os"){p=/Mac/.test(navigator.platform)?"after":"split";}
if(p==p1){p2=p;}else if(p==p2){p1=p;aTemp=a1;a1=a2;a2=aTemp;}
ele[p1](a1)[p2](a2);}
function getArrowScroll(dirX,dirY,ele)
{return function()
{arrowScroll(dirX,dirY,this,ele);this.blur();return false;};}
function arrowScroll(dirX,dirY,arrow,ele)
{arrow=$(arrow).addClass('jspActive');var eve,scrollTimeout,isFirst=true,doScroll=function()
{if(dirX!==0){jsp.scrollByX(dirX*settings.arrowButtonSpeed);}
if(dirY!==0){jsp.scrollByY(dirY*settings.arrowButtonSpeed);}
scrollTimeout=setTimeout(doScroll,isFirst?settings.initialDelay:settings.arrowRepeatFreq);isFirst=false;};doScroll();eve=ele?'mouseout.jsp':'mouseup.jsp';ele=ele||$('html');ele.bind(eve,function()
{arrow.removeClass('jspActive');scrollTimeout&&clearTimeout(scrollTimeout);scrollTimeout=null;ele.unbind(eve);});}
function initClickOnTrack()
{removeClickOnTrack();if(isScrollableV){verticalTrack.bind('mousedown.jsp',function(e)
{if(e.originalTarget===undefined||e.originalTarget==e.currentTarget){var clickedTrack=$(this),offset=clickedTrack.offset(),direction=e.pageY-offset.top-verticalDragPosition,scrollTimeout,isFirst=true,doScroll=function()
{var offset=clickedTrack.offset(),pos=e.pageY-offset.top-verticalDragHeight/2,contentDragY=paneHeight*settings.scrollPagePercent,dragY=dragMaxY*contentDragY/(contentHeight-paneHeight);if(direction<0){if(verticalDragPosition-dragY>pos){jsp.scrollByY(-contentDragY);}else{positionDragY(pos);}}else if(direction>0){if(verticalDragPosition+dragY<pos){jsp.scrollByY(contentDragY);}else{positionDragY(pos);}}else{cancelClick();return;}
scrollTimeout=setTimeout(doScroll,isFirst?settings.initialDelay:settings.trackClickRepeatFreq);isFirst=false;},cancelClick=function()
{scrollTimeout&&clearTimeout(scrollTimeout);scrollTimeout=null;$(document).unbind('mouseup.jsp',cancelClick);};doScroll();$(document).bind('mouseup.jsp',cancelClick);return false;}});}
if(isScrollableH){horizontalTrack.bind('mousedown.jsp',function(e)
{if(e.originalTarget===undefined||e.originalTarget==e.currentTarget){var clickedTrack=$(this),offset=clickedTrack.offset(),direction=e.pageX-offset.left-horizontalDragPosition,scrollTimeout,isFirst=true,doScroll=function()
{var offset=clickedTrack.offset(),pos=e.pageX-offset.left-horizontalDragWidth/2,contentDragX=paneWidth*settings.scrollPagePercent,dragX=dragMaxX*contentDragX/(contentWidth-paneWidth);if(direction<0){if(horizontalDragPosition-dragX>pos){jsp.scrollByX(-contentDragX);}else{positionDragX(pos);}}else if(direction>0){if(horizontalDragPosition+dragX<pos){jsp.scrollByX(contentDragX);}else{positionDragX(pos);}}else{cancelClick();return;}
scrollTimeout=setTimeout(doScroll,isFirst?settings.initialDelay:settings.trackClickRepeatFreq);isFirst=false;},cancelClick=function()
{scrollTimeout&&clearTimeout(scrollTimeout);scrollTimeout=null;$(document).unbind('mouseup.jsp',cancelClick);};doScroll();$(document).bind('mouseup.jsp',cancelClick);return false;}});}}
function removeClickOnTrack()
{if(horizontalTrack){horizontalTrack.unbind('mousedown.jsp');}
if(verticalTrack){verticalTrack.unbind('mousedown.jsp');}}
function cancelDrag()
{$('html').unbind('dragstart.jsp selectstart.jsp mousemove.jsp mouseup.jsp mouseleave.jsp');if(verticalDrag){verticalDrag.removeClass('jspActive');}
if(horizontalDrag){horizontalDrag.removeClass('jspActive');}}
function positionDragY(destY,animate)
{if(!isScrollableV){return;}
if(destY<0){destY=0;}else if(destY>dragMaxY){destY=dragMaxY;}
if(animate===undefined){animate=settings.animateScroll;}
if(animate){jsp.animate(verticalDrag,'top',destY,_positionDragY);}else{verticalDrag.css('top',destY);_positionDragY(destY);}}
function _positionDragY(destY)
{if(destY===undefined){destY=verticalDrag.position().top;}
container.scrollTop(0);verticalDragPosition=destY;var isAtTop=verticalDragPosition===0,isAtBottom=verticalDragPosition==dragMaxY,percentScrolled=destY/dragMaxY,destTop=-percentScrolled*(contentHeight-paneHeight);if(wasAtTop!=isAtTop||wasAtBottom!=isAtBottom){wasAtTop=isAtTop;wasAtBottom=isAtBottom;elem.trigger('jsp-arrow-change',[wasAtTop,wasAtBottom,wasAtLeft,wasAtRight]);}
updateVerticalArrows(isAtTop,isAtBottom);pane.css('top',destTop);elem.trigger('jsp-scroll-y',[-destTop,isAtTop,isAtBottom]).trigger('scroll');}
function positionDragX(destX,animate)
{if(!isScrollableH){return;}
if(destX<0){destX=0;}else if(destX>dragMaxX){destX=dragMaxX;}
if(animate===undefined){animate=settings.animateScroll;}
if(animate){jsp.animate(horizontalDrag,'left',destX,_positionDragX);}else{horizontalDrag.css('left',destX);_positionDragX(destX);}}
function _positionDragX(destX)
{if(destX===undefined){destX=horizontalDrag.position().left;}
container.scrollTop(0);horizontalDragPosition=destX;var isAtLeft=horizontalDragPosition===0,isAtRight=horizontalDragPosition==dragMaxX,percentScrolled=destX/dragMaxX,destLeft=-percentScrolled*(contentWidth-paneWidth);if(wasAtLeft!=isAtLeft||wasAtRight!=isAtRight){wasAtLeft=isAtLeft;wasAtRight=isAtRight;elem.trigger('jsp-arrow-change',[wasAtTop,wasAtBottom,wasAtLeft,wasAtRight]);}
updateHorizontalArrows(isAtLeft,isAtRight);pane.css('left',destLeft);elem.trigger('jsp-scroll-x',[-destLeft,isAtLeft,isAtRight]).trigger('scroll');}
function updateVerticalArrows(isAtTop,isAtBottom)
{if(settings.showArrows){arrowUp[isAtTop?'addClass':'removeClass']('jspDisabled');arrowDown[isAtBottom?'addClass':'removeClass']('jspDisabled');}}
function updateHorizontalArrows(isAtLeft,isAtRight)
{if(settings.showArrows){arrowLeft[isAtLeft?'addClass':'removeClass']('jspDisabled');arrowRight[isAtRight?'addClass':'removeClass']('jspDisabled');}}
function scrollToY(destY,animate)
{var percentScrolled=destY/(contentHeight-paneHeight);positionDragY(percentScrolled*dragMaxY,animate);}
function scrollToX(destX,animate)
{var percentScrolled=destX/(contentWidth-paneWidth);positionDragX(percentScrolled*dragMaxX,animate);}
function scrollToElement(ele,stickToTop,animate)
{var e,eleHeight,eleWidth,eleTop=0,eleLeft=0,viewportTop,viewportLeft,maxVisibleEleTop,maxVisibleEleLeft,destY,destX;try{e=$(ele);}catch(err){return;}
eleHeight=e.outerHeight();eleWidth=e.outerWidth();container.scrollTop(0);container.scrollLeft(0);while(!e.is('.jspPane')){eleTop+=e.position().top;eleLeft+=e.position().left;e=e.offsetParent();if(/^body|html$/i.test(e[0].nodeName)){return;}}
viewportTop=contentPositionY();maxVisibleEleTop=viewportTop+paneHeight;if(eleTop<viewportTop||stickToTop){destY=eleTop-settings.horizontalGutter;}else if(eleTop+eleHeight>maxVisibleEleTop){destY=eleTop-paneHeight+eleHeight+settings.horizontalGutter;}
if(!isNaN(destY)){scrollToY(destY,animate);}
viewportLeft=contentPositionX();maxVisibleEleLeft=viewportLeft+paneWidth;if(eleLeft<viewportLeft||stickToTop){destX=eleLeft-settings.horizontalGutter;}else if(eleLeft+eleWidth>maxVisibleEleLeft){destX=eleLeft-paneWidth+eleWidth+settings.horizontalGutter;}
if(!isNaN(destX)){scrollToX(destX,animate);}}
function contentPositionX()
{return-pane.position().left;}
function contentPositionY()
{return-pane.position().top;}
function isCloseToBottom()
{var scrollableHeight=contentHeight-paneHeight;return(scrollableHeight>20)&&(scrollableHeight-contentPositionY()<10);}
function isCloseToRight()
{var scrollableWidth=contentWidth-paneWidth;return(scrollableWidth>20)&&(scrollableWidth-contentPositionX()<10);}
function initMousewheel()
{container.unbind(mwEvent).bind(mwEvent,function(event,delta,deltaX,deltaY){var dX=horizontalDragPosition,dY=verticalDragPosition,factor=event.deltaFactor||settings.mouseWheelSpeed;jsp.scrollBy(deltaX*factor,-deltaY*factor,false);return dX==horizontalDragPosition&&dY==verticalDragPosition;});}
function removeMousewheel()
{container.unbind(mwEvent);}
function nil()
{return false;}
function initFocusHandler()
{pane.find(':input,a').unbind('focus.jsp').bind('focus.jsp',function(e)
{scrollToElement(e.target,false);});}
function removeFocusHandler()
{pane.find(':input,a').unbind('focus.jsp');}
function initKeyboardNav()
{var keyDown,elementHasScrolled,validParents=[];isScrollableH&&validParents.push(horizontalBar[0]);isScrollableV&&validParents.push(verticalBar[0]);pane.focus(function()
{elem.focus();});elem.attr('tabindex',0).unbind('keydown.jsp keypress.jsp').bind('keydown.jsp',function(e)
{if(e.target!==this&&!(validParents.length&&$(e.target).closest(validParents).length)){return;}
var dX=horizontalDragPosition,dY=verticalDragPosition;switch(e.keyCode){case 40:case 38:case 34:case 32:case 33:case 39:case 37:keyDown=e.keyCode;keyDownHandler();break;case 35:scrollToY(contentHeight-paneHeight);keyDown=null;break;case 36:scrollToY(0);keyDown=null;break;}
elementHasScrolled=e.keyCode==keyDown&&dX!=horizontalDragPosition||dY!=verticalDragPosition;return!elementHasScrolled;}).bind('keypress.jsp',function(e)
{if(e.keyCode==keyDown){keyDownHandler();}
return!elementHasScrolled;});if(settings.hideFocus){elem.css('outline','none');if('hideFocus'in container[0]){elem.attr('hideFocus',true);}}else{elem.css('outline','');if('hideFocus'in container[0]){elem.attr('hideFocus',false);}}
function keyDownHandler()
{var dX=horizontalDragPosition,dY=verticalDragPosition;switch(keyDown){case 40:jsp.scrollByY(settings.keyboardSpeed,false);break;case 38:jsp.scrollByY(-settings.keyboardSpeed,false);break;case 34:case 32:jsp.scrollByY(paneHeight*settings.scrollPagePercent,false);break;case 33:jsp.scrollByY(-paneHeight*settings.scrollPagePercent,false);break;case 39:jsp.scrollByX(settings.keyboardSpeed,false);break;case 37:jsp.scrollByX(-settings.keyboardSpeed,false);break;}
elementHasScrolled=dX!=horizontalDragPosition||dY!=verticalDragPosition;return elementHasScrolled;}}
function removeKeyboardNav()
{elem.attr('tabindex','-1').removeAttr('tabindex').unbind('keydown.jsp keypress.jsp');}
function observeHash()
{if(location.hash&&location.hash.length>1){var e,retryInt,hash=escape(location.hash.substr(1));try{e=$('#'+hash+', a[name="'+hash+'"]');}catch(err){return;}
if(e.length&&pane.find(hash)){if(container.scrollTop()===0){retryInt=setInterval(function()
{if(container.scrollTop()>0){scrollToElement(e,true);$(document).scrollTop(container.position().top);clearInterval(retryInt);}},50);}else{scrollToElement(e,true);$(document).scrollTop(container.position().top);}}}}
function hijackInternalLinks()
{if($(document.body).data('jspHijack')){return;}
$(document.body).data('jspHijack',true);$(document.body).delegate('a[href*=#]','click',function(event){var href=this.href.substr(0,this.href.indexOf('#')),locationHref=location.href,hash,element,container,jsp,scrollTop,elementTop;if(location.href.indexOf('#')!==-1){locationHref=location.href.substr(0,location.href.indexOf('#'));}
if(href!==locationHref){return;}
hash=escape(this.href.substr(this.href.indexOf('#')+1));element;try{element=$('#'+hash+', a[name="'+hash+'"]');}catch(e){return;}
if(!element.length){return;}
container=element.closest('.jspScrollable');jsp=container.data('jsp');jsp.scrollToElement(element,true);if(container[0].scrollIntoView){scrollTop=$(window).scrollTop();elementTop=element.offset().top;if(elementTop<scrollTop||elementTop>scrollTop+$(window).height()){container[0].scrollIntoView();}}
event.preventDefault();});}
function initTouch()
{var startX,startY,touchStartX,touchStartY,moved,moving=false;container.unbind('touchstart.jsp touchmove.jsp touchend.jsp click.jsp-touchclick').bind('touchstart.jsp',function(e)
{var touch=e.originalEvent.touches[0];startX=contentPositionX();startY=contentPositionY();touchStartX=touch.pageX;touchStartY=touch.pageY;moved=false;moving=true;}).bind('touchmove.jsp',function(ev)
{if(!moving){return;}
var touchPos=ev.originalEvent.touches[0],dX=horizontalDragPosition,dY=verticalDragPosition;jsp.scrollTo(startX+touchStartX-touchPos.pageX,startY+touchStartY-touchPos.pageY);moved=moved||Math.abs(touchStartX-touchPos.pageX)>5||Math.abs(touchStartY-touchPos.pageY)>5;return dX==horizontalDragPosition&&dY==verticalDragPosition;}).bind('touchend.jsp',function(e)
{moving=false;}).bind('click.jsp-touchclick',function(e)
{if(moved){moved=false;return false;}});}
function destroy(){var currentY=contentPositionY(),currentX=contentPositionX();elem.removeClass('jspScrollable').unbind('.jsp');elem.replaceWith(originalElement.append(pane.children()));originalElement.scrollTop(currentY);originalElement.scrollLeft(currentX);if(reinitialiseInterval){clearInterval(reinitialiseInterval);}}
$.extend(jsp,{reinitialise:function(s)
{s=$.extend({},settings,s);initialise(s);},scrollToElement:function(ele,stickToTop,animate)
{scrollToElement(ele,stickToTop,animate);},scrollTo:function(destX,destY,animate)
{scrollToX(destX,animate);scrollToY(destY,animate);},scrollToX:function(destX,animate)
{scrollToX(destX,animate);},scrollToY:function(destY,animate)
{scrollToY(destY,animate);},scrollToPercentX:function(destPercentX,animate)
{scrollToX(destPercentX*(contentWidth-paneWidth),animate);},scrollToPercentY:function(destPercentY,animate)
{scrollToY(destPercentY*(contentHeight-paneHeight),animate);},scrollBy:function(deltaX,deltaY,animate)
{jsp.scrollByX(deltaX,animate);jsp.scrollByY(deltaY,animate);},scrollByX:function(deltaX,animate)
{var destX=contentPositionX()+Math[deltaX<0?'floor':'ceil'](deltaX),percentScrolled=destX/(contentWidth-paneWidth);positionDragX(percentScrolled*dragMaxX,animate);},scrollByY:function(deltaY,animate)
{var destY=contentPositionY()+Math[deltaY<0?'floor':'ceil'](deltaY),percentScrolled=destY/(contentHeight-paneHeight);positionDragY(percentScrolled*dragMaxY,animate);},positionDragX:function(x,animate)
{positionDragX(x,animate);},positionDragY:function(y,animate)
{positionDragY(y,animate);},animate:function(ele,prop,value,stepCallback)
{var params={};params[prop]=value;ele.animate(params,{'duration':settings.animateDuration,'easing':settings.animateEase,'queue':false,'step':stepCallback});},getContentPositionX:function()
{return contentPositionX();},getContentPositionY:function()
{return contentPositionY();},getContentWidth:function()
{return contentWidth;},getContentHeight:function()
{return contentHeight;},getPercentScrolledX:function()
{return contentPositionX()/(contentWidth-paneWidth);},getPercentScrolledY:function()
{return contentPositionY()/(contentHeight-paneHeight);},getIsScrollableH:function()
{return isScrollableH;},getIsScrollableV:function()
{return isScrollableV;},getContentPane:function()
{return pane;},scrollToBottom:function(animate)
{positionDragY(dragMaxY,animate);},hijackInternalLinks:$.noop,destroy:function()
{destroy();}});initialise(s);}
settings=$.extend({},$.fn.jScrollPane.defaults,settings);$.each(['arrowButtonSpeed','trackClickSpeed','keyboardSpeed'],function(){settings[this]=settings[this]||settings.speed;});return this.each(function()
{var elem=$(this),jspApi=elem.data('jsp');if(jspApi){jspApi.reinitialise(settings);}else{$("script",elem).filter('[type="text/javascript"],:not([type])').remove();jspApi=new JScrollPane(elem,settings);elem.data('jsp',jspApi);}});};$.fn.jScrollPane.defaults={showArrows:false,maintainPosition:true,stickToBottom:false,stickToRight:false,clickOnTrack:true,autoReinitialise:false,autoReinitialiseDelay:500,verticalDragMinHeight:0,verticalDragMaxHeight:99999,horizontalDragMinWidth:0,horizontalDragMaxWidth:99999,contentWidth:undefined,animateScroll:false,animateDuration:300,animateEase:'linear',hijackInternalLinks:false,verticalGutter:4,horizontalGutter:4,mouseWheelSpeed:3,arrowButtonSpeed:0,arrowRepeatFreq:50,arrowScrollOnHover:false,trackClickSpeed:0,trackClickRepeatFreq:70,verticalArrowPositions:'split',horizontalArrowPositions:'split',enableKeyboardNavigation:true,hideFocus:false,keyboardSpeed:0,initialDelay:300,speed:30,scrollPagePercent:.8};},this));
;
/*!
 * jQuery.localScroll
 * Copyright (c) 2007 Ariel Flesler - aflesler<a>gmail<d>com | https://github.com/flesler
 * Licensed under MIT
 * http://flesler.blogspot.com/2007/10/jquerylocalscroll-10.html
 * @author Ariel Flesler
 * @version 2.0.0
 */
(function(plugin){if(typeof define==='function'&&define.amd){define(['jquery'],plugin);}else{plugin(jQuery);}}(function($){var URI=location.href.replace(/#.*/,'');var $localScroll=$.localScroll=function(settings){$('body').localScroll(settings);};$localScroll.defaults={duration:1000,axis:'y',event:'click',stop:true,target:window,autoscroll:true};$.fn.localScroll=function(settings){settings=$.extend({},$localScroll.defaults,settings);if(settings.autoscroll&&settings.hash&&location.hash){if(settings.target)window.scrollTo(0,0);scroll(0,location,settings);}
return settings.lazy?this.on(settings.event,'a,area',function(e){if(filter.call(this)){scroll(e,this,settings);}}):this.find('a,area').filter(filter).bind(settings.event,function(e){scroll(e,this,settings);}).end().end();function filter(){return!!this.href&&!!this.hash&&this.href.replace(this.hash,'')===URI&&(!settings.filter||$(this).is(settings.filter));}};$localScroll.hash=function(){};function scroll(e,link,settings){var id=link.hash.slice(1),elem=document.getElementById(id)||document.getElementsByName(id)[0];if(!elem)return;if(e)e.preventDefault();var $target=$(settings.target);if(settings.lock&&$target.is(':animated')||settings.onBefore&&settings.onBefore(e,elem,$target)===false)
return;if(settings.stop){$target.stop(true);}
if(settings.hash){var attr=elem.id===id?'id':'name',$a=$('<a> </a>').attr(attr,id).css({position:'absolute',top:$(window).scrollTop(),left:$(window).scrollLeft()});elem[attr]='';$('body').prepend($a);location.hash=link.hash;$a.remove();elem[attr]=id;}
$target.scrollTo(elem,settings).trigger('notify.serialScroll',[elem]);}
return $localScroll;}));
