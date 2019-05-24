angular.module("ovh-api-services").service("OvhApiCloudProjectContainerRegistryUsersV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectContainerRegistryUsersV6");
    var queryCache = $cacheFactory("OvhApiCloudProjectContainerRegistryUsersV6Query");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            queryCache.removeAll();
            return response.resource;
        }
    };

    var usersResource = $resource("/cloud/project/:serviceName/containerRegistry/:registryID/users/:userID", {
        serviceName: "@serviceName",
        registryID: "@registryID",
        usersID: "@userID"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    usersResource.resetCache = function () {
        cache.removeAll();
    };

    usersResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return usersResource;
});
