angular.module("ovh-api-services").service("OvhApiSmsUsersOutgoing", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsUsersOutgoingLexi");
        }
    };
});
