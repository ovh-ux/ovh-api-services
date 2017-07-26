angular.module("ovh-api-services").service("TelephonyRsva", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyRsvaLexi");
        }
    };
});
