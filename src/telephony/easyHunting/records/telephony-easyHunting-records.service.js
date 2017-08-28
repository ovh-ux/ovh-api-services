angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingRecords", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyHuntingRecordsLexi");
        }
    };
});
