angular.module("ovh-api-services").service("OvhApiTelephonyLineOptions", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineOptions");

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLineOptionsLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
