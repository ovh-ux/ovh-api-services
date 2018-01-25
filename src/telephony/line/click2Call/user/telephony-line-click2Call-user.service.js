angular.module("ovh-api-services").service("OvhApiTelephonyLineClick2CallUser", function ($cacheFactory, $injector) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineClick2CallUser");
    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLineClick2CallUserLexi");
        },
        Aapi: angular.noop,
        resetCache: cache.removeAll,
        cache: cache
    };
});
