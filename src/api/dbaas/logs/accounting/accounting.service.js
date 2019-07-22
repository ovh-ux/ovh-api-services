angular.module("ovh-api-services").service("OvhApiDbaasLogsAccounting", function ($injector) {
    "use strict";

    return {
        Aapi: function () {
            return $injector.get("OvhApiDbaasLogsAccountingAapi");
        }
    };
});
