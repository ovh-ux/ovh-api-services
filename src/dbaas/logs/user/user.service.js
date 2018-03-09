angular.module("ovh-api-services").service("OvhApiDbaasLogsUser", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsUserLexi");
        }
    };
});
