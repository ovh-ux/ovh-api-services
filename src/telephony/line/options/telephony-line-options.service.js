angular.module("ovh-api-services").service("TelephonyLineOptions", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLineOptions");

    return {
        Lexi: function () {
            return $injector.get("TelephonyLineOptionsLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
