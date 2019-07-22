angular.module("ovh-api-services").service("OvhApiTelephonyTrunkExternalDisplayedNumber", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyTrunkExternalDisplayedNumberV6");
        }
    };
});
