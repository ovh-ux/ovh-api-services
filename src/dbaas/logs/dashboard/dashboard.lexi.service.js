angular.module("ovh-api-services").service("OvhApiDbaasLogsDashboardLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsDashboardLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsDashboardLexiQuery");

    var dashboardResource = $resource("/dbaas/logs/:serviceName/output/graylog/dashboard", {
        serviceName: "@serviceName"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
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
