angular.module("ovh-api-services").service("TelephonyEasyPabx", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyEasyPabx");

    return {
        Lexi: function () {
            return $injector.get("TelephonyEasyPabxLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
