angular.module("ovh-api-services").service("OvhApiDbaasLogsInput", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsInputLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsInputAapi");
        }
    };
});
