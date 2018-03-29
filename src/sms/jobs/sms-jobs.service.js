angular.module("ovh-api-services").service("OvhApiSmsJobs", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsJobsV6");
        }
    };
});
