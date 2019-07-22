angular.module("ovh-api-services").service("OvhApiDedicatedCloudIpV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudIpV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudIpV6");

    var ipResource = $resource("/dedicatedCloud/:serviceName/ip/:network", {
        serviceName: "@serviceName",
        network: "@network"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache }
    });

    ipResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    ipResource.resetCache = function () {
        cache.removeAll();
    };

    return ipResource;
});
