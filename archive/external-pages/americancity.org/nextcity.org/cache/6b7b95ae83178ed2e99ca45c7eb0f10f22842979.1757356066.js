$(document).ready(function()
{if(typeof gtag!=='undefined')
{if($('.column-header').length)
{gtag('event','column_view',{'column_name':$('.column-header img').attr('alt'),'column_entry':$('.column-header img').data('columnEntry')});}
$('a[data-link-position]').on('click',function()
{gtag('event','story_click',{'story_position':$(this).data('linkPosition')});});$('a[data-free-ebook-download]').on('click',function()
{gtag('event','free_ebook_download',{'ebook_name':$(this).data('freeEbookDownload')});});$('[data-signup-source]').on('submit',function()
{gtag('event','newsletter_signup',{'signup_source':$(this).data('signupSource')});});$('.sticky-header form').on('submit',function()
{gtag('event','sticky_header_action',{'action_type':$(this).data('formType')});});$('.login-form').on('submit',function()
{gtag('event','login');});}
if($('[data-redirect]').length)
{window.location.replace($('[data-redirect]').data('redirect'));}
$('summary').on('click',function(e)
{if($(this).parent().prop('open'))
{$('svg',this).removeClass('fa-solid fa-chevron-up').addClass('fa-solid fa-chevron-down');}
else
{$('svg',this).removeClass('fa-solid fa-chevron-down').addClass('fa-solid fa-chevron-up');}});$('a[href="#top"]').on('click',function(){$('html, body').animate({scrollTop:0},500);return false;});$('form.jump input[type="submit"]').hide();$('form.jump select, form.jump input').on('change',function()
{if($(this).val()!='')
{if($(this).attr('type')=='checkbox'&&!$(this).prop('checked'))
{window.location=$(this).data('offUrl');}
else
{window.location=$(this).val();}}});$('div[data-backstretch-image]').each(function()
{image=$(this).data('backstretchImage');options={};if($(this).data('backstretchAlign'))
{options.alignY=$(this).data('backstretchAlign');}
$(this).backstretch(image,options);});if(typeof OneSignal!=='undefined')
{OneSignal.push(function()
{var isPushSupported=OneSignal.isPushNotificationsSupported();if(isPushSupported)
{$('.web-push-cta, .web-push-not-subscribed').show();}
OneSignal.isPushNotificationsEnabled(function(isEnabled)
{if(isEnabled)
{$('.web-push-subscribed').show();$('.web-push-not-subscribed').hide();$('.web-push-cta svg').removeClass('fa-shake');}
else
{$('.web-push-subscribed').hide();$('.web-push-not-subscribed').show();}});OneSignal.on('subscriptionChange',function(isSubscribed)
{if(isSubscribed)
{$('.web-push-subscribed').show();$('.web-push-not-subscribed').hide();$('.web-push-cta svg').removeClass('fa-shake');}
else
{$('.web-push-subscribed').hide();$('.web-push-not-subscribed').show();}});});$('.web-push-subscribed a').on('click',function(e)
{e.preventDefault();OneSignal.push(function()
{OneSignal.setSubscription(false);});});$('.web-push-not-subscribed a').on('click',function(e)
{e.preventDefault();OneSignal.push(function()
{OneSignal.registerForPushNotifications();});});}
if($('.panzoom').length)
{$('.panzoom').panzoom({contain:'invert',increment:0.5,minScale:1,$zoomIn:$('.zoom-in'),$zoomOut:$('.zoom-out')});}
$('.image-comparison').twentytwenty();if($('.validate').length)
{$('.validate').parsley();}
$('.close-notification').on('click',function(e)
{e.preventDefault();$('.notification').slideUp('fast');});if($('.home-modal').length)
{seenCookie=Cookies.get('home_modal_dismissed');if(!seenCookie)
{$.magnificPopup.open({items:{src:$('.home-modal'),type:'inline'},callbacks:{close:function(){Cookies.set('home_modal_dismissed','y',{expires:1,path:'/'});}}});}
$('.home-modal .action-btn').on('click',function()
{gtag('event','home_page_modal_appeal',{'button_clicked':'yes'});Cookies.set('home_modal_dismissed','y',{expires:1,path:'/'});});}
$('.email-form-trigger').magnificPopup({items:{src:$('.email-modal'),type:'inline'},});$('.survey-radio input').on('change',function()
{scope=$(this).parents('.survey-row').first();$('.survey-radio',scope).removeClass('active');$(this).parent().addClass('active');});$('.form fieldset').each(function()
{fieldsetText=$('legend',this).html();if(fieldsetText)
{$('<h3>'+fieldsetText+'</h3>').insertBefore(this);$('legend',this).hide();}});$('.mobile-leaderboard-close').on('click',function(e)
{e.preventDefault();$('.mobile-leaderboard').remove();});$('.sticky-header').waypoint(function(direction)
{if(direction=='down')
{$('.sticky-header').addClass('stuck');$('body').css('padding-top',$('.sticky-header').outerHeight());}
if(direction=='up')
{$('body').css('padding-top',0);$('.sticky-header').removeClass('stuck');}});initializePost();$('.topic-trigger').waypoint(function(direction)
{loader=$('.load-next');if(loader.length&&direction==='down')
{progress=$('<div class="loading"></div>').hide();$(progress).insertBefore('.topic-trigger').fadeIn(200);$.get($(loader).attr('href'),function(data)
{content=$(data).find('.section-wrapper').hide();$(content).insertBefore('.topic-trigger');$('.loading').fadeOut(200).remove();$(content).fadeIn(500,function()
{Waypoint.refreshAll();});}).fail(function()
{$('.loading').fadeOut(200).remove();});$(loader).remove();}},{offset:'120%'});if($('.forefront-archives-trigger').length)
{$('.forefront-archives-inner .entry-nav').hide();}
$('.forefront-archives-trigger').waypoint(function(direction)
{loader=$('.load-next');if(loader.length&&direction==='down')
{progress=$('<div class="loading blue"/>').hide();$(progress).appendTo('.forefront-archives-outer').fadeIn(200);url=$(loader).attr('href');$.get(url,function(data)
{content=$(data).find('.forefront-archives-inner').hide();if(url.match('search')&&url.match('/P[0-9]+'))
{$('.search-results-message',content).hide();}
$(content).appendTo('.forefront-archives-outer');$('.entry-nav',content).hide();$('.loading').fadeOut(200).remove();$(content).fadeIn(500,function()
{Waypoint.refreshAll();});});$(loader).remove();}},{offset:'100%'});var sectionTrigger=$('.special-section-trigger').waypoint(function(direction)
{loader=$('.load-next');if(loader.length&&direction==='down')
{progress=$('<div class="loading"></div>').hide();$(progress).insertBefore('.special-section-trigger').fadeIn(200);$.get($(loader).attr('href'),function(data)
{content=$(data).find('.special-section-entries').hide();$(content).insertBefore('.special-section-trigger');$('.loading').fadeOut(200).remove();$(content).fadeIn(500,function()
{Waypoint.refreshAll();});});$(loader).remove();}},{offset:'120%'});$('.forefront-archives').on('click','.forefront-filters a',function(e)
{e.preventDefault();url=$(this).attr('href');$('.forefront-search .input').val('');if(!url.match('/P[0-9]+'))
{$('.forefront-filters a').removeClass('active');$(this).addClass('active');}
$('.forefront-archives-inner').fadeTo(500,0.5);$.get(url,function(data)
{content=$(data).find('.forefront-archives-inner').hide();$('.entry-nav',content).hide();$('.forefront-archives-inner:gt(0)').remove();$('.forefront-archives-inner').replaceWith(content);$('.forefront-archives-inner').fadeIn(500,function()
{Waypoint.refreshAll();});});});$('.forefront-search').submit(function(e)
{e.preventDefault();$('.forefront-filters a').removeClass('active');$('.forefront-archives-inner').fadeTo(500,0.5);$('input',this).addClass('loading');$.post($(this).attr('action'),$(this).serialize(),function(data)
{content=$(data).find('.forefront-archives-inner').hide();$('.entry-nav',content).hide();$('.forefront-archives-inner:gt(0)').remove();$('.forefront-archives-inner').replaceWith(content);$('.forefront-archives-inner').fadeIn(500,function()
{Waypoint.refreshAll();$('.forefront-search input').removeClass('loading');});});});$('.collections-index').on('click','.entry-nav a',function(e)
{e.preventDefault();url=$(this).attr('href');$('.collections-index-inner').fadeTo(500,0.5);$.get(url,function(data)
{content=$(data).find('.collections-index-inner').hide();$('.collections-index-inner').replaceWith(content);$('.collections-index-inner').fadeIn(500);});});$('body').on('submit','.share-form',function(e)
{e.preventDefault();$('button',this).prop('disabled',true);email=$('input[name="to"]',this).val();if($(this).parsley('validate'))
{$.post($(this).attr('action'),$(this).serialize(),function(data)
{message='<p class="share-form-result">The link has been sent to '+email+'.</p>';$(message).hide();$('.share-form-content').fadeOut(300,function()
{$(message).appendTo('.share-form').fadeIn(300);window.setTimeout(function(){$.magnificPopup.close();},3500);});}).fail(function()
{$('.share-form input[name="to"]').insertAfter('<p class="error">Sorry, but your message could not be sent.</p>');});}});if($('.item-view-form').length)
{window.giftEligible=true;$('input[name="pay_what_you_want_price"]').payment('restrictNumeric');calculateItemPwyw();if($('input[name="will_pay"]:checked').val()=='n')
{$('[data-tab-group="pay"], #gift-address-fields').hide();$('[data-tab-group="pay"]').prev('h3').hide();$('input[name="pay_what_you_want_price"]').val('0.00');}
$('.item-pay-toggle input').on('change',function()
{$('.item-pay-toggle label').removeClass();$(this).parents('label').addClass('active');if($(this).val()=='n')
{$('[data-tab-group="pay"], #gift-address-fields').hide();$('[data-tab-group="pay"]').prev('h3').hide();$('input[name="pay_what_you_want_price"]').val('0.00');$('#address-toggle').text($('#address-toggle').data('closedText'));}
else
{$('[data-tab-group="pay"]').show();$('[data-tab-group="pay"]').prev('h3').show();var defaultAmount=$('input[name="pay_what_you_want_price"]').data('defaultValue');$('input[name="pay_what_you_want_price"]').val(defaultAmount);calculateItemPwyw();}});$('.item-view-form input[name="pay_what_you_want_price"], .item-view-form #pwyw-recurring').on('change',calculateItemPwyw);$('.item-view-form #customer_country').on('change',function()
{if($.inArray($(this).val(),['US','CA','MX'])==-1)
{window.giftEligible=false;$('.dynamic-gift').remove();calculateItemPwyw();}
else
{window.giftEligible=true;calculateItemPwyw();}});}
if($('.donation-form').length)
{window.giftEligible=true;if(window.location.hash=='#monthly')
{$('#monthly').show();$('#onetime').hide();$('a[href="#monthly"]').addClass('active');$('a[href="#onetime"]').removeClass('active');$('#monthly input[data-default]').click();}
calculateDonation();$('.donation-form').attr('novalidate','novalidate');$('.panel-amounts input:checked').parents('label').addClass('active');$('.panel-amounts input[type="radio"]').change(function()
{$('.panel-amounts label').removeClass('active');$(this).parents('label').addClass('active');$('.panel-amounts .custom input').val('');calculateDonation();});$('.panel-amounts .custom input').payment('restrictNumeric').on('blur',function()
{if($(this).val()!='')
{$('.panel-amounts label').removeClass('active');calculateDonation();}});$('.donation-form .tabs a').on('click',function(e)
{e.preventDefault();target=$(this).attr('href');$('.donation-form .tabs a').removeClass('active');$(this).addClass('active');$('.panel-amounts .custom input').attr('disabled','disabled');$(target+'.panel-amounts .custom input').removeAttr('disabled');if(target=='#monthly')
{$('input[name="donation_recurring"]').val('y');$('.donation-recurring-toggle').hide();}
else
{$('input[name="donation_recurring"]').val('n');$('.donation-recurring-toggle').show();}
$('.panel-amounts').hide();$(target).fadeIn(200,function()
{$('.panel-amounts:visible input[data-default]').trigger('click');});calculateDonation();});$('.donation-form #member_country').on('change',function()
{if($.inArray($(this).val(),['US','CA','MX'])==-1)
{window.giftEligible=false;$('.dynamic-gift').remove();calculateDonation();}
else
{window.giftEligible=true;calculateDonation();}});if(!$('.donation-gift-toggle input:checked').length)
{$('.donation-gift-fields').hide();}
$('.donation-gift-toggle input').on('change',function()
{$('.donation-gift-fields').slideToggle('fast');});$('.donation-recurring-toggle input').on('change',function()
{calculateDonation();});}
if($('.membership-form').length)
{window.defaultMonthly=$('#month input[data-default]');window.defaultAnnual=$('#year input[data-default]');window.giftEligible=true;calculateGifts($('.membership-amounts input:checked').val(),'y');if($('.payment-request').length)
{$('.payment-request').data('label','Next City Membership');$('.payment-request').data('amount',$('.membership-amounts input:checked').val()*100);}
$('.membership-form').attr('novalidate','novalidate');$('.membership-tabs a').on('click',function(e)
{e.preventDefault();target=$(this).attr('href');$('.membership-tabs a').removeClass('active');$(this).addClass('active');if(target=='#free')
{$('.membership-form input[name="token"]').remove();$('#membership-tier-description').text($(this).data('description'));$('[data-tab-group="pay"], #gift-address-fields').hide();$('#address-toggle').text($('#address-toggle').data('closedText'));$('#donation_gift').empty();$('.membership-points li[data-tier="sustainers"]').each(function(i,e)
{$('svg',this).attr('data-icon','ban');$(this).addClass('disabled');});}
else
{$('#membership-tier-description').text($('.membership-amounts input:checked').data('description'));$('[data-tab-group="pay"]').show();calculateGifts($('.membership-amounts input:checked').val(),'y');$('.membership-points li[data-tier="sustainers"]').each(function(i,e)
{$('svg',this).attr('data-icon','check-circle');$(this).removeClass('disabled');});}});$('.membership-amounts input:checked').parents('label').addClass('active');$('#membership-tier-description').text($('.membership-amounts input:checked').data('description'));$('.membership-amounts input[type="radio"]').on('change',function()
{$('.membership-amounts label, .membership-amounts li').removeClass('active');$(this).parents('label').addClass('active');$('.membership-custom input').val('');$('#membership-tier-description').text($(this).data('description'));calculateGifts($(this).val(),'y');if($('.payment-request').length)
{$('.payment-request').data('amount',$(this).val()*100);}});$('.membership-custom input').payment('restrictNumeric');$('.membership-custom input').on('blur',function()
{if($(this).val()!='')
{$('.membership-amounts label').removeClass('active');$(this).parents('li').addClass('active');$('#membership-tier-description').text($(this).data('description'));calculateGifts($(this).val(),'y');if($('.payment-request').length)
{$('.payment-request').data('amount',$(this).val()*100);}}});$('.membership-interval-toggle input[type="radio"]').on('change',function()
{$('.membership-amounts label, .membership-amounts li').removeClass('active');$('.membership-amounts').hide();$('.membership-custom input').val('');target=$('#'+$(this).val());$(target).show();if($(this).val()=='month')
{window.defaultAnnual=$('#year input:checked');$(window.defaultMonthly).trigger('click');}
else
{window.defaultMonthly=$('#month input:checked');$(window.defaultAnnual).trigger('click');}});$('.membership-form #member_country').on('change',function()
{if($.inArray($(this).val(),['US','CA','MX'])==-1)
{window.giftEligible=false;$('#donation_gift').empty();}
else
{window.giftEligible=true;calculateGifts($('.membership-amounts input:checked').val(),'y');}});}
if(window.location.hash=='#form')
{$('.membership-cards').slideUp(150,function()
{$('.membership-form-reveal').slideDown(200,function()
{$.scrollTo(this,{duration:200,offset:-50});});});}
$('.membership-card a[href="#form"]').on('click',function(e)
{e.preventDefault();var tab=$(this).data('tab');$('.membership-cards').slideUp(150,function()
{$('.membership-form-reveal').slideDown(200,function()
{$.scrollTo(this,{duration:200,offset:-50});if(tab=='free')
{$('.membership-tabs a[href="#free"]').trigger('click');}});});});$('.membership-close').on('click',function(e)
{e.preventDefault();if($('#membership-overlay').length)
{$('#membership-overlay').fadeOut(200,function()
{$('body').removeClass('rb');$('.mobile-leaderboard').show();});if(typeof gtag!=='undefined')
{gtag('event','user_gate_close');}}
if($('.membership-form-reveal').length)
{$('.membership-form-reveal').slideUp(150,function()
{$('.membership-cards').slideDown(200);})}});$('.see-gifts').magnificPopup({items:{src:'.donation-gifts'},type:'inline'});if(typeof loadMap=='function')
{loadMap();}
if($('.vanguard-member-map-markers').length)
{$('.vanguard-member-map-markers').load($('.vanguard-member-map-markers').data('ajaxUrl'));}
$('#vanguard_bio').counter({count:'up',goal:'sky',msg:'words (50 word suggested maximum)',target:'.vanguard-bio-counter',text:true,type:'word'});if($('.vanguard-profile-photo').length)
{$('.vanguard-new-photo').hide();$('input[type="file"][name="vanguard_photo"]').prop('disabled','disabled');}
$('.vanguard-change-photo').on('click','a',function(e)
{e.preventDefault();if($('.vanguard-profile-photo:visible').length)
{$('.vanguard-change-photo a').text('Keep original photo');$('.vanguard-profile-photo').hide();$('.vanguard-new-photo').fadeIn(150);$('input[type="file"][name="vanguard_photo"]').removeProp('disabled');}
else
{$('.vanguard-change-photo a').text('Change photo');$('input[type="file"][name="vanguard_photo"]').prop('disabled','disabled');$('.vanguard-profile-photo').fadeIn(150);$('.vanguard-new-photo').hide();}});$('#save-video').hide().on('click',function()
{document.VideoRecorder.save();});$('#video-message').hide();if($('.stripe-row').length)
{var elements=stripe.elements();var card=elements.create('card',{hidePostalCode:true,disableLink:true});card.mount('#stripe-card-holder');card.addEventListener('change',function(event){var displayError=document.getElementById('stripe-card-errors');if(event.error){displayError.textContent=event.error.message;}else{displayError.textContent='';}});}
$('input[name="member_zip"]').on('change',function(e)
{$('input[name="member_zip"]').val($(this).val());});$('#address-toggle').on('click',function(e)
{e.preventDefault();var target=$(this).attr('href');if($(target).is(':visible'))
{$(this).text($(this).data('closedText'));$(target).fadeToggle(100);}
else
{$(this).text($(this).data('openText'));$(target).fadeToggle(100);}});if($('.payment-request').length)
{if($('#member_country').val())
{var donationCountry=$('#member_country').val();}
else
{var donationCountry='US';}
var paymentRequest=stripe.paymentRequest({country:donationCountry,currency:'usd',total:{label:'Next City Donation',amount:100,},requestPayerName:true,requestPayerEmail:true,});if(typeof elements=='undefined')
{var elements=stripe.elements();}
var prButton=elements.create('paymentRequestButton',{paymentRequest:paymentRequest,});paymentRequest.canMakePayment().then(function(result)
{if(result)
{$('.payment-request').show();prButton.mount('#stripe-payment-request-button');if($('input[name="will_pay"]:checked').val()=='n')
{$('.payment-request').hide();}}
else
{$('.payment-request').addClass('obliterate');}});prButton.on('click',function(ev)
{newLabel=$('.payment-request').data('label');newAmount=parseInt($('.payment-request').data('amount'));paymentRequest.update({total:{label:newLabel,amount:newAmount},})});paymentRequest.on('token',function(ev)
{response=btoa(JSON.stringify(ev));var form=$('.stripe-form');var hiddenInput=document.createElement('input');hiddenInput.setAttribute('type','hidden');hiddenInput.setAttribute('name','paymentRequestResponse');hiddenInput.setAttribute('value',response);$(hiddenInput).appendTo(form);$.post($(form).attr('action'),$(form).serialize(),function(data)
{if(data.result=='ok')
{ev.complete('success');window.location.replace(data.redirect);}
else
{ev.complete('fail');alert(data.result);}});});}
if($('.rsvp-form').length)
{window.giftEligible=true;calculateRSVP();if($('input[name="will_pay"]:checked').val()=='n')
{$('[data-tab-group="pay"], #gift-address-fields').hide();$('[data-tab-group="pay"]').prev('h3').hide();$('input[name="pay_what_you_want_price"]').val('0.00');}
$('.event-pay-toggle input').on('change',function()
{$('.event-pay-toggle label').removeClass();$(this).parents('label').addClass('active');if($(this).val()=='n')
{$('[data-tab-group="pay"], #gift-address-fields').hide();$('[data-tab-group="pay"]').prev('h3').hide();$('input[name="pay_what_you_want_price"]').val('0.00');$('#address-toggle').text($('#address-toggle').data('closedText'));}
else
{$('[data-tab-group="pay"]').show();$('[data-tab-group="pay"]').prev('h3').show();var defaultAmount=$('input[name="pay_what_you_want_price"]').data('defaultValue');$('input[name="pay_what_you_want_price"]').val(defaultAmount);calculateRSVP();}});if(window.location.hash=='#free')
{$('input[name="will_pay"][value="n"]').click();}
$('select#guests, select#price, input[name="pay_what_you_want_price"], input#rsvp-recurring','.rsvp-form').on('change',calculateRSVP);if($('input[name="participant_type"]:checked').val()=='individual')
{$('#requested_group_members').hide();}
$('input[name="participant_type"]').on('change',function()
{$('#requested_group_members').toggle();});$('#customer_country').on('change',function()
{if($.inArray($(this).val(),['US','CA','MX'])==-1)
{window.giftEligible=false;$('.dynamic-gift').remove();calculateRSVP();}
else
{window.giftEligible=true;calculateRSVP();}});}
$('[data-parsley-required], [data-parsley-min]').on('blur',function()
{if($(this).is(':visible'))
{$(this).parsley().validate();}});if($('input[name="use_existing_card"]').length&&$('input[name="use_existing_card"]').is(':checked'))
{$('.stripe-row').hide();}
$('input[name="use_existing_card"]').on('change',function()
{$('.stripe-row').fadeToggle(150);});if($('input[name="payment_amount"]').length)
{$('input[name="payment_amount"]').on('change',function()
{$('.vanguard-payment-type label span').text($(this).data('installmentAmount'));});}
$('.stripe-form').on('submit',function(e)
{e.preventDefault();var form=$(this);form.parsley().reset();var validated=true;var useExistingCard=false;form.find('button').prop('disabled','disabled');if($('input[name="use_existing_card"]').length&&$('input[name="use_existing_card"]').is(':checked'))
{useExistingCard=true;}
else
{if($('input[data-stripe="name"]').length)
{stripeName=$('input[data-stripe="name"]').val();}
var cardOptions={name:stripeName,};}
if(form.hasClass('donation-form')||form.hasClass('membership-form')||form.hasClass('item-view-form')||form.hasClass('rsvp-form')||form.hasClass('institutional-membership-form'))
{if(false===form.parsley().validate('submission-essentials'))
{validated=false;}
if($('#gift-address-fields:visible').length)
{if(false===form.parsley().validate('account'))
{validated=false;}}
if(validated==false)
{form.find('button').prop('disabled',false);return false;}
if(!$('.stripe-row:visible').length)
{form.get(0).submit();return;}}
stripe.createToken(card,cardOptions).then(function(result)
{if(validated==true&&useExistingCard==false)
{if(result.error)
{var errorElement=document.getElementById('stripe-card-errors');errorElement.textContent=result.error.message;form.find('button').prop('disabled',false);}
else
{stripeTokenHandler(result.token);}}});if(validated==true&&useExistingCard==true)
{form.get(0).submit();}});function stripeTokenHandler(token)
{var form=$('.stripe-form');var hiddenInput=document.createElement('input');hiddenInput.setAttribute('type','hidden');hiddenInput.setAttribute('name','token');hiddenInput.setAttribute('value',token.id);$(hiddenInput).appendTo(form);form.get(0).submit();};$('#covid_areas_served_other').hide();$('#covid_areas_served').on('change',function()
{if($(this).val()=='national')
{$('#covid_areas_served_other').hide();}
else
{$('#covid_areas_served_other').show();}});$('#covid_offerings').counter({count:'up',goal:'750',msg:'characters (750 maximum)',target:'.covid-offerings-counter',text:true,type:'char'});$('.change-amount').on('click',function(e)
{e.preventDefault();scope=$(this).parents('tr').first();$(scope).next().fadeToggle(100);});$('.cancel-subscription-update').on('click',function(e)
{e.preventDefault();scope=$(this).parents('tr').first();$(scope).fadeToggle(100);});});$(window).on('load',function(){$('.gallery').flexslider({controlNav:false,prevText:'<i class="fas fa-chevron-circle-left"></i>',nextText:'<i class="fas fa-chevron-circle-right"></i>',slideshow:false,smoothHeight:false});});function btRecordPressed(recorderId)
{$('#save-video, #video-message').hide().find('p').remove();}
function btStopRecordingPressed(recorderId)
{$('#save-video').show();$('#video-message p').remove();$('#video-message').prepend('<p>Please review your video above and click the SAVE VIDEO button when done, or click the record button above to try again.</p>').fadeIn();}
function onSaveOk(streamName,streamDuration,userId,cameraName,micName,recorderId,audioCodec,videoCodec,fileType,videoId)
{$('#save-video').hide();$('#video-message p').remove();$('#video-message').prepend('<p>Your video was uploaded successfully!</p>');$('input[name="video_file"]').val(streamName);}
function onVideoUploadSuccess(filename,filetype)
{$('input[name="video_file"]').val(filename);$('#video-message p').remove();$('#video-message').prepend('<p>Your video was uploaded successfully!</p>').fadeIn();}
function onVideoUploadFailed(error)
{$('#video-message p').remove();$('#video-message').prepend('<p>Sorry, but there was an error uploading your video.</p>').fadeIn();}
var navScroll=function()
{clearTimeout(scroll);if($(window).width()>=640)
{var scroll=setTimeout(function()
{var height=$(window).height();$('.navigation').css('height',height).jScrollPane({horizontalGutter:4});},500);}}
function calculateDonation()
{var total=0;var recurring=$('input[name="donation_recurring"]').val();var recurringText=(recurring=='y')?' Monthly':'';if($('.panel-amounts:visible .custom input').val()!='')
{total=$('.panel-amounts:visible .custom input').val();}
else
{total=$('.panel-amounts:visible input[type="radio"]:checked').val();}
if($('input[name="donation_costs"]:checked').length&&recurring!='y')
{var costs=$('input[name="donation_costs"]').val();var total=parseInt(total)+parseInt(costs);}
if($('.payment-request').length)
{$('.payment-request').data('label','Next City'+recurring+' Donation');$('.payment-request').data('amount',total*100);}
calculateGifts(total,recurring);}
function calculateRSVP()
{var form=$('.rsvp-form');if(!$(form).length)return;var willPay=$('input[name="will_pay"]:checked',form).val();var guests=$('#guests').val();var oneFree=$(form).data('oneFree');var customPrice=$(form).data('customPrice');var pwyw=($('input[name="pay_what_you_want_price"]').length);var recurring=($('#rsvp-recurring:checked').length);if(willPay=='n')return;if(pwyw)
{var pricePer=$('input[name="pay_what_you_want_price"]').val();}
else if(customPrice>=0)
{var pricePer=customPrice;}
else
{var pricePer=$('select[name="price"]').val();}
var num=(oneFree=='y'&&pwyw==false)?parseFloat($('#guests').val())-1:parseFloat($('#guests').val());var totalFloat=(num*pricePer);var total=totalFloat.toFixed(2);$('.total-row').html('$'+total).hide().fadeIn();var recurringText=(recurring)?' Monthly':'';if($('.payment-request').length)
{$('.payment-request').data('label','Next City'+recurringText+' Donation');$('.payment-request').data('amount',parseInt(parseFloat(total)*100));}
calculateGifts(totalFloat,recurring);}
function calculateItemPwyw()
{var form=$('.item-view-form');if(!$(form).length)return;var willPay=$('input[name="will_pay"]:checked').val();var pwyw=($('input[name="pay_what_you_want_price"]').length);var recurring=($('#pwyw-recurring:checked').length);var price=$('input[name="pay_what_you_want_price"]').val();var totalFloat=parseFloat(price);var total=parseFloat(price).toFixed(2);$('.total-row').html('$'+total).hide().fadeIn();var recurringText=(recurring)?' Monthly':'';if($('.payment-request').length)
{$('.payment-request').data('label','Next City'+recurringText+' Donation');$('.payment-request').data('amount',parseInt(parseFloat(total)*100));}
calculateGifts(totalFloat,recurring);}
$('#app-modal-close').on('click',function(e)
{e.preventDefault();$('#app-modal').slideUp(200);Cookies.set('nextcity_app_banner_dismissed','y',{expires:14});});function calculateGifts(total,recurring)
{if(window.giftEligible==true)
{var gifts=[];$('.donation-gifts li').each(function()
{if(recurring==false||recurring=='n')
{if($(this).data('minimumDonation')<=total)
{gifts.push({giftIndex:$(this).data('index'),giftDescription:$(this).data('description'),giftShirt:$(this).data('shirtOptions')});}}
else
{if($(this).data('minimumMonthlyDonation')<=total)
{gifts.push({giftIndex:$(this).data('index'),giftDescription:$(this).data('description'),giftShirt:$(this).data('shirtOptions')});}}});$('#donation_gift').empty();$.each(gifts,function(index,value)
{var new_option=$('<option value="'+value.giftDescription+'" data-shirt-options="'+value.giftShirt+'" /> '+value.giftDescription+'</option>');$(new_option).appendTo('#donation_gift');$('body').on('change','#donation_gift',function()
{if($('option:selected',this).data('shirtOptions')=='y')
{$('.shirt-sizes').addClass('visible');}
else
{$('.shirt-sizes').removeClass('visible');$('.shirt-sizes label').removeClass('active');$('.shirt-sizes input').prop('checked',false);}});$('.shirt-sizes input').on('click',function()
{$('.shirt-sizes label').removeClass('active');$(this).parents('label').addClass('active');});});}}
function initializePost()
{$('.content, .forefront-content, .sidebar, .video, .full-width-media').fitVids();$('.comment-input').trumbowyg({autogrow:true,btns:['strong','em','blockquote','link','formatting','removeformat'],minimalLinks:true,removeformatPasted:true,resetCss:true,svgPath:'/assets/img/trumbowyg-icons.svg',tagsToRemove:['script','link','span','iframe','img','h1','h2','h3','h4','h5'],urlProtocol:true});$('.comment-content').expander({expandEffect:'fadeIn',expandSpeed:150,sliceOn:'</p>',slicePoint:500,startExpanded:false,userCollapse:false,});$('a').each(function(i,ae)
{if(ae.href.match('^https?://(?!'+document.location.hostname+')')){ae.target='_blank';if(typeof gtag!=='undefined')
{linkParentEntry=$(ae).parents('.entry-wrapper');if(linkParentEntry.length)
{var parentTitle=$(linkParentEntry).data('title');$(ae).on('click',function(e)
{url=$(ae).attr('href');gtag('event','external_links_clicked',{'external_link':url,'parent_entry':parentTitle});});}}}});$('.enlarge-image').magnificPopup({type:'image'});$('.ebook-cover li a').magnificPopup({type:'image',gallery:{enabled:true}});$('.gallery').flexslider({controlNav:false,prevText:'<i class="fas fa-chevron-circle-left"></i>',nextText:'<i class="fas fa-chevron-circle-right"></i>',slideshow:false,smoothHeight:false});var as=audiojs.createAll();if($('.entry-wrapper').length)
{memberType=$('body').data('memberType');memberViews=$('body').data('memberViews');entryId=$('.entry-wrapper').data('entryId');type=$('.entry-wrapper').data('type');storyPass=$('.entry-wrapper').data('storyPass');idsCookie=Cookies.get('nextcity_ids_viewed');viewCookie=Cookies.get('nextcity_stories_viewed');annualViewsCookie=Cookies.get('nextcity_stories_viewed_annual');appBannerDismissed=Cookies.get('nextcity_app_banner_dismissed');if(annualViewsCookie)
{annualViewsCookie=parseInt(annualViewsCookie)+1;Cookies.set('nextcity_stories_viewed_annual',annualViewsCookie,{expires:365});}
else
{Cookies.set('nextcity_stories_viewed_annual',1,{expires:365});}
var roadblock=false;const params=new Proxy(new URLSearchParams(window.location.search),{get:(searchParams,prop)=>searchParams.get(prop),});let gated=params.gated;if(gated=='true')
{$('body').addClass('rb');$('#membership-overlay').fadeIn(200);$('.mobile-leaderboard').hide();roadblock=true;}
if(type!='sponsored'&&type!='free'&&!storyPass)
{if(!idsCookie)
{idsCookie=[];}
else
{idsCookie=JSON.parse(idsCookie);idsCookie=idsCookie.slice(0,4);}
if(viewCookie)
{if(!idsCookie.includes(entryId))
{idsCookie.push(entryId);viewCookie=parseInt(viewCookie)+1;Cookies.set('nextcity_stories_viewed',viewCookie,{expires:30});Cookies.set('nextcity_ids_viewed',JSON.stringify(idsCookie),{expires:30});}
if(viewCookie>3&&memberType=='guest')
{$('body').addClass('rb');$('#membership-overlay').fadeIn(200);$('.mobile-leaderboard').hide();$('input[name="read_ids"]').val(idsCookie.join());roadblock=true;}}
else
{Cookies.set('nextcity_stories_viewed',1,{expires:30});idsCookie.push(entryId);Cookies.set('nextcity_ids_viewed',JSON.stringify(idsCookie),{expires:30});}
if(memberViews&&memberViews%10==0&&memberType=='free-member')
{$('body').addClass('rb');$('#membership-overlay').fadeIn(200);$('.mobile-leaderboard').hide();roadblock=true;}
if(viewCookie>=3&&!roadblock&&!appBannerDismissed)
{platform=getMobileOperatingSystem();if(platform=='android'||platform=='ios')
{appLink=$('#app-modal-link').data(platform+'-href');$('#app-modal-link').attr('href',appLink);$('#app-modal').slideDown(200);}
Cookies.set('nextcity_app_banner_dismissed','y',{expires:14});}}}
$('.footer-comments-link').on('click',function(e)
{e.preventDefault();$('#comments').fadeToggle(200);});$('.share-box').on('click','h4 a',function(e)
{e.preventDefault();var scope=$(this).parents('.share-box');var target=$(this).parent().next();$('h4 a',scope).removeClass('ia a');if($(target).is(':visible'))
{$(target).fadeOut(100);}
else
{$('h4 a',scope).addClass('ia');$('.share-box-dd',scope).hide();$(this).addClass('a');$(this).removeClass('ia');$(target).fadeIn(100);}});$('.create-link-btn').on('click',function(e)
{e.preventDefault();var target=$(this).attr('href');var base=$(this).data('baseUrl');$.get(target,function(data)
{url=base+'/'+data;$('#gift-link-input').val(url);$('.create-link-btn').hide();$('.gift-link-tools').fadeIn(100);});});$('.copy-link-btn').on('click',function(e)
{e.preventDefault();var url=$('#gift-link-input').val();navigator.clipboard.writeText(url).then(function()
{$('.copy-link-btn').text('Copied!');})})}
function updateSmsLinks()
{var platform=getMobileOperatingSystem();if(platform=='ios'||platform=='android')
{$('.share-sms').show();if(platform=='ios')
{$('.share-sms').each(function()
{var link=$('a',this).prop('href');$('a',this).prop('href',link.replace('sms:?','sms:&'));});}}
else
{$('.share-sms').hide();}}
function getMobileOperatingSystem()
{platform='';if(/Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
{platform='android';}
if(/iPhone|iPad|iPod/i.test(navigator.userAgent))
{platform='ios';}
return platform;}
function moveSidebarAds(container)
{if($(container).length)
{if($('.mobile-ad-holder-1',container).length)
{$('.click-sidebar').eq(0).appendTo($('.mobile-ad-holder-1',container));}
if($('.mobile-ad-holder-2',container).length)
{$('.click-sidebar').eq(1).appendTo($('.mobile-ad-holder-2',container));}}}
var jRes=jRespond([{label:'mobile',enter:0,exit:640},{label:'tablet',enter:641,exit:960},{label:'desktop',enter:961,exit:10000}]);jRes.addFunc([{breakpoint:'mobile',enter:function(){$('.navigation').hide();$('.navigation-toggle, .navigation-close').on('click',function(e)
{e.preventDefault();$('.navigation').slideToggle('fast');});if($('.donation-form').length)
{$('.donation-login-link').insertAfter('.donation-form');}
else
{$('.donation-login-link').insertAfter('.donation-form');}},exit:function(){location.reload();}},{breakpoint:['mobile,tablet'],enter:function(){moveSidebarAds($('.entry-content:first'));if($('.event-progress').length)
{$('.event-progress').insertAfter('.event-header');}
$('.overlay-intro-lower').insertAfter('.membership-form');},exit:function(){location.reload();}},{breakpoint:['tablet','desktop'],enter:function(){$('.navigation').hide().css('left','-320px');$('.navigation-toggle, .navigation-close').on('click',function(e)
{e.preventDefault();if($('.navigation:visible').length)
{$('.navigation').animate({'left':'-320px'},200,'swing',function()
{$(this).hide();});$('body').animate({'left':'0'},200,'swing',function()
{$(this).width('').removeClass('inactive');});}
else
{var height=$(window).height();$('.navigation').show().css('height',height).animate({'left':'0px'},200).jScrollPane({horizontalGutter:4});$('body').addClass('inactive').width($(window).width()).animate({'left':'320px'},200);}});$(window).on('resize',navScroll);$('body').on('click','.share-facebook a, .share-twitter a',function(e)
{e.preventDefault();if(typeof gtag!=='undefined')
{gtag('event','share',{method:$(this).attr('title')});}
window.open($(this).attr('href'),'_blank','width=600,height=450,location=no,menubar=no,scrollbars=no,toolbar=no,top=100,left=100');});$('body').on('click','.share-email a',function(e)
{e.preventDefault();$(this).addClass('loading-modal').append('<img src="/assets/img/loading-2x.gif" />');$.get($(this).attr('href'),function(data)
{popup=$(data).find('.share-form');$('fieldset',popup).each(function()
{label=$('legend',this).html();$('<h3>'+label+'</h3>').insertBefore(this);$('legend',this).hide();});$.magnificPopup.open({items:{src:popup,type:'inline'}});$('.share-email a').removeClass('loading-modal');$('.share-email a img').remove();if(typeof gtag!=='undefined')
{gtag('event','share',{method:'Email'});}});});if($('.quick-nav').length)
{$('.quick-nav ul, .quick-nav-heading').hide();$('.quick-nav').width(64).show().localScroll({offset:-100});$('.forefront-wrapper').waypoint(function(direction)
{$('.quick-nav').toggleClass('sticky');},{offset:'100px'});$('.quick-nav h3 a').on('click',function(e)
{e.preventDefault();var expandedWidth=$('.quick-nav').data('expandedWidth');if($('.quick-nav ul:visible').length)
{$('.quick-nav ul').slideUp(100,function()
{$('.quick-nav-heading').fadeOut(100,function()
{$('.quick-nav').animate({width:64},100,function()
{$('.quick-nav-label').show();});});});}
else
{$('.quick-nav-label').hide();$('.quick-nav').animate({width:expandedWidth},100,function()
{$('.quick-nav-heading').fadeIn(100,function()
{$('.quick-nav ul').slideDown(100);});});}});$('.forefront-content *[id], .quick-nav-trigger').each(function()
{$(this).waypoint(function(direction)
{$('.quick-nav a').removeClass('current');if(direction=='down')
{$('.quick-nav a[href="#'+$(this).attr('id')+'"]').addClass('current');}
else
{$('.quick-nav a[href="#'+$(this).attr('id')+'"]').parents('li').prev('li').find('a').addClass('current');}},{offset:'101px'});});}},exit:function(){location.reload();}},{breakpoint:['desktop'],enter:function(){$('.sidebar-waypoint').waypoint(function(direction)
{if(!$('.sidebar').hasClass('stuck'))
{$('.sidebar .click-sidebar:first, .sidebar .most-read').hide();$('.sidebar').addClass('stuck');}},{offset:'90px'});$('.content').waypoint(function(direction)
{if(direction=='up')
{$('.sidebar .click-sidebar, .sidebar .most-read').show();$('.sidebar').removeClass('stuck').css('right',false);}},{offset:0});},exit:function(){location.reload();}}]);
