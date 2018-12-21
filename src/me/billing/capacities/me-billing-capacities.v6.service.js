angular.module("ovh-api-services").service("OvhApiMeBillingCapacitiesV6", function ($cacheFactory, $resource) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiMeBillingCapacitiesQueryV6");

    var billingCapacitiesResource = $resource("/me/billing/capacities", {}, {
        query: {
            method: "GET",
            isArray: false,
            cache: queryCache
        }
    });

    billingCapacitiesResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return billingCapacitiesResource;
});
