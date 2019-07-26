angular.module("ovh-api-services").service("OvhApiDedicatedCloudFederationActiveDirectoryV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudFederationActiveDirectoryV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudFederationActiveDirectoryV6");

    var activeDirectoryResource = $resource("/dedicatedCloud/:serviceName/federation/activeDirectory/:activeDirectoryId", {
        serviceName: "@serviceName",
        activeDirectoryId: "@activeDirectoryId"
    }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: cache }
    });

    activeDirectoryResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    activeDirectoryResource.resetCache = function () {
        cache.removeAll();
    };

    return activeDirectoryResource;
});
