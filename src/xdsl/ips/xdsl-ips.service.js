angular.module("ovh-api-services").service("OvhApiXdslIps", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslIps");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslIpsLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslIpsAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
