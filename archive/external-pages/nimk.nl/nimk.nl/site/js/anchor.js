var Anchor = new Class({
	
	initialize: function(e)
	{
		this.e = e;
		if(e.get('class') != 'addthis_button_compact' & e.get('class') != 'agendaWidgetIndex' & e.get('class') != 'cluster' & !e.getElement('img')  &e.get('class') != 'navTopRow' &  !e.hasClass('mkmNoLink') &  !e.hasClass('noLink'))
		{
			var h = this.e.get('html');
			this.e.set('html', '');
			this.inner = new Element('span',{html:h});
			this.inner.inject(this.e);
			this.inner.setProperty('class', 'blue');
		}
	}
})
/*
var ExternalAnchor = new Class({
	
	initialize: function(e)
	{
		this.e = e;
		this.class = this.e.getProperty('Class') + ' externalAnchor';
		this.e.setProperty('class', this.class);
	}
})
*/