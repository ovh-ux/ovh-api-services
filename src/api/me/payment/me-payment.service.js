angular.module("ovh-api-services").service("OvhApiMePayment", function ($injector) {
    "use strict";

    return {
        Method: function () {
            return $injector.get("OvhApiMePayMethod");
        },
        Transaction: function () {
            return $injector.get("OvhApiMePaymentTransaction");
        }
    };
});
