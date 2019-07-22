angular.module("ovh-api-services").service("OvhApiDbaasLogsOperation", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsOperationV6");
        },
        Iceberg: function () {
            return $injector.get("OvhApiDbaasLogsOperationIceberg");
        }
    };
});
