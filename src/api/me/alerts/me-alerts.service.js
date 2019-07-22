angular.module("ovh-api-services").service("OvhApiMeAlerts", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiMeAlertsAapi");
        }
    };
});
