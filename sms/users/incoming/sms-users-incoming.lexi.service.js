angular.module("ovh-api-services").service("SmsUsersIncomingLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsUsersIncomingLexi");
    var queryCache = $cacheFactory("SmsUsersIncomingLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var usersIncoming = $resource("/sms/:serviceName/users/:login/incoming/:id", {
        serviceName: "@serviceName",
        login: "@login",
        id: "@id"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    usersIncoming.resetCache = function () {
        cache.removeAll();
    };

    usersIncoming.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return usersIncoming;
});
