angular.module("ovh-api-services").service("OvhApiTelephonyServiceTask", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyServiceTaskV6");
        }
    };
});
