angular.module("ovh-api-services").service("SmsUsersIncoming", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsUsersIncomingLexi");
        }
    };
});
