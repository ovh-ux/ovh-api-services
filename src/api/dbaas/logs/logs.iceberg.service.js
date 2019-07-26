angular.module("ovh-api-services").service("OvhApiDbaasLogsIceberg", function (iceberg) {
    "use strict";

    var logsResource = iceberg("/dbaas/logs/:serviceName", {
        serviceName: "@serviceName"
    });

    return logsResource;
});
