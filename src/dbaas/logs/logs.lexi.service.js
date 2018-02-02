angular.module("ovh-api-services").service("OvhApiDbaasLogsLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsLexiQuery");

    var logsResource = $resource("/dbaas/logs/:serviceName", {
        serviceName: "@serviceName"
    }, {
        streams: {
            method: "GET",
            isArray: true,
            url: "/dbaas/logs/:serviceName/output/graylog/stream",
            cache: cache
        }
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
