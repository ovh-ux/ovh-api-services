angular.module("ovh-api-services").service("OvhApiDbaasLogsOptionIceberg", function (iceberg) {
    "use strict";

    var optionResource = iceberg("/dbaas/logs/:serviceName/option/{optionId}", {
        serviceName: "@serviceName",
        optionId: "@optionId"
    }, {
        get: { method: "GET" },
        query: { method: "GET", isArray: true },
        terminate: { method: "POST", url: "/dbaas/logs/:serviceName/option/:optionId/terminate" }
    });

    return optionResource;
});
