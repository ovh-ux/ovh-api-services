angular.module("ovh-api-services").service("OvhApiTelephonySchedulerEvents", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonySchedulerEventsLexi");
        }
    };
});
