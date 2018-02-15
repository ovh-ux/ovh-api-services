angular.module("ovh-api-services").service("OvhApiDbaasLogsArchive", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiDbaasLogsArchiveLexi");
        }
    };
});
