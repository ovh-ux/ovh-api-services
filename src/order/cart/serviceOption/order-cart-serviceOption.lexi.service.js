angular.module("ovh-api-services").service("OvhApiOrderCartServiceOptionLexi", function ($resource, $cacheFactory) {

    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderCartServiceOptionLexiQuery");
    var cache = $cacheFactory("OvhApiOrderCartServiceOptionLexi");

    var interceptor = {
        response: function (response) {
            orderCartServiceOption.resetQueryCache();
            return response.data;
        }
    };

    var orderCartServiceOption = $resource("/order/cartServiceOption/:productName/:serviceName", {
        productName: "@productName",
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache, isArray: true },
        post: { method: "POST", interceptor: interceptor }
    });

    orderCartServiceOption.resetCache = function () {
        cache.removeAll();
    };

    orderCartServiceOption.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderCartServiceOption;
});
