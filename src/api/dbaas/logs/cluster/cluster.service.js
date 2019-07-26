angular.module("ovh-api-services").service("OvhApiDbaasLogsCluster", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsClusterV6");
        },
        Iceberg: function () {
            return $injector.get("OvhApiDbaasLogsClusterIceberg");
        }
    };
});
