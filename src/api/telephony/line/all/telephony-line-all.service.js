angular.module("ovh-api-services").service("OvhApiTelephonyLineAll", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiTelephonyLineAllAapi");
        }
    };
});
