angular.module("ovh-api-services").service("OvhApiXdslEligibility", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslEligibility");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslEligibilityV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
