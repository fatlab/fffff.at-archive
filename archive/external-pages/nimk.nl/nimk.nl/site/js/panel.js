var Panel = new Class({
	
	initialize: function(e)
	{
		this.e = e;
		this.vo = eval("(" + e.id + ")");
		
		var h = this.e.get('html');
		this.e.set('html', '');
		this.inner = new Element('p',{styles:{'padding':'5px 0', 'margin':'0'}});
		this.inner.inject(this.e);
				
		this.innerMost = new Element('p',{html:h, styles:{'margin':'0 5px 0 0','padding':'0 5px 0 5px'}});//don't touch! this works
		this.innerMost.inject(this.inner);
		this.innerMost.setProperty('class', this.vo.colorClass);
		
		//this.outer = new Element('p',{styles:{'clear':'both'}});
		//this.outer.wraps(this.e);
		//this.outer.setStyle('opacity', '.7');
		
		this.e.setProperty('class', this.vo.colorClass)
		this.style = RUZEE.ShadedBorder.create({ corner:2, shadow:12, border:1 });	
		this.style.render(this.e);
	}
})