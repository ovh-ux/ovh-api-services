angular.module("ovh-api-services").service("OvhApiTelephonyServiceRepaymentConsumptionV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyServiceRepaymentConsumptionV6");
    var queryCache = $cacheFactory("OvhApiTelephonyServiceRepaymentConsumptionV6Query");
    var batchCache = $cacheFactory("OvhApiTelephonyServiceRepaymentConsumptionv6Batch");

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
