angular.module("ovh-api-services").service("OvhApiDbaasLogsRoleMemberIceberg", function (iceberg) {
    "use strict";

    var memberResource = iceberg("/dbaas/logs/:serviceName/role/:roleId/member/:username", {
        serviceName: "@serviceName",
        roleId: "@roleId",
        username: "@username"
    }, {
        query: { method: "GET", isArray: true },
        create: { method: "POST", url: "/dbaas/logs/:serviceName/role/:roleId/member" },
        update: { method: "PUT" },
        remove: { method: "DELETE" }
    });

    return memberResource;
});
