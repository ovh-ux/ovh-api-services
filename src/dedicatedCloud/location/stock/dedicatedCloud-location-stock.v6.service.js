angular.module("ovh-api-services").service("OvhApiDedicatedCloudLocationStockV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudLocationStockV6Query");

    var locationResource = $resource("/dedicatedCloud/location/:pccZone/stock/:type", {
        pccZone: "@pccZone",
        type: "@type"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    locationResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return locationResource;
});
