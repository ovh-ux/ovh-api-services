angular.module("ovh-api-services").service("OvhApiDbaasLogsRolePermission", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsRolePermissionV6");
        },
        Iceberg: function () {
            return $injector.get("OvhApiDbaasLogsRolePermissionIceberg");
        }
    };
});
