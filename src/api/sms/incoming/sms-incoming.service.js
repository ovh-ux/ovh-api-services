angular.module("ovh-api-services").service("OvhApiSmsIncoming", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsIncomingV6");
        }
    };
});
