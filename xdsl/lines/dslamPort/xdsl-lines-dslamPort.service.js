angular.module("ovh-api-services").service("XdslLinesDslamPort", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslLinesDslamPort");

    return {
        Aapi: function () {
            return $injector.get("XdslLinesDslamPortAapi");
        },
        Lexi: function () {
            return $injector.get("XdslLinesDslamPortLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
