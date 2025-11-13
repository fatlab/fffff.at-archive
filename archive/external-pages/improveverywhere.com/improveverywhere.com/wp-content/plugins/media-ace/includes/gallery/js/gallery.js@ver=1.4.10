/* global document */
/* global window */
/* global jQuery */
/* global macegallery */

(function ($) {

    'use strict';

    var config = $.parseJSON(macegallery);
    var template = config.html;
    var sharesTemplate = config.shares;

    var Gallery = function($gallery) {
        var data          = $gallery.attr('data-g1-gallery');
        var galleryId     = $gallery.attr('id');
        var items         = $.parseJSON(data);
        var galleryLength = items.length;
        var imagesLength  = 0;

        items.forEach(function(item) {
            if (item.type === 'image') {
                imagesLength++;
            }
        });

        var galleryTitle = $gallery.attr('data-g1-gallery-title');
        var ShareUrl = $gallery.attr('data-g1-share-shortlink');
        var currentIndex = 0;
        var currentImageIndex = 0;
        var isGalleryVisible = false;
        var currentSidebarCollectionOffset = 0;
        var maxSidebarCollectionOffset = Math.ceil((imagesLength - 9) / 3);
        var html = template;

        var init = function() {
            captureLightbox();
            bindEvents();

            var hash = window.location.hash;

            hash = hash.replace('#','');

            if( hash === galleryId ) {
                $gallery.trigger('click');
            }
        };

        var bindEvents = function() {
            $gallery.on('click', function(){
                var $appendedElements = $(html);

                // Don't load ad until we can check whether the sidebar is visible or not.
                var $sidebarAd = $appendedElements.find('.g1-gallery-sidebar .g1-gallery-ad');
                var sidebarAdHTML = $sidebarAd.html();
                $sidebarAd.html('');

                $appendedElements.appendTo("body");
                $appendedElements.append(buildStyle());
                $('.g1-gallery-thumbnail-1').addClass('g1-gallery-thumbnail-active');
                bindLightboxEvents($appendedElements);
                hideThumbnailsIfTooSmall();
                $('body').addClass('g1-gallery-visible');
                isGalleryVisible = true;
                switchToIndex(0, true);

                // Load ad is the sidebar is visible.
                if ( $sidebarAd.is(':visible') ) {
                    $sidebarAd.html(sidebarAdHTML);
                }
            });
        };

        var bindLightboxEvents = function($appendedElements) {
            $( window ).resize(function() {
                hideThumbnailsIfTooSmall();
            });
            $('.g1-gallery-close-button').on('click', function(){
                $('body').removeClass('g1-gallery-visible');
                setTimeout(function() {
                    setSidebarThumbnailsOffset(0);
                    $appendedElements.remove();
                    currentSidebarCollectionOffset = 0;
                    isGalleryVisible = false;
                }, 375);
            });

            $('.g1-gallery-thumbs-button, .g1-gallery-back-to-slideshow').on('click', function(){
                $appendedElements.toggleClass('g1-gallery-thumbnails-mode');
            });
            $('.g1-gallery-thumbnail').on('click', function(){
                var index = parseInt($(this).attr('data-g1-gallery-index'), 10);
                switchToIndex(index);
            });

            $('.g1-gallery-previous-frame').on('click', function(){
                handlePrevFrame();
            });
            $('.g1-gallery-next-frame').on('click', function(){
                handleNextFrame();
            });

            $(document).keydown(function (e){
                if (isGalleryVisible) {
                    if(e.keyCode == 37){
                        handlePrevFrame();
                    }
                    if(e.keyCode == 39){
                        handleNextFrame();
                    }
                }
            });

            $('.g1-gallery-thumbnails-up').on('click', function(){
                if (currentSidebarCollectionOffset > 0) {
                    setSidebarThumbnailsOffset(currentSidebarCollectionOffset-1);
                }
            });
            $('.g1-gallery-thumbnails-down').on('click', function(){
                if (currentSidebarCollectionOffset < maxSidebarCollectionOffset) {
                    setSidebarThumbnailsOffset(currentSidebarCollectionOffset+1);
                }
            });
        };

        var hideThumbnailsIfTooSmall = function() {
            $('.g1-gallery-thumbnails').show();
            if($('.g1-gallery-thumbnails').height() < 200){
                $('.g1-gallery-thumbnails').hide();
            }
        };

        var handleNextFrame = function() {
            if (currentIndex === galleryLength - 1){
                return;
            }

            switchToIndex(currentIndex + 1);
        };

        var handlePrevFrame = function () {
            if (currentIndex === 0){
                return;
            }

            switchToIndex(currentIndex - 1);
        };

        var switchToIndex = function(index, delay){
            var item = items[index];
            currentIndex = index;

            updateImageIndex();

            $('.g1-gallery-frame-visible').removeClass('g1-gallery-frame-visible');
            $('.g1-gallery-wrapper').removeClass('g1-gallery-ad-mode');

            if (item.type === 'image') {
                $('.g1-gallery-thumbnail').removeClass('g1-gallery-thumbnail-active');
                $('.g1-gallery-thumbnail-' + currentIndex).addClass('g1-gallery-thumbnail-active');
                $('.g1-gallery-frame-' + currentIndex).addClass('g1-gallery-frame-visible');
                $('.g1-gallery-wrapper').removeClass('g1-gallery-thumbnails-mode');
                $('.g1-gallery-numerator-current').html(currentImageIndex);

                var imageUrl = $('.g1-gallery-frame-visible').attr('data-g1-share-image');

                // Check why calling setupShares() affects slide switching speed.
                if (delay) {
                    setTimeout(function() {
                        setupShares(imageUrl);
                    }, 500);
                } else {
                    setupShares(imageUrl);
                }

                // set up sidebar thumbs.
                var row = Math.ceil((currentIndex - 1)/3);
                var newOffset = row - 1;
                if (newOffset > maxSidebarCollectionOffset){
                    newOffset = maxSidebarCollectionOffset;
                }
                if (newOffset < 0 ){
                    newOffset = 0;
                }

                setSidebarThumbnailsOffset(newOffset);
            }

            if (item.type === 'ad') {
                var $adFrame = $('.g1-gallery-frame-ad-' + index);

                $('.g1-gallery-frame-' + currentIndex).removeClass('g1-gallery-frame-visible');
                $('.g1-gallery-thumbnail').removeClass('g1-gallery-thumbnail-active');
                $adFrame.addClass('g1-gallery-frame-visible');
                $('.g1-gallery-wrapper').addClass('g1-gallery-ad-mode');

                // Ad not loaded?
                if ($adFrame.find('.g1-gallery-ad:not(.g1-ad-loaded)').length > 0) {
                    $adFrame.find('.g1-gallery-ad').append(items[index].html).addClass('g1-ad-loaded');
                }
            }
        };

        var updateImageIndex = function() {
            currentImageIndex = 0;

            for (var index in items) {
                if (items[index].type === 'image') {
                    currentImageIndex++;
                }

                if (index == currentIndex) {
                    break;
                }
            }
        };

        var setupShares = function(imageUrl) {
            var shareHtml = sharesTemplate;
            shareHtml = shareHtml.replace(new RegExp(/mace_replace_shortlink/g), encodeURIComponent(ShareUrl));
            shareHtml = shareHtml.replace(new RegExp(/mace_replace_title/g), encodeURIComponent(galleryTitle));
            shareHtml = shareHtml.replace(new RegExp(/mace_replace_image_url/g), encodeURIComponent(imageUrl));
            shareHtml = shareHtml.replace(new RegExp(/mace_replace_noesc_shortlink/g), ShareUrl);
            shareHtml = shareHtml.replace(new RegExp(/mace_replace_noesc_title/g), galleryTitle);
            shareHtml = shareHtml.replace(new RegExp(/mace_replace_noesc_image_url/g), imageUrl);
            shareHtml = shareHtml.replace(new RegExp(/mace_replace_unique/g), Math.random().toString(36).substr(2, 16));

            $('.g1-gallery-shares').html(shareHtml);

            // Remove this one as it forces entire FB SDK to reload!
            jQuery('body').trigger('maceGalleryItemChanged');
        };

        var setSidebarThumbnailsOffset = function(offset){
            $('.g1-gallery-sidebar .g1-gallery-thumbnail').css('top', offset * - 108);
            currentSidebarCollectionOffset = offset;
        };

        var captureLightbox = function() {
            var frames          = buildFrames();
            var thumbnails      = buildThumbnails('thumbnail');
            var thumbnails32    = buildThumbnails('3-2-thumbnail');
            var numerator       = buildNumerator();
            var title           = galleryTitle;
            html = html.replace( '{frames}', frames);
            html = html.replace( '{thumbnails}', thumbnails);
            html = html.replace( '{thumbnails32}', thumbnails32);
            html = html.replace( '{numerator}', numerator);
            html = html.replace( '{title}', title);
        };

        var buildStyle = function() {
            var out = '<style>';
            items.forEach( function(item) {
                if(item.type === 'image'){
                    out += '.g1-gallery-image-' + item.id + '{ background-image:url(' + item.full +'); }';
                }
            });
            return out;
        };

        var buildFrames = function() {
            var out = '';
            var index = 0;
            items.forEach( function(item) {
                if (item.type === 'image') {
                    out += '<div class="g1-gallery-frame g1-gallery-frame-' + index + '" data-g1-share-image="' + item.full + '">';
                    out += '<div class="g1-gallery-image g1-gallery-image-' + item.id + ' ">';
                    out += '<a class="g1-gallery-previous-frame"></a>';
                    out += '<a class="g1-gallery-next-frame"></a>';
                    out += '</div>';
                    out += '<div class="g1-gallery-image-title">' + item.title + '</div></div>'
                }
                if (item.type === 'ad') {
                    out += '<div class="g1-gallery-frame g1-gallery-frame-' + index + ' g1-gallery-frame-ad g1-gallery-frame-ad-' + index + '">';
                    out += '<div class="g1-gallery-ad">';
                    out += '<a class="g1-gallery-previous-frame"></a>';
                    out += '<a class="g1-gallery-next-frame"></a>';
                    out += '</div></div>';
                }

                index += 1;
            });
            return out;
        };

        var buildThumbnails = function(size) {
            var out = '';
            for (var index in items) {
                var item = items[index];

                if (item.type === 'image') {
                    out += '<div class="g1-gallery-thumbnail g1-gallery-thumbnail-' + index + '" data-g1-gallery-index="' + index + '">';
                    out += '<img src="' + item[size] + '">';
                    out += '</div>';
                }
            }

            return out;
        };

        var buildNumerator = function() {
            return '<span class="g1-gallery-numerator-current">1</span> ' + config.i18n.of + ' <span class="g1-gallery-numerator-max">' + imagesLength + '</span>';
        };

        return init();
    };

    // Fire.
    $(document).ready(function() {
        setupGalleries($('body'));
    });

    $('body').on('g1NewContentLoaded', function( e, $newContent ){
        setupGalleries($newContent);
    });

    var setupGalleries = function($scope) {
        $('.mace-gallery-teaser', $scope).each(function() {
            new Gallery($(this));
        });
    };

})(jQuery);
