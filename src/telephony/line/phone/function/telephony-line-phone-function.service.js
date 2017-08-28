angular.module("ovh-api-services").service("OvhApiTelephonyLineFunctionPhone", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLinePhoneFunctionLexi");
        },
        Aapi: angular.noop
    };
});
