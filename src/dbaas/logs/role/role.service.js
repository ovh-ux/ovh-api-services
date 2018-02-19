angular.module("ovh-api-services").service("OvhApiDbaasLogsRole", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsRoleLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsRoleAapi");
        },
        Member: function() {
            return $injector.get("OvhApiDbaasLogsRoleMember");
        }
    };
});
