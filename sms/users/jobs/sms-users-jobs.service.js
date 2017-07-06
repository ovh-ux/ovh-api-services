angular.module("ovh-api-services").service("SmsUsersJobs", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsUsersJobsLexi");
        }
    };
});
