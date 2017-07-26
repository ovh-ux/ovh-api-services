angular.module("ovh-api-services").service("TelephonyLineClick2Call", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLineClick2CallLexi");
        },
        User: function () {
            return $injector.get("TelephonyLineClick2CallUser");
        },
        Aapi: angular.noop
    };
});
