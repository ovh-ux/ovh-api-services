angular.module("ovh-api-services").service("OvhApiTelephonyServiceFaxConsumption", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyServiceFaxConsumptionLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyServiceFaxConsumptionErika");
        }
    };
});
