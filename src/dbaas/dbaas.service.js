angular.module("ovh-api-services").service("OvhApiDbaas", function ($injector) {
    "use strict";

    return {
        Queue: function () {
            return $injector.get("OvhApiDbaasQueue");
        },
        Logs: function () {
            return $injector.get("OvhApiDbaasLogs");
        },
        Order: function () {
            return $injector.get("OvhApiDbaasOrder");
        }
    };
});
