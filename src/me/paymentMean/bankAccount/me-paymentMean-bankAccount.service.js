angular.module("ovh-api-services").service("OvhApiMePaymentMeanBankAccount", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMePaymentMeanBankAccountV6");
        }
    };

});
