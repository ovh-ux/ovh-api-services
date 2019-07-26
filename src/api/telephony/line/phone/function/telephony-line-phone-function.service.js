angular.module("ovh-api-services").service("OvhApiTelephonyLineFunctionPhone", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLinePhoneFunctionV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyLinePhoneFunctionV7");
        },
        Aapi: angular.noop
    };
});
