angular.module("ovh-api-services").service("OvhApiXdslEligibility", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslEligibility");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslEligibilityLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
