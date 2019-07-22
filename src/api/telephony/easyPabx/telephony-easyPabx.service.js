angular.module("ovh-api-services").service("OvhApiTelephonyEasyPabx", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyEasyPabx");

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyEasyPabxV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
