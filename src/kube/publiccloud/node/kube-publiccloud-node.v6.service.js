angular.module("ovh-api-services").service("OvhApiKubePublicCloudNodeV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiKubePublicCloudNodeV6");
    var queryCache = $cacheFactory("OvhApiKubePublicCloudNodeV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var nodeResource = $resource("/kube/:serviceName/publiccloud/node/:nodeId", {
        serviceName: "@serviceName",
        nodeId: "@nodeId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        save: {
            method: "POST",
            interceptor: interceptor,
            params: {
                flavorName: "@flavorName"
            }
        },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    nodeResource.resetCache = function () {
        cache.removeAll();
    };

    nodeResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return nodeResource;
});
