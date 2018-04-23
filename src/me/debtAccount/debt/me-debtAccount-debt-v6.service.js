angular.module("ovh-api-services").service("OvhApiMeDebtAccountDebtV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeDebtAccountDebtV6");
    var queryCache = $cacheFactory("OvhApiMeDebtAccountDebtQueryV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response;
        }
    };

    var debtResource = $resource("/me/debtAccount/debt/:debtId", {
        debtId: "@debtId"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        pay: {
            url: "/me/debtAccount/debt/{debtId}/pay",
            method: "POST",
            interceptor: interceptor
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: queryCache
        },
    });

    debtResource.resetCache = function () {
        cache.removeAll();
    };

    debtResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    debtResource.resetAllCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return debtResource;

});
