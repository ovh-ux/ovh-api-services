angular.module("ovh-api-services").service("OvhApiDbaasLogsUser", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsUserV6");
        }
    };
});
