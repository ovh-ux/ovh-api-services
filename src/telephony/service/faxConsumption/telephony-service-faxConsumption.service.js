angular.module("ovh-api-services").service("OvhApiTelephonyServiceFaxConsumption", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyServiceFaxConsumptionV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyServiceFaxConsumptionV7");
        }
    };
});
