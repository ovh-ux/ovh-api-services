angular.module("ovh-api-services").service("OvhApiDbaasLogsAlias", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsAliasV6");
        },
        Iceberg: function () {
            return $injector.get("OvhApiDbaasLogsAliasIceberg");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsAliasAapi");
        }
    };
});
