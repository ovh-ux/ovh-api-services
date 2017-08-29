angular.module("ovh-api-services").service("OvhApiSmsOutgoing", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsOutgoingLexi");
        }
    };
});
