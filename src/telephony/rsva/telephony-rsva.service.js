angular.module("ovh-api-services").service("OvhApiTelephonyRsva", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyRsvaLexi");
        }
    };
});
