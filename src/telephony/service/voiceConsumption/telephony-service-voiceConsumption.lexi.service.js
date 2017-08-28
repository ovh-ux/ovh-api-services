angular.module("ovh-api-services").service("OvhApiTelephonyServiceVoiceConsumptionLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyServiceVoiceConsumptionLexi");
    var queryCache = $cacheFactory("OvhApiTelephonyServiceVoiceConsumptionLexiQuery");

    var voiceConsumption = $resource("/telephony/:billingAccount/service/:serviceName/voiceConsumption/:consumptionId", {
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
        },
        callDiagnostics: {
            method: "GET",
            url: "/telephony/:billingAccount/service/:serviceName/voiceConsumption/:consumptionId/callDiagnostics",
            cache: cache
        }
    });

    voiceConsumption.resetCache = function () {
        cache.removeAll();
    };

    voiceConsumption.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return voiceConsumption;
});
