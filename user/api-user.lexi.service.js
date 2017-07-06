angular.module("ovh-api-services").service("UserLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("UserLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            return response;
        }
    };

    var me = $resource("/me", {}, {
        get: { method: "GET", cache: cache },
        update: { method: "PUT", interceptor: interceptor },
        schema: { method: "GET", url: "/me.json" }
    });

    me.resetCache = function () {
        cache.removeAll();
    };

    return me;

});
