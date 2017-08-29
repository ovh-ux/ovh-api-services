angular.module("ovh-api-services").service("OvhApiMePaymentMeanBankAccount", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMePaymentMeanBankAccountLexi");
        }
    };

});
