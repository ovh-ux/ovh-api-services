angular.module("ovh-api-services").service("OvhApiDbaasLogsAlias", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsAliasAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsAliasLexi");
        }
    };
});
