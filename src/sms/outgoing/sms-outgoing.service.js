angular.module("ovh-api-services").service("SmsOutgoing", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsOutgoingLexi");
        }
    };
});
