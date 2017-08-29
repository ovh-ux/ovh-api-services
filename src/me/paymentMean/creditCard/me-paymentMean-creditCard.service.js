angular.module("ovh-api-services").service("OvhApiMePaymentMeanCreditCard", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiMePaymentMeanCreditCardLexi");
        }
    };

});
