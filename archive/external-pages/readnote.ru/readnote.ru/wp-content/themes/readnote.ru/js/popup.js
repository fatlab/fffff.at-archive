/**
 * @author    KeRNel_x86 aka PCoder
 * @link      http://www.free-lance.ru/users/PCoder
 * @copyright KeRNel_x86 (c) 2011
 * @license   Any use of this code or its parts by 3rd parties is strictly forbidden
 * @version   0.1
 */
var uiDialogPopup=function(opts, dialogOpts)
   {
      this.opts={
         sideBtnSel:    "#popup-side-button", //any valid jQuery selector
         dialogContSel: "#popup-content",
         overlaySel:    null,                 //any valid jQuery selector or NULL (in that case overlay-div will be created dynamically)

         behaviour: {
            debugQueryParam: 'popup',
            dsblAfterSubmit: true,          //disable dialog auto-show after form submition
            dsblAfterExplicitCall: true,    //disable dialog auto-show after side-button click
            maxShows: 1,                    //maximum auto-shows
            showDelay: 3000,                //auto-show delay in milliseconds
            cookieName: "__dialogPopUp_showsCnt",
            cookieOpts: {
               expires: 365, //cookie lifetime in days
               path:    '/'  //cookie path
            }
         },

         classes: {
            hidden:          "hidden",
            overlay:         "ui-widget-overlay", //dynamically created overlay class
            dialogBtn:       "dialog-button",     //custom dialog buttons marker
            dialogCloseBtn:  "close-dialog",      //close dialog on button-click
            dsblAutoOpenBtn: "disable-auto-open"  //disable auto-shows on btn-click
         },

         animation: {
            sideBtn: {
               show: {duration:250, easing: 'easeInOutBack'},
               hide: {duration:75, easing: 'easeInOutBack'}
            },
            dialog: {
               show: {duration:750, easing: 'easeInOutBack'},
               hide: {duration:750, easing: 'easeInOutBack'}
            },
            overlay: {
               show: {duration:100, easing: 'swing'},
               hide: {duration:400, easing: 'swing'}
            }
         },

         ENS: "__dialogPopUp" //events namespace
      };

      this.dialogOpts={
         draggable: false,
         resizable: false,
         closeOnEscape: true,
         modal: true,
         title: null, //will be taken from content-obj if null
         width: null  //will be taken from content-obj if null
      };

      if(typeof(opts)=='object') jQuery.extend(true, this.opts, opts);
      if(typeof(dialogOpts)=='object') jQuery.extend(this.dialogOpts, dialogOpts);

      this.init();
   };

(function($)
   {
      $.extend(uiDialogPopup.prototype, {
         init: function()
            {
               if((this.sideButton=$(this.opts.sideBtnSel)).length!=1)
                  $.error('Expected exactly one side-button element. '+this.sideButton.length+' given');
               if((this.dialogContent=$(this.opts.dialogContSel)).length!=1)
                  $.error('Expected exactly one dialog-content element. '+this.dialogContent.length+' given');

               this.dialog=null; this.overlay=null;
               if(this.opts.overlaySel && ((this.overlay=$(this.opts.overlaySel)).length!=1))
                  $.error('Expected exactly one overlay element. '+this.overlay.length+' given');

               this.__initSideBtn().__initOverlay().__initDialog().queueAutoShow();
            },
         showDialog: function()
            {
               var self=this;
               this.sideButton.__hide(function(){self.dialog.__show();});
               this.__ctrlCookie(this.__ctrlCookie()+1);
               return this;
            },
         hideDialog: function()
            {
               var self=this;
               this.dialog.__hide(function(){self.sideButton.__show();});
               return this;
            },
         queueAutoShow: function()
            {
               var self=this, timo=null, debugFlag=this.opts.behaviour.debugQueryParam.replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\-]', 'g'), '\\$&');

               debugFlag=new RegExp('(?:\\?|&)'+debugFlag+'(?=\\=|&|$)', 'i');
               if((this.__ctrlCookie() < this.opts.behaviour.maxShows) || debugFlag.test(window.location.search))
                  timo=window.setTimeout(function(){self.showDialog()}, this.opts.behaviour.showDelay);
            },
         __initSideBtn: function()
            {
               var top=this.sideButton.offset().top, safetyMargin=20, self=this;
               this.sideButton.css({position:'fixed', left:'-10000px', top:'-10000px'}).removeClass(this.opts.classes.hidden);
               
               var width=this.sideButton.outerWidth(), height=this.sideButton.outerHeight(), wh=$(window).height();
               this.sideButton.offset({top:Math.round((wh-height)/2)+top, left:-width}).extend({
                  __show: function(onComplete)
                     {
                        var opts=$.extend({duration:700, easing:'easeInOutBack'}, self.opts.animation.sideBtn.show);
                        if(typeof(onComplete)=='function') opts.complete=onComplete;
                        return this.animate({left:-safetyMargin}, opts);
                     },
                  __hide: function(onComplete)
                     {
                        var opts=$.extend({duration:700, easing:'easeInOutBack'}, self.opts.animation.sideBtn.hide);
                        if(typeof(onComplete)=='function') opts.complete=onComplete;
                        return this.animate({left:-width}, opts);
                     }
               });

               this.sideButton.__show().bind('click.'+this.opts.ENS, function(ev)
                  {
                     ev.preventDefault(); self.showDialog();
                     if(self.opts.behaviour.dsblAfterExplicitCall) self.__disableAutoOpen();
                  });
               return this;
            },
         __initOverlay: function()
            {
               var self=this, opacity=null;
               if(!this.overlay || !this.overlay.length)
                  {
                     this.overlay=$("<div></div>").addClass(this.opts.classes.overlay+' '+this.opts.classes.hidden)
                                                  .css({position:'fixed', top:'0px', left:'0px'}).appendTo("body")
                                                  .bind('click.'+this.opts.ENS, function(){self.hideDialog();});
                  }

               opacity=parseFloat(this.overlay.css('opacity')); 
               if(isNaN(opacity) || (opacity<=0)) opacity=0.5;

               this.overlay.extend({
                  __show: function(onComplete)
                     {
                        var w=$(window), width=w.width(), height=w.height(), zInd=parseInt(self.dialog.css('z-index')),
                            opts=$.extend({duration:300, easing:'swing'}, self.opts.animation.overlay.show);
                        if(typeof(onComplete)=='function') opts.complete=onComplete;
                        if(isNaN(zInd)) zInd=1000;

                        return this.width(width).height(height).css({opacity:0.01, zIndex:zInd-1}).show().animate({opacity:opacity}, opts);
                     },
                  __hide: function(onComplete)
                     {
                        var opts=$.extend({duration:300, easing:'swing'}, self.opts.animation.overlay.hide),
                            complete=typeof(onComplete)=='function'? onComplete : opts.complete;

                        opts.complete=function() {if(typeof(complete)=='function') complete.apply(this); $(this).hide();};
                        return this.animate({opacity:0.01}, opts);
                     }
               });
               return this;
            },
         __initDialog: function()
            {
               var modal=this.dialogOpts.modal, width=parseInt(this.dialogOpts.width), submitBtn=this.dialogContent.find(":submit"), 
                   dialogBtns=this.dialogContent.find("[class~='"+this.opts.classes.dialogBtn+"']"), self=this;

               var dOpts={
                  show: null,
                  hide: null,
                  modal: false,
                  autoOpen: false,
                  beforeClose: function() {self.hideDialog(); return false;},
                  width: isNaN(width)||(width<1)? this.dialogContent.width():width
               };

               if(submitBtn.length==1)
                  {
                     submitBtn.hide(); dOpts.buttons={};
                     dOpts.buttons[submitBtn.val()]=function()
                        {
                           submitBtn.click();
                           if(self.opts.behaviour.dsblAfterSubmit) self.__disableAutoOpen();
                           $(this).dialog('close');
                        };

                     submitBtn.parents("form").bind('submit.'+this.opts.ENS, function()
                        {
                           self.dialogContent.dialog('close');
                           if(self.opts.behaviour.dsblAfterSubmit) self.__disableAutoOpen();
                        });
                  }
                  
               this.dialog=this.dialogContent.dialog($.extend({}, this.dialogOpts, dOpts)).parents("div.ui-dialog[role='dialog']").css('visibility', 'hidden');
               if(this.dialog.length!=1) $.error('Exactly one dialog element expected. '+this.dialog.length+' was found');

               var ev='click.'+this.opts.ENS, btnSetRigth=this.dialog.find("div.ui-dialog-buttonset"),
                   btnSetLeft=btnSetRigth.clone(false).empty().css('float', 'left').insertBefore(btnSetRigth);
                   
               if(dialogBtns.length) dialogBtns.detach().removeClass(this.opts.classes.hidden).appendTo(btnSetLeft);
               dialogBtns.filter("[class~='"+this.opts.classes.dialogCloseBtn+"']").bind(ev, function() {self.dialogContent.dialog('close');});
               dialogBtns.filter("[class~='"+this.opts.classes.dsblAutoOpenBtn+"']").bind(ev, function() {self.__disableAutoOpen();});
               this.dialogContent.dialog('open'); btnSetLeft.height(btnSetRigth.height());

               var dW=this.dialog.outerWidth(), dH=this.dialog.outerHeight(), w=$(window), wW=w.width(), wH=w.height();
               this.dialog.offset({left:-dW, top:Math.round((wH-dH)/2)}).css({visibility:'visible', position:'fixed'}).extend({
                  __show: function(onComplete)
                     {
                        var opts=$.extend({duration:700, easing:'easeInOutBack'}, self.opts.animation.dialog.show),
                            complete=typeof(onComplete)=='function'? onComplete : opts.complete;

                        opts.complete=function()
                           {
                              if(typeof(complete)=='function') complete.apply(this);
                              $(this).focus();
                           };
                        if(modal) self.overlay.__show();
                        return this.animate({left:Math.round((wW-dW)/2)}, opts);
                     },
                  __hide: function(onComplete)
                     {
                        var opts=$.extend({duration:700, easing:'easeInOutBack'}, self.opts.animation.dialog.hide),
                            complete=typeof(onComplete)=='function'? onComplete : opts.complete;

                        opts.complete=function()
                           {
                              if(typeof(complete)=='function') complete.apply(this);
                              $(this).blur();
                           };

                        if(modal) self.overlay.__hide();
                        return this.animate({left:-dW}, opts);
                     }
               });
               return this;
            },
         __ctrlCookie: function(val)
            {
               if(val===undefined)
                  {
                     val=parseInt($.cookie(this.opts.behaviour.cookieName));
                     return isNaN(val)||(val<0)? 0 : val;
                  }
               else
                  {
                     if(isNaN(val=parseInt(val)) || (val<0)) val=0;
                     $.cookie(this.opts.behaviour.cookieName, val, this.opts.behaviour.cookieOpts);
                     return this;
                  }
            },
         __disableAutoOpen: function()
            {
               this.__ctrlCookie(this.opts.behaviour.maxShows+1000);
               return this;
            },
         __getCssParamAsInt: function(param)
            {
               var val=parseInt(this.css(param));
               return isNaN(val)? 0 : val;
            }
      });
   })(jQuery);

jQuery(document).ready(function($)
   {
      var popup=new uiDialogPopup();
   });