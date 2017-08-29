angular.module("ovh-api-services").service("OvhApiOrderTelephony", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiOrderTelephony");

    return {
        Lexi: function () {
            return $injector.get("OvhApiOrderTelephonyLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiOrderTelephonyAapi");
        },
        cache: cache
    };
});
