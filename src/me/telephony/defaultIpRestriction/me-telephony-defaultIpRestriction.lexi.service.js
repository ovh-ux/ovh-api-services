angular.module("ovh-api-services").service("OvhApiMeTelephonyDefaultIpRestrictionLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiMeTelephonyDefaultIpRestrictionLexi");
    var queryCache = $cacheFactory("OvhApiMeTelephonyDefaultIpRestrictionLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/me/telephony/defaultIpRestriction/:id", {
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
        getBatch: {
            method: "GET",
            isArray: true,
            cache: queryCache,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
    };

    return res;
});
