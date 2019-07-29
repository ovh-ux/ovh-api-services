angular.module("ovh-api-services").service("OvhApiTelephonySpareV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonySpareV6");
    var queryCache = $cacheFactory("OvhApiTelephonySpareV6V6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var spareResource = $resource("/telephony/spare", {
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
            url: "/telephony/spare/:spare"
        },
        replaceSpare: {
            method: "POST",
            url: "/telephony/spare/:spare/replace",
            interceptor: interceptor
        },
        deleteSpare: {
            method: "DELETE",
            url: "/telephony/spare/:spare",
            interceptor: interceptor
        },
        getBrands: {
            method: "GET",
            url: "/telephony/spare/brands"
        },
        getNewSpare: {
            method: "GET",
            url: "/order/telephony/spare/new"
        },
        orderNewSpare: {
            method: "POST",
            url: "/order/telephony/spare/new"
        }
    });

    spareResource.resetAllCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return spareResource;
});
