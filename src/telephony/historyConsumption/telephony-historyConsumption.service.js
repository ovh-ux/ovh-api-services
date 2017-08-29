angular.module("ovh-api-services").service("OvhApiTelephonyHistoryConsumption", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyHistoryConsumptionLexi");
        }
    };
});
