angular.module("ovh-api-services").service("TelephonyLineAll", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("TelephonyLineAllAapi");
        }
    };
});
