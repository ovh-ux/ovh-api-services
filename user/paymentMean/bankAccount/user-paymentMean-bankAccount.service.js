angular.module("ovh-api-services").service("UserPaymentMeanBankAccount", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserPaymentMeanBankAccountLexi");
        }
    };

});
