angular.module("ovh-api-services").service("OvhApiSmsVirtualNumbersJobs", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiSmsVirtualNumbersJobsV6");
        }
    };
});
