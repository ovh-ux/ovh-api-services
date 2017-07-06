angular.module("ovh-api-services").service("TelephonyLineFunctionPhone", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLinePhoneFunctionLexi");
        },
        Aapi: angular.noop
    };
});
