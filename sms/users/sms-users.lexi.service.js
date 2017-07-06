angular.module("ovh-api-services").service("SmsUsersLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("SmsUsersLexi");
    var queryCache = $cacheFactory("SmsUsersLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var usersResource = $resource("/sms/:serviceName/users/:login", {
        serviceName: "@serviceName",
        login: "@login"
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
        edit: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        create: {
            method: "POST",
            url: "/sms/:serviceName/users",
            interceptor: interceptor
        },
        getDocument: {
            method: "GET",
            url: "/sms/:serviceName/users/:login/document",
            cache: cache
        }
    });

    usersResource.resetCache = function () {
        cache.removeAll();
    };

    usersResource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    usersResource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return usersResource;
});
