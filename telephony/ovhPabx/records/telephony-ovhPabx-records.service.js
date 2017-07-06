angular.module("ovh-api-services").service("TelephonyOvhPabxRecords", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyOvhPabxRecordsLexi");
        }
    };
});
