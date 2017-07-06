angular.module("ovh-api-services").service("SmsReceivers", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsReceiversLexi");
        }
    };
});
