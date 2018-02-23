angular.module("ovh-api-services").service("OvhApiDbaasLogsInputLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsInputLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsInputLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var inputResource = $resource("/dbaas/logs/:serviceName/input/:inputId", {
        serviceName: "@serviceName",
        inputId: "@inputId"
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
        updateLogstash: { method: "PUT", url: "/dbaas/logs/:serviceName/input/:inputId/configuration/logstash" },
        updateFlowgger: { method: "PUT", url: "/dbaas/logs/:serviceName/input/:inputId/configuration/flowgger" },
        linkStream: { method: "POST", url: "/dbaas/logs/:serviceName/output/graylog/stream/:streamId/input" },
        unlinkStream: { method: "DELETE", url: "/dbaas/logs/:serviceName/output/graylog/stream/:streamId/input/:inputId" },
        trustNetwork: { method: "POST", url: "/dbaas/logs/:serviceName/input/:inputId/allowedNetwork" },
        rejectNetwork: { method: "DELETE", url: "/dbaas/logs/:serviceName/input/:inputId/allowedNetwork/:allowedNetworkId" },
        logs: { method: "POST", url: "/dbaas/logs/:serviceName/input/:inputId/logs/url" },
        testResult: { method: "GET", url: "/dbaas/logs/:serviceName/input/:inputId/configtest/result" }
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
