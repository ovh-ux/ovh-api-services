angular.module("ovh-api-services").service("OvhApiMeAccessRestrictionIpV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeAccessRestrictionIpV6");
    var queryCache = $cacheFactory("OvhApiMeAccessRestrictionIpV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var resource = $resource("/me/accessRestriction/ip/:ip", {
        ip: "@ip"
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
            url: "/me/accessRestriction/ip",
            interceptor: interceptor
        },
        update: {
            method: "PUT",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
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
