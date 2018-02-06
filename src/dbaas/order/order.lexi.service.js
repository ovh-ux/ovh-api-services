angular.module("ovh-api-services").service("OvhApiDbaasOrderLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasOrderLexi");
    var queryCache = $cacheFactory("OvhApiDbaasOrderLexiQuery");
    var orderResource = $resource("/order/upgrade/logs/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache },
        saveOrder: {
            method: "POST",
            cache: cache,
            url: "/order/upgrade/logs/:serviceName/:planCode",
            params: {
                quantity: "@quantity"
            }
        }
    });

    orderResource.resetAllCache = function () {
        orderResource.resetCache();
        orderResource.resetQueryCache();
    };

    orderResource.resetCache = function () {
        cache.removeAll();
    };

    orderResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderResource;
});
