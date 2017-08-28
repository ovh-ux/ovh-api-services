angular.module("ovh-api-services").service("OvhApiTelephonyLineClick2CallUser", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLineClick2CallUserLexi");
        },
        Aapi: angular.noop
    };
});
