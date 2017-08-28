angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersIncoming", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsVirtualNumbersIncomingLexi");
        }
    };
});
