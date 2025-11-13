if (!FATLab_SpeedProject) {

  var FATLab_SpeedProject = {
  	/* Variables for making this work */
  	Values : {
  		TimeSpent : 9000,
  		Times : [5, 10, 30, 60, 240, 480, 'fail'],
  		Small : true,
  		HTML : '<a href="http://fffff.at/speed-projects/" target="_fffffat"><img src="%s" title="%t" alt="%t" border="0" /></a>',
  		ImagePath : 'http://www.fffff.at/widgets/speed-project/images/%ptime_%s.png',
  		About : false,
  		WidgetArea : false,
  		Count : 0
  	},

  	/* This makes the pretty little graphic for how long it took. */
  	Make : function() {
  		var str = this.Values.HTML, time = 0, phrase = '';

  		for (i in this.Values.Times) {
  			time = this.Values.Times[i];
  			if (typeof(time) == 'integer' || typeof(time) == 'number') {
  			 	if (time >= this.Values.TimeSpent) {
  					if (time >= 60) {
  						phrase = Math.round(time/60);
  						phrase = phrase +' hour'+ (phrase == 1 ? '' : 's');
  					} else {
  						phrase = time +' minute'+ (time == 1 ? '' : 's');
  					}
  					break;
  				}
  			} else {
  				phrase = 'Too fucking long...';
  			}
  		}

  		str = str.replace(/\%s/g, this.Values.ImagePath.replace(/\%s/g, time)).replace(/\%p/, (this.Values.Format == 'small' ? 'small_' : (this.Values.Format == 'strip' ? 'strip_' : ''))).replace(/\%t/g, phrase + ' - F.A.T. Lab Speed Project');

      var js = document.getElementsByTagName('script'), area = this.FindElement(this.Values.WidgetArea);
      if (!area) {
        var j = 0;
        for (var i=0; i<js.length; i++) {
          if (js[i].src != '' && js[i].src.match(/fffff\.at\/widgets\/speed\-project\/speed\-project\.js/i)) {
            if (j == this.Values.Count) {this.Values.Count++; area = js[i]; break;}
            j++;
          }
        }
      }

      if (area) {
        var box = document.createElement('span');
        box.setAttribute('id', 'speed_project_widget'); box.id = 'speed_project_widget';
        area.parentNode.insertBefore(box, area);
        box.innerHTML = str;
      } else {
        document.write('<span id="speed_project_widget">'+ str +'</span>');
      }
  	},

    /* Get elements by ID */
    FindElement : function() {
      var elms = new Array();
      for (var i = 0; i < arguments.length; i++) {
        var elm = arguments[i];
        if (typeof(elm) == 'string') elm = document.getElementById(elm);
        if (typeof(elm) == 'object') elms.push(elm);
      }
      return (elms.length > 0 ? (elms.length > 1 ? elms : elms[0]) : false);
    }

  };
}