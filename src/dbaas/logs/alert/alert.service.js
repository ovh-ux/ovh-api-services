angular.module("ovh-api-services").service("OvhApiDbaasLogsAlert", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsAlertLexi");
        }
    };
});
