angular.module("ovh-api-services").service("OvhApiTelephonyLineAbbreviatedNumber", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyLineAbbreviatedNumber");

    return {
        v6: function () {
            return $injector.get("OvhApiTelephonyLineAbbreviatedNumberV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiTelephonyLineAbbreviatedNumberAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
