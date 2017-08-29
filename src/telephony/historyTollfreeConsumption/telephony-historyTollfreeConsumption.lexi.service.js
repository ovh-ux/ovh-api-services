angular.module("ovh-api-services").service("OvhApiTelephonyHistoryTollfreeConsumptionLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyHistoryTollfreeConsumptionLexi");

    return $resource("/telephony/:billingAccount/historyTollfreeConsumption/:date", {
        billingAccount: "@billingAccount",
        date: "@date"
    }, {
        query: {
            method: "GET",
            isArray: true
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
        getDocument: {
            method: "GET",
            url: "/telephony/:billingAccount/historyTollfreeConsumption/:date/document"
        },
        resetCache: function () {
            cache.removeAll();
        }
    });
});
