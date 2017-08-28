angular.module("ovh-api-services").service("OvhApiUserAvailableAutomaticPaymentMeansLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiUserAvailableAutomaticPaymentMeansLexi");

    return $resource("/me/availableAutomaticPaymentMeans", { }, {
        get: { method: "GET", cache: cache, isArray: false }
    });
});
