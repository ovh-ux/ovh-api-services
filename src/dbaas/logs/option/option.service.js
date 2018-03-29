angular.module("ovh-api-services").service("OvhApiDbaasLogsOption", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsOptionV6");
        }
    };
});
