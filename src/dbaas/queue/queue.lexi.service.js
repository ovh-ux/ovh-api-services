angular.module("ovh-api-services").service("OvhApiDbaasQueueLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasQueueLexi");
    var queryCache = $cacheFactory("OvhApiDbaasQueueLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var queueResource = $resource("/dbaas/queue/:appId", {
        appId: "@appId"
    }, {
        configure: { method: "POST", url: "/dbaas/queue/:appId/configure", interceptor: interceptor },
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        update: { method: "PUT", interceptor: interceptor }
    });

    queueResource.resetAllCache = function () {
        queueResource.resetCache();
        queueResource.resetQueryCache();
    };

    queueResource.resetCache = function () {
        cache.removeAll();
    };

    queueResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return queueResource;
});
