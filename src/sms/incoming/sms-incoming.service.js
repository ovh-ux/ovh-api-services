angular.module("ovh-api-services").service("SmsIncoming", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsIncomingLexi");
        }
    };
});
