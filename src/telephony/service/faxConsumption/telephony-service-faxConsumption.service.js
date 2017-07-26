angular.module("ovh-api-services").service("TelephonyServiceFaxConsumption", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("TelephonyServiceFaxConsumptionLexi");
        },
        Erika: function () {
            return $injector.get("TelephonyServiceFaxConsumptionErika");
        }
    };
});
