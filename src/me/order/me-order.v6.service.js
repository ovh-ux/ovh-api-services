angular.module("ovh-api-services").service("OvhApiMeOrderV6", function ($resource, $cacheFactory) {
    "use strict";

    var otherCache = $cacheFactory("OvhApiMeOrderV6");
    var queryCache = $cacheFactory("OvhApiMeOrderV6Query");

    var interceptor = {
        response: function (response) {
            otherCache.remove(response.config.url);
            queryCache.removeAll();
            return response;
        }
    };

    var userOrderResource = $resource("/me/order/:orderId", { orderId: "@orderId" }, {
        query: { method: "GET", cache: queryCache, isArray: true },
        get: { method: "GET", cache: otherCache },
        getStatus: {
            url: "/me/order/:orderId/status",
            method: "GET",

            /**
             * This endpoint returns a bared, quoted string like "unPaid".
             * $resource does not handle that gracefully.
             * So lets make a clean object out of that response
             */
            transformResponse: function (response, headers, httpCode) {
                if (httpCode === 200) {
                    return { status: angular.fromJson(response) };
                }
                return response;
            }
        },
        getDetails: { method: "GET", url: "/me/order/:orderId/details", cache: queryCache, isArray: true },
        getDetail: { method: "GET", url: "/me/order/:orderId/details/:detailId", params: { orderId: "@orderId", detailId: "@detailId" }, cache: queryCache },
        payRegisteredPaymentMean: { method: "POST", url: "/me/order/:orderId/payWithRegisteredPaymentMean", interceptor: interceptor }
    });

    userOrderResource.resetAllCache = function () {
        userOrderResource.resetOtherCache();
        userOrderResource.resetQueryCache();
    };

    userOrderResource.resetOtherCache = function () {
        otherCache.removeAll();
    };

    userOrderResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return userOrderResource;
});
