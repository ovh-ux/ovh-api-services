angular.module("ovh-api-services").service("OvhApiDbaasLogsDashboardIceberg", function (iceberg) {
    "use strict";

    var dashboardResource = iceberg("/dbaas/logs/:serviceName/output/graylog/dashboard/:dashboardId", {
        serviceName: "@serviceName",
        dashboardId: "@dashboardId"
    }, {
        create: { method: "POST" },
        update: { method: "PUT" },
        duplicate: { method: "POST", url: "/dbaas/logs/:serviceName/output/graylog/dashboard/:dashboardId/duplicate" }
    });

    return dashboardResource;
});
