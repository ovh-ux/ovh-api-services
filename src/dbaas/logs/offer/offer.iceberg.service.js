angular.module("ovh-api-services").service("OvhApiDbaasLogsOfferIceberg", function (iceberg) {
    "use strict";

    var offerResource = iceberg("/dbaas/logs/:serviceName/offer", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET" },
        offerDetail: {
            url: "/dbaas/logs/offer/:offerCode",
            method: "GET"
        }
    });

    return offerResource;
});
