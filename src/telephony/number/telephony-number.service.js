angular.module("ovh-api-services").service("OvhApiTelephonyNumber", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyNumber");

    return {
        Aapi: function () {
            return $injector.get("OvhApiTelephonyNumberAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiTelephonyNumberLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiTelephonyNumberErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
