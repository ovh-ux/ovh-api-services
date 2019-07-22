angular.module("ovh-api-services").service("OvhApiDbaasLogsRole", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsRoleV6");
        },
        Iceberg: function () {
            return $injector.get("OvhApiDbaasLogsRoleIceberg");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsRoleAapi");
        },
        Member: function () {
            return $injector.get("OvhApiDbaasLogsRoleMember");
        },
        Permission: function () {
            return $injector.get("OvhApiDbaasLogsRolePermission");
        }
    };
});
