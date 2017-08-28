angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxRecords", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyOvhPabxRecordsLexi");
        }
    };
});
