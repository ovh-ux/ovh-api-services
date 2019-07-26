angular.module("ovh-api-services").service("OvhApiTelephonyRsva", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyRsvaV6");
        }
    };
});
