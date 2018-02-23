angular.module("ovh-api-services").service("OvhApiDbaasLogsRoleMember", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsRoleMemberLexi");
        }
    };
});
