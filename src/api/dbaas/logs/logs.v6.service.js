angular.module("ovh-api-services").service("OvhApiDbaasLogsV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsV6");
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
        update: { method: "PUT", interceptor: interceptor },
        serviceInfos: {
            method: "GET",
            url: "/dbaas/logs/:serviceName/serviceInfos",
            cache: cache
        }
    });

    logsResource.resetAllCache = function () {
        logsResource.resetCache();
    };

    logsResource.resetCache = function () {
        cache.removeAll();
    };

    return logsResource;
});
