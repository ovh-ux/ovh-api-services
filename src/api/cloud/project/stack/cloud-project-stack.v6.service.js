angular.module("ovh-api-services").service("OvhApiCloudProjectStackV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiCloudProjectStackV6Query");
    var cache = $cacheFactory("OvhApiCloudProjectStackV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var stack = $resource("/cloud/project/:serviceName/stack/:stackId", {
        serviceName: "@serviceName",
        stackId: "@stackId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        availability: {
            url: "/cloud/project/:serviceName/stack/:stackId/availability",
            method: "GET",
            interceptor: interceptor
        },
        client: {
            url: "/cloud/project/:serviceName/stack/:stackId/client",
            method: "POST",
            interceptor: interceptor
        }
    });

    stack.resetCache = function () {
        cache.removeAll();
    };

    stack.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return stack;
});
