angular.module("ovh-api-services").service("OvhApiCloudProjContainerRegistryUsersV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjContainerRegistryUsersV6");
    var queryCache = $cacheFactory("OvhApiCloudProjContainerRegistryUsersV6Query");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            queryCache.removeAll();
            return response.resource;
        }
    };

    var usersResource = $resource("/cloud/project/:serviceName/containerRegistry/:registryId", {
        serviceName: "@serviceName",
        registryID: "@registryId",
        usersID: "@userId",
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
        },
    });

    usersResource.resetCache = function () {
        cache.removeAll();
    };

    usersResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return usersResource;
});
