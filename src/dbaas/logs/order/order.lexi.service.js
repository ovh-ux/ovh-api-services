angular.module("ovh-api-services").service("OvhApiDbaasLogsOrderLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsOrderLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsOrderLexiQuery");
    var orderResource = $resource("/order/upgrade/logs/:serviceName", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache, isArray: true },
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
