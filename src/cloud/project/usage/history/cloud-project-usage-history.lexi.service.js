angular.module("ovh-api-services").service("OvhApiCloudProjectUsageHistoryLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectUsageHistoryLexiQuery");
    var cache = $cacheFactory("OvhApiCloudProjectUsageHistoryLexi");

    var usages = $resource("/cloud/project/:serviceName/usage/history/:usageId", {
        serviceName: "@serviceName",
        usageId: "@usageId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    usages.resetCache = function () {
        cache.removeAll();
    };

    usages.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return usages;

});
