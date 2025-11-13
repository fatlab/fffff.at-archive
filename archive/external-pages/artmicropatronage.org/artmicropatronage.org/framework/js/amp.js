var Amp = (function(){
	
	function patron_reset(){
		return {
			"first_name" 	: "",
			"bank"			: 0,
			"cart"			: [],
			"timestamp"		: 0,
			"email"			: ''
		};
	}
	
	var _patron = patron_reset();
	var _show;
	var _overlay_locked = false;
	
	function __not_loged_in(){
		return(_patron.timestamp < 1);
	}
	
	function _logout(){
		_patron_reset();
		Renderer.unlock_overlay();
		Renderer.overlay_clear();
		if(typeof Amp.after_logout == 'function') Amp.after_logout();
	}

	// make sure everything is ok with the logged in user
	// handle stale_users
	function _verify_user(opts){
		Amp.verification_opts = opts;
		$.ajax({
			url : '/checkUser',
			type : 'post',
			dataType : 'json',
			data : {
				_id : _patron._id,
				last_action : _patron.last_action,
				action : opts.action
			},
			success: function(response) {
				_handle_user_response(response);
			}
		});
	}

	function _handle_user_response(response){
		if(response.ok){
			if(response.user) gs_patron(response.user);
			if(Amp.verification_opts && Amp.verification_opts.success) Amp.verification_opts.success();
			Amp.verification_opts = null;
			return true;
		} else {
			if(response.error == 'stale_user'){
				var d = {
					title : 'Password Verification',
					left : "<h4>Just to be safe</h4><p>Looks like you’ve been inactive on this computer for a bit.</p>",
					right : "Please verify your password"
				};
				Renderer.overlay_template('password_tmpl', d, function(){
					var incorrect_login = 0;
					Renderer.lock_overlay();
					$('#password_form').submit(function(){
						return false;
					});
					$('input[name=verify]').click(function(){
						if($('#password_form input[name=password]').val() != ''){
							var me = Renderer.disable_button($(this));
							$.ajax({
								url : "/checkUser",
								type : 'post',
								dataType : 'json',
								data : {
									password : $('#password_form input[name=password]').val(),
									_id : Amp.patron()._id
								},
								success : function(response){
									if(response.ok){
										Amp.patron(response.user);
										Renderer.unlock_overlay();
										Renderer.overlay_clear();
										if(Amp.verification_opts && Amp.verification_opts.success) Amp.verification_opts.success();
										Amp.verification_opts = null;
									} else {
										Renderer.error(response.error);
										$('#bank_form input[name=password]').val('');
										incorrect_login++;
										if(incorrect_login > 5){
											 _logout();
										}
									}
									Renderer.enable_button(me);
								}
							});
						}

					})
				});
			} else if(response.error == 'please_login') {
				// _logout();
			} else {
				// _logout();
			}
			return false;
		}
	}
	
	
	var _collection;
	function _fetch_collection(callback){
		if(__not_loged_in()) return;
		
		if(!_collection) _collection = $.jStorage.get('amp-collection');
		if(_collection){
			callback(_collection);
			return;
		} 
		
		$.ajax({
			url : '/myCollection',
			type : 'post',
			dataType : 'json',
			data : {
				_id : _patron._id,
				last_action : _patron.last_action
			},
			success : function(response){
				if(_handle_user_response(response)){
					
					_collection = response.collection;
					$.jStorage.set('amp-collection', _collection);
					callback(_collection);
				} else {
					// callback([]);
				}
			}
		});
	}
	
	function _clear_collection(){
		_collection = null;
		$.jStorage.deleteKey('amp-collection');
	}
	
	var _common_post_opts = {
		type : 'post',
		dataType : 'json',
		beforeSubmit : function(arr){
			arr.push({ name : '_id', value : Amp.patron()._id });
			arr.push({ name : 'last_action', value : Amp.patron().last_action });
		}
	};
	
	var _pledge_amounts = (function(){
		var	__pledge_amounts = [0.5,1,2,5,10,20,30,40,50];
		for(var i = 75; i <= 500; i+=25){
			__pledge_amounts.push(i);
		}
		return __pledge_amounts;
	})();
		
	function _clear_cart(){
		$.jStorage.deleteKey('amp-cart');
		vm.cart([]);
	}
	
	function gs_show(){
		if(arguments.length > 0){
			_show = arguments[0];
		}
		return _show;
	}
	
	function gs_patron(){
		if(arguments.length > 0){
			
			_patron = arguments[0];
			if(typeof vm != 'undefined'){
				vm.current_patron(_patron);
				var incoming_cart = arguments[0].cart;
				var cart_has_been_merged = false;
				for(var i in incoming_cart){
					if(!vm.is_in_cart(incoming_cart[i])){
						vm.add_to_cart(incoming_cart[i]);
						cart_has_been_merged = true;
					}
						
				}
				_patron.cart = vm.cart();
				if(cart_has_been_merged) Renderer.flash("Pledges from a previous session have been added to this one.");
			}
				
			$.jStorage.set('amp-patron', _patron);
		} 
		return _patron;
	}
	gs_patron($.jStorage.get('amp-patron') || patron_reset());
	
	function _patron_reset(){
		gs_patron(patron_reset());
		_clear_collection();
	}
	
	function _piece_by_id(_id){
		for(var z in _show.pieces){
			var piece = _show.pieces[z];
			if(piece._id == _id) return piece;
		}
		return false;
	}
	
	function _update_cart(){
		if(typeof _patron.email == 'undefined' || _patron.email == '') return;
		var c = [];
		for(var i in vm.cart().slice(0)){
			var item = vm.cart().slice(0)[i];
			var piece = _piece_by_id(item._id);
			if(piece !== false)
				c.push({ _id: item._id, pledge: item.pledge, name: piece.artist, description: piece.title });				
		}
		var cart = {
			cart : c,
			email : _patron.email,
			_id : _patron._id,
			show : show.number
		};
		$.ajax({
			type : 'post',
			url : '/cart',
			data : cart,
			dataType : 'json'
		})
	}
	
	var all_the_shows = [];
	function _all_shows(){
		if(all_the_shows.length < 1){
			$.ajax({
				url : 'http://cc85a799-d4c3-4735-b348-c61937721886-bluemix.cloudant.com/amp-public/_design/amp/_view/all-shows?descending=true&include_docs=true&stale=ok',
				dataType : 'jsonp',
				success : function(resp){
					for(var i in resp.rows){
						var show = resp.rows[i];
						all_the_shows.push(show.doc); 
					}
				}
			});
		}
		return all_the_shows;
	}
	
	function _find_piece(piece_id){
		for(var i in _show.pieces){
			if(_show.pieces[i]._id == piece_id){
				_show.pieces[i].i = i;
				return _show.pieces[i];
			} 
		}
		return false;
	}
	
	function _track_event(category, action, label, val, bounceIgnore){
		if(typeof console != 'undefined') console.log(category + '-' + action);
		
		if(typeof _gaq != 'undefined'){ // google track event
			try{
				_gaq.push(['_trackEvent', category, action, label, val, bounceIgnore]);
			} catch(err) { }
		}
	}
	
	// public interface
	return {
		public_db		: 'http://artmicropatronage.org/public/',
		public_dbp		: 'http://cc85a799-d4c3-4735-b348-c61937721886-bluemix.cloudant.com/amp-public/',
		patron 			: gs_patron,
		patron_reset 	: _patron_reset,
		update_cart 	: _update_cart,
		show 			: gs_show,
		find_piece		: _find_piece,
		clear_cart 		: _clear_cart,
		pledge_amounts  : _pledge_amounts,
		common_post_opts: _common_post_opts,
		all_shows		: _all_shows,
		get_collection  : _fetch_collection,
		clear_collection: _clear_collection,
		verify_user		: _verify_user,
		logout			: _logout,
		track_event		: _track_event
	};
})();
