angular.module("ovh-api-services").service("DBaasTsProjectQuotaLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DBaasTsProjectQuotaLexiQuery");
    var cache = $cacheFactory("DBaasTsProjectQuotaLexi");

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
