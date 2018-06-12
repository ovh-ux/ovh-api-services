angular.module("ovh-api-services").service("OvhApiMeAccessRestrictionTotpV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeAccessRestrictionTotpV6");
    var queryCache = $cacheFactory("OvhApiMeAccessRestrictionTotpV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var resource = $resource("/me/accessRestriction/totp/:id", {
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
        create: {
            method: "POST",
            url: "/me/accessRestriction/totp",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        disable: {
            method: "POST",
            url: "/me/accessRestriction/totp/:id/disable",
            interceptor: interceptor
        },
        enable: {
            method: "POST",
            url: "/me/accessRestriction/totp/:id/enable",
            interceptor: interceptor
        },
        validate: {
            method: "POST",
            url: "/me/accessRestriction/totp/:id/validate",
            interceptor: interceptor
        }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    resource.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return resource;
});
