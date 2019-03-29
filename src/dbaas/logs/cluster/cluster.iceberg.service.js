angular.module("ovh-api-services").service("OvhApiDbaasLogsClusterIceberg", function (iceberg) {
    "use strict";

    var clusterResource = iceberg("/dbaas/logs/:serviceName/cluster/:clusterId", {
        serviceName: "@serviceName",
        clusterId: "@clusterId"
    }, {
        query: { method: "GET", isArray: true },
        get: { method: "GET" }
    });

    return clusterResource;
});
