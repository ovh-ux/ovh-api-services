angular.module("ovh-api-services").service("OvhApiAnalyticsPlatformsNodeV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiAnalyticsPlatformsNodeV6");
    var queryCache = $cacheFactory("OvhApiAnalyticsPlatformsNodeV6Query");

    var adpResource = $resource("/analytics/platforms/:serviceName/nodes/:nodeId", {
        serviceName: "@serviceName",
        nodeId: "@nodeId"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: { method: "GET", cache: cache }
    });

    adpResource.resetCache = function () {
        cache.removeAll();
    };

    adpResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return adpResource;
});
