angular.module("ovh-api-services").service("OvhApiDBaasTsProjectBillingV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDBaasTsProjectBillingV6");

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
