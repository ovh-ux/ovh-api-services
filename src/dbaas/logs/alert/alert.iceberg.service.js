angular.module("ovh-api-services").service("OvhApiDbaasLogsAlertIceberg", function (iceberg) {
    "use strict";

    var alertResource = iceberg("/dbaas/logs/:serviceName/output/graylog/stream/:streamId/alert/:alertId", {
        serviceName: "@serviceName",
        streamId: "@streamId",
        alertId: "@alertId"
    }, {
        query: { method: "GET", isArray: true },
        get: { method: "GET" },
        post: { method: "POST" },
        put: { method: "PUT" },
        "delete": { method: "DELETE" }
    });

    return alertResource;
});
