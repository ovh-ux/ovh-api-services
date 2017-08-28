angular.module("ovh-api-services").service("OvhApiTelephonyMiniPabx", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyMiniPabx");

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyMiniPabxLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
