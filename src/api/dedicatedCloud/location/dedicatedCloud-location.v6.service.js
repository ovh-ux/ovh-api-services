angular.module("ovh-api-services").service("OvhApiDedicatedCloudLocationV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudLocationV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudLocationV6");

    var locationResource = $resource("/dedicatedCloud/location/:pccZone", {
        pccZone: "@pccZone"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    locationResource.resetCache = function () {
        cache.removeAll();
    };

    locationResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return locationResource;
});
