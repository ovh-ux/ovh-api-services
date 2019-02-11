/**
 *  @deprecated
 *  Use order/cartServiceOptions/cartServiceOptions.service.v6.js instead
 *  as this service is not reachable as there is a duplicate of the OvhApiOrderCartServiceOption service.
 */
angular.module("ovh-api-services").service("OvhApiOrderCartServiceOptionV6", function ($resource, $cacheFactory) {

    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderCartServiceOptionV6Query");
    var cache = $cacheFactory("OvhApiOrderCartServiceOptionV6");

    var interceptor = {
        response: function (response) {
            orderCartServiceOption.resetQueryCache();
            return response.data;
        }
    };

    var orderCartServiceOption = $resource("/order/cartServiceOption/:productName/:serviceName", {
        productName: "@productName",
        serviceName: "@serviceName"
    }, {
        get: { method: "GET", cache: cache, isArray: true },
        post: { method: "POST", interceptor: interceptor }
    });

    orderCartServiceOption.resetCache = function () {
        cache.removeAll();
    };

    orderCartServiceOption.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return orderCartServiceOption;
});
