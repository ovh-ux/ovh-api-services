angular.module("ovh-api-services").service("OvhApiDbaasLogsOfferLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsOfferLexi");
    var queryCache = $cacheFactory("OvhApiDbaasLogsOfferLexiQuery");
    var offerResource = $resource("/dbaas/logs/:serviceName/offer", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache }
    });

    offerResource.resetAllCache = function () {
        offerResource.resetCache();
        offerResource.resetQueryCache();
    };

    offerResource.resetCache = function () {
        cache.removeAll();
    };

    offerResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return offerResource;
});
