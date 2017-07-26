angular.module("ovh-api-services").service("DbaasQueueRegionLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DbaasQueueRegionLexi");
    var queryCache = $cacheFactory("DbaasQueueRegionLexiQuery");

    var regionResource = $resource("/dbaas/queue/region", {
        regionId: "@regionId"
    }, {
        get: { method: "GET", cache: cache, url: "/dbaas/queue/region/:regionId" },
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    regionResource.resetAllCache = function () {
        regionResource.resetCache();
        regionResource.resetQueryCache();
    };

    regionResource.resetCache = function () {
        cache.removeAll();
    };

    regionResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return regionResource;
});
