angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingRecordsLexi", function ($cacheFactory, $resource) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingRecordsLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingRecordsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/easyHunting/:serviceName/records/:id", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
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
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: cache
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
