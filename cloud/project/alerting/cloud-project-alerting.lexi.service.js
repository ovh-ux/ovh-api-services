angular.module("ovh-api-services").service("CloudProjectAlertingLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("CloudProjectAlertingLexiQuery");
    var cache = $cacheFactory("CloudProjectAlertingLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    var alertingResource = $resource("/cloud/project/:serviceName/alerting/:alertId", {
        serviceName: "@serviceName",
        alertId: "@alertId"
    }, {
        getIds: { method: "GET", cache: cache, isArray: true },
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: queryCache, isArray: true },
        save: { method: "POST", interceptor: interceptor },
        put: { method: "PUT", interceptor: interceptor },
        alert: {
            url: "/cloud/project/:serviceName/alerting/:alertId/alert",
            method: "GET",
            interceptor: interceptor
        }
    });

    alertingResource.resetCache = function () {
        cache.removeAll();
    };

    alertingResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return alertingResource;
});
