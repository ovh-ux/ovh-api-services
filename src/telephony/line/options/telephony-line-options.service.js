angular.module("ovh-api-services").service("OvhApiTelephonyLineOptions", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineOptions");

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLineOptionsV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
