angular.module("ovh-api-services").service("OvhApiDbaasLogsLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsLexi");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response;
        }
    };

    var logsResource = $resource("/dbaas/logs/:serviceName", {
        serviceName: "@serviceName"
    }, {
        streams: {
            method: "GET",
            isArray: true,
            url: "/dbaas/logs/:serviceName/output/graylog/stream",
            cache: cache
        },
        logDetail: { method: "GET", cache: cache },
        update: { method: "PUT", interceptor: interceptor }
    });

    logsResource.resetAllCache = function () {
        logsResource.resetCache();
    };

    logsResource.resetCache = function () {
        cache.removeAll();
    };

    return logsResource;
});
