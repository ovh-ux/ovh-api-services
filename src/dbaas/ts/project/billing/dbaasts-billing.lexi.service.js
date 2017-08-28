angular.module("ovh-api-services").service("OvhApiDBaasTsProjectBillingLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDBaasTsProjectBillingLexi");

    var billingResource = $resource("/dbaas/timeseries/:serviceName/consumption", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache }
    });

    billingResource.resetCache = function () {
        cache.removeAll();
    };

    return billingResource;
});
