angular.module("ovh-api-services").service("OvhApiDedicatedCloudDatacenterFilerLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudDatacenterFilerLexiQuery");
    var cache = $cacheFactory("OvhApiDedicatedCloudDatacenterFilerLexi");

    var filerResource = $resource("/dedicatedCloud/:serviceName/datacenter/:datacenterId/filer/:filerId", {
        serviceName: "@serviceName",
        datacenterId: "@datacenterId",
        filerId: "@filerId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    filerResource.resetCache = function () {
        cache.removeAll();
    };

    filerResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return filerResource;
});
