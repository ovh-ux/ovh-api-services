angular.module("ovh-api-services").service("OvhApiConnectivityEligibility", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiConnectivityEligibility");

    return {
        v6: function () {
            return $injector.get("OvhApiConnectivityEligibilityV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
