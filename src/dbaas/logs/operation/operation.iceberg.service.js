angular.module("ovh-api-services").service("OvhApiDbaasLogsOperationIceberg", function (iceberg) {
    "use strict";

    var operationResource = iceberg("/dbaas/logs/:serviceName/operation/:operationId", {
        serviceName: "@serviceName",
        operationId: "@operationId"
    }, {
        get: { method: "GET", url: "/dbaas/logs/:serviceName/operation/:operationId" }
    });
    return operationResource;
});
