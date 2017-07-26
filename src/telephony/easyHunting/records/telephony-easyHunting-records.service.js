angular.module("ovh-api-services").service("TelephonyEasyHuntingRecords", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyHuntingRecordsLexi");
        }
    };
});
