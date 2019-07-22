angular.module("ovh-api-services").service("OvhApiMeAccessRestrictionBackupCodeV6", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeAccessRestrictionBackupCodeV6");
    var queryCache = $cacheFactory("OvhApiMeAccessRestrictionBackupCodeV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var resource = $resource("/me/accessRestriction/backupCode", {}, {
        get: {
            method: "GET",
            cache: cache
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        },
        disable: {
            method: "POST",
            url: "/me/accessRestriction/backupCode/disable",
            interceptor: interceptor
        },
        enable: {
            method: "POST",
            url: "/me/accessRestriction/backupCode/enable",
            interceptor: interceptor
        },
        validate: {
            method: "POST",
            url: "/me/accessRestriction/backupCode/validate",
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
