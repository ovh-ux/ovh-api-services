angular.module("ovh-api-services").service("OvhApiDbaasLogsIndex", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsIndexLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsIndexAapi");
        }
    };
});
