angular.module("ovh-api-services").service("OrderRouterNewLexi", function ($resource, $cacheFactory, Router) {
    "use strict";

    // Cache to invalidate
    var queryCache = $cacheFactory("OrderRouterNewLexiQuery");
    var cache = $cacheFactory("OrderRouterNewLexi");

    var interceptor = {
        response: function (response) {
            Router.Lexi().resetQueryCache();
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
