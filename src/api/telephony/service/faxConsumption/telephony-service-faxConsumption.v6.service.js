angular.module("ovh-api-services").service("OvhApiTelephonyServiceFaxConsumptionV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyServiceFaxConsumptionV6");
    var queryCache = $cacheFactory("OvhApiTelephonyServiceFaxConsumptionV6Query");

    var faxConsumption = $resource("/telephony/:billingAccount/service/:serviceName/faxConsumption/:consumptionId", {
        billingAccount: "@billingAccount",
        serviceName: "@serviceName",
        consumptionId: "@consumptionId"
    }, {
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
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        }
    });

    faxConsumption.resetCache = function () {
        cache.removeAll();
    };

    faxConsumption.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return faxConsumption;
});
