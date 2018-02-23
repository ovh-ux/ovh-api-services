angular.module("ovh-api-services").service("OvhApiDbaasLogsDetails", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsDetailsAapi");
        }
    };
});
