angular.module("ovh-api-services").service("OvhApiDedicatedCloudUserRightV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudUserRightV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudUserRightV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var userRightResource = $resource("/dedicatedCloud/:serviceName/user/:userId/right/:rightId", {
        serviceName: "@serviceName",
        userId: "@userId",
        rightId: "@rightId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        put: { method: "PUT", interceptor: interceptor }
    });

    userRightResource.resetCache = function () {
        cache.removeAll();
    };

    userRightResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return userRightResource;
});
