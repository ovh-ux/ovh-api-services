angular.module("ovh-api-services").service("OvhApiMePaymentMeanBankAccountV6", function ($resource, $q) {
    "use strict";

    var resource = $resource("/me/paymentMean/bankAccount/:id", {
        id: "@id",
        state: "@state"
    }, {
        edit: {
            method: "PUT"
        },
        chooseAsDefaultPaymentMean: {
            method: "POST",
            url: "/me/paymentMean/bankAccount/:id/chooseAsDefaultPaymentMean"
        },
        challenge: {
            method: "POST",
            url: "/me/paymentMean/bankAccount/:id/challenge"
        }
    });

    resource.getDefaultPaymentMean = function () {
        var defaultPaymentMean;
        return resource.query({ state: "valid" }).$promise.then(function (bankAccountIds) {
            var queue = [];
            angular.forEach(bankAccountIds, function (bankAccountId) {
                queue.push(resource.get({ id: bankAccountId }).$promise.then(function (bankAccount) {
                    if (bankAccount.defaultPaymentMean) {
                        defaultPaymentMean = bankAccount;
                    }
                }));
            });
            return $q.all(queue).then(function () {
                return defaultPaymentMean;
            });
        });
    };

    return resource;
});
