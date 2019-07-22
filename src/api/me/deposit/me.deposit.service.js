angular.module("ovh-api-services").service("OvhApiMeDeposit", function ($injector) {
    "use strict";
    return {
        v7: function () {
            return $injector.get("OvhApiMeDepositV7");
        }
    };
});
