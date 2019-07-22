angular.module("ovh-api-services").service("OvhApiDedicatedCloudVlanV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudVlanV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudVlanV6");

    var vlanResource = $resource("/dedicatedCloud/:serviceName/vlan/:vlanId", {
        serviceName: "@serviceName",
        vlandId: "@vlanId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    vlanResource.resetCache = function () {
        cache.removeAll();
    };

    vlanResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return vlanResource;
});
