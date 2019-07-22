angular.module("ovh-api-services").service("OvhApiTelephonyTrunk", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyTrunkV6");
        },
        ExternalDisplayedNumber: function () {
            return $injector.get("OvhApiTelephonyTrunkExternalDisplayedNumber");
        }
    };
});
