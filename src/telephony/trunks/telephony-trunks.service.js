angular.module("ovh-api-services").service("TelephonyTrunks", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyTrunksLexi");
        }
    };
});
