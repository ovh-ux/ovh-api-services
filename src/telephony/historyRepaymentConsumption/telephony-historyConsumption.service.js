angular.module("ovh-api-services").service("TelephonyHistoryRepaymentConsumption", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyHistoryRepaymentConsumptionLexi");
        }
    };
});
