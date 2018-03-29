angular.module("ovh-api-services").service("OvhApiTelephonyOvhPabxHuntingAgentV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingAgentV6");
    var queryCache = $cacheFactory("OvhApiTelephonyOvhPabxHuntingAgentV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
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
            cache: queryCache,
            headers: {
                "X-Ovh-Batch": ","
            }
        },
        create: {
            method: "POST",
            interceptor: interceptor
        },
        change: {
            method: "PUT",
            interceptor: interceptor
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        },
        addToQueue: {
            url: "/telephony/:billingAccount/ovhPabx/:serviceName/hunting/agent/:agentId/queue",
            method: "POST",
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
