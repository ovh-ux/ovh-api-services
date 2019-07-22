angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersIncoming", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsVirtualNumbersIncomingV6");
        }
    };
});
