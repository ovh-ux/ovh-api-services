angular.module("ovh-api-services").service("XdslEligibility", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslEligibility");

    return {
        Lexi: function () {
            return $injector.get("XdslEligibilityLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
