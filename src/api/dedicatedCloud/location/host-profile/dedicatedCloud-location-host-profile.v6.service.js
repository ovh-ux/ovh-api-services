angular.module("ovh-api-services").service("OvhApiDedicatedCloudLocationHostProfileV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudLocationHostProfileV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudLocationHostProfileV6");


    var locationResource = $resource("/dedicatedCloud/location/:pccZone/hostProfile/:id", {
        pccZone: "@pccZone",
        id: "@id"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache }
    });

    locationResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return locationResource;
});
