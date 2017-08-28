angular.module("ovh-api-services").service("OvhApiTelephonyScheduler", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonySchedulerLexi");
        },
        Events: function () {
            return $injector.get("OvhApiTelephonySchedulerEvents");
        }
    };
});
