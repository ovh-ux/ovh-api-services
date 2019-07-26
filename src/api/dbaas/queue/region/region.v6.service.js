angular.module("ovh-api-services").service("OvhApiDbaasQueueRegionV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasQueueRegionV6");
    var queryCache = $cacheFactory("OvhApiDbaasQueueRegionV6Query");

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
