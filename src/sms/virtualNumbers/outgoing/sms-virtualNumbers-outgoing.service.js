angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersOutgoing", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsVirtualNumbersOutgoingLexi");
        }
    };
});
