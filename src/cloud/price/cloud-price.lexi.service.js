angular.module("ovh-api-services").service("OvhApiCloudPriceLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiCloudPriceLexi");

    return $resource("/cloud/price", {
        flavorId: "@flavorId",
        region: "@region"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: cache, isArray: false }
    });

});
