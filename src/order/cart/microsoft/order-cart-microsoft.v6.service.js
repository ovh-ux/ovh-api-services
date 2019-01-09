angular.module("ovh-api-services").service("OvhApiOrderCartMicrosoftV6", function ($resource, $cacheFactory) {
    "use strict";

    // Cache to invalidate
    var cache = $cacheFactory("OvhApiOrderCartMicrosoftV6");

    var interceptor = {
        response: function (response) {
            orderCartMicrosoft.resetCache();
            return response.data;
        }
    };

    var orderCartMicrosoft = $resource("/order/cart/:cartId/microsoft", {
        cartId: "@cartId"
    }, {
        get: { method: "GET", cache: cache, isArray: true },
        post: { method: "POST", interceptor: interceptor },
        getOptions: {
            url: "/order/cart/:cartId/microsoft/options",
            method: "GET",
            cache: cache,
            isArray: true,
            queryParams: {
                planCode: "@planCode"
            }
        },
        postOptions: {
            url: "/order/cart/:cartId/microsoft/options",
            method: "POST",
            interceptor: interceptor
        }
    });

    orderCartMicrosoft.resetCache = function () {
        cache.removeAll();
    };

    return orderCartMicrosoft;
});
