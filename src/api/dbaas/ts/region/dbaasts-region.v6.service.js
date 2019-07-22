angular.module("ovh-api-services").service("OvhApiDBaasTsRegionV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDBaasTsRegionV6Query");

    var regionResource = $resource("/dbaas/timeseries/region", {
    }, {
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    regionResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return regionResource;
});
