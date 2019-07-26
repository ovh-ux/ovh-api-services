angular.module("ovh-api-services").service("OvhApiMeBillDebt", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeBillDebtV6");
        },
        Operation: function () {
            return $injector.get("OvhApiMeBillDebtOperation");
        }
    };
});
