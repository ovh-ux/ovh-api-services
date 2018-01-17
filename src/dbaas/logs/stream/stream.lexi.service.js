angular.module("ovh-api-services").service("OvhApiDbaasLogsStreamLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsStreamLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsStreamLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var streamResource = $resource("/dbaas/logs/{serviceName}/output/graylog/stream", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache }
    });

    streamResource.resetAllCache = function () {
        streamResource.resetCache();
        streamResource.resetQueryCache();
    };

    streamResource.resetCache = function () {
        cache.removeAll();
    };

    streamResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return streamResource;
});
