angular.module("ovh-api-services").service("ProductsAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("ProductsAapi");

    var productsResource = $resource("/products", {
    }, {
        get: {
            method: "GET",
            isArray: false,
            universe: "@universe",
            serviceType: "aapi"
        }
    });

    productsResource.resetAllCache = function () {
        productsResource.resetCache();
    };

    productsResource.resetCache = function () {
        cache.removeAll();
    };

    return productsResource;
});
