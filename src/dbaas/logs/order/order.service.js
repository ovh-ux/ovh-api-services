angular.module("ovh-api-services").service("OvhApiDbaasLogsOrder", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsOrderLexi");
        }
    };
});
