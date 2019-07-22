angular.module("ovh-api-services").service("OvhApiTelephonyTimeCondition", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyTimeCondition");

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyTimeConditionV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyTimeConditionAapi");
        },
        Condition: function () {
            return $injector.get("OvhApiTelephonyTimeConditionCondition");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
