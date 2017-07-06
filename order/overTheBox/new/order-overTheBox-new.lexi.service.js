angular.module("ovh-api-services").service("OrderOverTheBoxNewLexi", function ($resource, $cacheFactory) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OrderOverTheBoxNewLexiQuery");
    var cache = $cacheFactory("OrderOverTheBoxNewLexi");

    var orderOverTheBox = $resource("/order/overTheBox/new/:duration", {
        duration: "@duration"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache, isArray: false },
        save: { method: "POST", interceptor: interceptor }
    });

    var interceptor = {
        response: function (response) {
            orderOverTheBox.resetQueryCache();
            return response.data;
        }
    };


    orderOverTheBox.resetCache = function () {
        cache.removeAll();
    };

    orderOverTheBox.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderOverTheBox;
});
