$.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());

function getCookie(c_name)
{
	if (document.cookie.length > 0)
	{
		c_start = document.cookie.indexOf(c_name + "=");

		if (c_start != -1)
		{ 
			c_start = c_start + c_name.length + 1;
			c_end = document.cookie.indexOf(";", c_start);
			
			if (c_end == -1) c_end = document.cookie.length;
			return unescape(document.cookie.substring(c_start, c_end));
		} 
	}
	return 0;
};

function setCookie(c_name,value,expiredays)
{
	var exdate = new Date();
	exdate.setDate(exdate.getDate() + expiredays);
	document.cookie = c_name + "=" + escape(value) +
	((expiredays==null) ? "" : ";expires=" + exdate.toGMTString()) + '; path=/';
};

var show = {};
$(document).ready(function() {
	jQuery('ul.sf-menu').superfish({ autoArrows : false });
	$.ajax({
		url : 'http://cc85a799-d4c3-4735-b348-c61937721886-bluemix.cloudant.com/amp-public/_design/amp/_view/shows?stale=ok&include_docs=true&startkey=[%22'+Amp.current_show_id+'%22]&endkey=[%22'+Amp.current_show_id+'%22,{}]',
		dataType : 'jsonp',
		success : function(resp){
			show = resp.rows[0].doc;
			show.pieces = [];
			var is_random = true;
			for(var i=1;i<resp.rows.length;i++){
				show.pieces.push(resp.rows[i].doc);
				if(resp.rows[i].doc.display_order) is_random = false;
			}
			if(is_random) show.pieces.sort(function() {return 0.5 - Math.random()});
			Amp.show(show);
			vm_dependencies();
			ko.applyBindings(vm);
			
			// do they have items from a previous show
			var ok           = false;
			var today        = new Date;
			var notification = '';
			for(var z in show.pieces){
				if(vm.is_in_cart({ _id : show.pieces[z]._id })) ok = true;
				var piece = show.pieces[z];
				if(piece.artist_talk_datetime){
					var d = new Date(piece.artist_talk_datetime*1000);
					if(d.getDate() == today.getDate()){
						// notification = "Artist Talk with "+piece.artist+" <em>Today</em> @" + d.toLocaleTimeString() + " <a href='/talks'>HERE</a>";
					}
				}
			}
			if(!notification){
				for(var z in show.pieces){
					var piece = show.pieces[z];
					if(piece.artist_talk_datetime){
						var d = new Date(piece.artist_talk_datetime*1000);
						if(d.getDate() == today.getDate() + 1){
							// notification = "Artist Talk with "+piece.artist+" <em>Tomorrow</em> @ " + d.toLocaleTimeString() + " <a href='/talks'>HERE</a>";
						}
					}
				}
				
			}
			if(!ok)	Amp.clear_cart();
			
			Renderer.resize_stage();
			if(notification) Renderer.notify(notification);
			if(typeof Amp.after_load == "function") Amp.after_load();
		}
	});
	
	
	/****************
	 * Login / Signup
	 ******************/

	$('body')
		.delegate('a.signup', 'click', function(){
			if($('#signup_form').is(':visible')){
				Renderer.overlay_clear();
				alert('here');
				return;
			}
			Renderer.signup_form();
		})
		.delegate('a.login', 'click', function(){
			if($('#login_form').is(':visible')){
				Renderer.overlay_clear();
				return;
			}
			Renderer.login_form();
		});
	

	if(window.location.hash == '#fb'){
		window.location.hash = '';
		if(Amp.patron().timestamp > 0) return;
		$.ajax({
			url : '/login',
			type : 'post',
			data : {
				'fb' : true
			},
			dataType : 'json',
			success : function(resp){
				if(resp.ok){
					Amp.patron(resp.user);
				} else {
					alert('something went wrong from FB');
				}
			}
		});
	}

	$('#logout').click(Amp.logout);
	$('#overlay_holder a.close,#overlay_cover').click(Renderer.overlay_clear);
	
	/****************
	 * END -- Login / Signup
	 ******************/
	/*
	$('.banked').click(function(){
		$('.bank-holder').show();
		if(vm.is_logged_out()){
			$('#signup').click();
			Amp.wants_to_bank = true;
		} else {
			if($('#bank_form').is(':visible')){
				Renderer.overlay_clear();
			} else {
				var bank_info = {
					title : "Fill your bank",
					left : "<h2>Why fill my bank ahead of time?</h2><ul>"+
							"<li>Make giving easy! No need to settle up as you go</li>"+
							"<li>Keep better track of your donations</li>"+
							"<li>Bank accounts are stored from show to show for the duration of each Exhibition Round, no need to refill.</li>"+
							"<li>Unused bank accounts will be divided evenly among all the artists at the close of the sixth show.</li></ul>",
					bank_display : vm.bank_display(),
					input_label : vm.bank_total() ? 'add' : 'amount'
				};
				Renderer.overlay_template('bank_form_tmpl',  bank_info, function(){
					$('input[name=bank]').keyup(function(){
						var v = $(this).val();
						var ok = true;
						if(v == '') ok = false;
						var amount = parseFloat(v);
						if(amount < 0 || isNaN(amount)) ok = false;

						if(ok){
							$('#bank_paypal_link').show().attr('href', '/paypal/?cart=' + encodeURIComponent(JSON.stringify({bank : amount, email: Amp.patron().email, show : Amp.show()._id })));
							Renderer.paypal_div("bank_paypal_link");
						} else {
							$('#bank_paypal_link').hide();

						}
					});
				})
			}
		}
	});
	
	if(getCookie('splashed') != 'splashed'){
		setCookie('splashed','splashed',1000);
		Renderer.overlay_template('splash_tmpl', {
			left : "<img src='http://assets.artmicropatronage.org/artmicropatronage/site/img/patronofthearts-banner-become.png' id='become_a_patron' />",
			hide_cancel : true,
			ribbon_height : 290
		});
	}
	*/
	
	$('#main').delegate('a.external-load,input.external-load', 'click', function(){
		if($(this).hasClass('working')) return false;
		var attr = $(this).is('a') ? 'text' : 'val';
		var me = $(this).addClass('working').data('go-back', $(this)[attr]())[attr]('ok...');
		$('body').append($('<div>').hide().load($(this).attr('href'), function(){
			me.removeClass('working')[attr](me.data('go-back'));
		}));
		return false;
	});
	
});
