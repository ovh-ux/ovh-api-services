angular.module("ovh-api-services").service("TelephonyPortability", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyPortabilityLexi");
        }
    };
});

