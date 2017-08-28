angular.module("ovh-api-services").service("OvhApiTelephonyLineAbbreviatedNumber", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineAbbreviatedNumber");

    return {
        Lexi: function () {
            return $injector.get("OvhApiTelephonyLineAbbreviatedNumberLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyLineAbbreviatedNumberAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
