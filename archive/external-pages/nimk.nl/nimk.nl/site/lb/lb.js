var lb = new Class({

	initialize: function(e, url)
	{
		//settings
		this.containerWidth = 725;
		this.opacity = .5;
		this.visible = false;
		//end settings
		
		this.e = e;
		this.url = url;
		this.request = url + 'lb.php' 
		this.css = new Asset.css(url + 'lb.css');
		
		this.e.setStyles({display:'none'});
		
		this.bg = new Element('div');
		this.bg.set('class','lb_bg');
		this.bg.setStyles({opacity : this.opacity})
		this.bg.inject(this.e);
		
		this.container = new Element('div');
		this.container.set('class','lb_container');
		this.container.setStyles({width : this.containerWidth})
		this.container.inject(this.e);
		this.setEvents();
		
		this.positionTimer;
			
	},
	
	doLoad:function(vo, w)
	{
		this.containerWidth = w;
		this.container.setStyles({width : this.containerWidth});
		//
		this.container.set('html','');
		new Request.HTML({url:this.request, update:this.container, data:vo, onComplete:function(rt,re,rh){this.afterLoad(rt,re,rh);}.bind(this) }).send();
	},
	
	afterLoad: function(rt,re,rh)
	{
		this.doOpen();
		this.doPosition();
		$clear(this.positionTimer);
		this.positionTimer = this.doPosition.delay(500, this);//this is necessary
		CONTROLLER.doAction('initLB');
	},
	
	doOpen:function()
	{
		this.visible = true;
		this.e.setStyles({display: 'block'});
	},
	
	doClose:function()
	{
		this.visible = false;
		this.container.set('html','');
		this.e.setStyles({display: 'none'});
		if(this.closeTimer)
		{
			$clear(this.closeTimer);
			$clear(this.closeMessageTimer);
		}
	},
			
	doAutoClose:function()
	{
		this.closeCounter = 11;
		$clear(this.closeMessageTimer);
		this.closeMessageTimer = this.doCloseMessage.periodical(1000, this);
		this.doCloseMessage();
		//$clear(this.closeTimer);
		//this.closeTimer = this.doCloseAuto.delay(10000, this);
	},
	
	doCloseMessage:function()
	{
		this.closeCounter --;
		$('closeMessage').set('html', 'dit venser sluit automatisch over ' + this.closeCounter + ' seconden');
	},
	
	doCloseAuto:function()
	{
		$clear(this.closeTimer);
		$clear(this.closeMessageTimer);
		$('closeMessage').set('html','');
		this.doClose();
	},
	
	doPosition: function()
	{
		if(this.visible)
		{
			this.viewSize = $(document.body).getSize();
			this.documentSize = $(document.body).getScrollSize();
			this.documentScroll = $(document.body).getScroll();
			
			this.containerSize = this.container.getSize();
			this.containerHeight = this.containerSize.y;
			this.containerTop = this.documentScroll.y +  ((this.viewSize.y / 2) - (this.containerHeight / 2)) - 0;
			if(this.containerTop < 10){this.containerTop = 10;}
			this.containerLeft =  (this.viewSize.x / 2) - (this.containerWidth / 2);
			
			this.bg.setStyles({
				top : '0px',
				left : '0px',
				width : this.viewSize.x,
				height : this.documentSize.y
			})
			
			this.container.setStyles({
				top : this.containerTop + 'px',
				left : this.containerLeft + 'px',
				width : this.containerWidth + 'px'//,
				//height : this.containerHeight + 'px'				 
			});

		}
	},
	
	setEvents: function()
	{
		window.addEvents
		({
			'resize': this.doPosition.bind(this),
			'scroll': this.doPosition.bind(this)
		}); 
	}
})