angular.module("ovh-api-services").service("OvhApiTelephonyHistoryRepaymentConsumption", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyHistoryRepaymentConsumptionLexi");
        }
    };
});
