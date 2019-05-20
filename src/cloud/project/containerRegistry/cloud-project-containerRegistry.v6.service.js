angular.module("ovh-api-services").service("OvhApiCloudProjContainerRegistryV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjContainerRegistryV6");
    var queryCache = $cacheFactory("OvhApiCloudProjContainerRegistryV6Query");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            queryCache.removeAll();
            return response.resource;
        }
    };

    var registryResource = $resource("/cloud/project/:serviceName/containerRegistry/:registryId", {
        serviceName: "@serviceName",
        registryID: "@registryId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            interceptor: interceptor,
            params: {
                name: "@name"
            }
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
    });

    registryResource.resetCache = function () {
        cache.removeAll();
    };

    registryResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return registryResource;
});
