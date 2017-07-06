angular.module("ovh-api-services").service("SmsVirtualNumbersIncoming", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsVirtualNumbersIncomingLexi");
        }
    };
});
