angular.module("ovh-api-services").service("OvhApiCloudProjectKubeV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudProjectKubeV6");
    var queryCache = $cacheFactory("OvhApiCloudProjectKubeV6Query");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            queryCache.removeAll();
            return response.resource;
        }
    };

    var kubeResource = $resource("/cloud/project/:serviceName/kube/:kubeId", {
        serviceName: "@serviceName",
        kubeId: "@kubeId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        save: {
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
        getKubeConfig: {
            url: "/cloud/project/:serviceName/kube/:kubeId/kubeconfig",
            method: "GET",
            cache: cache
        },
        reset: {
            url: "/cloud/project/:serviceName/kube/:kubeId/reset",
            method: "POST",
            interceptor: interceptor
        },
        updateVersion: {
            url: "/cloud/project/:serviceName/kube/:kubeId/update",
            method: "POST",
            interceptor: interceptor
        },
        updatePolicy: {
            url: "/cloud/project/:serviceName/kube/:kubeId/updatePolicy",
            method: "PUT",
            interceptor: interceptor
        },
        getSchema: {
            url: "/kube.json",
            method: "GET"
        }
    });

    kubeResource.resetCache = function () {
        cache.removeAll();
    };

    kubeResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return kubeResource;
});
