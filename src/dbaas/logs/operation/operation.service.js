angular.module("ovh-api-services").service("OvhApiDbaasLogsOperation", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsOperationLexi");
        }
    };
});
