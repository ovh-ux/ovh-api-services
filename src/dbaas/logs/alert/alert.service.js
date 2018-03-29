angular.module("ovh-api-services").service("OvhApiDbaasLogsAlert", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsAlertV6");
        }
    };
});
