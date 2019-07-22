angular.module("ovh-api-services").service("OvhApiMeAccessRestrictionSmsV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeAccessRestrictionSmsV6");
    var queryCache = $cacheFactory("OvhApiMeAccessRestrictionSmsV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var resource = $resource("/me/accessRestriction/sms/:id", {
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
            url: "/me/accessRestriction/sms",
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
            url: "/me/accessRestriction/sms/:id/disable",
            interceptor: interceptor
        },
        enable: {
            method: "POST",
            url: "/me/accessRestriction/sms/:id/enable",
            interceptor: interceptor
        },
        sendCode: {
            method: "POST",
            url: "/me/accessRestriction/sms/:id/sendCode",
            interceptor: interceptor
        },
        validate: {
            method: "POST",
            url: "/me/accessRestriction/sms/:id/validate",
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
