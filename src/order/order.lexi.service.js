angular.module("ovh-api-services").service("OrderLexi", function ($resource, $cacheFactory) {
    "use strict";

    var schemaCache = $cacheFactory("OrderLexiSchema");

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
