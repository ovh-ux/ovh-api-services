angular.module("ovh-api-services").service("OvhApiSmsJobs", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("OvhApiSmsJobsLexi");
        }
    };
});
