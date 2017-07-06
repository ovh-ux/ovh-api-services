angular.module("ovh-api-services").service("TelephonyScheduler", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonySchedulerLexi");
        },
        Events: function () {
            return $injector.get("TelephonySchedulerEvents");
        }
    };
});
