angular.module("ovh-api-services").service("OvhApiDbaasLogsIndex", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsIndexV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsIndexAapi");
        }
    };
});
