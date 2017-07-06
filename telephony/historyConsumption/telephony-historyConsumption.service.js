angular.module("ovh-api-services").service("TelephonyHistoryConsumption", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyHistoryConsumptionLexi");
        }
    };
});
