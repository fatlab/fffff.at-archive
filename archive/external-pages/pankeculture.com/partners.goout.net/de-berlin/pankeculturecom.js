; var goOut = {init: function(callback){var s,d;d=document;s=d.createElement('script');s.src='https://partners.goout.net/framework/widgets-api.js';d.body.appendChild(s);window.addEventListener('goApiReady', callback);}};

goOut.init(function() {
    goOut.headAppendStyle(function() {/*
        .goOutModal {
            max-width: none !important;
            z-index: 999 !important;
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 90%;
            max-width: 1024px !important;
            height: auto;
            max-height: 90%;
            overflow-y: auto;
        }
        .goOutOverlay {
            position: fixed;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            z-index: 998 !important;
            background-color: rgba(0, 0, 0, 0.9);
            display: none;
        }
        .goOutCloseButton {
            width: 44px;
            height: 44px;
            line-height: 44px;
            position: absolute;
            border: none;
            background-color: transparent;
            right: 0;
            top: 0;
            font-size: 28px;
            cursor: pointer;
        }

        .goout-button {
            position: absolute;
            bottom: 0px;
            cursor: pointer;
        }
    */});

    var lang = goOut.currentLang();

    goOut.eventApi({
        venueIds: [41007],
        language: lang,
    }, function(response) {
        var overlay = jQuery('<div>', {'class': 'goOutOverlay'})
            .appendTo('body');
        var modal = jQuery('<div>', {'class': 'goOutModal'})
            .appendTo(overlay);
        var closeButton = jQuery('<button>', {'class': 'goOutCloseButton', 'text': 'x'})
            .appendTo(modal);
        var modalHidden = true;

        jQuery('.et_pb_events_0 .event-content-wrapper.container').each(function(i, event) {
            event = jQuery(event);
            var date = event.attr('data-date');

            var schedule = response.timestamps[date];

            if (!schedule) {
                return;
            }
            var button = jQuery('<a>Tickets</a>')
                .addClass('goout-button et_pb_button et_pb_more_button')
                .insertAfter(event.find('.show-post-content'));

            button.click(function(e) {
                e.preventDefault();

                setTimeout(function() {
                    modalHidden = false;
                }, 500);
                overlay.show();
                jQuery('.goOutFrame').remove();
                goOut.frame(modal, schedule.sale.url + '&lessContact=2910', function(frame) {
                    frame.addEventListener("load", function() {
                        setTimeout(function() {
                            modalHidden = false;

                            var payload = {};
                            payload[catId] = 1;
                            frame.contentWindow.postMessage({tickets: payload, resetPreviousSelected: true}, "*");
                        }, 200);
                    });
                });
            });
        });

        jQuery(document).on('keydown', function(e) {
            if (e.keyCode === 27) { // ESC
                overlay.hide();
                modalHidden = true;
            }
        });

        closeButton.click(function(e) {
            overlay.hide();
            modalHidden = true;
        });

        jQuery(document).on('click', function(e) {
            if ($(e.target).closest(modal).length === 0) {
                if (!modalHidden) {
                    overlay.hide();
                    modalHidden = true;
                }
            }
        });
    });
})
