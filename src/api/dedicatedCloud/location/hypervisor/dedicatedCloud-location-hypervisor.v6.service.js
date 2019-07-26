angular.module("ovh-api-services").service("OvhApiDedicatedCloudLocationHypervisorV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudLocationHypervisorV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudLocationHypervisorV6");


    var locationResource = $resource("/dedicatedCloud/location/:pccZone/hypervisor/:id", {
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
