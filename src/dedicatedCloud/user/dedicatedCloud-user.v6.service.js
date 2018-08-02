angular.module("ovh-api-services").service("OvhApiDedicatedCloudUserV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCloudUserV6Query");
    var cache = $cacheFactory("OvhApiDedicatedCloudUserV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var userResource = $resource("/dedicatedCloud/:serviceName/user/:userId", {
        serviceName: "@serviceName",
        userId: "@userId"
    }, {
        get: { method: "GET", cache: cache },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true,
            params: {
                name: "@name"
            }
        },
        save: { method: "POST", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        changeProperties: {
            url: "/dedicatedCloud/:serviceName/user/:userId/changeProperties",
            method: "POST",
            interceptor: interceptor
        }
    });

    userResource.resetCache = function () {
        cache.removeAll();
    };

    userResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return userResource;
});
