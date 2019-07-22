angular.module("ovh-api-services").service("OvhApiDbaasLogsIndex", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsIndexV6");
        },
        Iceberg: function () {
            return $injector.get("OvhApiDbaasLogsIndexIceberg");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsIndexAapi");
        }
    };
});
