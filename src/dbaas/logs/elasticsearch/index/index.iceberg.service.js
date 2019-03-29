angular.module("ovh-api-services").service("OvhApiDbaasLogsIndexIceberg", function (iceberg) {
    "use strict";

    var index = iceberg("/dbaas/logs/:serviceName/output/elasticsearch/index/:indexId", {
        serviceName: "@serviceName",
        indexId: "@indexId"
    }, {
        query: { method: "GET", isArray: true },
        get: { method: "GET" },
        post: { method: "POST" },
        put: { method: "PUT" },
        "delete": { method: "DELETE" }
    });

    return index;
});
