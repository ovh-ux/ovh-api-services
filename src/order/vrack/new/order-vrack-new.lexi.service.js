angular.module("ovh-api-services").service("OvhApiOrderVrackNewLexi", function ($resource, $cacheFactory) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderVrackNewLexiQuery");
    var cache = $cacheFactory("OvhApiOrderVrackNewLexi");

    var orderVrack = $resource("/order/vrack/new", {
        quantity: "@quantity"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache, isArray: false },
        create: { method: "POST", interceptor: interceptor }

    });

    var interceptor = {
        response: function (response) {
            orderVrack.resetQueryCache();
            return response.data;
        }
    };

    orderVrack.resetCache = function () {
        cache.removeAll();
    };

    orderVrack.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderVrack;
});
