angular.module("ovh-api-services").service("OvhApiTelephonySpare", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonySpare");

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonySpareV6");
        },
        resetCache: function () {
            cache.removeAll();
        },
        cache: cache
    };
});
