angular.module("ovh-api-services").service("OvhApiDbaasLogsIndexIceberg", function (iceberg) {
    "use strict";

    var index = iceberg("/dbaas/logs/:serviceName/output/elasticsearch/index/:indexId", {
        serviceName: "@serviceName",
        indexId: "@indexId"
    }, {
        post: { method: "POST" },
        put: { method: "PUT" }
    });

    return index;
});
