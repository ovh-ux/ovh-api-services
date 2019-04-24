angular.module("ovh-api-services").service("OvhApiConnectivityEligibility", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiConnectivityEligibility");

    return {
        v6: function () {
            return $injector.get("OvhApiConnectivityEligibilityV6");
        },
        Search: function () {
            return $injector.get("OvhApiConnectivityEligibilitySearch");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
