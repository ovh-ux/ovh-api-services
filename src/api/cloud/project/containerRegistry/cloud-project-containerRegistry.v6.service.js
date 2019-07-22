angular.module("ovh-api-services").service("OvhApiCloudProjectContainerRegistryV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectContainerRegistryV6");
    var queryCache = $cacheFactory("OvhApiCloudProjectContainerRegistryV6Query");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            queryCache.removeAll();
            return response.resource;
        }
    };

    var registryResource = $resource("/cloud/project/:serviceName/containerRegistry/:registryID", {
        serviceName: "@serviceName",
        registryID: "@registryID"
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
        }
    });

    registryResource.resetCache = function () {
        cache.removeAll();
    };

    registryResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return registryResource;
});
