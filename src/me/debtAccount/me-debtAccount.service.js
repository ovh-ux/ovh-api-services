angular.module("ovh-api-services").service("OvhApiMeDebtAccount", function ($injector) {
    "use strict";
    return {
        v6: function () {
            return $injector.get("OvhApiMeDebtAccountV6");
        },
        Debt: function () {
            return $injector.get("OvhApiMeDebtAccountDebt");
        }
    };
});
