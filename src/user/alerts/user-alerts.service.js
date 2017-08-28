angular.module("ovh-api-services").service("OvhApiUserAlerts", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiUserAlertsAapi");
        }
    };
});
