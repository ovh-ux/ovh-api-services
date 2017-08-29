angular.module("ovh-api-services").service("OvhApiTelephonyHistoryTollfreeConsumption", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyHistoryTollfreeConsumptionLexi");
        }
    };
});
