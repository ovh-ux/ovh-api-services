angular.module("ovh-api-services").service("TelephonyServiceRepaymentConsumption", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("TelephonyServiceRepaymentConsumptionAapi");
        },
        Lexi: function () {
            return $injector.get("TelephonyServiceRepaymentConsumptionLexi");
        }
    };
});
