angular.module("ovh-api-services").service("OvhApiMeBillV6", function ($resource, $cacheFactory) {
    "use strict";

    // we don't need cache for query : it's just list of IDs and we don't know if a new bill is emited
    var cache = $cacheFactory("OvhApiMeBillV6");

    var userBillResource = $resource("/me/bill/:billId", {
        billId: "@billId"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", isArray: true }
    });

    userBillResource.resetCache = function () {
        cache.removeAll();
    };

    return userBillResource;
});
