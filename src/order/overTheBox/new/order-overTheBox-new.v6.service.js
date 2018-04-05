angular.module("ovh-api-services").service("OvhApiOrderOverTheBoxNewV6", function ($resource, $cacheFactory) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderOverTheBoxNewV6Query");
    var cache = $cacheFactory("OvhApiOrderOverTheBoxNewV6");

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
