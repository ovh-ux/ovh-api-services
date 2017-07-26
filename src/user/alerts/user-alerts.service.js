angular.module("ovh-api-services").service("UserAlerts", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("UserAlertsAapi");
        }
    };
});
