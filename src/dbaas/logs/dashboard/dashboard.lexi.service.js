angular.module("ovh-api-services").service("OvhApiDbaasLogsDashboardLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsDashboardLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsDashboardLexiQuery");
    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var dashboardResource = $resource("/dbaas/logs/:serviceName/output/graylog/dashboard/:dashboardId", {
        serviceName: "@serviceName",
        dashboardId: "@dashboardId"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        create: { method: "POST", interceptor: interceptor },
        update: { method: "PUT", interceptor: interceptor },
        remove: { method: "DELETE", interceptor: interceptor },
        duplicate: { method: "POST", url: "/dbaas/logs/:serviceName/output/graylog/dashboard/:dashboardId/duplicate", interceptor: interceptor }
    });

    dashboardResource.resetAllCache = function () {
        dashboardResource.resetCache();
        dashboardResource.resetQueryCache();
    };

    dashboardResource.resetCache = function () {
        cache.removeAll();
    };

    dashboardResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return dashboardResource;
});
