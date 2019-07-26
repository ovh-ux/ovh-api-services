angular.module("ovh-api-services").service("OvhApiSmsOutgoing", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsOutgoingV6");
        }
    };
});
