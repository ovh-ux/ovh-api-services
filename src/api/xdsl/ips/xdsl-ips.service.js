angular.module("ovh-api-services").service("OvhApiXdslIps", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslIps");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslIpsV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslIpsAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
