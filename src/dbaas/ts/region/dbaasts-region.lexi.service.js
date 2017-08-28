angular.module("ovh-api-services").service("OvhApiDBaasTsRegionLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDBaasTsRegionLexiQuery");

    var regionResource = $resource("/dbaas/timeseries/region", {
    }, {
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    regionResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return regionResource;
});
