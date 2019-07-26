angular.module("ovh-api-services").service("OvhApiTelephonyLineClick2CallUser", function ($cacheFactory, $injector) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineClick2CallUser");
    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLineClick2CallUserV6");
        },
        Aapi: angular.noop,
        resetCache: cache.removeAll,
        cache: cache
    };
});
