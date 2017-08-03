angular.module("ovh-api-services").service("TelephonyOvhPabxHuntingQueueLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyOvhPabxHuntingQueueLexi");
    var queryCache = $cacheFactory("TelephonyOvhPabxHuntingQueueLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId", {
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
        getBatch: {
            method: "GET",
            isArray: true,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        },
        getLiveStatistics: {
            method: "GET",
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/liveStatistics"
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
