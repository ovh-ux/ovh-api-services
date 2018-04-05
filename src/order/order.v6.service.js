angular.module("ovh-api-services").service("OvhApiOrderV6", function ($resource, $cacheFactory) {
    "use strict";

    var schemaCache = $cacheFactory("OvhApiOrderv6Schema");

    var orderRessource = $resource("/order", {
    }, {
        schema: {
            method: "GET",
            cache: schemaCache,
            url: "/order.json"
        }
    });

    orderRessource.resetSchemaCache = function () {
        schemaCache.removeAll();
    };

    return orderRessource;
});
