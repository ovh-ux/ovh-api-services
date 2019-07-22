angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingRecords", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingRecordsV6");
        }
    };
});
