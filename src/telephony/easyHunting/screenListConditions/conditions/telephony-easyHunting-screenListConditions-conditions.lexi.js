angular.module("ovh-api-services").service("TelephonyEasyHuntingScreenListConditionsConditionsLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyEasyHuntingScreenListConditionsConditionsLexi");
    var queryCache = $cacheFactory("TelephonyEasyHuntingScreenListConditionsConditionsLexiQuery");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var res = $resource("/telephony/:billingAccount/easyHunting/:serviceName/screenListConditions/conditions/:conditionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        conditionId: "@conditionId"
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
        create: {
            method: "POST",
            url: "/telephony/:billingAccount/easyHunting/:serviceName/screenListConditions/conditions",
            interceptor: interceptor
        },
        change: {
            method: "PUT",
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
