angular.module("ovh-api-services").service("OvhApiTelephonyServiceRepaymentConsumptionLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyServiceRepaymentConsumptionLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyServiceRepaymentConsumptionLexiQuery");
    var batchCache = $cacheFactory("OvhApiTelephonyServiceRepaymentConsumptionLexiBatch");

    var res = $resource("/telephony/:billingAccount/service/:serviceName/repaymentConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: cache
        },
        getBatch: {
            method: "GET",
            headers: {
                "X-Ovh-Batch": ","
            },
            cache: batchCache,
            isArray: true
        }
    });

    res.resetCache = function () {
        cache.removeAll();
    };

    res.resetQueryCache = function () {
        queryCache.removeAll();
    };

    res.resetBatchCache = function () {
        batchCache.removeAll();
    };

    res.resetAllCache = function () {
        this.resetCache();
        this.resetQueryCache();
        this.resetBatchCache();
    };

    return res;
});
