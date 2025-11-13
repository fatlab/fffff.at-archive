var vm = {
	cart 			: ko.observableArray($.jStorage.get('amp-cart') || []),
	current_i 		: ko.observable(0),
	current_patron 	: ko.observable(Amp.patron()),
	is_cart_page 	: ko.observable(false),
	skip_hashchange : true
};

function vm_dependencies(){
	
	vm.first_name = ko.dependentObservable(function(){
		if(this.current_patron().first_name)
			return this.current_patron().first_name.substr(0,1).toUpperCase() + this.current_patron().first_name.substr(1);
		return this.current_patron().email.split('@')[0];
	}, vm);

	vm.current_piece = ko.dependentObservable(function(){
		var piece = Amp.show().pieces[this.current_i()];
		if(!this.skip_hashchange){
			window.location.hash = '#' + piece._id;
			Amp.track_event('Movement', 'On Piece - ' + Amp.show().title, piece.title + ' by ' + piece.artist, this.current_i());
		} 
		this.skip_hashchange = false;
		return piece;
	}, vm);
	
	vm.show_title = ko.dependentObservable(function(){
		this.current_i(); // make sure it updates
		return(Amp.show().title);
	},vm);
	
	vm.curator = ko.dependentObservable(function(){
		this.current_i(); // make sure it updates
		return(Amp.show().curator);
	},vm);
	
	// make all the attributes in a piece observable
	var piece_attrs = [	'title', 
						'media',
						'date',
						'artist',
						'dimensions',
						'_id'
						];
	$.each(piece_attrs, function(i, attr){
		if(typeof vm.current_piece()[attr] === 'undefined') return;
		vm['piece_' + attr.replace(/^_/,'')] = ko.dependentObservable(function(){
			return this.current_piece()[attr];
		},vm);
	});
	
	vm.downloads = ko.observableArray([]);
	
	ko.computed(function(){
		if(!this.current_i()) return;
		if(this._this_piece_i == this.current_i()) return;
		
		this._downloads_array_i = this._downloads_array_i || 0;
		if(this._downloads_array_i++ > 5) return; // this is an error
		var me = this;
		function _create_download(piece, z){
			var ret = {};
			var attrs = ['download_urls',
			'download_titles',
			'download_dates',
			'download_thumbs'];
			$.each(attrs, function(i, attr){
				if(typeof z === 'undefined') ret[attr] = piece[attr];
				else ret[attr] = piece[attr][z];
			});
			return ret;
		}
		function _stop_and_reset(){
			me._this_piece_i = me.current_i();
			me._downloads_array_i = 0;
		}
		if(!this.current_piece()['download_titles']){
			_stop_and_reset();
			this.downloads.removeAll();
			
		} else if($.isArray(this.current_piece()['download_titles'])){
			_stop_and_reset();
			var arr = [];
			$.each(this.downloads(), function(i){
				arr.push(_create_download(me.current_piece(), i))
			});
			me.downloads(arr);

		} else {
			_stop_and_reset();
			this.downloads([_create_download(this.current_piece())]);
		}
	}, vm);
	
	vm.open_download = function(){
		window.open(this.download_urls);
	};
	
	vm.piece_artist_bio = ko.dependentObservable(function(){
		var bio = this.current_piece()['artist_bio'];
		if(bio.match(/<p>/)) return bio;
		return "<p>"+bio+"</p>";
	}, vm);

	vm.piece_artist_link = ko.dependentObservable(function(){
		var link = this.current_piece()['artist_website'];
		if(!link) return false;
		if(link.match(/http/)) return link;
		return 'http://' + link;
	}, vm);

	vm.piece_artist_talk = ko.dependentObservable(function(){
		var talk_time = this.current_piece()['artist_talk_datetime'];
		if(!talk_time) return false;
		var d = new Date(talk_time * 1000);
		return "Live Artist Talk - " + d.toLocaleString();
	}, vm);

	vm.piece_description = ko.dependentObservable(function(){
		var bio = this.current_piece()['description'];
		if(bio.match(/<p>/)) return bio;
		return "<p>"+bio+"</p>";
	}, vm);

	vm.piece_total_pledge = ko.dependentObservable(function(){
		$.ajax({
		  url: Amp.public_dbp + '_design/amp/_view/totals-by-piece?stale=ok&key='+encodeURIComponent('["' + Amp.show()._id + '","' + this.piece_id() + '"]'),
		  dataType: 'jsonp',
		  success: function(response) {
			var v = (response.rows[0]) ? response.rows[0].value.toFixed(2) : '0.00';
			$('.total-pledged-value').text('$' + v);
		  }
		});
		return "<span class='total-pledged-value'></span>";
	}, vm);
	
	vm.piece_patrons = ko.dependentObservable(function(){
		if(Amp._piece_patrons_timer) clearInterval(Amp._piece_patrons_timer);
		Amp._piece_patrons       = [];
		$.ajax({
		  url: Amp.public_dbp + '_design/amp/_view/patrons-by-piece?stale=ok&key=%22'+encodeURIComponent(this.piece_id())+'%22',
		  dataType: 'jsonp',
		  success: function(response) {
			if(response.rows.length > 0){
				Amp._piece_patrons = $.map(response.rows, function(item){
					return item.value.public_name;
				});
				function get_patron(){
					if(Amp._piece_patrons.length == 1) return Amp._piece_patrons[0];
					current_patron = $('#piece_patrons').text();
					next_patron = '';
					do{
						next_patron = Amp._piece_patrons[Math.floor(Math.random()*Amp._piece_patrons.length)];
					} while(current_patron == next_patron && current_patron != '')
					return next_patron;
				}
				if($('#piece_patrons').text() == '') $('#piece_patrons').text(get_patron());
				if(Amp._piece_patrons.length == 1) return;
				Amp._piece_patrons_timer = setInterval(function(){
					if(Amp._piece_patrons.length < 1) return;
					$('#piece_patrons').fadeOut('slow', function(){
						if($('#piece_patrons').length > 0)	
							$('#piece_patrons').text(get_patron()).fadeIn('slow');
					});
				},10000);
			}
		  }
		});
		return "<span id='piece_patrons'></span>";
		
	}, vm);

	vm.is_logged_out = ko.dependentObservable(function(){
		return this.current_patron().timestamp < 1;
	}, vm);
	
	vm.is_member = ko.dependentObservable(function(){
		return this.current_patron().is_member;
	}, vm);
	
	vm.show_clean_view = ko.dependentObservable(function(){
		this.current_i(); // make sure it updates
		return(this.is_member() || Amp.show()._id != Amp.current_show_id);
	}, vm);
	
	vm.next_piece = function(){
		if(this.current_i() == Amp.show().pieces.length - 1){
			if(!this.is_cart_page()){
				Amp.verify_user({ action : "on_cart_page"});
				this.is_cart_page(true);
			} 
		} 
		else{
			var new_i = parseInt(this.current_i()) + 1;
			var me = this;
			Renderer.clean_current_piece(function(){
				me.current_i(new_i); 
			});
		} 
	};

	vm.last_piece = function(){
		if(this.is_cart_page()){
			this.is_cart_page(false);
			return;
		}
		if(this.current_i() < 1) window.location.hash = '';
		else {
			var me = this;
			Renderer.clean_current_piece(function(){
				me.current_i(parseInt(me.current_i()) - 1);
			});
		} 
	};

	vm.cart_total = ko.dependentObservable(function(){
		var total = 0.0;
		for(var i in this.cart()){
			var item = this.cart()[i];
			total += parseFloat(item.pledge);
		}
		return total;
	}, vm);

	vm.cart_display = ko.dependentObservable(function(){
		if(parseFloat(this.cart_total()) != parseInt(this.cart_total()))
			return '$' + parseFloat(this.cart_total()).toFixed(2);
		return '$' + parseInt(this.cart_total());
	}, vm);

	vm.bank_total = ko.dependentObservable(function(){
		if(parseFloat(this.current_patron().bank) - this.cart_total() < 0) return 0;
		return parseFloat(this.current_patron().bank) - this.cart_total();
	}, vm);

	vm.bank_display = ko.dependentObservable(function(){
		if(isNaN(this.bank_total())) return '$0';
		if(parseFloat(this.bank_total()) != parseInt(this.bank_total()))
			return '$' + parseFloat(this.bank_total()).toFixed(2);
		return '$' + parseInt(this.bank_total());
	}, vm);

	vm._piece_pledge = function(piece_id){
		for(var i in this.cart()){
			var p = this.cart()[i];
			if(p._id == piece_id){
				return p.pledge;
			}
		}
		return 0;
	};

	vm.piece_pledge = ko.dependentObservable(function(){
		if(this.cart().length == 0) return 0;
		return this._piece_pledge(this.current_piece()._id);
		
	}, vm);

	vm.cart_page = ko.dependentObservable(function(){
		this.cart(); 			// update if cart changes
		this.current_patron(); 	// update if patron changes
		
		Renderer.cart_page(this.is_cart_page());
		if(!this.is_cart_page()) return;
		
		ko.applyBindings(this, document.getElementById('cart_page'));
		
	}, vm);

	vm.handle_pledge = function(pledge, piece_id){

		if(typeof piece_id == 'undefined') piece_id = this.current_piece()._id;
		
		var addIt = true;
		for(var i in this.cart()){
			var p = this.cart()[i];
			if(typeof p != 'undefined' && p._id == piece_id){
				this.cart.remove(p);

				if(p.pledge == pledge || pledge == 0) addIt = false;
			}
		}
		if(addIt){
			this.add_to_cart({ _id : piece_id, pledge : pledge });
			
			Amp.track_event('Pledges', 'Pledge - ' + Amp.find_piece(piece_id).title, Amp.find_piece(piece_id).show, parseInt(pledge*100));
			
			$('div.cart div.pledged div.pledgedLeft a').animate({
				color : 'red'
			}, 2000, function(){
				$(this).animate({
					color : '#666666'
				}, 2000);
			});
			if(!this.is_cart_page()){
				Renderer.flash('$' + pledge.toFixed(2) + ' pledged to ' + Amp.find_piece(piece_id).artist + '. Proceeding to the next piece...');
				setTimeout(function() { vm.next_piece(); }, 500);
			} 
		}
		$.jStorage.set('amp-cart', this.cart.slice(0));
	};
	
	vm.up_pledge = function(piece_id){
		var amounts = Amp.pledge_amounts;
		var piece_pledge = vm._piece_pledge(piece_id);
		var i = $.inArray(piece_pledge, amounts);
		var amount;
		if(i < 0 && piece_pledge > 0){
			for(var z in amounts){
				var a = amounts[z];
				if(a > piece_pledge){
					amount = a;
					break;
				}
			}
		}
		else if(i < 0) amount = amounts[0];
		else if(i == amounts.length - 1) return;
		else amount = amounts[(i + 1)];
		
		vm.handle_pledge(amount, piece_id);
	};
	
	vm.down_pledge = function(piece_id){
		var amounts = Amp.pledge_amounts;
		var piece_pledge = vm._piece_pledge(piece_id);
		var i = $.inArray(piece_pledge, amounts);
		var amount;

		if(i < 0 && piece_pledge > 0){
			var last_amount = 0;
			for(var z in amounts){
				var a = amounts[z];
				if(a > piece_pledge){
					amount = last_amount;
					break;
				}
				last_amount = a;
			}
		}
		else if(i < 0 || i == 0) amount = 0;
		else amount = amounts[(i - 1)];
		
		vm.handle_pledge(amount, piece_id);
	};
	
	vm.add_to_cart = function(item){
		item.pledge = parseFloat(item.pledge);
		this.cart.push(item);
		$.jStorage.set('amp-cart', this.cart.slice(0));
	};
	
	vm.is_in_cart = function(item){
		for(var i in this.cart()){
			if(this.cart()[i]._id == item._id) return true;
		}
		return false;
	};
};