angular.module("ovh-api-services").service("OvhApiTelephonyScheduler", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonySchedulerV6");
        },
        Events: function () {
            return $injector.get("OvhApiTelephonySchedulerEvents");
        }
    };
});
