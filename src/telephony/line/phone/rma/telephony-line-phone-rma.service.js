angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneRMA", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLinePhoneRMALexi");
        },
        Aapi: angular.noop
    };
});
