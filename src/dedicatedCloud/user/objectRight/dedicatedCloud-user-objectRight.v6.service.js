angular.module("ovh-api-services").service("OvhApiDedicatedCloudUserObjectRightV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudUserObjectRightV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudUserObjectRightV6");

    var objectRightResource = $resource("/dedicatedCloud/:serviceName/user/:userId/objectRight/:objectRightId", {
        serviceName: "@serviceName",
        userId: "@userId",
        rightId: "@objectRightId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true }
    });

    objectRightResource.resetCache = function () {
        cache.removeAll();
    };

    objectRightResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return objectRightResource;
});
