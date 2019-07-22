angular.module("ovh-api-services").service("OvhApiTelephonyPortability", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyPortabilityV6");
        }
    };
});

