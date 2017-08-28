angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingQueueAgentLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingQueueAgentLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingQueueAgentLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        queueId: "@queueId",
        agentId: "@agentId"
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
            cache: queryCache
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        },
        getLiveStatus: {
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/queue/:queueId/agent/:agentId/liveStatus",
            method: "GET"
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
