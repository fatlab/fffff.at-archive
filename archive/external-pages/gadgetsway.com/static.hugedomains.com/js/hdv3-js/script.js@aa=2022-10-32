function getFileParam() { 
        jQuery('.errore-f').removeClass('shown');
        jQuery('.img-loading').removeClass('starting');
        jQuery('.preview').removeClass('download');
		try { 				
			var file = document.getElementById('uploaded-file1').files[0]; 				
			
			if (file) { 					
				var fileSize = 0; 					
				
				if (file.size > 1024 * 1024) {
					fileSize = (Math.round(file.size * 100 / (1024 * 1024)) / 100).toString() + 'MB';
				}else {
					fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + 'KB';
				}
					
				
				
				if (/\.(jpe?g|bmp|gif|png)$/i.test(file.name)) {
                    jQuery('.img-loading').addClass('starting');
					var elPreview = document.getElementById('preview1');
					elPreview.innerHTML = '';
					var newImg = document.createElement('img');
					newImg.className = "preview-img";
                    function sayHi() {
                      jQuery('.img-loading').removeClass('starting');
                      jQuery('.preview').addClass('download');
                    }
                    setTimeout(sayHi, 3200);
					if (typeof file.getAsDataURL=='function') {
						if (file.getAsDataURL().substr(0,11)=='data:image/') {
							newImg.onload=function() {
								
							}
							newImg.setAttribute('src',file.getAsDataURL());
							elPreview.appendChild(newImg);								
						}
					}else {
						var reader = new FileReader();
						reader.onloadend = function(evt) {
							if (evt.target.readyState == FileReader.DONE) {
								newImg.onload=function() {
									
								}
							
								newImg.setAttribute('src', evt.target.result);
								elPreview.appendChild(newImg);
							}
						};
						
						var blob;		
						if (file.slice) {
							blob = file.slice(0, file.size);
						}else if (file.webkitSlice) {
								blob = file.webkitSlice(0, file.size);
							}else if (file.mozSlice) {
								blob = file.mozSlice(0, file.size);
							}
						reader.readAsDataURL(blob);
					}
				}else{
                  jQuery('.file-upload-errore').addClass('errored');
                  jQuery('.errore-f').addClass('shown');
                }
			}else{
                  jQuery('.file-upload-errore').addClass('errored');
                  jQuery('.errore-f').addClass('shown');
                }
		}catch(e) {
			
		}
	}

jQuery(document).ready(function () {
  
    $('#file').change(function() {
      $('#file').next().text($('#file')[0].files[0].name);
    });
  
    $(".category-accord-list-wrap-item .category-accord-list-wrap-item-title a").click(function (event) {
        event.preventDefault();
        $(this).parents('.category-accord-list-wrap-item').toggleClass('open');
    });
    
    $(".btn-row button").click(function (event) {
        event.preventDefault();
        $(this).next().addClass('visib');
    });
    
    $('.arrow-to-buttom').on('click', function(){
      $('html, body').animate({
       scrollTop: $(".benefits").offset().top - 74
      }, 900);
    
    });
  
  
  
    let successStoriesSliderItemContentWrap = $('.success-stories-slider-item-content-wrap');
	if(successStoriesSliderItemContentWrap.length){
          function equvalHeight(){
              let maxcolheight = 0; 
              $('.success-stories-slider-item-content-wrap').each(function(){ 
                  if ($(this).outerHeight() > maxcolheight) { 
                      maxcolheight = $(this).outerHeight(); 
                  }
              });

              $('.success-stories-slider-item-content-wrap').css('minHeight', maxcolheight);
            }   
           setTimeout( equvalHeight, 500); 

           $(window).resize(function() {
              let maxcolheight = 0; 
              $('.success-stories-slider-item-content-wrap').each(function(){ 
                  if ($(this).outerHeight() > maxcolheight) { 
                      maxcolheight = $(this).outerHeight(); 
                  }
              });
              $('.success-stories-slider-item-content-wrap').css('minHeight', maxcolheight);
          }); 
       }
  
    //home testimonials slider
     let successSstoriesSlider = $('.success-stories-slider');
      if(successSstoriesSlider.length){
        $('.success-stories-slider').slick({
          infinite: true,
          dots: true,
          arrows: false,
          slidesToShow: 3,
          slidesToScroll: 1,
          responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        slidesToShow: 2
                      }
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 1
                      }
                    }
                  ]
        });
      }
    
    let aosAttr = $('[data-aos]');
    if(aosAttr.length){
      AOS.init();
    }
    
    // mobile menu
    
    jQuery(".nav-link").click(function () {
        elementClick = jQuery(this).attr("href")
        destination = jQuery(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 1100);
        return false;
    });
    jQuery("#navToggle").click(function () {
        jQuery(this).toggleClass("active");
        jQuery(".overlay").toggleClass("open");
        jQuery(".language-selector").toggleClass("visible");
        // this line â–¼ prevents content scroll-behind
        jQuery("body").toggleClass("locked");

        jQuery(".overDrawerLay").toggleClass("open");

/*
        jQuery(".js-overlay-modal").toggleClass("active");
		*/
    });

    function anim() {

        let i = jQuery('.hidden').length;
      //  console.log(i);
        if (i > 0) {
            jQuery('.hidden:first').removeClass('hidden').addClass('scalen');

        } else {

            jQuery('.scalen').removeClass('scalen').addClass('hidden');
            secondIter();
        }
    }
    let inteSh = setInterval(function inter() {

        anim();
    }, 2500);

    function cleareIter() {
        clearInterval(inteSh);
    }

    function secondIter() {

        setTimeout(
            anim, 4000
        );
    }
    $('.form-content-modal').on('click', function(e){
      e.preventDefault();
      $('.form-content-modal').css('display', 'none');
      $('.content-sanks').css('display', 'block');
    });  
    $('.content-sanks a').on('click', function(e){
      e.preventDefault();
      $('.form-content-modal').css('display', 'block');
      $('.content-sanks').css('display', 'none');
    })
    //end mobile menu
    $(".faq-bi-title").click(function (event) {
      event.preventDefault();
      $(this).toggleClass('open-block');
      $(this).next().slideToggle("fast");
    });
    $('.expand-this').on('click', function(e){
      e.preventDefault();
      $(this).parents('.faq-section-block').find('.faq-bi-content').slideDown("fast");
      $(this).parents('.faq-section-block').find('.faq-bi-title').addClass("open-block");
    });
  
    $('.expand-all').on('click', function(e){
      e.preventDefault();
      $(this).parents('.faq-page').find('.faq-bi-content').slideDown("fast");
      $(this).parents('.faq-page').find('.faq-bi-title').addClass("open-block");
    });
    $(".language-toggle").click(function (event) {
        $(this).parent('.language-selector').toggleClass('open');
        $('.language-menu').toggle();
    });
  
    $('.language-menu li').click(function (event) {
        $(this).parents('.language-selector').removeClass('open');
        $('.language-menu').toggle();
    });
    $(".prefix-toggle").click(function (event) {
        $(this).parent('.prefix-selector').toggleClass('open');
        $('.prefix-menu').toggle();
    });
  
    $('.prefix-menu li').click(function (event) {
        $(this).parents('.prefix-selector').removeClass('open');
        $('.prefix-menu').toggle();
    });
    $(".sort-by-toggle").click(function (event) {
        $(this).parent('.sort-by-selector').toggleClass('open');
        $('.sort-by-menu').toggle();
    });
    $('.sort-by-menu li').click(function (event) {
        $(this).parents('.sort-by-selector').removeClass('open');
        $('.sort-by-menu').toggle().removeClass('active').removeAttr('style');
        $('.js-overlay-modal').removeClass('active');
    });
	
	/*
    $('.search-trigger').click(function (event) {
        $(this).next().addClass('form-open');
    });
	*/
	
    $('.search-form').on('submit', function(event){
      if(!$('.form-open .search-input').val()){
        event.preventDefault();
        $('.form-open').removeClass('form-open');
      }
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 185) {
            $('header#header').addClass('fixed-header');
			
			if ($('header.fixedHeaderV2').length == 0) {
				/* remove tabind */
				  $(".nav-link").eq(0).attr("tabindex" , -1);
				  $(".nav-link").eq(1).attr("tabindex" , -1);
				  $(".nav-link").eq(2).attr("tabindex" , -1);
				  $(".nav-link").eq(3).attr("tabindex" , -1);
				  $(".nav-link").eq(4).attr("tabindex" , -1);
				  $(".nav-link").eq(5).attr("tabindex" , -1);
				  $(".nav-link").eq(6).attr("tabindex" , -1);
				
				  $("#hdv3HeaderFavIconLinkID").attr("tabindex" , -1);
				  $("#hdv3HeaderShoppingCartLinkID").attr("tabindex" , -1);
			}			
			
        } else if ($(this).scrollTop() < 185) {
            $('header#header').removeClass('fixed-header');
        
			if ($('header.fixedHeaderV2').length == 0) {
				/* add tabind */
				  $(".nav-link").eq(0).attr("tabindex" , 0);
				  $(".nav-link").eq(1).attr("tabindex" , 0);
				  $(".nav-link").eq(2).attr("tabindex" , 0);
				  $(".nav-link").eq(3).attr("tabindex" , 0);
				  $(".nav-link").eq(4).attr("tabindex" , 0);
				  $(".nav-link").eq(5).attr("tabindex" , 0);
				  $(".nav-link").eq(6).attr("tabindex" , 0);
				
				  $("#hdv3HeaderFavIconLinkID").attr("tabindex" , 0);
				  $("#hdv3HeaderShoppingCartLinkID").attr("tabindex" , 0);
			}
		}
    });

  
  	if ( ($('header.fixedHeaderV2').length) || (991 > $( document ).width() ) ) {
  		/* remove tabind */
			  $(".nav-link").eq(0).attr("tabindex" , -1);
			  $(".nav-link").eq(1).attr("tabindex" , -1);
			  $(".nav-link").eq(2).attr("tabindex" , -1);
			  $(".nav-link").eq(3).attr("tabindex" , -1);
			  $(".nav-link").eq(4).attr("tabindex" , -1);
			  $(".nav-link").eq(5).attr("tabindex" , -1);
			  $(".nav-link").eq(6).attr("tabindex" , -1);
			
				/* fav shopping */
			  $("#hdv3HeaderFavIconLinkID").attr("tabindex" , -1);
			  $("#hdv3HeaderShoppingCartLinkID").attr("tabindex" , -1);
			  
				/* mobile search */
			  $("#hdv3HeaderSearchButtonID").attr("tabindex" , -1);
			  $("#hdv3HeaderSearchTextID").attr("tabindex" , -1);

			  
	}


  
  
    $(document).click(function (event){
       let blockSort = $(".sort-by-selector");
       let blockLang = $(".language-selector"); 
       let blockSerch = $(".search-box"); 
       let blockSerchTrigger = $(".search-trigger"); 
      
        if (!blockLang.is(event.target) 
            && blockLang.has(event.target).length === 0) { 
              if(blockLang.hasClass('open')){
                 $('.language-menu').toggle();
                 $('.language-selector').removeClass('open');
               }
        }
      
        if (!blockSort.is(event.target) 
            && blockSort.has(event.target).length === 0) { 
              if(blockSort.hasClass('open')){
                 $('.sort-by-menu').toggle();
                 $('.sort-by-selector').removeClass('open');
                 $('.js-overlay-modal').removeClass('active');
               }
        }
      if(!blockSerchTrigger.is(event.target) && blockSerchTrigger.has(event.target).length === 0){
        if (!blockSerch.is(event.target) && blockSerch.has(event.target).length === 0) { 
                if(blockSerch.hasClass('form-open')){
                  $('.search-box').removeClass('form-open');
                 }
          }
      }
        
            
        
        
    });
});



// modals 
    
  !function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);


document.addEventListener('DOMContentLoaded', function() {

   /* Ð—Ð°Ð¿Ð¸ÑÑ‹Ð²Ð°ÐµÐ¼ Ð² Ð¿ÐµÑ€ÐµÐ¼ÐµÐ½Ð½Ñ‹Ðµ Ð¼Ð°ÑÑÐ¸Ð² ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð¾Ð²-ÐºÐ½Ð¾Ð¿Ð¾Ðº Ð¸ Ð¿Ð¾Ð´Ð»Ð¾Ð¶ÐºÑƒ.
      ÐŸÐ¾Ð´Ð»Ð¾Ð¶ÐºÐµ Ð·Ð°Ð´Ð°Ð´Ð¸Ð¼ id, Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð½Ðµ Ð²Ð»Ð¸ÑÑ‚ÑŒ Ð½Ð° Ð´Ñ€ÑƒÐ³Ð¸Ðµ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ñ‹ Ñ ÐºÐ»Ð°ÑÑÐ¾Ð¼ overlay*/
   var modalButtons = document.querySelectorAll('.modal-trigger'),
       overlay      = document.querySelector('.js-overlay-modal'),
       closeButtons = document.querySelectorAll('.js-modal-close');


   


   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         var parentModal = this.closest('.modal');

         parentModal.classList.remove('active');
         overlay.classList.remove('active');
      });

   }); // end foreach
  
  
  /* ÐŸÐµÑ€ÐµÐ±Ð¸Ñ€Ð°ÐµÐ¼ Ð¼Ð°ÑÑÐ¸Ð² ÐºÐ½Ð¾Ð¿Ð¾Ðº */
   modalButtons.forEach(function(item){

      /* ÐÐ°Ð·Ð½Ð°Ñ‡Ð°ÐµÐ¼ ÐºÐ°Ð¶Ð´Ð¾Ð¹ ÐºÐ½Ð¾Ð¿ÐºÐµ Ð¾Ð±Ñ€Ð°Ð±Ð¾Ñ‚Ñ‡Ð¸Ðº ÐºÐ»Ð¸ÐºÐ° */
      item.addEventListener('click', function(e) {

         /* ÐŸÑ€ÐµÐ´Ð¾Ñ‚Ð²Ñ€Ð°Ñ‰Ð°ÐµÐ¼ ÑÑ‚Ð°Ð½Ð´Ð°Ñ€Ñ‚Ð½Ð¾Ðµ Ð´ÐµÐ¹ÑÑ‚Ð²Ð¸Ðµ ÑÐ»ÐµÐ¼ÐµÐ½Ñ‚Ð°. Ð¢Ð°Ðº ÐºÐ°Ðº ÐºÐ½Ð¾Ð¿ÐºÑƒ Ñ€Ð°Ð·Ð½Ñ‹Ðµ
            Ð»ÑŽÐ´Ð¸ Ð¼Ð¾Ð³ÑƒÑ‚ ÑÐ´ÐµÐ»Ð°Ñ‚ÑŒ Ð¿Ð¾-Ñ€Ð°Ð·Ð½Ð¾Ð¼Ñƒ. ÐšÑ‚Ð¾-Ñ‚Ð¾ ÑÐ´ÐµÐ»Ð°ÐµÑ‚ ÑÑÑ‹Ð»ÐºÑƒ, ÐºÑ‚Ð¾-Ñ‚Ð¾ ÐºÐ½Ð¾Ð¿ÐºÑƒ.
            ÐÑƒÐ¶Ð½Ð¾ Ð¿Ð¾Ð´ÑÑ‚Ñ€Ð°Ñ…Ð¾Ð²Ð°Ñ‚ÑŒÑÑ. */
         e.preventDefault();

         /* ÐŸÑ€Ð¸ ÐºÐ°Ð¶Ð´Ð¾Ð¼ ÐºÐ»Ð¸ÐºÐµ Ð½Ð° ÐºÐ½Ð¾Ð¿ÐºÑƒ Ð¼Ñ‹ Ð±ÑƒÐ´ÐµÐ¼ Ð·Ð°Ð±Ð¸Ñ€Ð°Ñ‚ÑŒ ÑÐ¾Ð´ÐµÑ€Ð¶Ð¸Ð¼Ð¾Ðµ Ð°Ñ‚Ñ€Ð¸Ð±ÑƒÑ‚Ð° data-modal
            Ð¸ Ð±ÑƒÐ´ÐµÐ¼ Ð¸ÑÐºÐ°Ñ‚ÑŒ Ð¼Ð¾Ð´Ð°Ð»ÑŒÐ½Ð¾Ðµ Ð¾ÐºÐ½Ð¾ Ñ Ñ‚Ð°ÐºÐ¸Ð¼ Ð¶Ðµ Ð°Ñ‚Ñ€Ð¸Ð±ÑƒÑ‚Ð¾Ð¼. */
         var modalId = this.getAttribute('data-modal'),
             modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');


         /* ÐŸÐ¾ÑÐ»Ðµ Ñ‚Ð¾Ð³Ð¾ ÐºÐ°Ðº Ð½Ð°ÑˆÐ»Ð¸ Ð½ÑƒÐ¶Ð½Ð¾Ðµ Ð¼Ð¾Ð´Ð°Ð»ÑŒÐ½Ð¾Ðµ Ð¾ÐºÐ½Ð¾, Ð´Ð¾Ð±Ð°Ð²Ð¸Ð¼ ÐºÐ»Ð°ÑÑÑ‹
            Ð¿Ð¾Ð´Ð»Ð¾Ð¶ÐºÐµ Ð¸ Ð¾ÐºÐ½Ñƒ Ñ‡Ñ‚Ð¾Ð±Ñ‹ Ð¿Ð¾ÐºÐ°Ð·Ð°Ñ‚ÑŒ Ð¸Ñ…. */
         modalElem.classList.add('active');
         overlay.classList.add('active');
		 
		 /* popup tabindex */
		 addTabXIndexToCloseButtons();
		
		 
      }); // end click

   }); // end foreach


    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {
            document.querySelector('.overlay-modal').classList.remove('active');
            document.querySelector('.modal.active').classList.remove('active'); 
			
			removeTabXIndexToCloseButtons();

        };
    }, false);


    overlay.addEventListener('click', function() {
        document.querySelector('.modal.active').classList.remove('active');
        this.classList.remove('active');
		
		removeTabXIndexToCloseButtons();

    });
// end modals



}); // end ready  
    
    
 
    
    

