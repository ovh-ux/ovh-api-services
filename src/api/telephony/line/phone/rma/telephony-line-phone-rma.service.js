angular.module("ovh-api-services").service("OvhApiTelephonyLinePhoneRMA", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLinePhoneRMAV6");
        },
        Aapi: angular.noop
    };
});
