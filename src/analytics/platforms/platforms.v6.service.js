angular.module("ovh-api-services").service("OvhApiAnalyticsPlatformsV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiAnalyticsPlatformsV6");
    var queryCache = $cacheFactory("OvhApiAnalyticsPlatformsV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var adpResource = $resource("/analytics/platforms/:serviceName", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        deploy: {
            method: "POST",
            interceptor: interceptor
        },
        getActivity: {
            url: "/analytics/platforms/{serviceName}/activity",
            method: "GET",
            cache: cache
        },
        getNodes: {
            url: "/analytics/platforms/{serviceName}/nodes",
            method: "GET",
            cache: cache
        },
        getStatus: {
            url: "/analytics/platforms/{serviceName}/status",
            method: "GET",
            interceptor: interceptor
        }
    });

    adpResource.resetCache = function () {
        cache.removeAll();
    };

    adpResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return adpResource;
});
