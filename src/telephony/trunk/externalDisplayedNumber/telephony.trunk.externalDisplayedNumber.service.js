angular.module("ovh-api-services").service("OvhApiTelephonyTrunkExternalDisplayedNumber", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyTrunkExternalDisplayedNumberLexi");
        }
    };
});
