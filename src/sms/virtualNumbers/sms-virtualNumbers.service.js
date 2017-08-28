angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbers", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsVirtualNumbersLexi");
        },
        Incoming: function () {
            return $injector.get("OvhApiSmsVirtualNumbersIncoming");
        },
        Jobs: function () {
            return $injector.get("OvhApiSmsVirtualNumbersJobs");
        },
        Outgoing: function () {
            return $injector.get("OvhApiSmsVirtualNumbersOutgoing");
        }
    };
});
