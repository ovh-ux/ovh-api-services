angular.module("ovh-api-services").service("OvhApiCloudPriceV6", function ($resource, $cacheFactory) {
    "use strict";

    // This file is deprecated
    var cache = $cacheFactory("OvhApiCloudPriceV6");

    return $resource("/cloud/price", {
        flavorId: "@flavorId",
        region: "@region"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", cache: cache, isArray: false }
    });

});
