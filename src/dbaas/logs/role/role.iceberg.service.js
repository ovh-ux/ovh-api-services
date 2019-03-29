angular.module("ovh-api-services").service("OvhApiDbaasLogsRoleIceberg", function (iceberg) {
    "use strict";

    var roleResource = iceberg("/dbaas/logs/:serviceName/role/:roleId", {
        serviceName: "@serviceName",
        roleId: "@roleId"
    }, {
        query: { method: "GET", isArray: true },
        getDetail: { method: "GET" },
        create: { method: "POST" },
        update: { method: "PUT" },
        remove: { method: "DELETE" }
    });

    return roleResource;
});
