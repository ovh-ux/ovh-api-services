angular.module("ovh-api-services").service("OvhApiOrderRouterNewLexi", function ($resource, $cacheFactory, OvhApiRouter) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OvhApiOrderRouterNewLexiQuery");
    var cache = $cacheFactory("OvhApiOrderRouterNewLexi");

    var interceptor = {
        response: function (response) {
            OvhApiRouter.Lexi().resetQueryCache();
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
