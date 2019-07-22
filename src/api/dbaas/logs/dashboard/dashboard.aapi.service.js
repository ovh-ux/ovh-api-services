angular.module("ovh-api-services").service("OvhApiDbaasLogsDashboardAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsDashboardAapi");

    var dashboard = $resource("/dbaas/logs/:serviceName/dashboard/:dashboardId", {
        serviceName: "@serviceName",
        dashboardId: "@dashboardId"
    }, {
        get: {
            method: "GET",
            serviceType: "aapi",
            cache: cache,
            isArray: false
        }
    });

    dashboard.resetAllCache = function () {
        dashboard.resetCache();
    };

    dashboard.resetCache = function () {
        cache.removeAll();
    };

    return dashboard;
});
