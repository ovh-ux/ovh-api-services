angular.module("ovh-api-services").service("OvhApiTelephonyLineClick2Call", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLineClick2CallV6");
        },
        User: function () {
            return $injector.get("OvhApiTelephonyLineClick2CallUser");
        },
        Aapi: angular.noop
    };
});
