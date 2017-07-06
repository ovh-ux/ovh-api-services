angular.module("ovh-api-services").service("TelephonyTimeCondition", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyTimeCondition");

    return {
        Lexi: function () {
            return $injector.get("TelephonyTimeConditionLexi");
        },
        Aapi: function () {
            return $injector.get("TelephonyTimeConditionAapi");
        },
        Condition: function () {
            return $injector.get("TelephonyTimeConditionCondition");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
