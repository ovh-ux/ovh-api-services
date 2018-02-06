angular.module("ovh-api-services").service("OvhApiTelephonyLineFunctionPhone", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLinePhoneFunctionLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyLinePhoneFunctionErika");
        },
        Aapi: angular.noop
    };
});
