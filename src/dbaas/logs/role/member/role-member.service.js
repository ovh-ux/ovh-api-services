angular.module("ovh-api-services").service("OvhApiDbaasLogsRoleMember", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsRoleMemberV6");
        }
    };
});
