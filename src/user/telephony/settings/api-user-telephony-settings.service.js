angular.module("ovh-api-services").service("UserTelephonySettings", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserTelephonySettingsLexi");
        }
    };
});
