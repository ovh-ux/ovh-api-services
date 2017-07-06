angular.module("ovh-api-services").service("CloudPriceLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("CloudPriceLexi");

    return $resource("/cloud/price", {
        flavorId: "@flavorId",
        region: "@region"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: cache, isArray: false }
    });

});
