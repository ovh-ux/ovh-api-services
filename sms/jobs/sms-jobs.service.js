angular.module("ovh-api-services").service("SmsJobs", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsJobsLexi");
        }
    };
});
