angular.module("ovh-api-services").service("OvhApiTelephonyEasyPabx", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyPabx");

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyEasyPabxLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
