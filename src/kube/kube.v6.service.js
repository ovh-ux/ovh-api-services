angular.module("ovh-api-services").service("OvhApiKubeV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiKubeV6");
    var queryCache = $cacheFactory("OvhApiKubeV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var kubeResource = $resource("/kube/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        update: {
            method: "PUT",
            interceptor: interceptor,
            params: {
                name: "@name"
            }
        },
        getKubeConfig: {
            url: "/kube/:serviceName/kubeconfig",
            method: "GET",
            cache: cache
        },
        getServiceInfos: {
            url: "/kube/:serviceName/serviceInfos",
            method: "GET",
            cache: cache
        },
        updateServiceInfos: {
            url: "/kube/:serviceName/serviceInfos",
            method: "PUT",
            interceptor: interceptor
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
