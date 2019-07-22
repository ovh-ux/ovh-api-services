angular.module("ovh-api-services").service("OvhApiDbaasLogsStreamV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsStreamV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsStreamV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var streamResource = $resource("/dbaas/logs/:serviceName/output/graylog/stream/:streamId", {
        serviceName: "@serviceName",
        streamId: "@streamId"
    }, {
        get: { method: "GET", cache: cache },
        create: { method: "POST", interceptor: interceptor },
        update: { method: "PUT", interceptor: interceptor, url: "/dbaas/logs/:serviceName/output/graylog/stream/:streamId" },
        "delete": { method: "DELETE", interceptor: interceptor, url: "/dbaas/logs/:serviceName/output/graylog/stream/:streamId" },
        notifications: {
            method: "GET",
            url: "/dbaas/logs/:serviceName/output/graylog/stream/:streamId/alert",
            cache: cache,
            isArray: true
        }
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
