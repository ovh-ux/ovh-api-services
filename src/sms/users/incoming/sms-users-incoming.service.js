angular.module("ovh-api-services").service("OvhApiSmsUsersIncoming", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsUsersIncomingV6");
        }
    };
});
