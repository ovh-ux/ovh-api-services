angular.module("ovh-api-services").service("DBaasTsProjectBillingLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DBaasTsProjectBillingLexi");

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
