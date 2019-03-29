angular.module("ovh-api-services").service("OvhApiDbaasLogsStreamIceberg", function (iceberg) {
    "use strict";

    var streamResource = iceberg("/dbaas/logs/:serviceName/output/graylog/stream/:streamId", {
        serviceName: "@serviceName",
        streamId: "@streamId"
    }, {
        get: { method: "GET" },
        create: { method: "POST" },
        update: { method: "PUT", url: "/dbaas/logs/:serviceName/output/graylog/stream/:streamId" },
        "delete": { method: "DELETE", url: "/dbaas/logs/:serviceName/output/graylog/stream/:streamId" },
        notifications: {
            method: "GET",
            url: "/dbaas/logs/:serviceName/output/graylog/stream/:streamId/alert",
            isArray: true
        }
    });

    return streamResource;
});
