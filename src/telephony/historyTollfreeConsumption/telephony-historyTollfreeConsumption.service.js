angular.module("ovh-api-services").service("TelephonyHistoryTollfreeConsumption", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyHistoryTollfreeConsumptionLexi");
        }
    };
});
