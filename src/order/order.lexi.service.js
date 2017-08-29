angular.module("ovh-api-services").service("OvhApiOrderLexi", function ($resource, $cacheFactory) {
    "use strict";

    var schemaCache = $cacheFactory("OvhApiOrderLexiSchema");

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
