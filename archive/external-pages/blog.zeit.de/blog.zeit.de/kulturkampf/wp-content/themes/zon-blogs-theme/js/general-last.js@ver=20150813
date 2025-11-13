( function( $ ) {
	var dropdown;

	function fixCategoryWidth() {
		var dummy = $( '#cat-width-helper' ),
			label = dropdown.options[ dropdown.selectedIndex ].text;


		dummy.html( label );
		$( dropdown ).width( dummy.width() + 6 );
	}

	$( document ).ready(function() {
		dropdown = document.getElementById( 'cat' );

		// Category Navigation
		if ( dropdown ) {
			fixCategoryWidth();

			dropdown.onchange = function () {
				fixCategoryWidth();
				var href = $( 'link[rel="index"]' ).attr( 'href' );
				window.location.href = href + '?cat=' + this.value;
			};
		}

		// sharing menu
		$( '.js-zb-sharing-menu' ).on( 'click', function() {
			var menu = $( this );
			menu.find( '.zb-sharing-menu__items' ).toggleClass( 'is-expanded' );
			menu.find( '.zb-sharing-menu__title' ).toggleClass( 'is-expanded' );
		});

		$('.entry-content iframe').parent().fitVids( { ignore: '.ad-wrapper iframe' } );
		$('.entry-content object').parent().fitVids( { ignore: '.ad-wrapper object' } );
		$('.teaser-big__entry-content iframe').parent().fitVids( );
		$('.teaser-big__entry-content object').parent().fitVids( );
	});
} )( jQuery );
