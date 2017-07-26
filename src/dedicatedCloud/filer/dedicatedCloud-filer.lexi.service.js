angular.module("ovh-api-services").service("DedicatedCloudFilerLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedCloudFilerLexiQuery");
    var cache = $cacheFactory("DedicatedCloudFilerLexi");

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
