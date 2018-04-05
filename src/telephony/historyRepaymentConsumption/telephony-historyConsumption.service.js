angular.module("ovh-api-services").service("OvhApiTelephonyHistoryRepaymentConsumption", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyHistoryRepaymentConsumptionV6");
        }
    };
});
