angular.module("ovh-api-services").service("DBaasTsRegionLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DBaasTsRegionLexiQuery");

    var regionResource = $resource("/dbaas/timeseries/region", {
    }, {
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    regionResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return regionResource;
});
