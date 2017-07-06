angular.module("ovh-api-services").service("TelephonyLineClick2CallUser", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("TelephonyLineClick2CallUserLexi");
        },
        Aapi: angular.noop
    };
});
