/**
 * Reimplements functionality specific to the base theme, Twenty Thirteen, without jQuery.
 * Does not fully reimplement everything, just the portions relevant to the ma.tt theme.
 */

( function () {
	'use strict';

	const nav = document.querySelector( '#site-navigation' );
	const button = nav && nav.querySelector( '.menu-toggle' );
	const menu = nav && nav.querySelector( '.nav-menu' );

	/**
	 * Enables menu toggle for small screens.
	 */
	( function () {
		if ( ! nav || ! button ) {
			return;
		}

		// Hide button if menu is missing or empty.
		if ( ! menu || menu.childElementCount === 0 ) {
			button.style.display = 'none';
			return;
		}

		button.addEventListener( 'click', () => {
			nav.classList.toggle( 'toggled-on' );
			if ( nav.classList.contains( 'toggled-on' ) ) {
				button.setAttribute( 'aria-expanded', 'true' );
				menu.setAttribute( 'aria-expanded', 'true' );
			} else {
				button.setAttribute( 'aria-expanded', 'false' );
				menu.setAttribute( 'aria-expanded', 'false' );
			}
		} );

		// Fix sub-menus for touch devices.
		if ( 'ontouchstart' in window ) {
			const childLinks = menu.querySelectorAll(
				'.menu-item-has-children > a, .page_item_has_children > a'
			);
			childLinks.forEach( ( childLink ) => {
				childLink.addEventListener( 'click', ( e ) => {
					const el = childLink.closest( 'li' );

					if ( el && ! el.classList.contains( 'focus' ) ) {
						e.preventDefault();
						el.classList.add( 'focus' );
						el.parentElement.children.forEach( ( sibling ) => {
							if ( sibling !== el ) {
								sibling.classList.remove( 'focus' );
							}
						} );
					}
				} );
			} );
		}

		// Better focus for hidden submenu items for accessibility.
		const links = menu.querySelectorAll( 'a' );
		links.forEach( ( link ) => {
			const handleFocusChange = () => {
				link.closest( '.menu-item, .page_item' ).classList.toggle( 'focus' );
			};
			link.addEventListener( 'focus', handleFocusChange );
			link.addEventListener( 'blur', handleFocusChange );
		} );
	} )();

	/**
	 * Add or remove ARIA attributes.
	 */
	function onResizeARIA() {
		if ( 643 > window.innerWidth ) {
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );
			button.setAttribute( 'aria-controls', 'primary-menu' );
		} else {
			button.removeAttribute( 'aria-expanded' );
			menu.removeAttribute( 'aria-expanded' );
			button.removeAttribute( 'aria-controls' );
		}
	}

	window.addEventListener( 'load', onResizeARIA );
	window.addEventListener( 'resize', onResizeARIA );
} )();
