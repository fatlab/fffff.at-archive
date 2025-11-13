var NavButton = new Class({	
	
	Extends: Button,
	
	initialize: function(element)
	{
		this.setElement(element);
		
	},
	
	doClick: function()
	{
		//override
	},
	
	doMouseover: function()
	{
		this.e.setStyles({
			background: '#d8e2f1',
			cursor: 'pointer'
		})
	},
	
	doMouseout: function()
	{
		this.e.setStyles({
			background: '#ffffff',
			cursor: 'pointer'
		})
	}
	
});
