angular.module("ovh-api-services").service("OvhApiTelephonyServiceRepaymentConsumption", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiTelephonyServiceRepaymentConsumptionAapi");
        },
        v6: function () {
            return $injector.get("OvhApiTelephonyServiceRepaymentConsumptionV6");
        }
    };
});
