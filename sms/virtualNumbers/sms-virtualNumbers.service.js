angular.module("ovh-api-services").service("SmsVirtualNumbers", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsVirtualNumbersLexi");
        },
        Incoming: function () {
            return $injector.get("SmsVirtualNumbersIncoming");
        },
        Jobs: function () {
            return $injector.get("SmsVirtualNumbersJobs");
        },
        Outgoing: function () {
            return $injector.get("SmsVirtualNumbersOutgoing");
        }
    };
});
