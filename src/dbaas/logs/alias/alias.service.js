angular.module("ovh-api-services").service("OvhApiDbaasLogsAlias", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsAliasAapi");
        },
        v6: function () {
            return $injector.get("OvhApiDbaasLogsAliasV6");
        }
    };
});
