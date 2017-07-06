angular.module("ovh-api-services").service("TelephonyNumber", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("TelephonyNumber");

    return {
        Aapi: function () {
            return $injector.get("TelephonyNumberAapi");
        },
        Lexi: function () {
            return $injector.get("TelephonyNumberLexi");
        },
        Erika: function () {
            return $injector.get("TelephonyNumberErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
