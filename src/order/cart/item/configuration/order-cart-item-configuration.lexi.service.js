angular.module("ovh-api-services").service("OvhApiOrderCartItemConfigurationLexi", function ($resource, $cacheFactory) {

    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderCartItemConfigurationLexiQuery");
    var cache = $cacheFactory("OvhApiOrderCartItemConfigurationLexi");

    var interceptor = {
        response: function (response) {
            orderCartItemConfiguration.resetQueryCache();
            return response.data;
        }
    };

    var orderCartItemConfiguration = $resource("/order/cart/:cartId/item/:itemId/configuration/:configurationId", {
        cartId: "@cartId",
        itemId: "@itemId",
        configurationId: "@configurationId"
    }, {
        query: { method: "GET", cache: queryCache },
        get: { method: "GET", cache: cache },
        post: { method: "POST", interceptor: interceptor }
    });

    orderCartItemConfiguration.resetCache = function () {
        cache.removeAll();
    };

    orderCartItemConfiguration.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderCartItemConfiguration;
});
