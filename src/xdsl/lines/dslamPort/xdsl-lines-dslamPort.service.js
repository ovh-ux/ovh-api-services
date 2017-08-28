angular.module("ovh-api-services").service("OvhApiXdslLinesDslamPort", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslLinesDslamPort");

    return {
        Aapi: function () {
            return $injector.get("OvhApiXdslLinesDslamPortAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiXdslLinesDslamPortLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
