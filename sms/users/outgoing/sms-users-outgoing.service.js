angular.module("ovh-api-services").service("SmsUsersOutgoing", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsUsersOutgoingLexi");
        }
    };
});
