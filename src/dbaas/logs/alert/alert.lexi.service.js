angular.module("ovh-api-services").service("OvhApiDbaasLogsAlertLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsAlertLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsAlertLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var alertResource = $resource("/dbaas/logs/:serviceName/output/graylog/stream/:streamId/alert/:alertId", {
        serviceName: "@serviceName",
        streamId: "@streamId",
        alertId: "@alertId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        post: { method: "POST", interceptor: interceptor },
        put: { method: "PUT", interceptor: interceptor },
        "delete": { method: "DELETE", interceptor: interceptor }
    });

    alertResource.resetAllCache = function () {
        alertResource.resetCache();
        alertResource.resetQueryCache();
    };

    alertResource.resetCache = function () {
        cache.removeAll();
    };

    alertResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return alertResource;
});
