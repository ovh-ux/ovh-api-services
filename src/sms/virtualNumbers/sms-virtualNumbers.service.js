angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbers", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsVirtualNumbersV6");
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
