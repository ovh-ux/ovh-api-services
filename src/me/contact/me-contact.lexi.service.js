angular.module("ovh-api-services").service("OvhApiMeContactLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiMeContactQueryLexi");
    var cache = $cacheFactory("OvhApiMeContactLexi");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.data;
        }
    };

    return $resource("/me/contact/:contactId", {
        contactId: "@contactId"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        save: {
            method: "PUT",
            interceptor: interceptor
        }
    });

});
