angular.module("ovh-api-services").service("OvhApiTelephonyNumber", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiTelephonyNumber");

    return {
        Aapi: function () {
            return $injector.get("OvhApiTelephonyNumberAapi");
        },
        v6: function () {
            return $injector.get("OvhApiTelephonyNumberV6");
        },
        v7: function () {
            return $injector.get("OvhApiTelephonyNumberV7");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
