angular.module("ovh-api-services").service("UserAvailableAutomaticPaymentMeansLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("UserAvailableAutomaticPaymentMeansLexi");

    return $resource("/me/availableAutomaticPaymentMeans", { }, {
        get: { method: "GET", cache: cache, isArray: false }
    });
});
