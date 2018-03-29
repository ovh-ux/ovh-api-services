angular.module("ovh-api-services").service("OvhApiTelephonyTrunks", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyTrunksV6");
        }
    };
});
