angular.module("ovh-api-services").service("OvhApiDedicatedCloudIpDetailsV6", function ($cacheFactory, $resource) {
    "use strict";
    var cache = $cacheFactory("OvhApiDedicatedCloudIpDetailsV6");

    var ipDetailsResource = $resource("/dedicatedCloud/:serviceName/ip/:network/details", {
        serviceName: "@serviceName",
        network: "@network"
    }, {
        get: { method: "GET", cache: cache, isArray: true }
    });

    ipDetailsResource.resetCache = function () {
        cache.removeAll();
    };

    return ipDetailsResource;
});
