angular.module("ovh-api-services").service("OvhApiMePaymentMeanPaypalV6", function ($resource, $q) {
    "use strict";

    var resource = $resource("/me/paymentMean/paypal/:id", {
        id: "@id"
    }, {
        edit: {
            method: "PUT"
        },
        chooseAsDefaultPaymentMean: {
            method: "POST",
            url: "/me/paymentMean/paypal/:id/chooseAsDefaultPaymentMean"
        },
        challenge: {
            method: "POST",
            url: "/me/paymentMean/paypal/:id/challenge"
        }
    });

    resource.getDefaultPaymentMean = function () {
        var defaultPaymentMean;
        return resource.query().$promise.then(function (paypalIds) {
            var queue = [];
            angular.forEach(paypalIds, function (paypalId) {
                queue.push(resource.get({ id: paypalId }).$promise.then(function (paypal) {
                    if (paypal.defaultPaymentMean) {
                        defaultPaymentMean = paypal;
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
