angular.module("ovh-api-services").service("OvhApiTelephonyAbbreviatedNumber", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyAbbreviatedNumber");

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyAbbreviatedNumberV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyAbbreviatedNumberAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
