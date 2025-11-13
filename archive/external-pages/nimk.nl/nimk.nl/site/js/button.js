//default button functions
//all button require an element and a controller to function
var Button = new Class({	
	
	initialize: function()
	{
		//nothing really, comes from the actual button
	},
	
	setElement: function(element)
	{
		this.e = element;
		this.setEvents();
	},
	
	setController: function(controller, event)
	{
		this.c = controller;
		this.event = event;
	},
	
	setEvents: function()
	{
		this.e.addEvents
		({
			'mouseover': this.doMouseover.bind(this),
			'mouseout': this.doMouseout.bind(this),
			'click': this.doClick.bind(this)
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
	
	doMouseover: function()
	{
		this.e.style.cursor = 'pointer';
	},
	
	doMouseout: function()
	{
		this.e.style.cursor = 'default';
	},
	
	doClick: function()
	{
		if(this.c)
		{
			this.c.doEvent(this.event, this);
		}
	}
});

var ImageButton = new Class({
	
	Extends : Button,
	
	initialize: function()
	{
		// nothing really
	},
	
	preload:function(images)
	{
		images.each
		(
			function(s)
			{
					var img =  new Element('img',{'src': s}); 
					//img.addEvent('load', function(){alert('loaded')})	
			}
		)
	}
	
})


var ImageBasedSwitchButton = new Class({	
	
	/* requires four images in it's vo
	 * - onOut
	 * - onOver
	 * - offOut
	 * - offOver
	 */
	
	Extends: ImageButton,
	
	initialize:function(element, controller)
	{
		this.setElement(element);
		this.vo = eval("(" + this.e.get('id') + ")");
		this.setController(controller, this.vo.event);
		this.preload([this.vo.onOut,this.vo.onOver,this.vo.offOut,this.vo.offOver]);
		
		this.imgElement =  new Element('img'); 	
		this.imgElement.inject(this.e);
		
		this.active = this.vo.active;
		this.active ? this.switchOn() : this.switchOff();
	},
	
	toggle: function()
	{
		this.active ? this.switchOff() : this.switchOn();
	},
	
	switchOn: function()
	{
		this.active = true;
		this.imgElement.set('src', this.vo.onOut);
	},
	
	switchOff: function()
	{
		this.active = false;
		this.imgElement.set('src', this.vo.offOut);
	},
	
	doMouseover: function()
	{
		this.e.style.cursor = 'pointer';
		if (this.active)
		{
			this.imgElement.set('src', this.vo.onOver);
		}else{
			this.imgElement.set('src', this.vo.offOver);
		}
	},
	
	doMouseout: function()
	{
		this.e.style.cursor = 'default';
		if (this.active)
		{
			this.imgElement.set('src', this.vo.onOut);
		}else{
			this.imgElement.set('src', this.vo.offOut);
		}
	},
	
	doClick: function()
	{
		this.toggle();
		
		if(this.c)
		{
			this.c.doEvent(this.event, this);
		}
	}
});


var ImageBasedButton = new Class({	
	
	/* requires two images in it's vo
	 * - out
	 * - over
	 */
	
	Extends: ImageButton,
	
	initialize:function(element, controller)
	{
		this.setElement(element);
		this.vo = eval("(" + this.e.get('id') + ")");
		this.setController(controller, this.vo.event);
		this.preload([this.vo.out,this.vo.over])
		
		this.imgElement =  new Element('img',{'src': this.vo.out}); 
		this.imgElement.inject(this.e);
	},

	doMouseover: function()
	{
		this.e.style.cursor = 'pointer';
		this.imgElement.set('src', this.vo.over);
	},
	
	doMouseout: function()
	{
		this.e.style.cursor = 'default';
		this.imgElement.set('src', this.vo.out);	
	}
});