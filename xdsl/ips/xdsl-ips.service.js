angular.module("ovh-api-services").service("XdslIps", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslIps");

    return {
        Lexi: function () {
            return $injector.get("XdslIpsLexi");
        },
        Aapi: function () {
            return $injector.get("XdslIpsAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
