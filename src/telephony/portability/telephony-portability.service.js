angular.module("ovh-api-services").service("OvhApiTelephonyPortability", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyPortabilityLexi");
        }
    };
});

