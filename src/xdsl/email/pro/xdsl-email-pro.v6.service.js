angular.module("ovh-api-services").service("OvhApiXdslEmailProV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslEmailProV6");
    var queryCache = $cacheFactory("OvhApiXdslEmailProV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var emailPro = $resource("/xdsl/email/pro/:email", {
        email: "@email"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            interceptor: interceptor
        },
        save: {
            method: "POST",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        changePassword: {
            method: "POST",
            interceptor: interceptor,
            url: "/xdsl/email/pro/:email/changePassword"
        }
    }
    );

    emailPro.resetCache = function () {
        cache.removeAll();
    };

    emailPro.resetQueryCache = function () {
        queryCache.removeAll();
    };

    emailPro.resetAllCache = function () {
        emailPro.resetCache();
        emailPro.resetQueryCache();
    };

    return emailPro;
});
