angular.module("ovh-api-services").service("OvhApiTelephonyServiceRepaymentConsumption", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiTelephonyServiceRepaymentConsumptionAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiTelephonyServiceRepaymentConsumptionLexi");
        }
    };
});
