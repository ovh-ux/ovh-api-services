angular.module("ovh-api-services").service("OvhApiDbaasLogsOfferV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDbaasLogsOfferV6");
    var queryCache = $cacheFactory("OvhApiDbaasLogsOfferV6Query");
    var offerResource = $resource("/dbaas/logs/:serviceName/offer", {
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache },
        offerDetail: {
            url: "/dbaas/logs/offer/:offerCode",
            method: "GET",
            cache: cache
        }
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
