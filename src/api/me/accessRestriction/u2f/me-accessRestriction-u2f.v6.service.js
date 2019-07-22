angular.module("ovh-api-services").service("OvhApiMeAccessRestrictionU2fV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeAccessRestrictionU2fV6");
    var queryCache = $cacheFactory("OvhApiMeAccessRestrictionU2fV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var resource = $resource("/me/accessRestriction/u2f/:id", {
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
            url: "/me/accessRestriction/u2f",
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
        challenge: {
            method: "POST",
            url: "/me/accessRestriction/u2f/:id/challenge",
            interceptor: interceptor
        },
        disable: {
            method: "POST",
            url: "/me/accessRestriction/u2f/:id/disable",
            interceptor: interceptor
        },
        enable: {
            method: "POST",
            url: "/me/accessRestriction/u2f/:id/enable",
            interceptor: interceptor
        },
        validate: {
            method: "POST",
            url: "/me/accessRestriction/u2f/:id/validate",
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
