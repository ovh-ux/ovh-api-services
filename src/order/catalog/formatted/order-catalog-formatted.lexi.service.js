angular.module("ovh-api-services").service("OvhApiOrderCatalogFormattedLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiOrderCatalogFormattedLexi");

    var resource = $resource("/order/catalog/formatted/:catalogName", {
        catalogName: "@catalogName"
    }, {
        get: { method: "GET", cache: cache },
        query: { method: "GET", isArray: true, cache: cache }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    return resource;
});
