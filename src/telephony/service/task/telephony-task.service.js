angular.module("ovh-api-services").service("OvhApiTelephonyServiceTask", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyServiceTaskLexi");
        }
    };
});
