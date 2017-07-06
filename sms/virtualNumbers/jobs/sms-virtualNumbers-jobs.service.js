angular.module("ovh-api-services").service("SmsVirtualNumbersJobs", function ($injector) {
    "use strict";
    return {
        Lexi: function () {
            return $injector.get("SmsVirtualNumbersJobsLexi");
        }
    };
});
