angular.module("ovh-api-services").service("OvhApiSmsUsersReceivers", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsUsersReceiversLexi");
        }
    };
});
