angular.module("ovh-api-services").service("OvhApiMePaymentMeanCreditCardLexi", function ($resource, $q) {
    "use strict";

    var resource = $resource("/me/paymentMean/creditCard/:id", {
        id: "@id"
    });

    resource.getDefaultPaymentMean = function () {
        var defaultPaymentMean;
        return resource.query().$promise.then(function (creditCardIds) {
            var queue = [];
            angular.forEach(creditCardIds, function (creditCardId) {
                queue.push(resource.get({ id: creditCardId }).$promise.then(function (creditCard) {
                    if (creditCard.defaultPaymentMean) {
                        defaultPaymentMean = creditCard;
                    }
                }));
            });
            return $q.all(queue).then(function () {
                return defaultPaymentMean;
            });
        });
    };

    resource.getCreditCards = function () {
        return resource.query().$promise.then(function (ids) {
            var queue = [];
            angular.forEach(ids, function (id) {
                queue.push(resource.get({ id: id }).$promise);
            });
            return $q.all(queue);
        });
    };

    return resource;
});
