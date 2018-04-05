angular.module("ovh-api-services").service("OvhApiMeTelephonySettings", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMeTelephonySettingsV6");
        }
    };
});
