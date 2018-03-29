angular.module("ovh-api-services").service("OvhApiOrderRouterNewV6", function ($resource, $cacheFactory, OvhApiRouter) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderRouterNewV6Query");
    var cache = $cacheFactory("OvhApiOrderRouterNewV6");

    var interceptor = {
        response: function (response) {
            OvhApiRouter.v6().resetQueryCache();
            return response;
        }
    };

    return $resource("/order/router/new/:duration", {
        duration: "@duration"
    }, {
        query: { method: "GET", isArray: true, cache: queryCache },
        get: { method: "GET", cache: cache },
        save: { method: "POST", interceptor: interceptor }
    });
});
