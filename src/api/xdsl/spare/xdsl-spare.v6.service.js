angular.module("ovh-api-services").service("OvhApiXdslSpareV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslSpareV6");
    var queryCache = $cacheFactory("OvhApiXdslSpareV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var spareResource = $resource("/xdsl/spare", {
        spare: "@spare"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        getSpare: {
            method: "GET",
            url: "/xdsl/spare/:spare"
        },
        replaceSpare: {
            method: "POST",
            url: "/xdsl/spare/:spare/replace",
            interceptor: interceptor
        },
        returnMerchandise: {
            method: "POST",
            url: "xdsl/spare/:spare/returnMerchandise",
            interceptor: interceptor
        },
        deleteSpare: {
            method: "DELETE",
            url: "/xdsl/spare/:spare",
            interceptor: interceptor
        },
        getBrands: {
            method: "GET",
            url: "/xdsl/spare/brands"
        },
        getNewSpare: {
            method: "GET",
            url: "/order/xdsl/spare/new"
        },
        orderNewSpare: {
            method: "POST",
            url: "/order/xdsl/spare/new"
        }
    });

    spareResource.resetAllCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return spareResource;
});
