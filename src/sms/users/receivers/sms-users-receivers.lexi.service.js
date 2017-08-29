angular.module("ovh-api-services").service("OvhApiSmsUsersReceiversLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsUsersReceiversLexi");
    var queryCache = $cacheFactory("OvhApiSmsUsersReceiversLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var usersReceivers = $resource("/sms/:serviceName/users/:login/receivers/:slotId", {
        serviceName: "@serviceName",
        login: "@login",
        slotId: "@slotId"
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
        },
        create: {
            method: "POST",
            url: "/sms/:serviceName/receivers",
            interceptor: interceptor
        },
        getCsv: {
            method: "GET",
            url: "/sms/:serviceName/users/:login/receivers/:slotId/csv",
            cache: cache,
            transformResponse: function (data, headers, status) {
                if (status === 200) {
                    return { data: angular.fromJson(data) };
                }
                return data;
            }
        },
        clean: {
            method: "POST",
            url: "/sms/:serviceName/users/:login/receivers/:slotId/clean",
            interceptor: interceptor
        }
    });

    usersReceivers.resetCache = function () {
        cache.removeAll();
    };

    usersReceivers.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return usersReceivers;
});
