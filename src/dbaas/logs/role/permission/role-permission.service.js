angular.module("ovh-api-services").service("OvhApiDbaasLogsRolePermission", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsRolePermissionLexi");
        }
    };
});
