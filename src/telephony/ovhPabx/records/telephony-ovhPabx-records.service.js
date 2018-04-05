angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxRecords", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyOvhPabxRecordsV6");
        }
    };
});
