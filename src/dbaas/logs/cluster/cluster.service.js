angular.module("ovh-api-services").service("OvhApiDbaasLogsCluster", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsClusterLexi");
        }
    };
});
