function klikenGetCartItems() {
    jQuery.post(fetchCartItems.ajax_url, {
        action: fetchCartItems.action,
        _ajax_nonce: fetchCartItems.nonce
    }, function (data) {
        // If no data is available, exit method.
        if (typeof sw !== 'object' || !data) return;

        let itemsForFBQ = [];
        let itemsForGTAG = [];
        let swCart = [];

        sw.config.currency = fetchCartItems.currency;

        for (let item in data) {
            itemsForFBQ.push({
                "id": `${data[item].product_id}`,
                "quantity": `${data[item].quantity}`
            });

            itemsForGTAG.push({
                "id": `${data[item].product_id}`,
                "name": `${data[item].product_name}`,
                "price": `${data[item].price}`,
                "quantity": `${data[item].quantity}`,
                "google_business_vertical": "retail"
            });

            swCart.push({
                "id": `${data[item].product_id}`,
                "name": `${data[item].product_name}`,
                "price": `${data[item].price}`,
                "quantity": `${data[item].quantity}`,
                "currency": sw.config.currency
            });
        }

        sw.track("AddToCart",
        {
            "content_type": "product",
            "contents": itemsForFBQ
        });

        sw.gEvent("add_to_cart",
        {
            "items": itemsForGTAG
        });

        sw.register_shopcart(
        {
            "items": swCart
        });
    });
}

jQuery(document).ready(function () {
    // Listen to those events.
    // 1. added_to_cart: A product is added to cart via AJAX.
    // 2. updated_cart_totals: Cart info changed, such as product quantity changed, or items being removed (not emptied).
    jQuery('body').on('added_to_cart updated_cart_totals', function () {
        klikenGetCartItems();
    });
});
