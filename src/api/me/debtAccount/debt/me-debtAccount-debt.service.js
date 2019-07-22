angular.module("ovh-api-services").service("OvhApiMeDebtAccountDebt", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeDebtAccountDebtV6");
        },
        Operation: function () {
            return $injector.get("OvhApiMeDebtAccountDebtOperation");
        }
    };
});
