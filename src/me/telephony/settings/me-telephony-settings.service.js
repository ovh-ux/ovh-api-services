angular.module("ovh-api-services").service("OvhApiMeTelephonySettings", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMeTelephonySettingsLexi");
        }
    };
});
