angular.module("ovh-api-services").service("DedicatedCloudUserLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedCloudUserLexiQuery");
    var cache = $cacheFactory("DedicatedCloudUserLexi");

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
        query: { method: "GET", cache: queryCache, isArray: true },
        save: { method: "POST", interceptor: interceptor },
        put: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    userResource.resetCache = function () {
        cache.removeAll();
    };

    userResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return userResource;
});
