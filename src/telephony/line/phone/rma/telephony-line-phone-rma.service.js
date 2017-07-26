angular.module("ovh-api-services").service("TelephonyLinePhoneRMA", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLinePhoneRMALexi");
        },
        Aapi: angular.noop
    };
});
