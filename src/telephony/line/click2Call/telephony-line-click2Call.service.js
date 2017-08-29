angular.module("ovh-api-services").service("OvhApiTelephonyLineClick2Call", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLineClick2CallLexi");
        },
        User: function () {
            return $injector.get("OvhApiTelephonyLineClick2CallUser");
        },
        Aapi: angular.noop
    };
});
