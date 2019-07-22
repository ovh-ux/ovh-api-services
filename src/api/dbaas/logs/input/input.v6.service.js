angular.module("ovh-api-services").service("OvhApiDbaasLogsInputV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsInputV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsInputV6Query");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var inputResource = $resource("/dbaas/logs/:serviceName/input/:inputId", {
        serviceName: "@serviceName",
        inputId: "@inputId",
        allowedNetworkId: "@allowedNetworkId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        create: { method: "POST", interceptor: interceptor },
        update: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor },
        start: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/start" },
        restart: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/restart" },
        end: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/end" },
        logurl: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/logs/url" },
        test: { method: "POST", url: "/dbaas/logs/:serviceName/input/:inputId/configtest" },
        testResult: { method: "GET", url: "/dbaas/logs/:serviceName/input/:inputId/configtest/result" },
        updateLogstash: { method: "PUT", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/configuration/logstash" },
        updateFlowgger: { method: "PUT", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/configuration/flowgger" },
        trustNetwork: { method: "POST", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/allowedNetwork" },
        rejectNetwork: { method: "DELETE", interceptor: interceptor, url: "/dbaas/logs/:serviceName/input/:inputId/allowedNetwork/:allowedNetworkId" }
    });

    inputResource.resetAllCache = function () {
        inputResource.resetCache();
        inputResource.resetQueryCache();
    };

    inputResource.resetCache = function () {
        cache.removeAll();
    };

    inputResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return inputResource;
});
