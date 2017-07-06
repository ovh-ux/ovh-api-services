angular.module("ovh-api-services").service("OrderTelephony", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OrderTelephony");

    return {
        Lexi: function () {
            return $injector.get("OrderTelephonyLexi");
        },
        Aapi: function () {
            return $injector.get("OrderTelephonyAapi");
        },
        cache: cache
    };
});
