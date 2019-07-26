angular.module("ovh-api-services").service("OvhApiDbaasLogsOptionIceberg", function (iceberg) {
    "use strict";

    var optionResource = iceberg("/dbaas/logs/:serviceName/option/{optionId}", {
        serviceName: "@serviceName",
        optionId: "@optionId"
    }, {
        terminate: { method: "POST", url: "/dbaas/logs/:serviceName/option/:optionId/terminate" }
    });

    return optionResource;
});
