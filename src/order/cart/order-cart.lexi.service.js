angular.module("ovh-api-services").service("OvhApiOrderCartLexi", function ($resource, $cacheFactory) {

    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderCartLexiQuery");
    var cache = $cacheFactory("OvhApiOrderCartLexi");

    var interceptor = {
        response: function (response) {
            orderCart.resetQueryCache();
            return response.data;
        }
    };

    var orderCart = $resource("/order/cart/:cartId", {
        cartId: "@cartId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache, isArray: false },
        post: {
            method: "POST",
            interceptor: interceptor,
            url: "/order/cart"
        },
        put: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        assign: {
            method: "POST",
            url: "/order/cart/:cartId/assign"
        },
        checkout: {
            method: "POST",
            url: "/order/cart/:cartId/checkout"
        },
        summary: {
            method: "GET",
            url: "/order/cart/:cartId/summary"
        }
    });

    orderCart.resetCache = function () {
        cache.removeAll();
    };

    orderCart.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderCart;
});
