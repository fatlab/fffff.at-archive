jQuery(document).ready(function($){
    $(document).on('click', '.wpedon-stripe-button', function(e){
        e.preventDefault();

        const $button = $(this),
            $form = $button.parents('form'),
            $message = $form.find('.wpedon-stripe-message');

        if ($button.hasClass('processing')) return  false;
        $button.addClass('processing');

        $message.html('');

        $.post(wpedon.ajaxUrl, {
            action: 'wpedon_stripe_checkout_session',
            nonce: wpedon.nonce,
            data: $form.serialize(),
            location: window.location.href
        }, function(response) {
            if (response.success) {
                if ( wpedon.opens == '1' ) {
                    try {
                        const stripe = Stripe(response.data.stripeKey, {
                            stripeAccount: response.data.accountId
                        });
                        stripe.redirectToCheckout({
                            sessionId: response.data.sessionId
                        });
                    } catch (error) {
                        $message.html('<span class="stripe-error">' + error + '</span>');
                        $button.removeClass('processing');
                    }
                } else {
                    $button.removeClass('processing');

                    const siteUrl = location.protocol + '//' + location.host + location.pathname;

                    let params = new URLSearchParams(location.search);
                    params.delete('wpedon_stripe_success');
                    params = params.toString();

                    const url = siteUrl + '?' + new URLSearchParams({
                        'wpedon-stripe-checkout-redirect': 1,
                        'sk': response.data.stripeKey,
                        'ai': response.data.accountId,
                        'si': response.data.sessionId,
                        'rf': siteUrl + (params.length ? '?' + params : '')
                    });
                    window.open(url, '_blank').focus();
                }
            } else {
                $message.html('<span class="stripe-error">' + response.data.message + '</span>');
                $button.removeClass('processing');
            }
        })
        .fail(function() {
            $message.html('<span class="stripe-error">An unexpected error occurred. Please try again.</span>');
            $button.removeClass('processing');
        });

        return false;
    });
});