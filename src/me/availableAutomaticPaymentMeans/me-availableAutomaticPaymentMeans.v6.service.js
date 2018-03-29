angular.module("ovh-api-services").service("OvhApiMeAvailableAutomaticPaymentMeansV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeAvailableAutomaticPaymentMeansV6");

    return $resource("/me/availableAutomaticPaymentMeans", { }, {
        get: { method: "GET", cache: cache, isArray: false }
    });
});
