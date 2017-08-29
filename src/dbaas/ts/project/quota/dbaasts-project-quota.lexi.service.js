angular.module("ovh-api-services").service("OvhApiDBaasTsProjectQuotaLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDBaasTsProjectQuotaLexiQuery");
    var cache = $cacheFactory("OvhApiDBaasTsProjectQuotaLexi");

    var quotaResource = $resource("/dbaas/timeseries/:serviceName/quota", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        enlarge: { method: "POST", url: "/dbaas/timeseries/:serviceName/quota/enlarge" }
    });

    quotaResource.resetAllCache = function () {
        quotaResource.resetCache();
        quotaResource.resetQueryCache();
    };

    quotaResource.resetCache = function () {
        cache.removeAll();
    };

    quotaResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return quotaResource;
});
