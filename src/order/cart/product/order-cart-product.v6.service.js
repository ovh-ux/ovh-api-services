angular.module("ovh-api-services").service("OvhApiOrderCartProductV6", function ($resource, $cacheFactory) {

    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderCartProductV6Query");
    var cache = $cacheFactory("OvhApiOrderCartProductV6");

    var interceptor = {
        response: function (response) {
            orderCartProduct.resetQueryCache();
            return response.data;
        }
    };

    var orderCartProduct = $resource("/order/cart/:cartId/:productName", {
        cartId: "@cartId",
        productName: "@productName"
    }, {
        get: { method: "GET", cache: cache, isArray: true },
        post: { method: "POST", interceptor: interceptor },
        postOption: {
            url: "/order/cart/:cartId/:productName/options",
            method: "POST",
            interceptor: interceptor }
    });

    orderCartProduct.resetCache = function () {
        cache.removeAll();
    };

    orderCartProduct.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderCartProduct;
});
