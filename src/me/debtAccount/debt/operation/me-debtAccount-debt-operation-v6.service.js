angular.module("ovh-api-services").service("OvhApiMeDebtAccountDebtOperationV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeDebtAccountDebtOperationV6");
    var queryCache = $cacheFactory("OvhApiMeDebtAccountDebtOperationQueryV6");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response;
        }
    };

    var operationResource = $resource("/me/debtAccount/debt/:debtId/operation/:operationId", {
        debtId: "@debtId",
        operationId: "@operationId"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: queryCache
        },
        associatedObject: {
            url: "/me/debtAccount/debt/:debtId/operation/:operationId/associatedObject",
            method: "GET",
            cache: cache
        }
    });

    operationResource.resetCache = function () {
        cache.removeAll();
    };

    operationResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    operationResource.resetAllCache = function () {
        cache.removeAll();
        queryCache.removeAll();
    };

    return operationResource;

});
