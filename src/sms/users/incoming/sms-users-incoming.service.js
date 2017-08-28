angular.module("ovh-api-services").service("OvhApiSmsUsersIncoming", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsUsersIncomingLexi");
        }
    };
});
