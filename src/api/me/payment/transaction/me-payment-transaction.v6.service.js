angular.module("ovh-api-services").service("OvhApiMePaymentTransactionV6", function ($resource) {
    "use strict";

    return $resource("/me/payment/transaction/:transactionId", {
        transactionId: "@transactionId"
    });
});
