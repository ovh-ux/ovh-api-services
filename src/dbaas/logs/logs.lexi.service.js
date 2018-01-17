angular.module("ovh-api-services").service("OvhApiDbaasLogsLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var logsResource = $resource("/dbaas/logs", {}, {
        get: { method: "GET", cache: cache }
    });

    logsResource.resetAllCache = function () {
        logsResource.resetCache();
        logsResource.resetQueryCache();
    };

    logsResource.resetCache = function () {
        cache.removeAll();
    };

    logsResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return logsResource;
});
