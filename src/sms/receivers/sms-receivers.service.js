angular.module("ovh-api-services").service("OvhApiSmsReceivers", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsReceiversV6");
        }
    };
});
