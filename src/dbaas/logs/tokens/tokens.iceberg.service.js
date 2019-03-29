angular.module("ovh-api-services").service("OvhApiDbaasLogsTokensIceberg", function (iceberg) {
    "use strict";

    var tokenResource = iceberg("/dbaas/logs/:serviceName/token/:tokenId", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET" },
        create: { method: "POST" },
        remove: { method: "DELETE" },
        query: { method: "GET", isArray: true }
    });

    return tokenResource;
});
