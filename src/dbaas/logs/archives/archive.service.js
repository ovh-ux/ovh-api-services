angular.module("ovh-api-services").service("OvhApiDbaasLogsArchive", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiDbaasLogsArchiveV6");
        }
    };
});
