angular.module("ovh-api-services").service("OvhApiTelephonyAbbreviatedNumber", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyAbbreviatedNumber");

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyAbbreviatedNumberLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyAbbreviatedNumberAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
