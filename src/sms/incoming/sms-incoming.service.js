angular.module("ovh-api-services").service("OvhApiSmsIncoming", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsIncomingLexi");
        }
    };
});
