angular.module("ovh-api-services").service("TelephonyAbbreviatedNumber", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyAbbreviatedNumber");

    return {
        Lexi: function () {
            return $injector.get("TelephonyAbbreviatedNumberLexi");
        },
        Aapi: function () {
            return $injector.get("TelephonyAbbreviatedNumberAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
