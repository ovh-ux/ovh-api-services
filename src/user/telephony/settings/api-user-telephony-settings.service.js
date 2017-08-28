angular.module("ovh-api-services").service("OvhApiUserTelephonySettings", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiUserTelephonySettingsLexi");
        }
    };
});
