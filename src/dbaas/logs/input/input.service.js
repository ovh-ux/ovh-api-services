angular.module("ovh-api-services").service("OvhApiDbaasLogsInput", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsInputV6");
        },
        Iceberg: function () {
            return $injector.get("OvhApiDbaasLogsInputIceberg");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsInputAapi");
        }
    };
});
