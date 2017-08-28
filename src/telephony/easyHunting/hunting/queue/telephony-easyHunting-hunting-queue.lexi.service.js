angular.module("ovh-api-services").service("OvhApiTelephonyEasyHuntingHuntingQueueLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingQueueLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyEasyHuntingHuntingQueueLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        queueId: "@queueId"
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
        change: {
            method: "PUT",
            interceptor: interceptor
        },
        getLiveStatistics: {
            method: "GET",
            url: "/telephony/:billingAccount/easyHunting/:serviceName/hunting/queue/:queueId/liveStatistics"
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
