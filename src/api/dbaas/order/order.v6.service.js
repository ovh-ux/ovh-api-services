angular.module("ovh-api-services").service("OvhApiDbaasOrderV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasOrderV6");
    var queryCache = $cacheFactory("OvhApiDbaasOrderV6Query");

    var orderResource = $resource("/order/upgrade/logs/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache },
        saveOrder: {
            method: "POST",
            cache: cache,
            url: "/order/upgrade/logs/:serviceName/:planCode"
        },
        getCatalog: {
            method: "GET",
            cache: cache,
            url: "/order/catalog/formatted/logs"
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
