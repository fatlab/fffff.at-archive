var AgendaWidget = new Class({
	
	initialize: function(e, content, container)
	{
		this.e = e;
		this.content = content;
		this.container = container;

		this.currentItem = 0;
		this.amount = Math.round(this.content.getScrollSize().y /this.content.getSize().y);
		this.totalHeight = this.content.getScrollSize().y;
		this.itemHeight = this.content.getSize().y - 2;
		
		this.agendaWidgetIndex = [];
		$$('.agendaWidgetIndex').each
		(
			function(e)
			{
				this.agendaWidgetIndex.include(new AgendaWidgetIndexButton(e, this));
			}.bind(this)
		);
		
		this.setEvents();
		this.setTimer();
		this.doSlide();
		
	},
	
	setIndex:function()
	{
		this.agendaWidgetIndex.each
		(
			function(e, index)
			{
				if(this.currentItem == index)
				{
					e.active = true;
					e.activate();
				}else{
					e.active = false;
					e.deactivate();
				}
			}.bind(this)
		)	
	},
	
	doSlide: function()
	{
		
		if(this.currentItem >= this.amount )
		{
			this.currentItem = 0	
			var setTo = 0;
		}else{
			var setTo = (this.currentItem * this.itemHeight)*-1;
		}
		this.setIndex();
		this.container.setStyle('top',setTo);
		this.currentItem ++;
		
	},
	
	setTimer: function()
	{
		$clear(this.timer);
		this.timer = this.doSlide.periodical(10000, this);//this is neccessary
	},
	
	
	setEvents: function()
	{
		this.e.addEvents
		({
			'mouseover': this.doMouseover.bind(this),
			'mouseout': this.doMouseout.bind(this)
		});
		
		
		this.e.onmouseover = function()
		{
			return false;
		};
		
		this.e.onmouseout = function()
		{
			return false;
		};
	},
	
	doMouseover: function()
	{
		$clear(this.timer);
	},
	
	doMouseout: function()
	{
		this.setTimer();
	}
})

var AgendaWidgetIndexButton = new Class({

	initialize: function(e, agendaWidget)
	{
		this.e = e;
		this.agendaWidget = agendaWidget
		
		this.show = {'vertical-align':'middle', 'border':'none', 'display':'inline'};
		this.hide = {'vertical-align':'middle', 'border':'none', 'display':'none'};
		
		this.out  = new Asset.image(PATH.root + PATH.site +'img/dotBlueList.png');
		this.over = new Asset.image(PATH.root + PATH.site +'img/dotBlackList.png');

		this.out.setStyles(this.show);
		this.over.setStyles(this.hide);
		
		this.out.inject(e);
		this.over.inject(e);
				
		this.setEvents();
		
		this.active = false;
				
	},
	
	setEvents: function()
	{
		this.e.addEvents
		({
			'click': this.doClick.bind(this),
			'mouseover': this.doMouseover.bind(this),
			'mouseout': this.doMouseout.bind(this)
		});
		
		this.e.onclick = function()
		{
			return false;
		};
		
		this.e.onmouseover = function()
		{
			return false;
		};
		
		this.e.onmouseout = function()
		{
			return false;
		};
	},
	
	doClick: function()
	{
		this.e.blur();
		
		this.agendaWidget.currentItem = this.e.get('rel');
		
		this.agendaWidget.doSlide();
	},
	
	doMouseover: function()
	{
		if(!this.active){this.activate();}
	},
	
	doMouseout: function()
	{
		if(!this.active){this.deactivate();}
	},
	
	activate: function()
	{
		this.over.setStyles(this.show);
		this.out.setStyles(this.hide);
	},
	
	deactivate: function()
	{
		this.over.setStyles(this.hide);
		this.out.setStyles(this.show);
	}
})
