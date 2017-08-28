angular.module("ovh-api-services").service("OvhApiUserPaymentMeanLexi", function (OvhApiUserPaymentMeanBankAccount, OvhApiUserPaymentMeanCreditCard, OvhApiUserPaymentMeanPaypal) {
    "use strict";

    return {
        getDefaultPaymentMean: function () {
            return OvhApiUserPaymentMeanCreditCard.Lexi().getDefaultPaymentMean().then(function (defaultPaymentMeanCreditCard) {
                if (defaultPaymentMeanCreditCard) {
                    defaultPaymentMeanCreditCard.paymentType = "creditCard";
                    return defaultPaymentMeanCreditCard;
                }
                return OvhApiUserPaymentMeanPaypal.Lexi().getDefaultPaymentMean().then(function (defaultPaymentMeanPaypal) {
                    if (defaultPaymentMeanPaypal) {
                        defaultPaymentMeanPaypal.paymentType = "paypal";
                        return defaultPaymentMeanPaypal;
                    }
                    return OvhApiUserPaymentMeanBankAccount.Lexi().getDefaultPaymentMean().then(function (defaultPaymentMeanBankAccount) {
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
