angular.module("ovh-api-services").service("OvhApiOrderCartItemV6", function ($resource, $cacheFactory) {

    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderCartItemV6Query");
    var cache = $cacheFactory("OvhApiOrderCartItemV6");

    var interceptor = {
        response: function (response) {
            orderCartItem.resetQueryCache();
            return response.data;
        }
    };

    var orderCartItem = $resource("/order/cart/:cartId/item/:itemId", {
        cartId: "@cartId",
        itemId: "@itemId"
    }, {
        query: { method: "GET", cache: queryCache },
        get: { method: "GET", cache: cache },
        put: { method: "PUT", interceptor: interceptor }
    });

    orderCartItem.resetCache = function () {
        cache.removeAll();
    };

    orderCartItem.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderCartItem;
});
