angular.module("ovh-api-services").service("OvhApiMePaymentMeanLexi", function (OvhApiMePaymentMeanBankAccount, OvhApiMePaymentMeanCreditCard, OvhApiMePaymentMeanPaypal) {
    "use strict";

    return {
        getDefaultPaymentMean: function () {
            return OvhApiMePaymentMeanCreditCard.Lexi().getDefaultPaymentMean().then(function (defaultPaymentMeanCreditCard) {
                if (defaultPaymentMeanCreditCard) {
                    defaultPaymentMeanCreditCard.paymentType = "creditCard";
                    return defaultPaymentMeanCreditCard;
                }
                return OvhApiMePaymentMeanPaypal.Lexi().getDefaultPaymentMean().then(function (defaultPaymentMeanPaypal) {
                    if (defaultPaymentMeanPaypal) {
                        defaultPaymentMeanPaypal.paymentType = "paypal";
                        return defaultPaymentMeanPaypal;
                    }
                    return OvhApiMePaymentMeanBankAccount.Lexi().getDefaultPaymentMean().then(function (defaultPaymentMeanBankAccount) {
                        if (defaultPaymentMeanBankAccount) {
                            defaultPaymentMeanBankAccount.paymentType = "bankAccount";
                            return defaultPaymentMeanBankAccount;
                        }

                        return null;
                    });

                });

            });
        }
    };
});
