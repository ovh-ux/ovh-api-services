angular.module("ovh-api-services").service("OvhApiSmsUsersJobs", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsUsersJobsLexi");
        }
    };
});
