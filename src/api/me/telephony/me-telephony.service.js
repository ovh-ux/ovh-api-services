angular.module("ovh-api-services").service("OvhApiMeTelephony", function ($injector) {
    "use strict";
    return {
        DefaultIpRestriction: function () {
            return $injector.get("OvhApiMeTelephonyDefaultIpRestriction");
        },
        Settings: function () {
            return $injector.get("OvhApiMeTelephonySettings");
        }
    };
});
