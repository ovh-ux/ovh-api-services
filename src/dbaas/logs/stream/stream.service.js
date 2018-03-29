angular.module("ovh-api-services").service("OvhApiDbaasLogsStream", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsStreamV6");
        },

        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsStreamAapi");
        }
    };
});
