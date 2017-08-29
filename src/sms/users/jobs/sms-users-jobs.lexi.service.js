angular.module("ovh-api-services").service("OvhApiSmsUsersJobsLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiSmsUserJobsLexi");
    var queryCache = $cacheFactory("OvhApiSmsUserJobsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var usersJobs = $resource("/sms/:serviceName/users/:login/jobs/:id", {
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
        },
        send: {
            method: "POST",
            isArray: false,
            interceptor: interceptor
        }
    });

    usersJobs.resetCache = function () {
        cache.removeAll();
    };

    usersJobs.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return usersJobs;
});
