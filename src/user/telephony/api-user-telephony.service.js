angular.module("ovh-api-services").service("OvhApiUserTelephony", function ($injector) {
    "use strict";
    return {
        DefaultIpRestriction: function () {
            return $injector.get("OvhApiUserTelephonyDefaultIpRestriction");
        },
        Settings: function () {
            return $injector.get("OvhApiUserTelephonySettings");
        }
    };
});
