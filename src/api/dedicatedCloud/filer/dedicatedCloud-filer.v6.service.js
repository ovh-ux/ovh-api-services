angular.module("ovh-api-services").service("OvhApiDedicatedCloudFilerV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudFilerV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudFilerV6");

    var filerResource = $resource("/dedicatedCloud/:serviceName/filer/:filerId", {
        serviceName: "@serviceName",
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
