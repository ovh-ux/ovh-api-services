angular.module("ovh-api-services").service("OvhApiTelephonyTrunk", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyTrunkLexi");
        },
        ExternalDisplayedNumber: function () {
            return $injector.get("OvhApiTelephonyTrunkExternalDisplayedNumber");
        }
    };
});
