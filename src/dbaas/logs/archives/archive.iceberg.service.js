angular.module("ovh-api-services").service("OvhApiDbaasLogsArchiveIceberg", function (iceberg) {
    "use strict";

    var archiveResource = iceberg("/dbaas/logs/:serviceName/output/graylog/stream/:streamId/archive/:archiveId", {
        serviceName: "@serviceName",
        streamId: "@streamId",
        archiveId: "@archiveId",
        expirationInSeconds: "@expirationInSeconds"
    }, {
        query: { method: "GET", isArray: true },
        get: { method: "GET" },
        url: { method: "POST", url: "/dbaas/logs/:serviceName/output/graylog/stream/:streamId/archive/:archiveId/url" }
    });

    return archiveResource;
});
