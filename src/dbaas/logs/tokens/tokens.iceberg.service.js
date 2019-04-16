angular.module("ovh-api-services").service("OvhApiDbaasLogsTokensIceberg", function (iceberg) {
    "use strict";

    var tokenResource = iceberg("/dbaas/logs/:serviceName/token/:tokenId", {
        serviceName: "@serviceName"
    }, {
        create: { method: "POST" }
    });

    return tokenResource;
});
