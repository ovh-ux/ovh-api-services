angular.module("ovh-api-services").service("TelephonyMiniPabx", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyMiniPabx");

    return {
        Lexi: function () {
            return $injector.get("TelephonyMiniPabxLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
