angular.module("ovh-api-services").service("OvhApiDbaasLogsTokens", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsTokensV6");
        },
        Iceberg: function () {
            return $injector.get("OvhApiDbaasLogsTokensIceberg");
        }
    };
});
