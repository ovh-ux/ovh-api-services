angular.module("ovh-api-services").service("TelephonyLineAbbreviatedNumber", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyLineAbbreviatedNumber");

    return {
        Lexi: function () {
            return $injector.get("TelephonyLineAbbreviatedNumberLexi");
        },
        Aapi: function () {
            return $injector.get("TelephonyLineAbbreviatedNumberAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
