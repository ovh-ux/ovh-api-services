angular.module("ovh-api-services").service("OvhApiMePaymentMeanDeferredPaymentAccountV6", function ($resource) {
    "use strict";

    return $resource("/me/paymentMean/deferredPaymentAccount/:id", {
        id: "@id"
    });
});
