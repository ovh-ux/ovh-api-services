angular.module("ovh-api-services").service("OvhApiMeAvailableAutomaticPaymentMeansLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeAvailableAutomaticPaymentMeansLexi");

    return $resource("/me/availableAutomaticPaymentMeans", { }, {
        get: { method: "GET", cache: cache, isArray: false }
    });
});
