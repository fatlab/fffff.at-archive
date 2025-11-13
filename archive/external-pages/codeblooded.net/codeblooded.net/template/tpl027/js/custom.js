$(document).ready(function(){memberOpen();AdvancedSearch();changeTheme();massonryInit();customScroller();mobileSearch();});function AdvancedSearch(){$('.js-change-search').on('click',function(){let $this=$(this);let $form=$this.closest('form');let $icon=$this.find('.svg-icon').clone();let action=$this.attr('data-action');let json_url=$this.attr('data-json-url');$form.attr('action',action);$form.attr('data-url',json_url);$form.find('[data-icon-holder]').html($icon);$('.advanced-search').removeClass('active');});$('.advanced-search .search-option').on('click',function(){let $this=$(this).closest('.advanced-search');$this.addClass('active');});}
function memberOpen(){$('.member_btn').on('click',function(){let $this=$(this);let $parent=$this.closest('.member-links');if($parent.hasClass('active')){$parent.removeClass('active');}
else{$parent.addClass('active');}
return false;})
$('body').on('click',function(event){if(!$('.member-links')[0].contains(event.target)){$('.member-links').removeClass('active');}})}
function changeTheme(){$(".js-themes").on("click",function(){let $body=$('body');let date=new Date(new Date().getTime()+365*24*60*60*1000);if($body.hasClass('white')){document.cookie="kt_rt_skin=black; path=/; expires="+date.toUTCString();$body.addClass('black');$body.removeClass('white');}else{document.cookie="kt_rt_skin=white; path=/; expires="+date.toUTCString();$body.addClass('white');$body.removeClass('black');}});}
var cookie_style=$.cookie("kt_rt_skin");var $body=$('body');if(cookie_style=="black"){$body.removeClass('white');$body.addClass('black');}
function massonryInit(){$('.images').masonry({itemSelector:'.img-wrapper',percentPosition:true});}
function customScroller(){$(".nano").nanoScroller({scroll:'top',iOSNativeScrolling:true});}
function mobileSearch(){$('.mobile-search').on('click',function(){let $this=$(this);let $parent=$this.closest('.search');if($parent.hasClass('open')){$parent.removeClass('open')}
else{$parent.addClass('open')}})
$('body').on('click',function(e){if(!$('.search')[0].contains(event.target)){$('.search').removeClass('open')}})}
if(window.top!=window.self){top.location.href=document.location.href;}