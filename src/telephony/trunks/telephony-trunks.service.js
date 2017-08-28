angular.module("ovh-api-services").service("OvhApiTelephonyTrunks", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyTrunksLexi");
        }
    };
});
