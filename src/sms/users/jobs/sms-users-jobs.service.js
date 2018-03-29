angular.module("ovh-api-services").service("OvhApiSmsUsersJobs", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsUsersJobsV6");
        }
    };
});
