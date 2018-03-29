angular.module("ovh-api-services").service("OvhApiDbaasLogsOperationV6", function ($resource) {
    "use strict";

    var operationResource = $resource("/dbaas/logs/:serviceName/operation/:operationId", {
        serviceName: "@serviceName",
        operationId: "@operationId"
    }, {
        get: { method: "GET", url: "/dbaas/logs/:serviceName/operation/:operationId" }
    });
    return operationResource;
});
