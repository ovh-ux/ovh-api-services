angular.module("ovh-api-services").service("OvhApiDbaasQueueKeyV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasQueueKeyV6");
    var queryCache = $cacheFactory("OvhApiDbaasQueueKeyV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var keyResource = $resource("/dbaas/queue/:appId/key/:keyId", {
        appId: "@appId",
        keyId: "@keyId"
    }, {
        create: { method: "POST", interceptor: interceptor },
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        update: { method: "PUT", interceptor: interceptor },
        changeSecret: { method: "POST", url: "/dbaas/queue/:appId/key/:keyId/changeSecret" },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    keyResource.resetAllCache = function () {
        keyResource.resetCache();
        keyResource.resetQueryCache();
    };

    keyResource.resetCache = function () {
        cache.removeAll();
    };

    keyResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return keyResource;
});
