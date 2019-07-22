angular.module("ovh-api-services").service("OvhApiMePaymentMean", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiMePaymentMeanV6");
        },
        BankAccount: function () {
            return $injector.get("OvhApiMePaymentMeanBankAccount");
        },
        CreditCard: function () {
            return $injector.get("OvhApiMePaymentMeanCreditCard");
        },
        DeferredPaymentAccount: function () {
            return $injector.get("OvhApiMePaymentMeanDeferredPaymentAccount");
        },
        Paypal: function () {
            return $injector.get("OvhApiMePaymentMeanPaypal");
        }
    };

});
