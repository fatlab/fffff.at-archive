;
/*! Magnific Popup - v0.9.9 - 2013-12-27
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2013 Dmitry Semenov; */
(function($){var CLOSE_EVENT='Close',BEFORE_CLOSE_EVENT='BeforeClose',AFTER_CLOSE_EVENT='AfterClose',BEFORE_APPEND_EVENT='BeforeAppend',MARKUP_PARSE_EVENT='MarkupParse',OPEN_EVENT='Open',CHANGE_EVENT='Change',NS='mfp',EVENT_NS='.'+NS,READY_CLASS='mfp-ready',REMOVING_CLASS='mfp-removing',PREVENT_CLOSE_CLASS='mfp-prevent-close';var mfp,MagnificPopup=function(){},_isJQ=!!(window.jQuery),_prevStatus,_window=$(window),_body,_document,_prevContentType,_wrapClasses,_currPopupType;var _mfpOn=function(name,f){mfp.ev.on(NS+name+EVENT_NS,f);},_getEl=function(className,appendTo,html,raw){var el=document.createElement('div');el.className='mfp-'+className;if(html){el.innerHTML=html;}
if(!raw){el=$(el);if(appendTo){el.appendTo(appendTo);}}else if(appendTo){appendTo.appendChild(el);}
return el;},_mfpTrigger=function(e,data){mfp.ev.triggerHandler(NS+e,data);if(mfp.st.callbacks){e=e.charAt(0).toLowerCase()+e.slice(1);if(mfp.st.callbacks[e]){mfp.st.callbacks[e].apply(mfp,$.isArray(data)?data:[data]);}}},_getCloseBtn=function(type){if(type!==_currPopupType||!mfp.currTemplate.closeBtn){mfp.currTemplate.closeBtn=$(mfp.st.closeMarkup.replace('%title%',mfp.st.tClose));_currPopupType=type;}
return mfp.currTemplate.closeBtn;},_checkInstance=function(){if(!$.magnificPopup.instance){mfp=new MagnificPopup();mfp.init();$.magnificPopup.instance=mfp;}},supportsTransitions=function(){var s=document.createElement('p').style,v=['ms','O','Moz','Webkit'];if(s['transition']!==undefined){return true;}
while(v.length){if(v.pop()+'Transition'in s){return true;}}
return false;};MagnificPopup.prototype={constructor:MagnificPopup,init:function(){var appVersion=navigator.appVersion;mfp.isIE7=appVersion.indexOf("MSIE 7.")!==-1;mfp.isIE8=appVersion.indexOf("MSIE 8.")!==-1;mfp.isLowIE=mfp.isIE7||mfp.isIE8;mfp.isAndroid=(/android/gi).test(appVersion);mfp.isIOS=(/iphone|ipad|ipod/gi).test(appVersion);mfp.supportsTransition=supportsTransitions();mfp.probablyMobile=(mfp.isAndroid||mfp.isIOS||/(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent));_document=$(document);mfp.popupsCache={};},open:function(data){if(!_body){_body=$(document.body);}
var i;if(data.isObj===false){mfp.items=data.items.toArray();mfp.index=0;var items=data.items,item;for(i=0;i<items.length;i++){item=items[i];if(item.parsed){item=item.el[0];}
if(item===data.el[0]){mfp.index=i;break;}}}else{mfp.items=$.isArray(data.items)?data.items:[data.items];mfp.index=data.index||0;}
if(mfp.isOpen){mfp.updateItemHTML();return;}
mfp.types=[];_wrapClasses='';if(data.mainEl&&data.mainEl.length){mfp.ev=data.mainEl.eq(0);}else{mfp.ev=_document;}
if(data.key){if(!mfp.popupsCache[data.key]){mfp.popupsCache[data.key]={};}
mfp.currTemplate=mfp.popupsCache[data.key];}else{mfp.currTemplate={};}
mfp.st=$.extend(true,{},$.magnificPopup.defaults,data);mfp.fixedContentPos=mfp.st.fixedContentPos==='auto'?!mfp.probablyMobile:mfp.st.fixedContentPos;if(mfp.st.modal){mfp.st.closeOnContentClick=false;mfp.st.closeOnBgClick=false;mfp.st.showCloseBtn=false;mfp.st.enableEscapeKey=false;}
if(!mfp.bgOverlay){mfp.bgOverlay=_getEl('bg').on('click'+EVENT_NS,function(){mfp.close();});mfp.wrap=_getEl('wrap').attr('tabindex',-1).on('click'+EVENT_NS,function(e){if(mfp._checkIfClose(e.target)){mfp.close();}});mfp.container=_getEl('container',mfp.wrap);}
mfp.contentContainer=_getEl('content');if(mfp.st.preloader){mfp.preloader=_getEl('preloader',mfp.container,mfp.st.tLoading);}
var modules=$.magnificPopup.modules;for(i=0;i<modules.length;i++){var n=modules[i];n=n.charAt(0).toUpperCase()+n.slice(1);mfp['init'+n].call(mfp);}
_mfpTrigger('BeforeOpen');if(mfp.st.showCloseBtn){if(!mfp.st.closeBtnInside){mfp.wrap.append(_getCloseBtn());}else{_mfpOn(MARKUP_PARSE_EVENT,function(e,template,values,item){values.close_replaceWith=_getCloseBtn(item.type);});_wrapClasses+=' mfp-close-btn-in';}}
if(mfp.st.alignTop){_wrapClasses+=' mfp-align-top';}
if(mfp.fixedContentPos){mfp.wrap.css({overflow:mfp.st.overflowY,overflowX:'hidden',overflowY:mfp.st.overflowY});}else{mfp.wrap.css({top:_window.scrollTop(),position:'absolute'});}
if(mfp.st.fixedBgPos===false||(mfp.st.fixedBgPos==='auto'&&!mfp.fixedContentPos)){mfp.bgOverlay.css({height:_document.height(),position:'absolute'});}
if(mfp.st.enableEscapeKey){_document.on('keyup'+EVENT_NS,function(e){if(e.keyCode===27){mfp.close();}});}
_window.on('resize'+EVENT_NS,function(){mfp.updateSize();});if(!mfp.st.closeOnContentClick){_wrapClasses+=' mfp-auto-cursor';}
if(_wrapClasses)
mfp.wrap.addClass(_wrapClasses);var windowHeight=mfp.wH=_window.height();var windowStyles={};if(mfp.fixedContentPos){if(mfp._hasScrollBar(windowHeight)){var s=mfp._getScrollbarSize();if(s){windowStyles.marginRight=s;}}}
if(mfp.fixedContentPos){if(!mfp.isIE7){windowStyles.overflow='hidden';}else{$('body, html').css('overflow','hidden');}}
var classesToadd=mfp.st.mainClass;if(mfp.isIE7){classesToadd+=' mfp-ie7';}
if(classesToadd){mfp._addClassToMFP(classesToadd);}
mfp.updateItemHTML();_mfpTrigger('BuildControls');$('html').css(windowStyles);mfp.bgOverlay.add(mfp.wrap).prependTo(mfp.st.prependTo||_body);mfp._lastFocusedEl=document.activeElement;setTimeout(function(){if(mfp.content){mfp._addClassToMFP(READY_CLASS);mfp._setFocus();}else{mfp.bgOverlay.addClass(READY_CLASS);}
_document.on('focusin'+EVENT_NS,mfp._onFocusIn);},16);mfp.isOpen=true;mfp.updateSize(windowHeight);_mfpTrigger(OPEN_EVENT);return data;},close:function(){if(!mfp.isOpen)return;_mfpTrigger(BEFORE_CLOSE_EVENT);mfp.isOpen=false;if(mfp.st.removalDelay&&!mfp.isLowIE&&mfp.supportsTransition){mfp._addClassToMFP(REMOVING_CLASS);setTimeout(function(){mfp._close();},mfp.st.removalDelay);}else{mfp._close();}},_close:function(){_mfpTrigger(CLOSE_EVENT);var classesToRemove=REMOVING_CLASS+' '+READY_CLASS+' ';mfp.bgOverlay.detach();mfp.wrap.detach();mfp.container.empty();if(mfp.st.mainClass){classesToRemove+=mfp.st.mainClass+' ';}
mfp._removeClassFromMFP(classesToRemove);if(mfp.fixedContentPos){var windowStyles={marginRight:''};if(mfp.isIE7){$('body, html').css('overflow','');}else{windowStyles.overflow='';}
$('html').css(windowStyles);}
_document.off('keyup'+EVENT_NS+' focusin'+EVENT_NS);mfp.ev.off(EVENT_NS);mfp.wrap.attr('class','mfp-wrap').removeAttr('style');mfp.bgOverlay.attr('class','mfp-bg');mfp.container.attr('class','mfp-container');if(mfp.st.showCloseBtn&&(!mfp.st.closeBtnInside||mfp.currTemplate[mfp.currItem.type]===true)){if(mfp.currTemplate.closeBtn)
mfp.currTemplate.closeBtn.detach();}
if(mfp._lastFocusedEl){$(mfp._lastFocusedEl).focus();}
mfp.currItem=null;mfp.content=null;mfp.currTemplate=null;mfp.prevHeight=0;_mfpTrigger(AFTER_CLOSE_EVENT);},updateSize:function(winHeight){if(mfp.isIOS){var zoomLevel=document.documentElement.clientWidth/window.innerWidth;var height=window.innerHeight*zoomLevel;mfp.wrap.css('height',height);mfp.wH=height;}else{mfp.wH=winHeight||_window.height();}
if(!mfp.fixedContentPos){mfp.wrap.css('height',mfp.wH);}
_mfpTrigger('Resize');},updateItemHTML:function(){var item=mfp.items[mfp.index];mfp.contentContainer.detach();if(mfp.content)
mfp.content.detach();if(!item.parsed){item=mfp.parseEl(mfp.index);}
var type=item.type;_mfpTrigger('BeforeChange',[mfp.currItem?mfp.currItem.type:'',type]);mfp.currItem=item;if(!mfp.currTemplate[type]){var markup=mfp.st[type]?mfp.st[type].markup:false;_mfpTrigger('FirstMarkupParse',markup);if(markup){mfp.currTemplate[type]=$(markup);}else{mfp.currTemplate[type]=true;}}
if(_prevContentType&&_prevContentType!==item.type){mfp.container.removeClass('mfp-'+_prevContentType+'-holder');}
var newContent=mfp['get'+type.charAt(0).toUpperCase()+type.slice(1)](item,mfp.currTemplate[type]);mfp.appendContent(newContent,type);item.preloaded=true;_mfpTrigger(CHANGE_EVENT,item);_prevContentType=item.type;mfp.container.prepend(mfp.contentContainer);_mfpTrigger('AfterChange');},appendContent:function(newContent,type){mfp.content=newContent;if(newContent){if(mfp.st.showCloseBtn&&mfp.st.closeBtnInside&&mfp.currTemplate[type]===true){if(!mfp.content.find('.mfp-close').length){mfp.content.append(_getCloseBtn());}}else{mfp.content=newContent;}}else{mfp.content='';}
_mfpTrigger(BEFORE_APPEND_EVENT);mfp.container.addClass('mfp-'+type+'-holder');mfp.contentContainer.append(mfp.content);},parseEl:function(index){var item=mfp.items[index],type;if(item.tagName){item={el:$(item)};}else{type=item.type;item={data:item,src:item.src};}
if(item.el){var types=mfp.types;for(var i=0;i<types.length;i++){if(item.el.hasClass('mfp-'+types[i])){type=types[i];break;}}
item.src=item.el.attr('data-mfp-src');if(!item.src){item.src=item.el.attr('href');}}
item.type=type||mfp.st.type||'inline';item.index=index;item.parsed=true;mfp.items[index]=item;_mfpTrigger('ElementParse',item);return mfp.items[index];},addGroup:function(el,options){var eHandler=function(e){e.mfpEl=this;mfp._openClick(e,el,options);};if(!options){options={};}
var eName='click.magnificPopup';options.mainEl=el;if(options.items){options.isObj=true;el.off(eName).on(eName,eHandler);}else{options.isObj=false;if(options.delegate){el.off(eName).on(eName,options.delegate,eHandler);}else{options.items=el;el.off(eName).on(eName,eHandler);}}},_openClick:function(e,el,options){var midClick=options.midClick!==undefined?options.midClick:$.magnificPopup.defaults.midClick;if(!midClick&&(e.which===2||e.ctrlKey||e.metaKey)){return;}
var disableOn=options.disableOn!==undefined?options.disableOn:$.magnificPopup.defaults.disableOn;if(disableOn){if($.isFunction(disableOn)){if(!disableOn.call(mfp)){return true;}}else{if(_window.width()<disableOn){return true;}}}
if(e.type){e.preventDefault();if(mfp.isOpen){e.stopPropagation();}}
options.el=$(e.mfpEl);if(options.delegate){options.items=el.find(options.delegate);}
mfp.open(options);},updateStatus:function(status,text){if(mfp.preloader){if(_prevStatus!==status){mfp.container.removeClass('mfp-s-'+_prevStatus);}
if(!text&&status==='loading'){text=mfp.st.tLoading;}
var data={status:status,text:text};_mfpTrigger('UpdateStatus',data);status=data.status;text=data.text;mfp.preloader.html(text);mfp.preloader.find('a').on('click',function(e){e.stopImmediatePropagation();});mfp.container.addClass('mfp-s-'+status);_prevStatus=status;}},_checkIfClose:function(target){if($(target).hasClass(PREVENT_CLOSE_CLASS)){return;}
var closeOnContent=mfp.st.closeOnContentClick;var closeOnBg=mfp.st.closeOnBgClick;if(closeOnContent&&closeOnBg){return true;}else{if(!mfp.content||$(target).hasClass('mfp-close')||(mfp.preloader&&target===mfp.preloader[0])){return true;}
if((target!==mfp.content[0]&&!$.contains(mfp.content[0],target))){if(closeOnBg){if($.contains(document,target)){return true;}}}else if(closeOnContent){return true;}}
return false;},_addClassToMFP:function(cName){mfp.bgOverlay.addClass(cName);mfp.wrap.addClass(cName);},_removeClassFromMFP:function(cName){this.bgOverlay.removeClass(cName);mfp.wrap.removeClass(cName);},_hasScrollBar:function(winHeight){return((mfp.isIE7?_document.height():document.body.scrollHeight)>(winHeight||_window.height()));},_setFocus:function(){(mfp.st.focus?mfp.content.find(mfp.st.focus).eq(0):mfp.wrap).focus();},_onFocusIn:function(e){if(e.target!==mfp.wrap[0]&&!$.contains(mfp.wrap[0],e.target)){mfp._setFocus();return false;}},_parseMarkup:function(template,values,item){var arr;if(item.data){values=$.extend(item.data,values);}
_mfpTrigger(MARKUP_PARSE_EVENT,[template,values,item]);$.each(values,function(key,value){if(value===undefined||value===false){return true;}
arr=key.split('_');if(arr.length>1){var el=template.find(EVENT_NS+'-'+arr[0]);if(el.length>0){var attr=arr[1];if(attr==='replaceWith'){if(el[0]!==value[0]){el.replaceWith(value);}}else if(attr==='img'){if(el.is('img')){el.attr('src',value);}else{el.replaceWith('<img src="'+value+'" class="'+el.attr('class')+'" />');}}else{el.attr(arr[1],value);}}}else{template.find(EVENT_NS+'-'+key).html(value);}});},_getScrollbarSize:function(){if(mfp.scrollbarSize===undefined){var scrollDiv=document.createElement("div");scrollDiv.id="mfp-sbm";scrollDiv.style.cssText='width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;';document.body.appendChild(scrollDiv);mfp.scrollbarSize=scrollDiv.offsetWidth-scrollDiv.clientWidth;document.body.removeChild(scrollDiv);}
return mfp.scrollbarSize;}};$.magnificPopup={instance:null,proto:MagnificPopup.prototype,modules:[],open:function(options,index){_checkInstance();if(!options){options={};}else{options=$.extend(true,{},options);}
options.isObj=true;options.index=index||0;return this.instance.open(options);},close:function(){return $.magnificPopup.instance&&$.magnificPopup.instance.close();},registerModule:function(name,module){if(module.options){$.magnificPopup.defaults[name]=module.options;}
$.extend(this.proto,module.proto);this.modules.push(name);},defaults:{disableOn:0,key:null,midClick:false,mainClass:'',preloader:true,focus:'',closeOnContentClick:false,closeOnBgClick:true,closeBtnInside:true,showCloseBtn:true,enableEscapeKey:true,modal:false,alignTop:false,removalDelay:0,prependTo:null,fixedContentPos:'auto',fixedBgPos:'auto',overflowY:'auto',closeMarkup:'<button title="%title%" type="button" class="mfp-close">&times;</button>',tClose:'Close (Esc)',tLoading:'Loading...'}};$.fn.magnificPopup=function(options){_checkInstance();var jqEl=$(this);if(typeof options==="string"){if(options==='open'){var items,itemOpts=_isJQ?jqEl.data('magnificPopup'):jqEl[0].magnificPopup,index=parseInt(arguments[1],10)||0;if(itemOpts.items){items=itemOpts.items[index];}else{items=jqEl;if(itemOpts.delegate){items=items.find(itemOpts.delegate);}
items=items.eq(index);}
mfp._openClick({mfpEl:items},jqEl,itemOpts);}else{if(mfp.isOpen)
mfp[options].apply(mfp,Array.prototype.slice.call(arguments,1));}}else{options=$.extend(true,{},options);if(_isJQ){jqEl.data('magnificPopup',options);}else{jqEl[0].magnificPopup=options;}
mfp.addGroup(jqEl,options);}
return jqEl;};var INLINE_NS='inline',_hiddenClass,_inlinePlaceholder,_lastInlineElement,_putInlineElementsBack=function(){if(_lastInlineElement){_inlinePlaceholder.after(_lastInlineElement.addClass(_hiddenClass)).detach();_lastInlineElement=null;}};$.magnificPopup.registerModule(INLINE_NS,{options:{hiddenClass:'hide',markup:'',tNotFound:'Content not found'},proto:{initInline:function(){mfp.types.push(INLINE_NS);_mfpOn(CLOSE_EVENT+'.'+INLINE_NS,function(){_putInlineElementsBack();});},getInline:function(item,template){_putInlineElementsBack();if(item.src){var inlineSt=mfp.st.inline,el=$(item.src);if(el.length){var parent=el[0].parentNode;if(parent&&parent.tagName){if(!_inlinePlaceholder){_hiddenClass=inlineSt.hiddenClass;_inlinePlaceholder=_getEl(_hiddenClass);_hiddenClass='mfp-'+_hiddenClass;}
_lastInlineElement=el.after(_inlinePlaceholder).detach().removeClass(_hiddenClass);}
mfp.updateStatus('ready');}else{mfp.updateStatus('error',inlineSt.tNotFound);el=$('<div>');}
item.inlineElement=el;return el;}
mfp.updateStatus('ready');mfp._parseMarkup(template,{},item);return template;}}});var AJAX_NS='ajax',_ajaxCur,_removeAjaxCursor=function(){if(_ajaxCur){_body.removeClass(_ajaxCur);}},_destroyAjaxRequest=function(){_removeAjaxCursor();if(mfp.req){mfp.req.abort();}};$.magnificPopup.registerModule(AJAX_NS,{options:{settings:null,cursor:'mfp-ajax-cur',tError:'<a href="%url%">The content</a> could not be loaded.'},proto:{initAjax:function(){mfp.types.push(AJAX_NS);_ajaxCur=mfp.st.ajax.cursor;_mfpOn(CLOSE_EVENT+'.'+AJAX_NS,_destroyAjaxRequest);_mfpOn('BeforeChange.'+AJAX_NS,_destroyAjaxRequest);},getAjax:function(item){if(_ajaxCur)
_body.addClass(_ajaxCur);mfp.updateStatus('loading');var opts=$.extend({url:item.src,success:function(data,textStatus,jqXHR){var temp={data:data,xhr:jqXHR};_mfpTrigger('ParseAjax',temp);mfp.appendContent($(temp.data),AJAX_NS);item.finished=true;_removeAjaxCursor();mfp._setFocus();setTimeout(function(){mfp.wrap.addClass(READY_CLASS);},16);mfp.updateStatus('ready');_mfpTrigger('AjaxContentAdded');},error:function(){_removeAjaxCursor();item.finished=item.loadError=true;mfp.updateStatus('error',mfp.st.ajax.tError.replace('%url%',item.src));}},mfp.st.ajax.settings);mfp.req=$.ajax(opts);return'';}}});var _imgInterval,_getTitle=function(item){if(item.data&&item.data.title!==undefined)
return item.data.title;var src=mfp.st.image.titleSrc;if(src){if($.isFunction(src)){return src.call(mfp,item);}else if(item.el){return item.el.attr(src)||'';}}
return'';};$.magnificPopup.registerModule('image',{options:{markup:'<div class="mfp-figure">'+'<div class="mfp-close"></div>'+'<figure>'+'<div class="mfp-img"></div>'+'<figcaption>'+'<div class="mfp-bottom-bar">'+'<div class="mfp-title"></div>'+'<div class="mfp-counter"></div>'+'</div>'+'</figcaption>'+'</figure>'+'</div>',cursor:'mfp-zoom-out-cur',titleSrc:'title',verticalFit:true,tError:'<a href="%url%">The image</a> could not be loaded.'},proto:{initImage:function(){var imgSt=mfp.st.image,ns='.image';mfp.types.push('image');_mfpOn(OPEN_EVENT+ns,function(){if(mfp.currItem.type==='image'&&imgSt.cursor){_body.addClass(imgSt.cursor);}});_mfpOn(CLOSE_EVENT+ns,function(){if(imgSt.cursor){_body.removeClass(imgSt.cursor);}
_window.off('resize'+EVENT_NS);});_mfpOn('Resize'+ns,mfp.resizeImage);if(mfp.isLowIE){_mfpOn('AfterChange',mfp.resizeImage);}},resizeImage:function(){var item=mfp.currItem;if(!item||!item.img)return;if(mfp.st.image.verticalFit){var decr=0;if(mfp.isLowIE){decr=parseInt(item.img.css('padding-top'),10)+parseInt(item.img.css('padding-bottom'),10);}
item.img.css('max-height',mfp.wH-decr);}},_onImageHasSize:function(item){if(item.img){item.hasSize=true;if(_imgInterval){clearInterval(_imgInterval);}
item.isCheckingImgSize=false;_mfpTrigger('ImageHasSize',item);if(item.imgHidden){if(mfp.content)
mfp.content.removeClass('mfp-loading');item.imgHidden=false;}}},findImageSize:function(item){var counter=0,img=item.img[0],mfpSetInterval=function(delay){if(_imgInterval){clearInterval(_imgInterval);}
_imgInterval=setInterval(function(){if(img.naturalWidth>0){mfp._onImageHasSize(item);return;}
if(counter>200){clearInterval(_imgInterval);}
counter++;if(counter===3){mfpSetInterval(10);}else if(counter===40){mfpSetInterval(50);}else if(counter===100){mfpSetInterval(500);}},delay);};mfpSetInterval(1);},getImage:function(item,template){var guard=0,onLoadComplete=function(){if(item){if(item.img[0].complete){item.img.off('.mfploader');if(item===mfp.currItem){mfp._onImageHasSize(item);mfp.updateStatus('ready');}
item.hasSize=true;item.loaded=true;_mfpTrigger('ImageLoadComplete');}
else{guard++;if(guard<200){setTimeout(onLoadComplete,100);}else{onLoadError();}}}},onLoadError=function(){if(item){item.img.off('.mfploader');if(item===mfp.currItem){mfp._onImageHasSize(item);mfp.updateStatus('error',imgSt.tError.replace('%url%',item.src));}
item.hasSize=true;item.loaded=true;item.loadError=true;}},imgSt=mfp.st.image;var el=template.find('.mfp-img');if(el.length){var img=document.createElement('img');img.className='mfp-img';item.img=$(img).on('load.mfploader',onLoadComplete).on('error.mfploader',onLoadError);img.src=item.src;if(el.is('img')){item.img=item.img.clone();}
img=item.img[0];if(img.naturalWidth>0){item.hasSize=true;}else if(!img.width){item.hasSize=false;}}
mfp._parseMarkup(template,{title:_getTitle(item),img_replaceWith:item.img},item);mfp.resizeImage();if(item.hasSize){if(_imgInterval)clearInterval(_imgInterval);if(item.loadError){template.addClass('mfp-loading');mfp.updateStatus('error',imgSt.tError.replace('%url%',item.src));}else{template.removeClass('mfp-loading');mfp.updateStatus('ready');}
return template;}
mfp.updateStatus('loading');item.loading=true;if(!item.hasSize){item.imgHidden=true;template.addClass('mfp-loading');mfp.findImageSize(item);}
return template;}}});var hasMozTransform,getHasMozTransform=function(){if(hasMozTransform===undefined){hasMozTransform=document.createElement('p').style.MozTransform!==undefined;}
return hasMozTransform;};$.magnificPopup.registerModule('zoom',{options:{enabled:false,easing:'ease-in-out',duration:300,opener:function(element){return element.is('img')?element:element.find('img');}},proto:{initZoom:function(){var zoomSt=mfp.st.zoom,ns='.zoom',image;if(!zoomSt.enabled||!mfp.supportsTransition){return;}
var duration=zoomSt.duration,getElToAnimate=function(image){var newImg=image.clone().removeAttr('style').removeAttr('class').addClass('mfp-animated-image'),transition='all '+(zoomSt.duration/1000)+'s '+zoomSt.easing,cssObj={position:'fixed',zIndex:9999,left:0,top:0,'-webkit-backface-visibility':'hidden'},t='transition';cssObj['-webkit-'+t]=cssObj['-moz-'+t]=cssObj['-o-'+t]=cssObj[t]=transition;newImg.css(cssObj);return newImg;},showMainContent=function(){mfp.content.css('visibility','visible');},openTimeout,animatedImg;_mfpOn('BuildControls'+ns,function(){if(mfp._allowZoom()){clearTimeout(openTimeout);mfp.content.css('visibility','hidden');image=mfp._getItemToZoom();if(!image){showMainContent();return;}
animatedImg=getElToAnimate(image);animatedImg.css(mfp._getOffset());mfp.wrap.append(animatedImg);openTimeout=setTimeout(function(){animatedImg.css(mfp._getOffset(true));openTimeout=setTimeout(function(){showMainContent();setTimeout(function(){animatedImg.remove();image=animatedImg=null;_mfpTrigger('ZoomAnimationEnded');},16);},duration);},16);}});_mfpOn(BEFORE_CLOSE_EVENT+ns,function(){if(mfp._allowZoom()){clearTimeout(openTimeout);mfp.st.removalDelay=duration;if(!image){image=mfp._getItemToZoom();if(!image){return;}
animatedImg=getElToAnimate(image);}
animatedImg.css(mfp._getOffset(true));mfp.wrap.append(animatedImg);mfp.content.css('visibility','hidden');setTimeout(function(){animatedImg.css(mfp._getOffset());},16);}});_mfpOn(CLOSE_EVENT+ns,function(){if(mfp._allowZoom()){showMainContent();if(animatedImg){animatedImg.remove();}
image=null;}});},_allowZoom:function(){return mfp.currItem.type==='image';},_getItemToZoom:function(){if(mfp.currItem.hasSize){return mfp.currItem.img;}else{return false;}},_getOffset:function(isLarge){var el;if(isLarge){el=mfp.currItem.img;}else{el=mfp.st.zoom.opener(mfp.currItem.el||mfp.currItem);}
var offset=el.offset();var paddingTop=parseInt(el.css('padding-top'),10);var paddingBottom=parseInt(el.css('padding-bottom'),10);offset.top-=($(window).scrollTop()-paddingTop);var obj={width:el.width(),height:(_isJQ?el.innerHeight():el[0].offsetHeight)-paddingBottom-paddingTop};if(getHasMozTransform()){obj['-moz-transform']=obj['transform']='translate('+offset.left+'px,'+offset.top+'px)';}else{obj.left=offset.left;obj.top=offset.top;}
return obj;}}});var IFRAME_NS='iframe',_emptyPage='//about:blank',_fixIframeBugs=function(isShowing){if(mfp.currTemplate[IFRAME_NS]){var el=mfp.currTemplate[IFRAME_NS].find('iframe');if(el.length){if(!isShowing){el[0].src=_emptyPage;}
if(mfp.isIE8){el.css('display',isShowing?'block':'none');}}}};$.magnificPopup.registerModule(IFRAME_NS,{options:{markup:'<div class="mfp-iframe-scaler">'+'<div class="mfp-close"></div>'+'<iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe>'+'</div>',srcAction:'iframe_src',patterns:{youtube:{index:'youtube.com',id:'v=',src:'//www.youtube.com/embed/%id%?autoplay=1'},vimeo:{index:'vimeo.com/',id:'/',src:'//player.vimeo.com/video/%id%?autoplay=1'},gmaps:{index:'//maps.google.',src:'%id%&output=embed'}}},proto:{initIframe:function(){mfp.types.push(IFRAME_NS);_mfpOn('BeforeChange',function(e,prevType,newType){if(prevType!==newType){if(prevType===IFRAME_NS){_fixIframeBugs();}else if(newType===IFRAME_NS){_fixIframeBugs(true);}}});_mfpOn(CLOSE_EVENT+'.'+IFRAME_NS,function(){_fixIframeBugs();});},getIframe:function(item,template){var embedSrc=item.src;var iframeSt=mfp.st.iframe;$.each(iframeSt.patterns,function(){if(embedSrc.indexOf(this.index)>-1){if(this.id){if(typeof this.id==='string'){embedSrc=embedSrc.substr(embedSrc.lastIndexOf(this.id)+this.id.length,embedSrc.length);}else{embedSrc=this.id.call(this,embedSrc);}}
embedSrc=this.src.replace('%id%',embedSrc);return false;}});var dataObj={};if(iframeSt.srcAction){dataObj[iframeSt.srcAction]=embedSrc;}
mfp._parseMarkup(template,dataObj,item);mfp.updateStatus('ready');return template;}}});var _getLoopedId=function(index){var numSlides=mfp.items.length;if(index>numSlides-1){return index-numSlides;}else if(index<0){return numSlides+index;}
return index;},_replaceCurrTotal=function(text,curr,total){return text.replace(/%curr%/gi,curr+1).replace(/%total%/gi,total);};$.magnificPopup.registerModule('gallery',{options:{enabled:false,arrowMarkup:'<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',preload:[0,2],navigateByImgClick:true,arrows:true,tPrev:'Previous (Left arrow key)',tNext:'Next (Right arrow key)',tCounter:'%curr% of %total%'},proto:{initGallery:function(){var gSt=mfp.st.gallery,ns='.mfp-gallery',supportsFastClick=Boolean($.fn.mfpFastClick);mfp.direction=true;if(!gSt||!gSt.enabled)return false;_wrapClasses+=' mfp-gallery';_mfpOn(OPEN_EVENT+ns,function(){if(gSt.navigateByImgClick){mfp.wrap.on('click'+ns,'.mfp-img',function(){if(mfp.items.length>1){mfp.next();return false;}});}
_document.on('keydown'+ns,function(e){if(e.keyCode===37){mfp.prev();}else if(e.keyCode===39){mfp.next();}});});_mfpOn('UpdateStatus'+ns,function(e,data){if(data.text){data.text=_replaceCurrTotal(data.text,mfp.currItem.index,mfp.items.length);}});_mfpOn(MARKUP_PARSE_EVENT+ns,function(e,element,values,item){var l=mfp.items.length;values.counter=l>1?_replaceCurrTotal(gSt.tCounter,item.index,l):'';});_mfpOn('BuildControls'+ns,function(){if(mfp.items.length>1&&gSt.arrows&&!mfp.arrowLeft){var markup=gSt.arrowMarkup,arrowLeft=mfp.arrowLeft=$(markup.replace(/%title%/gi,gSt.tPrev).replace(/%dir%/gi,'left')).addClass(PREVENT_CLOSE_CLASS),arrowRight=mfp.arrowRight=$(markup.replace(/%title%/gi,gSt.tNext).replace(/%dir%/gi,'right')).addClass(PREVENT_CLOSE_CLASS);var eName=supportsFastClick?'mfpFastClick':'click';arrowLeft[eName](function(){mfp.prev();});arrowRight[eName](function(){mfp.next();});if(mfp.isIE7){_getEl('b',arrowLeft[0],false,true);_getEl('a',arrowLeft[0],false,true);_getEl('b',arrowRight[0],false,true);_getEl('a',arrowRight[0],false,true);}
mfp.container.append(arrowLeft.add(arrowRight));}});_mfpOn(CHANGE_EVENT+ns,function(){if(mfp._preloadTimeout)clearTimeout(mfp._preloadTimeout);mfp._preloadTimeout=setTimeout(function(){mfp.preloadNearbyImages();mfp._preloadTimeout=null;},16);});_mfpOn(CLOSE_EVENT+ns,function(){_document.off(ns);mfp.wrap.off('click'+ns);if(mfp.arrowLeft&&supportsFastClick){mfp.arrowLeft.add(mfp.arrowRight).destroyMfpFastClick();}
mfp.arrowRight=mfp.arrowLeft=null;});},next:function(){mfp.direction=true;mfp.index=_getLoopedId(mfp.index+1);mfp.updateItemHTML();},prev:function(){mfp.direction=false;mfp.index=_getLoopedId(mfp.index-1);mfp.updateItemHTML();},goTo:function(newIndex){mfp.direction=(newIndex>=mfp.index);mfp.index=newIndex;mfp.updateItemHTML();},preloadNearbyImages:function(){var p=mfp.st.gallery.preload,preloadBefore=Math.min(p[0],mfp.items.length),preloadAfter=Math.min(p[1],mfp.items.length),i;for(i=1;i<=(mfp.direction?preloadAfter:preloadBefore);i++){mfp._preloadItem(mfp.index+i);}
for(i=1;i<=(mfp.direction?preloadBefore:preloadAfter);i++){mfp._preloadItem(mfp.index-i);}},_preloadItem:function(index){index=_getLoopedId(index);if(mfp.items[index].preloaded){return;}
var item=mfp.items[index];if(!item.parsed){item=mfp.parseEl(index);}
_mfpTrigger('LazyLoad',item);if(item.type==='image'){item.img=$('<img class="mfp-img" />').on('load.mfploader',function(){item.hasSize=true;}).on('error.mfploader',function(){item.hasSize=true;item.loadError=true;_mfpTrigger('LazyLoadError',item);}).attr('src',item.src);}
item.preloaded=true;}}});var RETINA_NS='retina';$.magnificPopup.registerModule(RETINA_NS,{options:{replaceSrc:function(item){return item.src.replace(/\.\w+$/,function(m){return'@2x'+m;});},ratio:1},proto:{initRetina:function(){if(window.devicePixelRatio>1){var st=mfp.st.retina,ratio=st.ratio;ratio=!isNaN(ratio)?ratio:ratio();if(ratio>1){_mfpOn('ImageHasSize'+'.'+RETINA_NS,function(e,item){item.img.css({'max-width':item.img[0].naturalWidth/ratio,'width':'100%'});});_mfpOn('ElementParse'+'.'+RETINA_NS,function(e,item){item.src=st.replaceSrc(item,ratio);});}}}}});(function(){var ghostClickDelay=1000,supportsTouch='ontouchstart'in window,unbindTouchMove=function(){_window.off('touchmove'+ns+' touchend'+ns);},eName='mfpFastClick',ns='.'+eName;$.fn.mfpFastClick=function(callback){return $(this).each(function(){var elem=$(this),lock;if(supportsTouch){var timeout,startX,startY,pointerMoved,point,numPointers;elem.on('touchstart'+ns,function(e){pointerMoved=false;numPointers=1;point=e.originalEvent?e.originalEvent.touches[0]:e.touches[0];startX=point.clientX;startY=point.clientY;_window.on('touchmove'+ns,function(e){point=e.originalEvent?e.originalEvent.touches:e.touches;numPointers=point.length;point=point[0];if(Math.abs(point.clientX-startX)>10||Math.abs(point.clientY-startY)>10){pointerMoved=true;unbindTouchMove();}}).on('touchend'+ns,function(e){unbindTouchMove();if(pointerMoved||numPointers>1){return;}
lock=true;e.preventDefault();clearTimeout(timeout);timeout=setTimeout(function(){lock=false;},ghostClickDelay);callback();});});}
elem.on('click'+ns,function(){if(!lock){callback();}});});};$.fn.destroyMfpFastClick=function(){$(this).off('touchstart'+ns+' click'+ns);if(supportsTouch)_window.off('touchmove'+ns+' touchend'+ns);};})();_checkInstance();})(window.jQuery||window.Zepto);
/*! Copyright (c) 2013 Brandon Aaron (http://brandon.aaron.sh)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Version: 3.1.9
 *
 * Requires: jQuery 1.2.2+
 */
(function(factory){if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof exports==='object'){module.exports=factory;}else{factory(jQuery);}}(function($){var toFix=['wheel','mousewheel','DOMMouseScroll','MozMousePixelScroll'],toBind=('onwheel'in document||document.documentMode>=9)?['wheel']:['mousewheel','DomMouseScroll','MozMousePixelScroll'],slice=Array.prototype.slice,nullLowestDeltaTimeout,lowestDelta;if($.event.fixHooks){for(var i=toFix.length;i;){$.event.fixHooks[toFix[--i]]=$.event.mouseHooks;}}
var special=$.event.special.mousewheel={version:'3.1.9',setup:function(){if(this.addEventListener){for(var i=toBind.length;i;){this.addEventListener(toBind[--i],handler,false);}}else{this.onmousewheel=handler;}
$.data(this,'mousewheel-line-height',special.getLineHeight(this));$.data(this,'mousewheel-page-height',special.getPageHeight(this));},teardown:function(){if(this.removeEventListener){for(var i=toBind.length;i;){this.removeEventListener(toBind[--i],handler,false);}}else{this.onmousewheel=null;}},getLineHeight:function(elem){return parseInt($(elem)['offsetParent'in $.fn?'offsetParent':'parent']().css('fontSize'),10);},getPageHeight:function(elem){return $(elem).height();},settings:{adjustOldDeltas:true}};$.fn.extend({mousewheel:function(fn){return fn?this.bind('mousewheel',fn):this.trigger('mousewheel');},unmousewheel:function(fn){return this.unbind('mousewheel',fn);}});function handler(event){var orgEvent=event||window.event,args=slice.call(arguments,1),delta=0,deltaX=0,deltaY=0,absDelta=0;event=$.event.fix(orgEvent);event.type='mousewheel';if('detail'in orgEvent){deltaY=orgEvent.detail*-1;}
if('wheelDelta'in orgEvent){deltaY=orgEvent.wheelDelta;}
if('wheelDeltaY'in orgEvent){deltaY=orgEvent.wheelDeltaY;}
if('wheelDeltaX'in orgEvent){deltaX=orgEvent.wheelDeltaX*-1;}
if('axis'in orgEvent&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaX=deltaY*-1;deltaY=0;}
delta=deltaY===0?deltaX:deltaY;if('deltaY'in orgEvent){deltaY=orgEvent.deltaY*-1;delta=deltaY;}
if('deltaX'in orgEvent){deltaX=orgEvent.deltaX;if(deltaY===0){delta=deltaX*-1;}}
if(deltaY===0&&deltaX===0){return;}
if(orgEvent.deltaMode===1){var lineHeight=$.data(this,'mousewheel-line-height');delta*=lineHeight;deltaY*=lineHeight;deltaX*=lineHeight;}else if(orgEvent.deltaMode===2){var pageHeight=$.data(this,'mousewheel-page-height');delta*=pageHeight;deltaY*=pageHeight;deltaX*=pageHeight;}
absDelta=Math.max(Math.abs(deltaY),Math.abs(deltaX));if(!lowestDelta||absDelta<lowestDelta){lowestDelta=absDelta;if(shouldAdjustOldDeltas(orgEvent,absDelta)){lowestDelta/=40;}}
if(shouldAdjustOldDeltas(orgEvent,absDelta)){delta/=40;deltaX/=40;deltaY/=40;}
delta=Math[delta>=1?'floor':'ceil'](delta/lowestDelta);deltaX=Math[deltaX>=1?'floor':'ceil'](deltaX/lowestDelta);deltaY=Math[deltaY>=1?'floor':'ceil'](deltaY/lowestDelta);event.deltaX=deltaX;event.deltaY=deltaY;event.deltaFactor=lowestDelta;event.deltaMode=0;args.unshift(event,delta,deltaX,deltaY);if(nullLowestDeltaTimeout){clearTimeout(nullLowestDeltaTimeout);}
nullLowestDeltaTimeout=setTimeout(nullLowestDelta,200);return($.event.dispatch||$.event.handle).apply(this,args);}
function nullLowestDelta(){lowestDelta=null;}
function shouldAdjustOldDeltas(orgEvent,absDelta){return special.settings.adjustOldDeltas&&orgEvent.type==='mousewheel'&&absDelta%120===0;}}));
(function(global,factory){typeof exports==='object'&&typeof module!=='undefined'?module.exports=factory():typeof define==='function'&&define.amd?define(factory):(global=typeof globalThis!=='undefined'?globalThis:global||self,global.Panzoom=factory());}(this,(function(){'use strict';
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
var __assign=function(){__assign=Object.assign||function __assign(t){for(var s,i=1,n=arguments.length;i<n;i++){s=arguments[i];for(var p in s)if(Object.prototype.hasOwnProperty.call(s,p))t[p]=s[p];}
return t;};return __assign.apply(this,arguments);};if(typeof window!=='undefined'){if(window.NodeList&&!NodeList.prototype.forEach){NodeList.prototype.forEach=Array.prototype.forEach;}
if(typeof window.CustomEvent!=='function'){window.CustomEvent=function CustomEvent(event,params){params=params||{bubbles:false,cancelable:false,detail:null};var evt=document.createEvent('CustomEvent');evt.initCustomEvent(event,params.bubbles,params.cancelable,params.detail);return evt};}}
function findEventIndex(pointers,event){var i=pointers.length;while(i--){if(pointers[i].pointerId===event.pointerId){return i;}}
return-1;}
function addPointer(pointers,event){var i;if(event.touches){i=0;for(var _i=0,_a=event.touches;_i<_a.length;_i++){var touch=_a[_i];touch.pointerId=i++;addPointer(pointers,touch);}
return;}
i=findEventIndex(pointers,event);if(i>-1){pointers.splice(i,1);}
pointers.push(event);}
function removePointer(pointers,event){if(event.touches){while(pointers.length){pointers.pop();}
return;}
var i=findEventIndex(pointers,event);if(i>-1){pointers.splice(i,1);}}
function getMiddle(pointers){pointers=pointers.slice(0);var event1=pointers.pop();var event2;while((event2=pointers.pop())){event1={clientX:(event2.clientX-event1.clientX)/2+event1.clientX,clientY:(event2.clientY-event1.clientY)/2+event1.clientY};}
return event1;}
function getDistance(pointers){if(pointers.length<2){return 0;}
var event1=pointers[0];var event2=pointers[1];return Math.sqrt(Math.pow(Math.abs(event2.clientX-event1.clientX),2)+
Math.pow(Math.abs(event2.clientY-event1.clientY),2));}
var events={down:'mousedown',move:'mousemove',up:'mouseup mouseleave'};if(typeof window!=='undefined'){if(typeof window.PointerEvent==='function'){events={down:'pointerdown',move:'pointermove',up:'pointerup pointerleave pointercancel'};}
else if(typeof window.TouchEvent==='function'){events={down:'touchstart',move:'touchmove',up:'touchend touchcancel'};}}
function onPointer(event,elem,handler,eventOpts){events[event].split(' ').forEach(function(name){elem.addEventListener(name,handler,eventOpts);});}
function destroyPointer(event,elem,handler){events[event].split(' ').forEach(function(name){elem.removeEventListener(name,handler);});}
var isIE=typeof document!=='undefined'&&!!document.documentMode;var divStyle;function createStyle(){if(divStyle){return divStyle;}
return(divStyle=document.createElement('div').style);}
var prefixes=['webkit','moz','ms'];var prefixCache={};function getPrefixedName(name){if(prefixCache[name]){return prefixCache[name];}
var divStyle=createStyle();if(name in divStyle){return(prefixCache[name]=name);}
var capName=name[0].toUpperCase()+name.slice(1);var i=prefixes.length;while(i--){var prefixedName=""+prefixes[i]+capName;if(prefixedName in divStyle){return(prefixCache[name]=prefixedName);}}}
function getCSSNum(name,style){return parseFloat(style[getPrefixedName(name)])||0;}
function getBoxStyle(elem,name,style){if(style===void 0){style=window.getComputedStyle(elem);}
var suffix=name==='border'?'Width':'';return{left:getCSSNum(name+"Left"+suffix,style),right:getCSSNum(name+"Right"+suffix,style),top:getCSSNum(name+"Top"+suffix,style),bottom:getCSSNum(name+"Bottom"+suffix,style)};}
function setStyle(elem,name,value){elem.style[getPrefixedName(name)]=value;}
function setTransition(elem,options){var transform=getPrefixedName('transform');setStyle(elem,'transition',transform+" "+options.duration+"ms "+options.easing);}
function setTransform(elem,_a,_options){var x=_a.x,y=_a.y,scale=_a.scale,isSVG=_a.isSVG;setStyle(elem,'transform',"scale("+scale+") translate("+x+"px, "+y+"px)");if(isSVG&&isIE){var matrixValue=window.getComputedStyle(elem).getPropertyValue('transform');elem.setAttribute('transform',matrixValue);}}
function getDimensions(elem){var parent=elem.parentNode;var style=window.getComputedStyle(elem);var parentStyle=window.getComputedStyle(parent);var rectElem=elem.getBoundingClientRect();var rectParent=parent.getBoundingClientRect();return{elem:{style:style,width:rectElem.width,height:rectElem.height,top:rectElem.top,bottom:rectElem.bottom,left:rectElem.left,right:rectElem.right,margin:getBoxStyle(elem,'margin',style),border:getBoxStyle(elem,'border',style)},parent:{style:parentStyle,width:rectParent.width,height:rectParent.height,top:rectParent.top,bottom:rectParent.bottom,left:rectParent.left,right:rectParent.right,padding:getBoxStyle(parent,'padding',parentStyle),border:getBoxStyle(parent,'border',parentStyle)}};}
function isAttached(elem){var doc=elem.ownerDocument;var parent=elem.parentNode;return(doc&&parent&&doc.nodeType===9&&parent.nodeType===1&&doc.documentElement.contains(parent));}
function getClass(elem){return(elem.getAttribute('class')||'').trim();}
function hasClass(elem,className){return elem.nodeType===1&&(" "+getClass(elem)+" ").indexOf(" "+className+" ")>-1;}
function isExcluded(elem,options){for(var cur=elem;cur!=null;cur=cur.parentNode){if(hasClass(cur,options.excludeClass)||options.exclude.indexOf(cur)>-1){return true;}}
return false;}
var rsvg=/^http:[\w\.\/]+svg$/;function isSVGElement(elem){return rsvg.test(elem.namespaceURI)&&elem.nodeName.toLowerCase()!=='svg';}
function shallowClone(obj){var clone={};for(var key in obj){if(obj.hasOwnProperty(key)){clone[key]=obj[key];}}
return clone;}
var defaultOptions={animate:false,canvas:false,cursor:'move',disablePan:false,disableZoom:false,disableXAxis:false,disableYAxis:false,duration:200,easing:'ease-in-out',exclude:[],excludeClass:'panzoom-exclude',handleStartEvent:function(e){e.preventDefault();e.stopPropagation();},maxScale:4,minScale:0.125,overflow:'hidden',panOnlyWhenZoomed:false,relative:false,setTransform:setTransform,startX:0,startY:0,startScale:1,step:0.3,touchAction:'none'};function Panzoom(elem,options){if(!elem){throw new Error('Panzoom requires an element as an argument');}
if(elem.nodeType!==1){throw new Error('Panzoom requires an element with a nodeType of 1');}
if(!isAttached(elem)){throw new Error('Panzoom should be called on elements that have been attached to the DOM');}
options=__assign(__assign({},defaultOptions),options);var isSVG=isSVGElement(elem);var parent=elem.parentNode;parent.style.overflow=options.overflow;parent.style.userSelect='none';parent.style.touchAction=options.touchAction;(options.canvas?parent:elem).style.cursor=options.cursor;elem.style.userSelect='none';elem.style.touchAction=options.touchAction;setStyle(elem,'transformOrigin',typeof options.origin==='string'?options.origin:isSVG?'0 0':'50% 50%');function resetStyle(){parent.style.overflow='';parent.style.userSelect='';parent.style.touchAction='';parent.style.cursor='';elem.style.cursor='';elem.style.userSelect='';elem.style.touchAction='';setStyle(elem,'transformOrigin','');}
function setOptions(opts){if(opts===void 0){opts={};}
for(var key in opts){if(opts.hasOwnProperty(key)){options[key]=opts[key];}}
if(opts.hasOwnProperty('cursor')||opts.hasOwnProperty('canvas')){parent.style.cursor=elem.style.cursor='';(options.canvas?parent:elem).style.cursor=options.cursor;}
if(opts.hasOwnProperty('overflow')){parent.style.overflow=opts.overflow;}
if(opts.hasOwnProperty('touchAction')){parent.style.touchAction=opts.touchAction;elem.style.touchAction=opts.touchAction;}
if(opts.hasOwnProperty('minScale')||opts.hasOwnProperty('maxScale')||opts.hasOwnProperty('contain')){setMinMax();}}
var x=0;var y=0;var scale=1;var isPanning=false;zoom(options.startScale,{animate:false});setTimeout(function(){setMinMax();pan(options.startX,options.startY,{animate:false});});function trigger(eventName,detail,opts){if(opts.silent){return;}
var event=new CustomEvent(eventName,{detail:detail});elem.dispatchEvent(event);}
function setTransformWithEvent(eventName,opts,originalEvent){var value={x:x,y:y,scale:scale,isSVG:isSVG,originalEvent:originalEvent};requestAnimationFrame(function(){if(typeof opts.animate==='boolean'){if(opts.animate){setTransition(elem,opts);}
else{setStyle(elem,'transition','none');}}
opts.setTransform(elem,value,opts);});trigger(eventName,value,opts);trigger('panzoomchange',value,opts);return value;}
function setMinMax(){if(options.contain){var dims=getDimensions(elem);var parentWidth=dims.parent.width-dims.parent.border.left-dims.parent.border.right;var parentHeight=dims.parent.height-dims.parent.border.top-dims.parent.border.bottom;var elemWidth=dims.elem.width/scale;var elemHeight=dims.elem.height/scale;var elemScaledWidth=parentWidth/elemWidth;var elemScaledHeight=parentHeight/elemHeight;if(options.contain==='inside'){options.maxScale=Math.min(elemScaledWidth,elemScaledHeight);}
else if(options.contain==='outside'){options.minScale=Math.max(elemScaledWidth,elemScaledHeight);}}}
function constrainXY(toX,toY,toScale,panOptions){var opts=__assign(__assign({},options),panOptions);var result={x:x,y:y,opts:opts};if(!opts.force&&(opts.disablePan||(opts.panOnlyWhenZoomed&&scale===opts.startScale))){return result;}
toX=parseFloat(toX);toY=parseFloat(toY);if(!opts.disableXAxis){result.x=(opts.relative?x:0)+toX;}
if(!opts.disableYAxis){result.y=(opts.relative?y:0)+toY;}
if(opts.contain==='inside'){var dims=getDimensions(elem);result.x=Math.max(-dims.elem.margin.left-dims.parent.padding.left,Math.min(dims.parent.width-
dims.elem.width/toScale-
dims.parent.padding.left-
dims.elem.margin.left-
dims.parent.border.left-
dims.parent.border.right,result.x));result.y=Math.max(-dims.elem.margin.top-dims.parent.padding.top,Math.min(dims.parent.height-
dims.elem.height/toScale-
dims.parent.padding.top-
dims.elem.margin.top-
dims.parent.border.top-
dims.parent.border.bottom,result.y));}
else if(opts.contain==='outside'){var dims=getDimensions(elem);var realWidth=dims.elem.width/scale;var realHeight=dims.elem.height/scale;var scaledWidth=realWidth*toScale;var scaledHeight=realHeight*toScale;var diffHorizontal=(scaledWidth-realWidth)/2;var diffVertical=(scaledHeight-realHeight)/2;var minX=(-(scaledWidth-dims.parent.width)-
dims.parent.padding.left-
dims.parent.border.left-
dims.parent.border.right+
diffHorizontal)/toScale;var maxX=(diffHorizontal-dims.parent.padding.left)/toScale;result.x=Math.max(Math.min(result.x,maxX),minX);var minY=(-(scaledHeight-dims.parent.height)-
dims.parent.padding.top-
dims.parent.border.top-
dims.parent.border.bottom+
diffVertical)/toScale;var maxY=(diffVertical-dims.parent.padding.top)/toScale;result.y=Math.max(Math.min(result.y,maxY),minY);}
return result;}
function constrainScale(toScale,zoomOptions){var opts=__assign(__assign({},options),zoomOptions);var result={scale:scale,opts:opts};if(!opts.force&&opts.disableZoom){return result;}
result.scale=Math.min(Math.max(toScale,opts.minScale),opts.maxScale);return result;}
function pan(toX,toY,panOptions,originalEvent){var result=constrainXY(toX,toY,scale,panOptions);var opts=result.opts;x=result.x;y=result.y;return setTransformWithEvent('panzoompan',opts,originalEvent);}
function zoom(toScale,zoomOptions,originalEvent){var result=constrainScale(toScale,zoomOptions);var opts=result.opts;if(!opts.force&&opts.disableZoom){return;}
toScale=result.scale;var toX=x;var toY=y;if(opts.focal){var focal=opts.focal;toX=(focal.x/toScale-focal.x/scale+x*toScale)/toScale;toY=(focal.y/toScale-focal.y/scale+y*toScale)/toScale;}
var panResult=constrainXY(toX,toY,toScale,{relative:false,force:true});x=panResult.x;y=panResult.y;scale=toScale;return setTransformWithEvent('panzoomzoom',opts,originalEvent);}
function zoomInOut(isIn,zoomOptions){var opts=__assign(__assign(__assign({},options),{animate:true}),zoomOptions);return zoom(scale*Math.exp((isIn?1:-1)*opts.step),opts);}
function zoomIn(zoomOptions){return zoomInOut(true,zoomOptions);}
function zoomOut(zoomOptions){return zoomInOut(false,zoomOptions);}
function zoomToPoint(toScale,point,zoomOptions,originalEvent){var dims=getDimensions(elem);var effectiveArea={width:dims.parent.width-
dims.parent.padding.left-
dims.parent.padding.right-
dims.parent.border.left-
dims.parent.border.right,height:dims.parent.height-
dims.parent.padding.top-
dims.parent.padding.bottom-
dims.parent.border.top-
dims.parent.border.bottom};var clientX=point.clientX-
dims.parent.left-
dims.parent.padding.left-
dims.parent.border.left-
dims.elem.margin.left;var clientY=point.clientY-
dims.parent.top-
dims.parent.padding.top-
dims.parent.border.top-
dims.elem.margin.top;if(!isSVG){clientX-=dims.elem.width/scale/2;clientY-=dims.elem.height/scale/2;}
var focal={x:(clientX/effectiveArea.width)*(effectiveArea.width*toScale),y:(clientY/effectiveArea.height)*(effectiveArea.height*toScale)};return zoom(toScale,__assign(__assign({animate:false},zoomOptions),{focal:focal}),originalEvent);}
function zoomWithWheel(event,zoomOptions){event.preventDefault();var opts=__assign(__assign({},options),zoomOptions);var delta=event.deltaY===0&&event.deltaX?event.deltaX:event.deltaY;var wheel=delta<0?1:-1;var toScale=constrainScale(scale*Math.exp((wheel*opts.step)/3),opts).scale;return zoomToPoint(toScale,event,opts);}
function reset(resetOptions){var opts=__assign(__assign(__assign({},options),{animate:true,force:true}),resetOptions);scale=constrainScale(opts.startScale,opts).scale;var panResult=constrainXY(opts.startX,opts.startY,scale,opts);x=panResult.x;y=panResult.y;return setTransformWithEvent('panzoomreset',opts);}
var origX;var origY;var startClientX;var startClientY;var startScale;var startDistance;var pointers=[];function handleDown(event){if(isExcluded(event.target,options)){return;}
addPointer(pointers,event);isPanning=true;options.handleStartEvent(event);origX=x;origY=y;trigger('panzoomstart',{x:x,y:y,scale:scale,isSVG:isSVG,originalEvent:event},options);var point=getMiddle(pointers);startClientX=point.clientX;startClientY=point.clientY;startScale=scale;startDistance=getDistance(pointers);}
function move(event){if(!isPanning||origX===undefined||origY===undefined||startClientX===undefined||startClientY===undefined){return;}
addPointer(pointers,event);var current=getMiddle(pointers);if(pointers.length>1){var diff=getDistance(pointers)-startDistance;var toScale=constrainScale((diff*options.step)/80+startScale).scale;zoomToPoint(toScale,current);}
pan(origX+(current.clientX-startClientX)/scale,origY+(current.clientY-startClientY)/scale,{animate:false},event);}
function handleUp(event){if(pointers.length===1){trigger('panzoomend',{x:x,y:y,scale:scale,isSVG:isSVG,originalEvent:event},options);}
removePointer(pointers,event);if(!isPanning){return;}
isPanning=false;origX=origY=startClientX=startClientY=undefined;}
var bound=false;function bind(){if(bound){return;}
bound=true;onPointer('down',options.canvas?parent:elem,handleDown);onPointer('move',document,move,{passive:true});onPointer('up',document,handleUp,{passive:true});}
function destroy(){bound=false;destroyPointer('down',options.canvas?parent:elem,handleDown);destroyPointer('move',document,move);destroyPointer('up',document,handleUp);}
if(!options.noBind){bind();}
return{bind:bind,destroy:destroy,eventNames:events,getPan:function(){return({x:x,y:y});},getScale:function(){return scale;},getOptions:function(){return shallowClone(options);},pan:pan,reset:reset,resetStyle:resetStyle,setOptions:setOptions,setStyle:function(name,value){return setStyle(elem,name,value);},zoom:zoom,zoomIn:zoomIn,zoomOut:zoomOut,zoomToPoint:zoomToPoint,zoomWithWheel:zoomWithWheel};}
Panzoom.defaultOptions=defaultOptions;return Panzoom;})));
(function(){var $,cardFromNumber,cardFromType,cards,defaultFormat,formatBackCardNumber,formatBackExpiry,formatCardNumber,formatExpiry,formatForwardExpiry,formatForwardSlash,hasTextSelected,luhnCheck,reFormatCardNumber,restrictCVC,restrictCardNumber,restrictExpiry,restrictNumeric,setCardType,__slice=[].slice,__indexOf=[].indexOf||function(item){for(var i=0,l=this.length;i<l;i++){if(i in this&&this[i]===item)return i;}return-1;},_this=this;$=jQuery;$.payment={};$.payment.fn={};$.fn.payment=function(){var args,method;method=arguments[0],args=2<=arguments.length?__slice.call(arguments,1):[];return $.payment.fn[method].apply(this,args);};defaultFormat=/(\d{1,4})/g;cards=[{type:'maestro',pattern:/^(5018|5020|5038|6304|6759|676[1-3])/,format:defaultFormat,length:[12,13,14,15,16,17,18,19],cvcLength:[3],luhn:true},{type:'dinersclub',pattern:/^(36|38|30[0-5])/,format:defaultFormat,length:[14],cvcLength:[3],luhn:true},{type:'laser',pattern:/^(6706|6771|6709)/,format:defaultFormat,length:[16,17,18,19],cvcLength:[3],luhn:true},{type:'jcb',pattern:/^35/,format:defaultFormat,length:[16],cvcLength:[3],luhn:true},{type:'unionpay',pattern:/^62/,format:defaultFormat,length:[16,17,18,19],cvcLength:[3],luhn:false},{type:'discover',pattern:/^(6011|65|64[4-9]|622)/,format:defaultFormat,length:[16],cvcLength:[3],luhn:true},{type:'mastercard',pattern:/^5[1-5]/,format:defaultFormat,length:[16],cvcLength:[3],luhn:true},{type:'amex',pattern:/^3[47]/,format:/(\d{1,4})(\d{1,6})?(\d{1,5})?/,length:[15],cvcLength:[3,4],luhn:true},{type:'visa',pattern:/^4/,format:defaultFormat,length:[13,14,15,16],cvcLength:[3],luhn:true}];cardFromNumber=function(num){var card,_i,_len;num=(num+'').replace(/\D/g,'');for(_i=0,_len=cards.length;_i<_len;_i++){card=cards[_i];if(card.pattern.test(num)){return card;}}};cardFromType=function(type){var card,_i,_len;for(_i=0,_len=cards.length;_i<_len;_i++){card=cards[_i];if(card.type===type){return card;}}};luhnCheck=function(num){var digit,digits,odd,sum,_i,_len;odd=true;sum=0;digits=(num+'').split('').reverse();for(_i=0,_len=digits.length;_i<_len;_i++){digit=digits[_i];digit=parseInt(digit,10);if((odd=!odd)){digit*=2;}
if(digit>9){digit-=9;}
sum+=digit;}
return sum%10===0;};hasTextSelected=function($target){var _ref;if(($target.prop('selectionStart')!=null)&&$target.prop('selectionStart')!==$target.prop('selectionEnd')){return true;}
if(typeof document!=="undefined"&&document!==null?(_ref=document.selection)!=null?typeof _ref.createRange==="function"?_ref.createRange().text:void 0:void 0:void 0){return true;}
return false;};reFormatCardNumber=function(e){var _this=this;return setTimeout(function(){var $target,value;$target=$(e.currentTarget);value=$target.val();value=$.payment.formatCardNumber(value);return $target.val(value);});};formatCardNumber=function(e){var $target,card,digit,length,re,upperLength,value;digit=String.fromCharCode(e.which);if(!/^\d+$/.test(digit)){return;}
$target=$(e.currentTarget);value=$target.val();card=cardFromNumber(value+digit);length=(value.replace(/\D/g,'')+digit).length;upperLength=16;if(card){upperLength=card.length[card.length.length-1];}
if(length>=upperLength){return;}
if(($target.prop('selectionStart')!=null)&&$target.prop('selectionStart')!==value.length){return;}
if(card&&card.type==='amex'){re=/^(\d{4}|\d{4}\s\d{6})$/;}else{re=/(?:^|\s)(\d{4})$/;}
if(re.test(value)){e.preventDefault();return $target.val(value+' '+digit);}else if(re.test(value+digit)){e.preventDefault();return $target.val(value+digit+' ');}};formatBackCardNumber=function(e){var $target,value;$target=$(e.currentTarget);value=$target.val();if(e.meta){return;}
if(e.which!==8){return;}
if(($target.prop('selectionStart')!=null)&&$target.prop('selectionStart')!==value.length){return;}
if(/\d\s$/.test(value)){e.preventDefault();return $target.val(value.replace(/\d\s$/,''));}else if(/\s\d?$/.test(value)){e.preventDefault();return $target.val(value.replace(/\s\d?$/,''));}};formatExpiry=function(e){var $target,digit,val;digit=String.fromCharCode(e.which);if(!/^\d+$/.test(digit)){return;}
$target=$(e.currentTarget);val=$target.val()+digit;if(/^\d$/.test(val)&&(val!=='0'&&val!=='1')){e.preventDefault();return $target.val("0"+val+" / ");}else if(/^\d\d$/.test(val)){e.preventDefault();return $target.val(""+val+" / ");}};formatForwardExpiry=function(e){var $target,digit,val;digit=String.fromCharCode(e.which);if(!/^\d+$/.test(digit)){return;}
$target=$(e.currentTarget);val=$target.val();if(/^\d\d$/.test(val)){return $target.val(""+val+" / ");}};formatForwardSlash=function(e){var $target,slash,val;slash=String.fromCharCode(e.which);if(slash!=='/'){return;}
$target=$(e.currentTarget);val=$target.val();if(/^\d$/.test(val)&&val!=='0'){return $target.val("0"+val+" / ");}};formatBackExpiry=function(e){var $target,value;if(e.meta){return;}
$target=$(e.currentTarget);value=$target.val();if(e.which!==8){return;}
if(($target.prop('selectionStart')!=null)&&$target.prop('selectionStart')!==value.length){return;}
if(/\d(\s|\/)+$/.test(value)){e.preventDefault();return $target.val(value.replace(/\d(\s|\/)*$/,''));}else if(/\s\/\s?\d?$/.test(value)){e.preventDefault();return $target.val(value.replace(/\s\/\s?\d?$/,''));}};restrictNumeric=function(e){var input;if(e.metaKey||e.ctrlKey){return true;}
if(e.which===32){return false;}
if(e.which===0){return true;}
if(e.which<33){return true;}
input=String.fromCharCode(e.which);return!!/[\d\s\.]/.test(input);};restrictCardNumber=function(e){var $target,card,digit,value;$target=$(e.currentTarget);digit=String.fromCharCode(e.which);if(!/^\d+$/.test(digit)){return;}
if(hasTextSelected($target)){return;}
value=($target.val()+digit).replace(/\D/g,'');card=cardFromNumber(value);if(card){return value.length<=card.length[card.length.length-1];}else{return value.length<=16;}};restrictExpiry=function(e){var $target,digit,value;$target=$(e.currentTarget);digit=String.fromCharCode(e.which);if(!/^\d+$/.test(digit)){return;}
if(hasTextSelected($target)){return;}
value=$target.val()+digit;value=value.replace(/\D/g,'');if(value.length>6){return false;}};restrictCVC=function(e){var $target,digit,val;$target=$(e.currentTarget);digit=String.fromCharCode(e.which);if(!/^\d+$/.test(digit)){return;}
val=$target.val()+digit;return val.length<=4;};setCardType=function(e){var $target,allTypes,card,cardType,val;$target=$(e.currentTarget);val=$target.val();cardType=$.payment.cardType(val)||'unknown';if(!$target.hasClass(cardType)){allTypes=(function(){var _i,_len,_results;_results=[];for(_i=0,_len=cards.length;_i<_len;_i++){card=cards[_i];_results.push(card.type);}
return _results;})();$target.removeClass('unknown');$target.removeClass(allTypes.join(' '));$target.addClass(cardType);$target.toggleClass('identified',cardType!=='unknown');return $target.trigger('payment.cardType',cardType);}};$.payment.fn.formatCardCVC=function(){this.payment('restrictNumeric');this.on('keypress',restrictCVC);return this;};$.payment.fn.formatCardExpiry=function(){this.payment('restrictNumeric');this.on('keypress',restrictExpiry);this.on('keypress',formatExpiry);this.on('keypress',formatForwardSlash);this.on('keypress',formatForwardExpiry);this.on('keydown',formatBackExpiry);return this;};$.payment.fn.formatCardNumber=function(){this.payment('restrictNumeric');this.on('keypress',restrictCardNumber);this.on('keypress',formatCardNumber);this.on('keydown',formatBackCardNumber);this.on('keyup',setCardType);this.on('paste',reFormatCardNumber);return this;};$.payment.fn.restrictNumeric=function(){this.on('keypress',restrictNumeric);return this;};$.payment.fn.cardExpiryVal=function(){return $.payment.cardExpiryVal($(this).val());};$.payment.cardExpiryVal=function(value){var month,prefix,year,_ref;value=value.replace(/\s/g,'');_ref=value.split('/',2),month=_ref[0],year=_ref[1];if((year!=null?year.length:void 0)===2&&/^\d+$/.test(year)){prefix=(new Date).getFullYear();prefix=prefix.toString().slice(0,2);year=prefix+year;}
month=parseInt(month,10);year=parseInt(year,10);return{month:month,year:year};};$.payment.validateCardNumber=function(num){var card,_ref;num=(num+'').replace(/\s+|-/g,'');if(!/^\d+$/.test(num)){return false;}
card=cardFromNumber(num);if(!card){return false;}
return(_ref=num.length,__indexOf.call(card.length,_ref)>=0)&&(card.luhn===false||luhnCheck(num));};$.payment.validateCardExpiry=function(month,year){var currentTime,expiry,prefix,_ref;if(typeof month==='object'&&'month'in month){_ref=month,month=_ref.month,year=_ref.year;}
if(!(month&&year)){return false;}
month=$.trim(month);year=$.trim(year);if(!/^\d+$/.test(month)){return false;}
if(!/^\d+$/.test(year)){return false;}
if(!(parseInt(month,10)<=12)){return false;}
if(year.length===2){prefix=(new Date).getFullYear();prefix=prefix.toString().slice(0,2);year=prefix+year;}
expiry=new Date(year,month);currentTime=new Date;expiry.setMonth(expiry.getMonth()-1);expiry.setMonth(expiry.getMonth()+1,1);return expiry>currentTime;};$.payment.validateCardCVC=function(cvc,type){var _ref,_ref1;cvc=$.trim(cvc);if(!/^\d+$/.test(cvc)){return false;}
if(type){return _ref=cvc.length,__indexOf.call((_ref1=cardFromType(type))!=null?_ref1.cvcLength:void 0,_ref)>=0;}else{return cvc.length>=3&&cvc.length<=4;}};$.payment.cardType=function(num){var _ref;if(!num){return null;}
return((_ref=cardFromNumber(num))!=null?_ref.type:void 0)||null;};$.payment.formatCardNumber=function(num){var card,groups,upperLength,_ref;card=cardFromNumber(num);if(!card){return num;}
upperLength=card.length[card.length.length-1];num=num.replace(/\D/g,'');num=num.slice(0,+upperLength+1||9e9);if(card.format.global){return(_ref=num.match(card.format))!=null?_ref.join(' '):void 0;}else{groups=card.format.exec(num);if(groups!=null){groups.shift();}
return groups!=null?groups.join(' '):void 0;}};}).call(this);
;
/*!
 * jQuery.scrollTo
 * Copyright (c) 2007 Ariel Flesler - aflesler ○ gmail • com | https://github.com/flesler
 * Licensed under MIT
 * https://github.com/flesler/jquery.scrollTo
 * @projectDescription Lightweight, cross-browser and highly customizable animated scrolling with jQuery
 * @author Ariel Flesler
 * @version 2.1.3
 */
(function(factory){'use strict';if(typeof define==='function'&&define.amd){define(['jquery'],factory);}else if(typeof module!=='undefined'&&module.exports){module.exports=factory(require('jquery'));}else{factory(jQuery);}})(function($){'use strict';var $scrollTo=$.scrollTo=function(target,duration,settings){return $(window).scrollTo(target,duration,settings);};$scrollTo.defaults={axis:'xy',duration:0,limit:true};function isWin(elem){return!elem.nodeName||$.inArray(elem.nodeName.toLowerCase(),['iframe','#document','html','body'])!==-1;}
function isFunction(obj){return typeof obj==='function'}
$.fn.scrollTo=function(target,duration,settings){if(typeof duration==='object'){settings=duration;duration=0;}
if(typeof settings==='function'){settings={onAfter:settings};}
if(target==='max'){target=9e9;}
settings=$.extend({},$scrollTo.defaults,settings);duration=duration||settings.duration;var queue=settings.queue&&settings.axis.length>1;if(queue){duration/=2;}
settings.offset=both(settings.offset);settings.over=both(settings.over);return this.each(function(){if(target===null)return;var win=isWin(this),elem=win?this.contentWindow||window:this,$elem=$(elem),targ=target,attr={},toff;switch(typeof targ){case'number':case'string':if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(targ)){targ=both(targ);break;}
targ=win?$(targ):$(targ,elem);case'object':if(targ.length===0)return;if(targ.is||targ.style){toff=(targ=$(targ)).offset();}}
var offset=isFunction(settings.offset)&&settings.offset(elem,targ)||settings.offset;$.each(settings.axis.split(''),function(i,axis){var Pos=axis==='x'?'Left':'Top',pos=Pos.toLowerCase(),key='scroll'+Pos,prev=$elem[key](),max=$scrollTo.max(elem,axis);if(toff){attr[key]=toff[pos]+(win?0:prev-$elem.offset()[pos]);if(settings.margin){attr[key]-=parseInt(targ.css('margin'+Pos),10)||0;attr[key]-=parseInt(targ.css('border'+Pos+'Width'),10)||0;}
attr[key]+=offset[pos]||0;if(settings.over[pos]){attr[key]+=targ[axis==='x'?'width':'height']()*settings.over[pos];}}else{var val=targ[pos];attr[key]=val.slice&&val.slice(-1)==='%'?parseFloat(val)/100*max:val;}
if(settings.limit&&/^\d+$/.test(attr[key])){attr[key]=attr[key]<=0?0:Math.min(attr[key],max);}
if(!i&&settings.axis.length>1){if(prev===attr[key]){attr={};}else if(queue){animate(settings.onAfterFirst);attr={};}}});animate(settings.onAfter);function animate(callback){var opts=$.extend({},settings,{queue:true,duration:duration,complete:callback&&function(){callback.call(elem,targ,settings);}});$elem.animate(attr,opts);}});};$scrollTo.max=function(elem,axis){var Dim=axis==='x'?'Width':'Height',scroll='scroll'+Dim;if(!isWin(elem))
return elem[scroll]-$(elem)[Dim.toLowerCase()]();var size='client'+Dim,doc=elem.ownerDocument||elem.document,html=doc.documentElement,body=doc.body;return Math.max(html[scroll],body[scroll])-Math.min(html[size],body[size]);};function both(val){return isFunction(val)||$.isPlainObject(val)?val:{top:val,left:val};}
$.Tween.propHooks.scrollLeft=$.Tween.propHooks.scrollTop={get:function(t){return $(t.elem)[t.prop]();},set:function(t){var curr=this.get(t);if(t.options.interrupt&&t._last&&t._last!==curr){return $(t.elem).stop();}
var next=Math.round(t.now);if(curr!==next){$(t.elem)[t.prop](next);t._last=this.get(t);}}};return $scrollTo;});
(function($){$.fn.twentytwenty=function(options){var options=$.extend({default_offset_pct:0.5,orientation:'horizontal',before_label:'Before',after_label:'After',no_overlay:false,move_slider_on_hover:false,move_with_handle_only:true,click_to_move:false},options);return this.each(function(){var sliderPct=options.default_offset_pct;var container=$(this);var sliderOrientation=options.orientation;var beforeDirection=(sliderOrientation==='vertical')?'down':'left';var afterDirection=(sliderOrientation==='vertical')?'up':'right';container.wrap("<div class='twentytwenty-wrapper twentytwenty-"+sliderOrientation+"'></div>");if(!options.no_overlay){container.append("<div class='twentytwenty-overlay'></div>");var overlay=container.find(".twentytwenty-overlay");overlay.append("<div class='twentytwenty-before-label' data-content='"+options.before_label+"'></div>");overlay.append("<div class='twentytwenty-after-label' data-content='"+options.after_label+"'></div>");}
var beforeImg=container.find("img:first");var afterImg=container.find("img:last");container.append("<div class='twentytwenty-handle'></div>");var slider=container.find(".twentytwenty-handle");slider.append("<span class='twentytwenty-"+beforeDirection+"-arrow'></span>");slider.append("<span class='twentytwenty-"+afterDirection+"-arrow'></span>");container.addClass("twentytwenty-container");beforeImg.addClass("twentytwenty-before");afterImg.addClass("twentytwenty-after");var calcOffset=function(dimensionPct){var w=beforeImg.width();var h=beforeImg.height();return{w:w+"px",h:h+"px",cw:(dimensionPct*w)+"px",ch:(dimensionPct*h)+"px"};};var adjustContainer=function(offset){if(sliderOrientation==='vertical'){beforeImg.css("clip","rect(0,"+offset.w+","+offset.ch+",0)");afterImg.css("clip","rect("+offset.ch+","+offset.w+","+offset.h+",0)");}
else{beforeImg.css("clip","rect(0,"+offset.cw+","+offset.h+",0)");afterImg.css("clip","rect(0,"+offset.w+","+offset.h+","+offset.cw+")");}
container.css("height",offset.h);};var adjustSlider=function(pct){var offset=calcOffset(pct);slider.css((sliderOrientation==="vertical")?"top":"left",(sliderOrientation==="vertical")?offset.ch:offset.cw);adjustContainer(offset);};var minMaxNumber=function(num,min,max){return Math.max(min,Math.min(max,num));};var getSliderPercentage=function(positionX,positionY){var sliderPercentage=(sliderOrientation==='vertical')?(positionY-offsetY)/imgHeight:(positionX-offsetX)/imgWidth;return minMaxNumber(sliderPercentage,0,1);};$(window).on("resize.twentytwenty",function(e){adjustSlider(sliderPct);});var offsetX=0;var offsetY=0;var imgWidth=0;var imgHeight=0;var onMoveStart=function(e){if(((e.distX>e.distY&&e.distX<-e.distY)||(e.distX<e.distY&&e.distX>-e.distY))&&sliderOrientation!=='vertical'){e.preventDefault();}
else if(((e.distX<e.distY&&e.distX<-e.distY)||(e.distX>e.distY&&e.distX>-e.distY))&&sliderOrientation==='vertical'){e.preventDefault();}
container.addClass("active");offsetX=container.offset().left;offsetY=container.offset().top;imgWidth=beforeImg.width();imgHeight=beforeImg.height();};var onMove=function(e){if(container.hasClass("active")){sliderPct=getSliderPercentage(e.pageX,e.pageY);adjustSlider(sliderPct);}};var onMoveEnd=function(){container.removeClass("active");};var moveTarget=options.move_with_handle_only?slider:container;moveTarget.on("movestart",onMoveStart);moveTarget.on("move",onMove);moveTarget.on("moveend",onMoveEnd);if(options.move_slider_on_hover){container.on("mouseenter",onMoveStart);container.on("mousemove",onMove);container.on("mouseleave",onMoveEnd);}
slider.on("touchmove",function(e){e.preventDefault();});container.find("img").on("mousedown",function(event){event.preventDefault();});if(options.click_to_move){container.on('click',function(e){offsetX=container.offset().left;offsetY=container.offset().top;imgWidth=beforeImg.width();imgHeight=beforeImg.height();sliderPct=getSliderPercentage(e.pageX,e.pageY);adjustSlider(sliderPct);});}
$(window).trigger("resize.twentytwenty");});};})(jQuery);
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function(){'use strict'
var keyCounter=0
var allWaypoints={}
function Waypoint(options){if(!options){throw new Error('No options passed to Waypoint constructor')}
if(!options.element){throw new Error('No element option passed to Waypoint constructor')}
if(!options.handler){throw new Error('No handler option passed to Waypoint constructor')}
this.key='waypoint-'+keyCounter
this.options=Waypoint.Adapter.extend({},Waypoint.defaults,options)
this.element=this.options.element
this.adapter=new Waypoint.Adapter(this.element)
this.callback=options.handler
this.axis=this.options.horizontal?'horizontal':'vertical'
this.enabled=this.options.enabled
this.triggerPoint=null
this.group=Waypoint.Group.findOrCreate({name:this.options.group,axis:this.axis})
this.context=Waypoint.Context.findOrCreateByElement(this.options.context)
if(Waypoint.offsetAliases[this.options.offset]){this.options.offset=Waypoint.offsetAliases[this.options.offset]}
this.group.add(this)
this.context.add(this)
allWaypoints[this.key]=this
keyCounter+=1}
Waypoint.prototype.queueTrigger=function(direction){this.group.queueTrigger(this,direction)}
Waypoint.prototype.trigger=function(args){if(!this.enabled){return}
if(this.callback){this.callback.apply(this,args)}}
Waypoint.prototype.destroy=function(){this.context.remove(this)
this.group.remove(this)
delete allWaypoints[this.key]}
Waypoint.prototype.disable=function(){this.enabled=false
return this}
Waypoint.prototype.enable=function(){this.context.refresh()
this.enabled=true
return this}
Waypoint.prototype.next=function(){return this.group.next(this)}
Waypoint.prototype.previous=function(){return this.group.previous(this)}
Waypoint.invokeAll=function(method){var allWaypointsArray=[]
for(var waypointKey in allWaypoints){allWaypointsArray.push(allWaypoints[waypointKey])}
for(var i=0,end=allWaypointsArray.length;i<end;i++){allWaypointsArray[i][method]()}}
Waypoint.destroyAll=function(){Waypoint.invokeAll('destroy')}
Waypoint.disableAll=function(){Waypoint.invokeAll('disable')}
Waypoint.enableAll=function(){Waypoint.Context.refreshAll()
for(var waypointKey in allWaypoints){allWaypoints[waypointKey].enabled=true}
return this}
Waypoint.refreshAll=function(){Waypoint.Context.refreshAll()}
Waypoint.viewportHeight=function(){return window.innerHeight||document.documentElement.clientHeight}
Waypoint.viewportWidth=function(){return document.documentElement.clientWidth}
Waypoint.adapters=[]
Waypoint.defaults={context:window,continuous:true,enabled:true,group:'default',horizontal:false,offset:0}
Waypoint.offsetAliases={'bottom-in-view':function(){return this.context.innerHeight()-this.adapter.outerHeight()},'right-in-view':function(){return this.context.innerWidth()-this.adapter.outerWidth()}}
window.Waypoint=Waypoint}());(function(){'use strict'
function requestAnimationFrameShim(callback){window.setTimeout(callback,1000/60)}
var keyCounter=0
var contexts={}
var Waypoint=window.Waypoint
var oldWindowLoad=window.onload
function Context(element){this.element=element
this.Adapter=Waypoint.Adapter
this.adapter=new this.Adapter(element)
this.key='waypoint-context-'+keyCounter
this.didScroll=false
this.didResize=false
this.oldScroll={x:this.adapter.scrollLeft(),y:this.adapter.scrollTop()}
this.waypoints={vertical:{},horizontal:{}}
element.waypointContextKey=this.key
contexts[element.waypointContextKey]=this
keyCounter+=1
if(!Waypoint.windowContext){Waypoint.windowContext=true
Waypoint.windowContext=new Context(window)}
this.createThrottledScrollHandler()
this.createThrottledResizeHandler()}
Context.prototype.add=function(waypoint){var axis=waypoint.options.horizontal?'horizontal':'vertical'
this.waypoints[axis][waypoint.key]=waypoint
this.refresh()}
Context.prototype.checkEmpty=function(){var horizontalEmpty=this.Adapter.isEmptyObject(this.waypoints.horizontal)
var verticalEmpty=this.Adapter.isEmptyObject(this.waypoints.vertical)
var isWindow=this.element==this.element.window
if(horizontalEmpty&&verticalEmpty&&!isWindow){this.adapter.off('.waypoints')
delete contexts[this.key]}}
Context.prototype.createThrottledResizeHandler=function(){var self=this
function resizeHandler(){self.handleResize()
self.didResize=false}
this.adapter.on('resize.waypoints',function(){if(!self.didResize){self.didResize=true
Waypoint.requestAnimationFrame(resizeHandler)}})}
Context.prototype.createThrottledScrollHandler=function(){var self=this
function scrollHandler(){self.handleScroll()
self.didScroll=false}
this.adapter.on('scroll.waypoints',function(){if(!self.didScroll||Waypoint.isTouch){self.didScroll=true
Waypoint.requestAnimationFrame(scrollHandler)}})}
Context.prototype.handleResize=function(){Waypoint.Context.refreshAll()}
Context.prototype.handleScroll=function(){var triggeredGroups={}
var axes={horizontal:{newScroll:this.adapter.scrollLeft(),oldScroll:this.oldScroll.x,forward:'right',backward:'left'},vertical:{newScroll:this.adapter.scrollTop(),oldScroll:this.oldScroll.y,forward:'down',backward:'up'}}
for(var axisKey in axes){var axis=axes[axisKey]
var isForward=axis.newScroll>axis.oldScroll
var direction=isForward?axis.forward:axis.backward
for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey]
if(waypoint.triggerPoint===null){continue}
var wasBeforeTriggerPoint=axis.oldScroll<waypoint.triggerPoint
var nowAfterTriggerPoint=axis.newScroll>=waypoint.triggerPoint
var crossedForward=wasBeforeTriggerPoint&&nowAfterTriggerPoint
var crossedBackward=!wasBeforeTriggerPoint&&!nowAfterTriggerPoint
if(crossedForward||crossedBackward){waypoint.queueTrigger(direction)
triggeredGroups[waypoint.group.id]=waypoint.group}}}
for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}
this.oldScroll={x:axes.horizontal.newScroll,y:axes.vertical.newScroll}}
Context.prototype.innerHeight=function(){if(this.element==this.element.window){return Waypoint.viewportHeight()}
return this.adapter.innerHeight()}
Context.prototype.remove=function(waypoint){delete this.waypoints[waypoint.axis][waypoint.key]
this.checkEmpty()}
Context.prototype.innerWidth=function(){if(this.element==this.element.window){return Waypoint.viewportWidth()}
return this.adapter.innerWidth()}
Context.prototype.destroy=function(){var allWaypoints=[]
for(var axis in this.waypoints){for(var waypointKey in this.waypoints[axis]){allWaypoints.push(this.waypoints[axis][waypointKey])}}
for(var i=0,end=allWaypoints.length;i<end;i++){allWaypoints[i].destroy()}}
Context.prototype.refresh=function(){var isWindow=this.element==this.element.window
var contextOffset=isWindow?undefined:this.adapter.offset()
var triggeredGroups={}
var axes
this.handleScroll()
axes={horizontal:{contextOffset:isWindow?0:contextOffset.left,contextScroll:isWindow?0:this.oldScroll.x,contextDimension:this.innerWidth(),oldScroll:this.oldScroll.x,forward:'right',backward:'left',offsetProp:'left'},vertical:{contextOffset:isWindow?0:contextOffset.top,contextScroll:isWindow?0:this.oldScroll.y,contextDimension:this.innerHeight(),oldScroll:this.oldScroll.y,forward:'down',backward:'up',offsetProp:'top'}}
for(var axisKey in axes){var axis=axes[axisKey]
for(var waypointKey in this.waypoints[axisKey]){var waypoint=this.waypoints[axisKey][waypointKey]
var adjustment=waypoint.options.offset
var oldTriggerPoint=waypoint.triggerPoint
var elementOffset=0
var freshWaypoint=oldTriggerPoint==null
var contextModifier,wasBeforeScroll,nowAfterScroll
var triggeredBackward,triggeredForward
if(waypoint.element!==waypoint.element.window){elementOffset=waypoint.adapter.offset()[axis.offsetProp]}
if(typeof adjustment==='function'){adjustment=adjustment.apply(waypoint)}
else if(typeof adjustment==='string'){adjustment=parseFloat(adjustment)
if(waypoint.options.offset.indexOf('%')>-1){adjustment=Math.ceil(axis.contextDimension*adjustment/100)}}
contextModifier=axis.contextScroll-axis.contextOffset
waypoint.triggerPoint=Math.floor(elementOffset+contextModifier-adjustment)
wasBeforeScroll=oldTriggerPoint<axis.oldScroll
nowAfterScroll=waypoint.triggerPoint>=axis.oldScroll
triggeredBackward=wasBeforeScroll&&nowAfterScroll
triggeredForward=!wasBeforeScroll&&!nowAfterScroll
if(!freshWaypoint&&triggeredBackward){waypoint.queueTrigger(axis.backward)
triggeredGroups[waypoint.group.id]=waypoint.group}
else if(!freshWaypoint&&triggeredForward){waypoint.queueTrigger(axis.forward)
triggeredGroups[waypoint.group.id]=waypoint.group}
else if(freshWaypoint&&axis.oldScroll>=waypoint.triggerPoint){waypoint.queueTrigger(axis.forward)
triggeredGroups[waypoint.group.id]=waypoint.group}}}
Waypoint.requestAnimationFrame(function(){for(var groupKey in triggeredGroups){triggeredGroups[groupKey].flushTriggers()}})
return this}
Context.findOrCreateByElement=function(element){return Context.findByElement(element)||new Context(element)}
Context.refreshAll=function(){for(var contextId in contexts){contexts[contextId].refresh()}}
Context.findByElement=function(element){return contexts[element.waypointContextKey]}
window.onload=function(){if(oldWindowLoad){oldWindowLoad()}
Context.refreshAll()}
Waypoint.requestAnimationFrame=function(callback){var requestFn=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||requestAnimationFrameShim
requestFn.call(window,callback)}
Waypoint.Context=Context}());(function(){'use strict'
function byTriggerPoint(a,b){return a.triggerPoint-b.triggerPoint}
function byReverseTriggerPoint(a,b){return b.triggerPoint-a.triggerPoint}
var groups={vertical:{},horizontal:{}}
var Waypoint=window.Waypoint
function Group(options){this.name=options.name
this.axis=options.axis
this.id=this.name+'-'+this.axis
this.waypoints=[]
this.clearTriggerQueues()
groups[this.axis][this.name]=this}
Group.prototype.add=function(waypoint){this.waypoints.push(waypoint)}
Group.prototype.clearTriggerQueues=function(){this.triggerQueues={up:[],down:[],left:[],right:[]}}
Group.prototype.flushTriggers=function(){for(var direction in this.triggerQueues){var waypoints=this.triggerQueues[direction]
var reverse=direction==='up'||direction==='left'
waypoints.sort(reverse?byReverseTriggerPoint:byTriggerPoint)
for(var i=0,end=waypoints.length;i<end;i+=1){var waypoint=waypoints[i]
if(waypoint.options.continuous||i===waypoints.length-1){waypoint.trigger([direction])}}}
this.clearTriggerQueues()}
Group.prototype.next=function(waypoint){this.waypoints.sort(byTriggerPoint)
var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
var isLast=index===this.waypoints.length-1
return isLast?null:this.waypoints[index+1]}
Group.prototype.previous=function(waypoint){this.waypoints.sort(byTriggerPoint)
var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
return index?this.waypoints[index-1]:null}
Group.prototype.queueTrigger=function(waypoint,direction){this.triggerQueues[direction].push(waypoint)}
Group.prototype.remove=function(waypoint){var index=Waypoint.Adapter.inArray(waypoint,this.waypoints)
if(index>-1){this.waypoints.splice(index,1)}}
Group.prototype.first=function(){return this.waypoints[0]}
Group.prototype.last=function(){return this.waypoints[this.waypoints.length-1]}
Group.findOrCreate=function(options){return groups[options.axis][options.name]||new Group(options)}
Waypoint.Group=Group}());(function(){'use strict'
var $=window.jQuery
var Waypoint=window.Waypoint
function JQueryAdapter(element){this.$element=$(element)}
$.each(['innerHeight','innerWidth','off','offset','on','outerHeight','outerWidth','scrollLeft','scrollTop'],function(i,method){JQueryAdapter.prototype[method]=function(){var args=Array.prototype.slice.call(arguments)
return this.$element[method].apply(this.$element,args)}})
$.each(['extend','inArray','isEmptyObject'],function(i,method){JQueryAdapter[method]=$[method]})
Waypoint.adapters.push({name:'jquery',Adapter:JQueryAdapter})
Waypoint.Adapter=JQueryAdapter}());(function(){'use strict'
var Waypoint=window.Waypoint
function createExtension(framework){return function(){var waypoints=[]
var overrides=arguments[0]
if(framework.isFunction(arguments[0])){overrides=framework.extend({},arguments[1])
overrides.handler=arguments[0]}
this.each(function(){var options=framework.extend({},overrides,{element:this})
if(typeof options.context==='string'){options.context=framework(this).closest(options.context)[0]}
waypoints.push(new Waypoint(options))})
return waypoints}}
if(window.jQuery){window.jQuery.fn.waypoint=createExtension(window.jQuery)}
if(window.Zepto){window.Zepto.fn.waypoint=createExtension(window.Zepto)}}());
/*! word-and-character-counter.js
v2.4 (c) Wilkins Fernandez
MIT License
*/
(function($){'use strict';$.fn.extend({counter:function(options){var defaults={type:'char',count:'down',goal:140,text:true,target:false,append:true,translation:'',msg:'',container_class:''};var $countObj='',countIndex='',noLimit=false,options=$.extend({},defaults,options);var methods={init:function($obj){var objID=$obj.attr('id'),counterID=objID+'_count';methods.isLimitless();$countObj=$("<span id="+counterID+"/>");var counterDiv=$('<div/>').attr('id',objID+'_counter').append($countObj).append(" "+methods.setMsg());if(options.container_class&&options.container_class.length){counterDiv.addClass(options.container_class);}
if(!options.target||!$(options.target).length){options.append?counterDiv.insertAfter($obj):counterDiv.insertBefore($obj);}else{options.append?$(options.target).append(counterDiv):$(options.target).prepend(counterDiv);}
methods.bind($obj);},bind:function($obj){$obj.bind("keypress.counter keydown.counter keyup.counter blur.counter focus.counter change.counter paste.counter",methods.updateCounter);$obj.bind("keydown.counter",methods.doStopTyping);$obj.trigger('keydown');},isLimitless:function(){if(options.goal==='sky'){options.count='up';noLimit=true;return noLimit;}},setMsg:function(){if(options.msg!==''){return options.msg;}
if(options.text===false){return'';}
if(noLimit){if(options.msg!==''){return options.msg;}else{return'';}}
this.text=options.translation||"character word left max";this.text=this.text.split(' ');this.chars="s ( )".split(' ');this.msg=null;switch(options.type){case"char":if(options.count===defaults.count&&options.text){this.msg=this.text[0]+this.chars[1]+this.chars[0]+this.chars[2]+" "+this.text[2];}else if(options.count==="up"&&options.text){this.msg=this.text[0]+this.chars[0]+" "+this.chars[1]+options.goal+" "+this.text[3]+this.chars[2];}
break;case"word":if(options.count===defaults.count&&options.text){this.msg=this.text[1]+this.chars[1]+this.chars[0]+this.chars[2]+" "+this.text[2];}else if(options.count==="up"&&options.text){this.msg=this.text[1]+this.chars[1]+this.chars[0]+this.chars[2]+" "+this.chars[1]+options.goal+" "+this.text[3]+this.chars[2];}
break;default:}
return this.msg;},getWords:function(val){if(val!==""){return $.trim(val).replace(/\s+/g," ").split(" ").length;}else{return 0;}},updateCounter:function(e){var $this=$(this);if(countIndex<0||countIndex>options.goal){methods.passedGoal($this);}
if(options.type===defaults.type){if(options.count===defaults.count){countIndex=options.goal-$this.val().length;if(countIndex<=0){$countObj.text('0');}else{$countObj.text(countIndex);}}else if(options.count==='up'){countIndex=$this.val().length;$countObj.text(countIndex);}}else if(options.type==='word'){if(options.count===defaults.count){countIndex=methods.getWords($this.val());if(countIndex<=options.goal){countIndex=options.goal-countIndex;$countObj.text(countIndex);}else{$countObj.text('0');}}else if(options.count==='up'){countIndex=methods.getWords($this.val());$countObj.text(countIndex);}}
return;},doStopTyping:function(e){var keys=[46,8,9,35,36,37,38,39,40,32];if(methods.isGoalReached(e)){if(e.keyCode!==keys[0]&&e.keyCode!==keys[1]&&e.keyCode!==keys[2]&&e.keyCode!==keys[3]&&e.keyCode!==keys[4]&&e.keyCode!==keys[5]&&e.keyCode!==keys[6]&&e.keyCode!==keys[7]&&e.keyCode!==keys[8]){if(options.type===defaults.type){return false;}else if(e.keyCode!==keys[9]&&e.keyCode!==keys[1]&&options.type!=defaults.type){return true;}else{return false;}}}},isGoalReached:function(e,_goal){if(noLimit){return false;}
if(options.count===defaults.count){_goal=0;return(countIndex<=_goal)?true:false;}else{_goal=options.goal;return(countIndex>=_goal)?true:false;}},wordStrip:function(numOfWords,text){var wordCount=text.replace(/\s+/g,' ').split(' ').length;text=$.trim(text);if(numOfWords<=0||numOfWords===wordCount){return text;}else{text=$.trim(text).split(' ');text.splice(numOfWords,wordCount,'');return $.trim(text.join(' '));}},passedGoal:function($obj){var userInput=$obj.val();if(options.type==='word'){$obj.val(methods.wordStrip(options.goal,userInput));}
if(options.type==='char'){$obj.val(userInput.substring(0,options.goal));}
if(options.type==='down'){$countObj.val('0');}
if(options.type==='up'){$countObj.val(options.goal);}}};return this.each(function(){methods.init($(this));});}});})(jQuery);
