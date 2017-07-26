angular.module("ovh-api-services").service("UserTelephony", function ($injector) {
    "use strict";
    return {
        DefaultIpRestriction: function () {
            return $injector.get("UserTelephonyDefaultIpRestriction");
        },
        Settings: function () {
            return $injector.get("UserTelephonySettings");
        }
    };
});
