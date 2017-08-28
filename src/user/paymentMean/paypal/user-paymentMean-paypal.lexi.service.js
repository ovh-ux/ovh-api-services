angular.module("ovh-api-services").service("OvhApiUserPaymentMeanPaypalLexi", function ($resource, $q) {
    "use strict";

    var resource = $resource("/me/paymentMean/paypal/:id", {
        id: "@id"
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
