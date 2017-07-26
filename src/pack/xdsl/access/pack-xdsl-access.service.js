angular.module("ovh-api-services").service("PackXdslAccess", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslAccess");

    return {
        Aapi: function () {
            return $injector.get("PackXdslAccessAapi");
        },
        Lexi: function () {
            return $injector.get("PackXdslAccessLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
