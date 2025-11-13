/*
omnisend_woo_data - object is created by WP, check following properties bellow
ajax_url
 */
let omnisend_email_submitted = '';
let omnisend_email_submit_in_progress = false;
const omnisend_contact_id = getCookieValue('omnisendContactID');

window.addEventListener('load', function () {
    const elements = ['#billing_email', '.wc-block-components-text-input > #email'];

    elements.forEach(function (selector) {
        var emailInput = document.querySelector(selector);
        if (emailInput) {
            emailInput.addEventListener('focus', omnisend_handle_email_change);
            emailInput.addEventListener('change', omnisend_handle_email_change);
        }
    });
});

function omnisend_handle_email_change(event) {
    if (omnisend_email_submit_in_progress) {
        return;
    }

    omnisend_email_submit_in_progress = true;

    var email = event.target.value;

    var validEmail = function (email) {
        return /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    };

    if (!validEmail(email)) {
        omnisend_email_submit_in_progress = false;
        return;
    }

    if (omnisend_email_submitted === email) {
        omnisend_email_submit_in_progress = false;
        return;
    }

    var urlParams = new URLSearchParams({
        action: 'omnisend_identify',
        email: email,
        _wpnonce: omnisend_woo_data.nonce
    });

    if (omnisend_contact_id) {
        urlParams.set('contact_id', omnisend_contact_id);
    }

    var url = omnisend_woo_data.ajax_url + '?' + urlParams.toString();

    fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json'
        }
    })
        .then(function (response) {
            var successful = response.status >= 200 && response.status < 400;
            if (successful) {
                omnisend_email_submitted = email;
            }
            omnisend_email_submit_in_progress = false;
        })
        .catch(function () {
            omnisend_email_submit_in_progress = false;
        });
}

function getCookieValue(key) {
    const cookies = Object.fromEntries(document.cookie.split('; ').map((cookie) => cookie.split('=')));
    return cookies[key] ? decodeURIComponent(cookies[key]) : null;
}
