angular.module("ovh-api-services").service("OvhApiDbaasLogsStream", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsStreamLexi");
        },

        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsStreamAapi");
        }
    };
});
