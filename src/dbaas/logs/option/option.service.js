angular.module("ovh-api-services").service("OvhApiDbaasLogsOption", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsOptionLexi");
        }
    };
});
