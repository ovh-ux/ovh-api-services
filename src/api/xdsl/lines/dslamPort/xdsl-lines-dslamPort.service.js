angular.module("ovh-api-services").service("OvhApiXdslLinesDslamPort", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslLinesDslamPort");

    return {
        Aapi: function () {
            return $injector.get("OvhApiXdslLinesDslamPortAapi");
        },
        v6: function () {
            return $injector.get("OvhApiXdslLinesDslamPortV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
