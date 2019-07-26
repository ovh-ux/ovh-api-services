angular.module("ovh-api-services").service("OvhApiMePaymentMeanCreditCard", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMePaymentMeanCreditCardV6");
        }
    };

});
