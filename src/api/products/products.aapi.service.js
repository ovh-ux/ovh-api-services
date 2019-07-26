angular.module("ovh-api-services").service("OvhApiProductsAapi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiProductsAapi");

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
