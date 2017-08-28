angular.module("ovh-api-services").service("OvhApiSmsReceivers", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsReceiversLexi");
        }
    };
});
