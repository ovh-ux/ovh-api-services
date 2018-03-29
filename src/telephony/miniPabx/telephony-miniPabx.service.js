angular.module("ovh-api-services").service("OvhApiTelephonyMiniPabx", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyMiniPabx");

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyMiniPabxV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
