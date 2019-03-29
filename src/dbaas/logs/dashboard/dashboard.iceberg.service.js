angular.module("ovh-api-services").service("OvhApiDbaasLogsDashboardIceberg", function (iceberg) {
    "use strict";

    var dashboardResource = iceberg("/dbaas/logs/:serviceName/output/graylog/dashboard/:dashboardId", {
        serviceName: "@serviceName",
        dashboardId: "@dashboardId"
    }, {
        query: { method: "GET", isArray: true },
        create: { method: "POST" },
        update: { method: "PUT" },
        remove: { method: "DELETE" },
        duplicate: { method: "POST", url: "/dbaas/logs/:serviceName/output/graylog/dashboard/:dashboardId/duplicate" }
    });

    return dashboardResource;
});
