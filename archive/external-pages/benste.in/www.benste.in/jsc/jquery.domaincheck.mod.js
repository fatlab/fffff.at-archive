$(document).ready(function() {
	if($(this).val() == '') {
		$(this).val(($(this).attr('placeholder')) ? $(this).attr('placeholder') : 'mustermann.de');
	}
	$('.domaincheck.control textarea').focusout(function() {
		if($(this).val() == '') {
			$(this).val(($(this).attr('placeholder')) ? $(this).attr('placeholder') : 'mustermann.de');
		}
	});
	$('.domaincheck.control textarea').focusin(function() {
		if($(this).val() == 'mustermann.de' || $(this).val() == $(this).attr('placeholder')) {
			$(this).val('');
		}
	});
	
	$('.domaincheck.control textarea').bind('keyup keydown keypress', function(e) {
		var container = $(this).closest('.domaincheck');
		var value 	  = $(this).val();
		var lines 	  = value.match(/[^\n]*\n[^\n]*/gi);
		var checktype = $('.type li.active a', container).attr('href');
		
		if((e.which == 13 || e.keyCode == 13) && checktype == '#single') {
			e.preventDefault();
			e.stopPropagation();
			$(this).parents('form').submit();
			return;
		}
		
		if(lines == null) return;
		if(lines.length >= 5) {
			$('form .name', container).stop(true, false)
				.css({
					height: 116 + (lines.length - 4) * 20
				});
			$('textarea', container).css('height', (100 + (lines.length - 4) * 20) + 'px');
		} else if(lines.length <= 5) {
			$('form .name', container).stop(true, false)
				.css({
					height: 116
				});
			$('textarea', container).css('height', '100%');
		}
	});
	
	$('.domaincheck.control form .name a.clear').click(function(e) {
		var container = $(this).closest('.name');
		$('textarea', container).val('').focus();
		e.preventDefault();
	});
	
	$('.domaincheck.control .type a[href]').click(function(e) {
		var container = $(this).closest('.domaincheck');
		var action 		= $('form', container).attr('action');
		var checktype	= 'single';

		e.preventDefault();
		e.stopPropagation();
		
		$('.type li', container).each(function() {
			$(this).removeClass('active');
			$('a .sprite', this).removeClass('active');
		});
		
		if($(this).attr('href') == '#single') {
			checktype = 'single';
			action = action.replace(/\/multicheck\//i, '/suchen/');
		} else if($(this).attr('href') == '#multi') {
			checktype = 'multi';
			action = action.replace(/\/suchen\//i, '/multicheck/');
		}
		
		switch(checktype) {
			case 'single':
				var value = $('textarea', container).val().split("\n", 2);
				if (value[0] != undefined) {
					$('textarea', container).val(value[0]);
				}
				
				$('.name', container)
					.animate({
						height: 25
					}, 'fast', 'swing', function() {
						$(this)
							.removeClass('multi');
						$('textarea', this).css('height', '25px');
					});
				break;
			case 'multi':
				$('.name', container)
					.addClass('multi')
					.animate({
						height: 116
					}, 'fast', 'swing', function() {
						$('textarea', container).css('height', '100%');
					});
				break;
		}
		
		$(this).closest('li').addClass('active');
		$('.sprite', this).addClass('active');
		
		$('form', container).attr('action', action);
	});
	
	$('.domaincheck.control form button').hover(
		function() {
			$(this).addClass('hover');
		},
		function() {
			$(this).removeClass('hover');
		}
	);
	
	$('.domaincheck.control .dropdown > a[href="#dropdown"]').click(function(e) {
		var container = $(this).closest('.domaincheck.control');
		var list = $('.dropdown > ul', container);
		var self = this;
		
		e.preventDefault();
		e.stopPropagation();
		
		if (list.data('state') == 'expanded') {
			list.animate({
				height: 0
			}, 'fast', 'swing', function() {
				list.addClass('hidden');
				list.css({
					'display': 'none',
					'height': '0px'
				});
				
				$(self).removeClass('selected');
			});
			list.data('state', 'collapsed');
		} else {
			list.css({ height: 0 }).show();
			list.removeClass('hidden');
			list.animate({
				height: '183px'
			}, 'fast', 'swing');
			$(self).addClass('selected');
			list.data('state', 'expanded');
		}
	});
	
	$('.domaincheck.control .dropdown ul > li > a').hover(function() {
		$(this).addClass('hover');
	}, function() {
		$(this).removeClass('hover');
	});
	
	$('.domaincheck.control .dropdown ul > li > a').click(function(e) {
		var container = $(this).closest('.domaincheck.control');
		var dropdown = $('.dropdown', container);

		e.preventDefault();
		e.stopPropagation();
		
		$('.value', dropdown).html($(this).html());
		
		$('ul li', dropdown).removeClass('selected');
		$(this).closest('li').addClass('selected');
		
		if ($('ul', dropdown).data('state') == 'expanded') {
			$('a:first', dropdown).click();
		}
		
		$('form > :input[name="domain_check[category]"]', container).val($(this).attr('rel'));
	});
	
	$('body').click(function() {
		var dropdown = $('.domaincheck.control .dropdown');
		var list = $('ul', dropdown);
		
		$(list).each(function(e) {
			if ($(this).data('state') == 'expanded') {
				$('a:first', dropdown).click();
			}
		});
	});
	
	$('.domaincheck.control .dropdown > ul').data('state', 'collapsed');
	$('.domaincheck.control .dropdown > ul li:first a').click();
	
	
	/*
	 * from /domains/suchen/index.php  
	 */
	$("table.domaincheck tbody").append($("tr.error:not(.fixed)"));
	
	$("table.domaincheck tbody tr").click(function() {
		if(!$(this).hasClass("finished")) return;
		
		var elem = $("td:first input[type=checkbox]", this);
		
		if(elem.length == 0) return;
		
		if(elem.is(":checked") == true) {
			elem.removeAttr("checked");
		} else {
			elem.attr("checked", "checked");
		}
		elem.change();
		
		var field = $("input[name*=domain-tld]", this).val();
		
		if($(":input[name^='stat_domain']", this).val() == "false" && 
		   $(":input[name^='domain_'][name$='_domain_status']", this).val() != "reg") {
			deactivate_background();
		}
		
		addDomainToCart(this);
		
		return false;
	});
	
	$("table.domaincheck tbody tr td a").click(function(e) {
		e.stopPropagation();
	});
	
	$("table.domaincheck td.status > .assigned").click(function(eventObject) {
		var whoisWindowWidth = 660;
		var whoisWindowHeight = 600;
		
		var left = screen.width / 2 - whoisWindowWidth / 2;
		var top = screen.height / 2 - whoisWindowHeight / 2;
		
		var whoisWindow = window.open("/domains/suchen/whois/?Domain=" + $("input[id^=domain_]:first", $(this).parents("tr")).val(), "whoisWindow", "width=" + whoisWindowWidth + ",height=" + whoisWindowHeight + ",left=" + left + ",top=" + top + ",scrollbars=yes");
		whoisWindow.focus();
		
		eventObject.preventDefault();
		eventObject.stopPropagation();
	});

	$("input[type=checkbox]").change(function() {
		var tr = $(this).parents("tr");
		
		if($(this).is(":checked") == true) {
			$(tr).css("background-color", "#f8ffe3");
			$("td.check > img.inactive", tr).addClass("ui-helper-hidden");
			$("td.check > img.active", tr).removeClass("ui-helper-hidden");
		} else {
			$(tr).css("background-color", "");
			$("td.check > img.inactive", tr).removeClass("ui-helper-hidden");
			$("td.check > img.active", tr).addClass("ui-helper-hidden");
		}
	});
	
	setTimeout(function() {
		checkDomains();
	}, 100);
	
});


// - normal domaincheck
// DELETE: 08.12.2011 Der komplette Block kann wohl bald gel�scht werden 
/*
 * Benjamin - 08.12.2011 - Rausgenommen, da ich denke, dass dies nicht mehr 
 * 						   ben�tigt wird. Sollten Fehler auftauchen sind eh die 
 * 						   neuen Funktionen zu benutzen
domaincheck = new Function('var1, var2, var3, filename', ' $.post(filename, { Domain_Name: var1, Domain_Typ: var2, search_type: var3 } , function(data) { $("#search_result").html(data); }); ');

push_domain = new Function('var1, var2, var3, var4, var5, var6, filename', 'runningCount ++; $.post(filename, { Domain_Name: var1, action: var2, domain_status: var3, authcode: var4, recursive: var5, field: var6 } , function(data) { $("#warenkorb_ajax").html(data); runningCount --; reloadCart("/order/cart.php", "header"); if(shouldSubmit) checkSubmitForm(); }, "html"); ');
*/
function reloadCart(filename) {
	var type = 'header';
	var cart = $('.sidebar .cart.container');
	
	if ( arguments.length > 1 ) {
		type = arguments[1];
	}
	
	if (type == 'sidebar' && cart.length == 0) {
		return;
	}
	
	$.post(
		filename , 
		{ ajaxchange: "true", carttype: type }, 
		function(html) {
			switch (type) {
				case 'header':
					if(html.length == 0 || html == undefined) {
						$("#wrapper > .head ul.sub li.cart").fadeOut('fast', function() {
							$(this).remove();
							$("#wrapper > .head ul.sub").removeClass('cart');
						});
					} else {
						if ($("#wrapper > .head ul.sub li.cart").length > 0) {
							$("#wrapper > .head ul.sub li.cart").replaceWith(html);
						} else {
							$("#wrapper > .head ul.sub")
								.addClass('cart')
								.prepend(html)
									.find("li.cart").addClass('ui-helper-hidden')
									.fadeIn('fast');
						}
					}
					break;
					
				case 'sidebar':					
					cart.html(html);
					break;
			}
		},
		'html'
	);
}

function pushDomain(var1, var2, var3, var4, var5, var6, filename) {
	runningCount ++; 
	
	$.post(
		filename,
		{ Domain_Name: var1, action: var2, domain_status: var3, authcode: var4, recursive: var5, field: var6 }, 
		function(data) { 
			switch(data["func"]) {
				case "domainlock":
					call_dcheck_div("domainlock", data["domain_lock"],  data["domain_status"], data["domain_field"]);
					break;
				case "domainauthcode":
					call_dcheck_div("domainauthcode", data["domain_auth"],  data["domain_status"], data["domain_field"]);
					break;
				case "domainpt":
					call_dcheck_div("domainpt", data["domain_name"],  data["domain_status"], data["domain_field"]);
					break;
				case "domainfr":
					call_dcheck_div("domainfr", data["domain_name"],  data["domain_status"], data["domain_field"]);
					break;
				case "kk_over_nic":
					call_dcheck_div("kk_only", data["domain_kk_nic"],  data["domain_status"], data["domain_field"]);
					break;
				case "kk_only":
					call_dcheck_div("kk_only", data["domain_kk"],  data["domain_status"], data["domain_field"]);
					break;
				case "reactivate":
					reactivate_background();
					break;
			}
			
			runningCount --; 
			reloadCart("/order/cart.php", "header");
			reloadCart("/order/cart.php", "sidebar");
			
			if(shouldSubmit) checkSubmitForm(); 
		}, 
		"json"
	);
	
}

// DELETE: 08.12.2011 Der komplette Block kann wohl bald gel�scht werden 
/*
 * Benjamin - 08.12.2011 - Rausgenommen, da ich denke, dass dies nicht mehr 
 * 						   ben�tigt wird. Sollten Fehler auftauchen sind eh die 
 * 						   neuen Funktionen zu benutzen
function start_wait_animation(){
	var waiting_animation = '<div class="domaincheck-laeuft" id="wait"><img src="/images/domaincheck/domaincheck_statusbalken.gif" class="domaincheck-laeuft-balken"><div style="margin-top: 35px; text-align:center;"><img src="/images/icons/grey_arrow.gif"><span style="color: #868f98;">Folgende ' + mytldcount + ' Domainendungen werden aktuell gepr�ft: <br />' + mytldwhichgetchecked + '</span></div></div>';
	document.getElementById("search_result").innerHTML = waiting_animation;
}

function add_Domain_to_Cart(field){
	
	var el_stat = "#stat_" + field;
	var el = "#" + field;
	var el_domain_status = "#" + field + "_domain_status";
	var td_el = "#td_order_" + field;
	
	if($(el_stat).val() == "true"){
		// DELETE DOMAIN
		push_domain($(el).val(), "delete", $(el_domain_status).val(), "", "false", field, '/domains/suchen/ajaxaddcard.php');
		reloadCart("/order/cart.php", "header");
		
		var picture = document.images[field].src;
		
		if(picture.match("icon_order_active.gif")){
			document.images[field].src = "/images/domaincheck/icon_order.gif";
			$(td_el).css("background-color", "#38b130");
		}else{
			document.images[field].src = "/images/domaincheck/icon_transfer.gif";
			$(td_el).css("background-color", "#8a959b");
		}
		$(el_stat).val("false");
		
	}else{
		// ADD DOMAIN
		push_domain($(el).val(), "add", $(el_domain_status).val(), "", "false", field, '/domains/suchen/ajaxaddcard.php');
		reloadCart("/order/cart.php", "header");
		
		var picture = document.images[field].src;
		
		if(picture.match("icon_order.gif")){
			document.images[field].src = "/images/domaincheck/icon_order_active.gif";
			$(td_el).css("background-color", "#399239"); 
		}else{
			document.images[field].src = "/images/domaincheck/icon_transfer_active.gif";
			$(td_el).css("background-color", "#748086");
		}
		$(el_stat).val("true");
	}
}
*/

function addDomainToCart(field) 
{
	var domain = '';
	var status = '';
	var elementStatus = null;
	
	// Dieser Funktion kann ein Element oder ein Selector �bergeben werden
	if (typeof(field) != 'string') {
		domain = $(':input[name^="domain_"]:not(:input[name$="_status"])', field).val();
		status = $(':input[name^="domain_"][name$="_domain_status"]', field).val();
		
		elementStatus = $(':input[name^="stat_"]', field);
		field = $(field).attr('name');
	} else {
		var el = "#" + field;
		var el_domain_status = "#" + field + "_domain_status";
		var td_el = "#td_order_" + field;	
		
		elementStatus = $("#stat_" + field);
		domain = $(el).val();
		status = $(el_domain_status).val();
	}
	
	
	if (elementStatus.val() == "true") {
		// Domain l�schen
		pushDomain(domain, "delete", status, "", "false", field, '/domains/suchen/ajaxaddcard.php');
		elementStatus.val("false");
	} else {
		// Domain dem Warenkorb hinzuf�gen
		pushDomain(domain, "add", status, "", "false", field, '/domains/suchen/ajaxaddcard.php');
		elementStatus.val("true");
	}
}

function call_dcheck_div(div_id, domain_name, domain_status, field){
	var div_el = "#" + div_id;
	
	deactivate_background();
	
	if(div_id == "domainpt"){
	
		//$("#domain_name_domainpt_text").html(domain_name);
		$("#domainpt_domain_name").val(unescape(domain_name));
		$("#domainpt_domain_status").val(domain_status);
		$("#domainpt_field").val(field);
		
	}else if(div_id == "domainfr"){
	
		$("#domain_name_domainfr_text").html(unescape(domain_name));
		$("#domainfr_domain_name").val(unescape(domain_name));
		$("#domainfr_domain_status").val(domain_status);
		$("#domainfr_field").val(field);
		
	}else if(div_id == "domainlock"){
	
		$("#domain_name_domainlock_text").html(unescape(domain_name));
		$("#domainlock_domain_name").val(unescape(domain_name));
		$("#domainlock_domain_status").val(domain_status);
		$("#domainlock_field").val(field);
		
	}else if(div_id == "domainauthcode"){
	
		//$("#domain_name").html(domain_name);
		$("#domain_name_authcode_text").html(unescape(domain_name));
		$("#authcode_domain_name").val(unescape(domain_name));
		$("#authcode_domain_status").val(domain_status);
		$("#domainauthcode_field").val(field);
		
	}else if(div_id == "kk_over_nic"){
	
		$("#domain_name_kk_over_nic_text").html(unescape(domain_name));
		$("#kk_over_nic_domain_name").val(unescape(domain_name));
		$("#kk_over_nic_domain_status").val(domain_status);
		$("#kk_over_nic_field").val(field);
		
	}else if(div_id == "kk_only"){
	
		$("#domain_name_kk_only_text").html(unescape(domain_name));
		$("#kk_only_domain_name").val(unescape(domain_name));
		$("#kk_only_domain_status").val(domain_status);
		$("#kk_only_field").val(field);
		
	}
	
	var a = 0;
	if(window.innerHeight) {
		a = window.innerHeight;
	} else if(document.body && document.body.clientHeight) {
		if((document.body.clientHeight == document.body.offsetHeight) && (document.documentElement.clientHeight)) {
			a = document.documentElement.clientHeight;
		} else {
			a = document.body.clientHeight;
		}
	}

	var b = 0;
	if(self.pageYOffset) {
		b = self.pageYOffset;
	}else if(document.documentElement && document.documentElement.scrollTop) {
		b = document.documentElement.scrollTop;
	} else if (document.body) {
		b = document.body.scrollTop;
	}

	var c = 0;
	if(window.innerWidth) {
		c = window.innerWidth;
	} else if(document.body && document.body.clientWidth) {
		if((document.body.clientWidth == document.body.offsetWidth) && (document.documentElement.clientWidth)) {
			c = document.documentElement.clientWidth;
		} else {
			c = document.body.clientWidth;
		}
	}

	var d = 0;
	if(self.pageXOffset) {
		d = self.pageXOffset;
	}else if(document.documentElement && document.documentElement.scrollLeft) {
		d = document.documentElement.scrollLeft;
	} else if (document.body) {
		d = document.body.scrollLeft;
	}
	
	var left_div = parseInt(((c / 2) + d) - (parseInt($(div_el).width() / 2)));
	var top_div = parseInt(((a / 2) + b) - (parseInt($(div_el).css("height")) / 2));
	
	$(div_el).appendTo('body')
			 .css("left", left_div + "px")
			 .css("top", top_div + "px")
			 .css("position", "absolute");
	
	$(div_el).show();
}

function save_domainlock(){
	$("#domainlock").hide();

	reactivate_background();
	reloadCart("/order/cart.php", "header");
	reloadCart("/order/cart.php", "sidebar");
	
	return false;
}

function save_domainpt(){
	$("#domainpt").hide();

	reactivate_background();
	reloadCart("/order/cart.php", "header");
	reloadCart("/order/cart.php", "sidebar");
	
	return false;
}

function save_domainfr(){
	$("#domainfr").hide();
	reactivate_background();
	reloadCart("/order/cart.php", "header");
	reloadCart("/order/cart.php", "sidebar");
	
	return false;
}

function save_authcode_to_domain(){

	var el = "#authcode_domain_name";
	var el_domain_status = "#authcode_domain_status";
	var field = $("#domainauthcode_field").val();

	var authcode = $("#domain_name_authcode").val();
	var agreement = $("#domain_name_authcode_agree").is(":checked");
	
	if((authcode.length > 0) && (agreement == true)) {
		pushDomain($(el).val(), "add", $(el_domain_status).val(), authcode, "true", field, '/domains/suchen/ajaxaddcard.php');
		
		$("#domain_name_authcode").css("background-color","white");
		$("#domain_name_authcode").css("color","black");
		$("#domain_name_authcode_agree").removeAttr("checked");
		$("#domain_name_authcode").val("");
		$("#domainauthcode").hide();
	}else{
		if(authcode.length == 0){
			$("#domain_name_authcode").focus();
			$("#domain_name_authcode").css("background-color","red");
			$("#domain_name_authcode").css("color","white");
			return false;
		}else if(agreement != true){
			$("#domain_name_authcode_agree").focus();
			$("#domain_name_authcode_agree").css("border-color","red");
			return false;
		}
	}

	reactivate_background();
	
	return false;
}

function save_transfer_agree_to_domain(){
	
	var el = "#kk_over_nic_domain_name";
	var el_domain_status = "#kk_over_nic_domain_status";
	var field = $("#kk_over_nic_field").val();

	var agreement = $("#domain_name_kk_over_nic_agree").is(":checked");
	
	if(agreement == true){
		pushDomain($(el).val(), "add", $(el_domain_status).val(), "", "true", field, '/domains/suchen/ajaxaddcard.php');
		
		$("#domain_name_kk_over_nic_agree").removeAttr("checked");
		$("#kk_over_nic").hide();

	}else{
		$("#domain_name_kk_over_nic_agree").focus();
		$("#domain_name_kk_over_nic_agree").css("border-color","red");
	}

	reactivate_background();
	
	return false;
}

function save_only_kk_to_domain(){

	var el = "#kk_only_domain_name";
	var el_domain_status = "#kk_only_domain_status";
	var field = $("#kk_only_field").val();

	var agreement = $("#domain_name_kk_only_agree").is(":checked");
	
	if(agreement == true){
		pushDomain($(el).val(), "add", $(el_domain_status).val(), "", "true", field, '/domains/suchen/ajaxaddcard.php');
	
		$("#domain_name_kk_only_agree").removeAttr("checked");
		$("#kk_only").hide();
	}else{
		$("#domain_name_kk_only_agree").focus();
		$("#domain_name_kk_only_agree").css("border-color","red");
	}

	reactivate_background();
	
	return false;
}

/*
function close_and_delete(div_id){

	//domain_field_id extracting
	var field_name = "#" + div_id + "_field";
	var field = $(field_name).val();
	
	var el_stat = "#stat_" + field;
	var el = "#" + field;
	var el_domain_status = "#" + field + "_domain_status";
	var td_el = "#td_order_" + field;
	
	// BUTTON ZUR�CKSETZEN UND DOMAIN AUS CART L�SCHEN
	push_domain($(el).val(), "delete", $(el_domain_status).val(), "","false", field, '/domains/suchen/ajaxaddcard.php');
	
	var picture = document.images[field].src;
	if(picture.match("icon_order_active.gif")){
		document.images[field].src = "/images/domaincheck/icon_order.gif";
		$(td_el).css("background-color", "#38b130");
	}else{
		document.images[field].src = "/images/domaincheck/icon_transfer.gif";
		$(td_el).css("background-color", "#8a959b");
	}
	$(el_stat).val("false");
	
	// div schlie�en
	var div = "#" + div_id;
	$(div).hide();
	reactivate_background();
	reloadCart("/order/cart.php", "header");
	
	return false;
}
*/

function closeAndDelete(div_id){

	//domain_field_id extracting
	var field_name = "#" + div_id + "_field";
	var field = $(field_name).val();
	
	var el_stat = "#stat_" + field;
	var el = "#" + field;
	var el_domain_status = "#" + field + "_domain_status";
	var td_el = "#td_order_" + field;
	
	// BUTTON ZUR�CKSETZEN UND DOMAIN AUS CART L�SCHEN 
	pushDomain($(el).val(), "delete", $(el_domain_status).val(), "","false", field, '/domains/suchen/ajaxaddcard.php');
	
	$(el_stat).val("false");
	$("input[type=checkbox]", $(td_el)).removeAttr("checked").change();
	
	// div schlie�en
	var div = "#" + div_id;
	$(div).hide();
	
	reactivate_background();
	
	return false;
}


/**
 * functions from /domains/suchen/index.php 
 */
function checkDomains() {
	// Gruppendaten sammeln und per Ajax abschicken
	var data = new Object();
	var rowData = new Array();
	var tr = null;
	
	for(var g = 1; g < 3; g ++) {
		data.rows = new Array();
		
		if($("table.domaincheck tbody tr.group" + g + ".checked:not(.domain.finished, .domain.error)").length > 0) continue;
		
		$("table.domaincheck tbody tr.group" + g + ":not(.checked)").each(function(i, element) {
			if($(element).hasClass("checked")) return true;
			
			var tld = $("input[name*='domain-tld']", element).val();
			var sld_element = $("#domain_" + tld.replace(/\./g, "_"), element);
			var sld = '';
			
			if (sld_element.length == 0) {
				// Multicheck
				sld_element = $(":input[name=domain_" + tld.replace(/\./g, "_") + "]:not(:input[name$='_domain_status'])", element);
				sld = sld_element.val().split(".")[0];
			} else {
				// Domaincheck
				sld = sld_element.val().split(".")[0];
			}
			
			data.rows.push({
				"domain": sld,
				"tld": tld
			});
			rowData.push(element);
			
			checkCount ++;
			
			$("td.status > img.loading", element)
				.css("display", "");
				
			$(element).addClass("checked");
			tr = element;
			
			if(i >= Math.floor(mytldcount / 3)) return false;
		});
		
		if(data.rows.length > 0) {
			var xmlHttpRequestObj = $.ajax({
				type: "POST",
				timeout: 40000,
				url: "/domains/suchen/ajax-domaincheck.php",
				data: { "action": "group", "data": data, "id": checkId },
				success: function(json) {
					if(json.rows) {
						for(var r = 0; r < json.rows.length; r ++) {
							var row = json.rows[r];
							var tld = row["tld"].replace(/\./g, "_");
							var currentTableRow = $(":input[name=domain_name][value=\"" + row['sld'] + '.' + row['tld'] + "\"]").parents("tr");
							
							$("td.status > img.loading", currentTableRow)
								.css("display", "none");
							
							updateDomainRow(currentTableRow, row["tld"], row);
						}
					}
				},
				dataType: "json",
				error: function(XMLHttpRequest, textStatus, errorThrown) {
					for(var i = 0; i < rowData.length; i ++) {
						ajaxError(rowData[i], XMLHttpRequest, textStatus, errorThrown);
					}
				}
			});
			
			xobj.push(xmlHttpRequestObj);
		}
	}
	
	$("table.domaincheck tbody tr.single:not(.checked):not(.noaction)").each(function(i, tr) {
		if($(tr).hasClass("checked")) return true;
		
		var tld = $("input[name*=\"domain-tld\"]", tr).val();
		
		$("td.status > img.loading", tr)
			.css("display", "");
		
		$(tr).addClass("checked");
		
		var xmlHttpRequestObj = $.ajax({
			type: "POST",
			timeout: 60000,
			url: "/domains/suchen/ajax-domaincheck.php",
			data: {"domain": "' . $domain['sld'] . '", "tld": tld, "id": checkId},
			success: function(json) {
				$("td.status > img.loading", tr)
					.css("display", "none");
					
				updateDomainRow(tr, tld, json);
			},
			dataType: "json",
			error: function(XMLHttpRequest, textStatus, errorThrown) {
				ajaxError(tr, XMLHttpRequest, textStatus, errorThrown);
			}
		});
		
		xobj.push(xmlHttpRequestObj);
		
		checkCount ++;
		if(checkCount - finishedCount > 1) {
			return false;
		}
	});
}

function ajaxError(tr, XMLHttpRequest, textStatus, errorThrown) {
	$("td.status > img.loading", tr)
		.css("display", "none");
		
	if(formSubmitted) {
		$("td:gt(0)", tr).html("").attr("align", "center");
	} else {
		$("td:gt(3)", tr).html("").attr("align", "center");
		
		$("td.status > .error", tr)
			.removeClass("ui-helper-hidden");
		
		if(!$(tr).hasClass("fixed")) {
			$(tr).parent("tbody").append(tr);
			$(tr).addClass("error");
		}
	}
					
	$(tr).addClass("checked");
	reportFinished();
}

function updateDomainRow(tr, tld, json) {
	if(json) {
		/* Benjamin - 08.12.2011 - Auskommentiert. Bitte unbedingt dran denken, 
		 * 						   dass dies wenn es zu Testzwecken einkommentiert
		 * 						   wird auch wieder rausgenommen wird.
		if(json["fpp"] && IS_VISIUM_INTERN == true) {
			alert("drin");
			$("body").append('<div style=\"text-align: left; background-color: #f7d5d5;\"><h2>' + json["sld"] + '.' + json["tld"] + '<\/h2><pre>' + json["fpp"] + '</pre><\/div>');
		}
		*/
		if(json["isPreregPhase"] && json["status"] != "error") {
			$("td.status > .prereg", tr)
				.css("display", "");
			$("input[name*=domain_" + tld.replace(/\./g, "_") + "_domain_status]").val("reg");
		} else {
			var $tbody = $(tr).parent("tbody");
			
			switch(json["status"]) {
				case "free":
				case "pending":
				case "private":
					if(json["status"] == "private") {
						$("td.status > .private", tr)
							.removeClass("ui-helper-hidden");
					} else {
						$("td.status > .free", tr)
							.removeClass("ui-helper-hidden");
					}
					
					// Domainregistrierungspreis sichtbar machen
					$(".normal", tr).removeClass("ui-helper-hidden");
					
					if(!$(tr).hasClass("fixed")) {
						var tldPosition = jQuery.inArray(tld, tldorder);
						if(tldPosition > -1) {
							var $tr = null;
							var $newTr = null;
							
							if($tbody.find(".head.additional").length > 0) {
								$tr = $tbody.find(".head.additional").nextAll(".available");
							} else {
								$tr = $tbody.find("tr.available");
							}
							
							$tr.each(function(index, elem) {
								var newTld = $(elem).find("input[name*=domain-tld]").val();
								if(jQuery.inArray(newTld, tldorder) > tldPosition) {
									$newTr = $(elem);
									return false;
								}
							});
							
							if($newTr != null) {
								$newTr.before(tr);
							}
						}
						
						if(!$newTr) {
							if($tbody.find("tr.additional").length > 0) {
								$tbody.find("tr.additional").after(tr);
							} else {
								if($tbody.find("tr.available").length > 0) {
									$tbody.find("tr.available:last").after(tr);
								} else {
									$tbody.prepend(tr);
								}
							}
						}
					}
					$(tr).addClass("available");
					
					break;
					
				case "assigned":
					if(json["isCustomerDomain"]) {
						$("td:gt(3)", tr).html("").attr("align", "center");
					}
					$("td.status > .assigned", tr)
						.removeClass("ui-helper-hidden");
					$("input[name*=domain_" + tld.replace(/\./g, "_") + "_domain_status]", tr).val("kk");

					// Transfer Setup Preis sichtbar machen
					$(".transfer", tr).removeClass("ui-helper-hidden");
					
					$("td.check > img.inactive", tr).attr("src", "/images/icons/icon-domaincheck-checkbox-transfer.gif");
					$("td.check > img.active", tr).attr("src", "/images/icons/icon-domaincheck-checkbox-transfer-activ.gif");
					
					$(tr).addClass("assigned");
					
					if(!$(tr).hasClass("fixed")) {
						if($tbody.find("tr.error:not(.fixed)").length > 0) {
							$tbody.find("tr.error:not(.fixed):first").before(tr);
						} else {
							$tbody.append(tr);
						}
					}
					
					break;
					
				case "error":
				default:
					if(json["errno"] == 10) {
						$("td:gt(4)", tr).remove();
						$("td:eq(4)", tr)
							.attr("colspan", "4")
							.css("text-align", "center")
							.css("vertical-align", "middle")
							.html('<img src="/images/icons/icon-domaincheck-zahlenhinweis.gif" alt="" />'); // changed 11.05.2011 M.S.
					} else {
						$("td:gt(3)", tr).html("").attr("align", "center");
					}
					
					$("td.status > .error", tr)
						.removeClass("ui-helper-hidden");
					$("td:first input[type=checkbox]", tr).remove();
					
					if(!$(tr).hasClass("fixed")) {
						$tbody.append(tr);
						$(tr).addClass("error");
					}
					
					break;
			}
		}
		
		if(json["aktion"]) {
			$("table.domaincheck td.aktion, table.domaincheck th.aktion, table.domaincheck colgroup col.aktion")
				.show()
				.css("visibility", "");
				
			$("td.aktion > div", tr)
				.removeClass("ui-helper-hidden");
			$("td.aktion span.price", tr).html(json["aktion"]["price"]);
			$("td.price", tr).html(json["aktion"]["price"]);
			
			if(json["aktion"]["setup"]) {
				$(".normal:visible, .transfer:visible", tr).html(json["aktion"]["setup"]);
			}
		}
		
		$("input[name=temp]", tr).removeAttr("disabled");
		
		$("a.app-order", tr)
			.css("display", "none");
	} else {
		$("td.status > .error", tr)
			.css("display", "");
	}
	
	$(tr).addClass("finished");
	reportFinished();
}

function reportFinished() {
	finishedCount ++;
	
	if(checkCount - finishedCount < 3) {
		checkDomains();
	}
	if(finishedCount == $("table.domaincheck tbody tr:not(.noaction)").length) {
		$("#domaincheck-text").html("Wir haben folgende Domain/s f�r Sie gepr�ft:");
	}
}

function checkSubmitForm() {
	formSubmitted = true;
	
	if(runningCount != 0) {
		shouldSubmit = true;
		return;
	}
	
	// changed 11.05.2011 M.S. => domainCartCount + packageMinDomainCartCount
	if(($("input[type=checkbox]:checked").length + domainCartCount + packageMinDomainCartCount) > 0) {
		$("table.domaincheck tbody tr:not(.finished):not(.noaction)").each(function(i, tr) {
			$("td:gt(0)", tr).html("").attr("align", "center");
		});
		$("table.domaincheck tbody tr:not(.checked):not(.noaction)")
			.addClass("checked");
		
		for(var i in xobj) {			
			try {
				// Benjamin - 08.12.2011 - Nicht mehr auf den Status gepr�ft. 
				//						   Einfach alle abbrechen die es gibt.
				xobj[i].abort();
			} catch(e) {
			
			}
		}
		
		$("#goto_package_form").submit();
		return true;
	} else {
		alert("Bitte w�hlen Sie mindestens eine Domain aus.");
		formSubmitted = false;
		return false;
	}
}




