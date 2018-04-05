angular.module("ovh-api-services").service("OvhApiOrderTelephony", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiOrderTelephony");

    return {
        v6: function () {
            return $injector.get("OvhApiOrderTelephonyV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiOrderTelephonyAapi");
        },
        cache: cache
    };
});
