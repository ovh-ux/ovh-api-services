angular.module("ovh-api-services").service("OvhApiOrderCartProductLexi", function ($resource, $cacheFactory) {

    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderCartProductLexiQuery");
    var cache = $cacheFactory("OvhApiOrderCartProductLexi");

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
        post: { method: "POST", interceptor: interceptor }
    });

    orderCartProduct.resetCache = function () {
        cache.removeAll();
    };

    orderCartProduct.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderCartProduct;
});
