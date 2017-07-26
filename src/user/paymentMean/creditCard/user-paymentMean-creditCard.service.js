angular.module("ovh-api-services").service("UserPaymentMeanCreditCard", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("UserPaymentMeanCreditCardLexi");
        }
    };

});
