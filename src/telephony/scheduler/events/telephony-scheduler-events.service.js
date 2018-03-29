angular.module("ovh-api-services").service("OvhApiTelephonySchedulerEvents", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonySchedulerEventsV6");
        }
    };
});
