
var Controller = new Class({

	initialize: function()
	{
		LB = new lb($('lb'), PATH.root + PATH.site + 'lb/');
		if($('autocompleter'))
		{
			this.initAutocompleter();
		}
		
		if($('agendaWidget'))
		{
			new AgendaWidget($('agendaWidget'), $('agendaWidgetContent'),$('agendaWidgetContainer'));
		}
		
		if($('videoChannelPlayerContainer'))
		{
			PLAYER = new Player($('videoChannelPlayerContainer'));
		}		
		
		if($('mkmPlaylistContainer'))
		{
			VO.mkmPlaylistID == '' ? this.doAction('mkmPlaylistList') : this.doAction('mkmPlaylistItem');
		}
		
		
		$$('a').each(function(e){new Anchor(e);});
		
		
		if($('theContent'))
		{
			//$$('#theContent a').each(function(e){new ExternalAnchor(e);});
		}
		
		if($('clusterHeaderExcerpt'))
		{
			if($('clusterHeaderExcerpt').getSize().y > 155)
			{
				var h = $('clusterHeaderSpacer').getSize().y - ($('clusterHeaderExcerpt').getSize().y - 155)
				$('clusterHeaderSpacer').setStyle('height', h);
			}
			
		}
		
		if(VO.itemID!='' && !$('mkmPlaylistContainer'))
		{
			this.doAction('getItemCatalogue');
		}
	},
	
	doAction: function(action, instance)
	{
		VO.action =  action;
		this.instance = instance;
		this.url = PATH.root + PATH.site + 'php/do.php';
		console.log("doAction: "+action);
		
		switch(action)
		{
			case 'getItemCatalogue':
				this.update = $('itemCatalogue');
				this.doRequest('html');
				break;
			case 'loadVideo':
				$('player').sendEvent("LOAD", instance.get('title'));
				$('player').sendEvent("PLAY");
				break;
			case 'mkmPlaylistList':
				this.update = $('mkmPlaylistContainer');
				this.doRequest('html');
				break;
			case 'mkmPlaylistItem':
				this.update = $('mkmPlaylistContainer');
				this.doRequest('html');
				break;
			case 'loadPlaylist':
				$('player').sendEvent('LOAD', '/_xml/playlist.php?id='+instance);
				VO.playlistID = instance;			
				this.update = $('videochannelPlaylist');
				this.doRequest('html');
				this.currentID = instance;
				break;
			case 'loadPlaylistJSON':
				VO.playlistID = this.currentID;			
				VO.instanceID = instance;
				this.instanceID = instance;
				this.doRequest('json');
				break;
			case 'setPlaylistTitle':
				VO.playlistID = this.currentID;			
				this.update = $('videochannelPlaylistTitle');
				this.doRequest('playlistHTML');
				break;
			case 'setPlaylistExcerpt':
				VO.playlistID = this.currentID;			
				this.update = $('playlistExcerpt');
				this.doRequest('playlistHTML');
				break;
			case 'loadPlaylistVideo':
				//alert(instance);
				$('player').sendEvent("ITEM", instance);
				break;
			case 'loadPlaylistVideoFT':
				$('player').sendEvent("ITEM", instance);
				$('player').sendEvent("STOP");
				break;
			case 'setItemTitle':
				//alert(this.playlistData);
				$('playlistItemTitle').set("html", this.playlistData[instance]);
				break;
			case 'setItemDuration':
				//alert(instance);
				$('playlistItemDuration').set("text", instance);
				break;
			case 'openVideoChannel':
				instance.blur();
				LB.doLoad(VO, 825);
				break;
			case 'openSend':
				instance.blur();
				LB.doLoad(VO, 450);
				break;
			case 'openImage':
				console.log("openImage");
				instance.blur();
				
				var image = eval("(" + instance.get('ref') + ")");
				VO.imageFile = image.file;
				
				var imageType = image.w > image.h ? 'landscape' : 'portrait';
				var viewSize = $(document.body).getSize();
				var screenType = viewSize.x > viewSize.y ? 'landscape' : 'portrait';
				switch(screenType)
				{
					case 'landscape':
					// means height shouls be used as reference
						if(image.h > (viewSize.y - 80))
						{
							var originalHeight = image.h;
							image.h = (viewSize.y - 80);
							var perc = image.h / originalHeight;
							image.w = Math.round(image.w * perc);
						}
						if(image.w.toInt() > viewSize.x - 40)
						{
							var originalWidth = image.w;
							image.w = (viewSize.x - 40);
							var perc = image.w / originalWidth;
							image.h = Math.round(image.h * perc);
						}
					break;
					case 'portrait':
					// means width shouls be used as reference
						if(image.w > (viewSize.x - 40))
						{
							var originalWidth = image.w;
							image.w = (viewSize.x - 40);
							//get percentage
							var perc = image.w / originalWidth;
							image.h = Math.round(image.h * perc);
						}
						if(image.h.toInt() > viewSize.y - 80)
						{
							var originalHeight = image.h;
							image.h = (viewSize.y - 80);
							var perc = image.h / originalHeight;
							image.w = Math.round(image.w * perc);
						}
					break;
				}				
				
				VO.imageWidth = image.w;
				VO.imageHeight = image.h;
				VO.imageType = screenType;
				
				var lbWidth = image.w.toInt() + 20; 
				
				LB.doLoad(VO, lbWidth);
				break;
			case 'initLB':
				LB.doPosition();
				$$('#lb a').each(function(e){new Anchor(e);});
				break;
			case 'closeLB':
				LB.doClose();
				break;
			case 'setCategory':
				instance.blur();
				var cookie = Cookie.dispose('NIMk_category');
				var cookie = Cookie.write('NIMk_category', escape($('category').value));
				if($('category').value != '')
				{
					$('removeCategory').set('class', 'padLeft visible');	
				}
				this.doAction('getArchiveSearchResults');
				break;
			case 'removeCategory':
				$('category').selectedIndex = 0;
				$('removeCategory').set('class', 'padLeft hidden');
				var cookie = Cookie.dispose('NIMk_category');
				this.doAction('getArchiveSearchResults');
				break;
			case 'setSubject':
				instance.blur();
				if(this.value != '')
				{
					$('removeSubject').set('class', 'padLeft visible');	
				}
				this.doAction('getArchiveSearchResults');
				break;
			case 'removeSubject':
				$('subject').selectedIndex = 0;
				$('removeSubject').set('class', 'padLeft hidden');
				this.doAction('getArchiveSearchResults');
				break;
			case 'setYear':
				instance.blur();
				var cookie = Cookie.dispose('NIMk_year');
				if($('year').value != '')
				{
					var cookie = Cookie.write('NIMk_year', escape($('year').value));//keep it!
					$('removeYear').set('class', 'padLeft visible');	
				}
				this.doAction('getArchiveSearchResults');
				break;
			case 'removeYear':
				$('year').selectedIndex = 0;
				$('removeYear').set('class', 'padLeft hidden');
				var cookie = Cookie.dispose('NIMk_year');
				this.doAction('getArchiveSearchResults');
				break;
			case 'setKeyword':
				var cookie = Cookie.dispose('NIMk_keyword');
				var cookie = Cookie.write('NIMk_keyword', escape($('keyword').value));
				if($('keyword').value != '')
				{
					$('removeKeyword').set('class', 'padLeft visible');	
				}else{
					this.doAction('removeKeyword');
				}
				$clear(this.requestDelay);
				this.requestDelay  = this.doAS.delay(500, this);//this is neccessary
				//this.doAction('getArchiveSearchResults');
				
		



				break;
			case 'removeKeyword':
				$('keyword').value = '';
				$('removeKeyword').set('class', 'padLeft hidden');
				var cookie = Cookie.dispose('NIMk_keyword');
				this.doAction('getArchiveSearchResults');
				break;
			case 'setArchiveCookieValues':
				if(Cookie.read("NIMk_category"))
				{
					$('category').value = Cookie.read("NIMk_category");
					$('removeCategory').set('class', 'padLeft visible');	
				}
				if(Cookie.read("NIMk_year"))
				{
					$('year').value = Cookie.read("NIMk_year");
					$('removeYear').set('class', 'padLeft visible');	
				}
				if(Cookie.read("NIMk_keyword"))
				{
					$('keyword').value = Cookie.read("NIMk_keyword");
					$('removeKeyword').set('class', 'padLeft visible');	
				}
				this.doAction('getArchiveSearchResults');
				break;
			case 'getArchiveSearchResults':
				if(instance)
				{
					instance.blur();
				}
				this.url = PATH.root + PATH.site + 'php/archiveSearchResults.php';
				this.update = $('archiveSearchResults');
				VO.category = escape($('category').value);
				//VO.subject = escape($('subject').value);
				VO.year = escape($('year').value);
				VO.keyword = escape($('keyword').value);
				VO.l = $('l').value;
				this.doRequest('html');
				break;
			case 'getProductPage':
				if(instance)
				{
					instance.blur();
				}
				this.url = PATH.root + PATH.site + 'php/productPage.php';
				this.update = $('productPage');
				VO.p = instance.get('rel');
				
				this.doRequest('html');
				break;
			case 'doSend':
				if($('friendEmail').value == ''){this.doLBMessage(false, 'het veld \'email adres van vriend\' mag niet leeg zijn.');break;}	
				if(!this.checkEmail($('friendEmail').value)){this.doLBMessage(false, 'het email adres van vriend lijkt niet te kloppen');break;}	
				VO.friendEmail = escape($('friendEmail').value);
				VO.senderEmail = escape($('senderEmail').value);
				VO.friendNote = escape($('friendNote').value);
				VO.url = escape(document.URL);
				
				this.doRequest();
				break;
			default:
				alert(action);
		}
	},
	
	afterRequest:function(rT, rE, rH, rJ)
	{
		VO.checkSession = false;
		//alert(VO.action);
		switch(VO.action)
		{
			case 'mkmPlaylistList':
				
				break;
			case 'mkmPlaylistItem':
				obj = new Swiff('/_lib/player/player.swf', {
					id: 'player',
					container : $('mkmPlayer'),
					width: 640,
					height:678,//353,
					params: {
						wmode: 'transparent',
						bgcolor: '#000000',
						allowscriptaccess: 'always', 
						allowfullscreen: 'true'
						},
					vars:{
						file : 'http://catalogue.nimk.nl/api/playlist/'+VO.mkmPlaylistID+'/related%3Fcls%3Dart,doc%26fmt%3Drssplaylist%26ret%3Drssmedia%26cpt%3Dtrue',
						// file : 'http://catalogue.nimk.nl/site/tests/test.mrss',
						skin : '/_lib/player/skin/modieus/modieus.swf',
						autostart : 'true',
						overstretch : 'false',
						showdownload : 'false',
						playlist : 'bottom',
						playlistsize: '300', 
						volume: '50'
					}
				});
				
				break;
			case 'getItemCatalogue':
				//this.update = $('itemCatalogue');
				//this.doRequest();
				break;
			case 'loadPlaylistJSON':
				this.playlistData = rT;
				this.doAction('setPlaylistTitle' );
				break;
			case 'loadPlaylist':
				this.doAction('loadPlaylistJSON');
				break;
			case 'doSend':
				if(rT == 1)
				{

					this.doLBMessage(true, 'uw email is verstuurd.');
					$('friendEmail').value = '';
					$('senderEmail').value = '';
					$('friendNote').value = '';
					//LB.doAutoClose();
				}else{
					this.doLBMessage(false, 'Ooops, er is iets misgegaan. probeer het later nog eens.');
				}
				
				break;
			case 'getArchiveSearchResults':
				$$('#archiveSearchResults a').each(function(e){new Anchor(e);});
				break;
			case 'getProductPage':
				$$('#productPage a').each(function(e){new Anchor(e);});
				break;
			case 'loadPlaylist':
				break;
			case 'setPlaylistTitle':
				this.doAction('setPlaylistExcerpt' );
				break;
			case 'setPlaylistExcerpt':
				this.doAction('loadPlaylistVideoFT', 0);
				break;
			case 'loadPlaylistVideo':
				break;
			default:
			//alert(rH);
		}
	},
	
	
	doMessage:function(success, text)
	{
		
		$('message').set('html',text);
		if(success)
		{
			$('message').setProperty('class', 'green')
		}else{
			$('message').setProperty('class', 'red')
		}
		$('message').setStyle('opacity', 0);
		$('message').fade('in');
		//this.messageTimer = $clear(this.messageTimer);
		//this.messageTimer = this.resetMessage.delay(25000);
	},
	
	doLBMessage:function(success, text)
	{
		
		$('LBmessage').set('html',text);
		if(success)
		{
			$('LBmessage').setProperty('class', 'green')
		}else{
			$('LBmessage').setProperty('class', 'red')
		}
		//$('LBmessage').setStyle('opacity', 0);
		//$('LBmessage').fade('in');
		//this.messageTimer = $clear(this.messageTimer);
		//this.messageTimer = this.resetMessage.delay(25000);
	},
	
	resetMessage: function()
	{
		$('message').fade('out');
	},
	
	doRequest:function(type)
	{
		//this.startRequest();
		switch(type)
		{
			case 'html':
			case 'playlistHTML':
				new Request.HTML({url:this.url, update:this.update, data:VO, onComplete:function(rT, rE, rH, rJ){/*this.endRequest();*/this.afterRequest(rT, rE, rH, rJ);}.bind(this) }).send();
				break;
			//case 'playlistHTML':
				//new Request.HTML({url:this.url, update:VO.update, data:VO, onComplete:function(rT, rE, rH, rJ){this.afterRequest(rT, rE, rH, rJ);}.bind(this)}}).send();
				//break;
			case 'json':
				new Request.JSON({url:this.url, method:'post', data:VO, onComplete:function(rT, rE, rH, rJ){this.afterRequest(rT, rE);}.bind(this) }).send();
				break;
			default:
				new Request({url:this.url, data:VO, onComplete:function(rT, rE){/*this.endRequest();*/this.afterRequest(rT, rE);}.bind(this) }).send();
		}
	},
	
	startRequest: function()
	{
		$('message').setStyle('opacity', 0);
		$('message').setProperty('class', 'white');
		$('message').fade('in');
		var h = '<img src="site/img/ajax-loader.gif" />';
		$('message').set('html', h);	
	},
	
	endRequest: function()
	{
		$('message').set('html', '');	
	},
	
	
	checkEmail: function(email)
	{	
		//ill= /[\(\)\<\>\,\;\:\\\/\"\[\]]/;&& e.email.value.match(ill)
		re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
		var check = email.match(re)? true : false;
		return check;
	},
	
	doAS: function()
	{
		
		$clear(this.requestDelay);
		this.doAction('getArchiveSearchResults')
	},
	
	initAutocompleter: function()
	{
		new Autocompleter.Request.JSON('autocompleter', PATH.root + PATH.lib + 'autocompleter/do.php?l=' + VO.l, 
		{ 
			postVar: 'autocompleterValue',
			autoSubmit: true,
			injectChoice: function(token) 
			{ 
				this.tokenObject = token;
				var choice = new Element('li', { html: this.markQueryValue(token[1]) }); 
				choice.value = token[0]; 
				choice.inputValue = token[1]; 
				//choice.id = token[0];
				//choice.title = token[1];
				//choice.nice = token[2];
				this.addChoiceEvents(choice).inject(this.choices); 
			}, 
			onSelection: function(el, sel) 
			{ 
				//$('autocompleterValue').set('value', sel.nice); 
			} 
		}).observer.addEvent('onFired', function(val) 
			{ 
				if(!val) $('autocompleterValue').set('value',''); 
			});

	}
	
})