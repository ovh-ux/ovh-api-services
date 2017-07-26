angular.module("ovh-api-services").service("UserPaymentMeanLexi", function (UserPaymentMeanBankAccount, UserPaymentMeanCreditCard, UserPaymentMeanPaypal) {
    "use strict";

    return {
        getDefaultPaymentMean: function () {
            return UserPaymentMeanCreditCard.Lexi().getDefaultPaymentMean().then(function (defaultPaymentMeanCreditCard) {
                if (defaultPaymentMeanCreditCard) {
                    defaultPaymentMeanCreditCard.paymentType = "creditCard";
                    return defaultPaymentMeanCreditCard;
                }
                return UserPaymentMeanPaypal.Lexi().getDefaultPaymentMean().then(function (defaultPaymentMeanPaypal) {
                    if (defaultPaymentMeanPaypal) {
                        defaultPaymentMeanPaypal.paymentType = "paypal";
                        return defaultPaymentMeanPaypal;
                    }
                    return UserPaymentMeanBankAccount.Lexi().getDefaultPaymentMean().then(function (defaultPaymentMeanBankAccount) {
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
