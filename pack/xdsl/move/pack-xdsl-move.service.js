angular.module("ovh-api-services").service("PackXdslMove", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslMove");

    return {
        Aapi: angular.noop,
        Lexi: function () {
            return $injector.get("PackXdslMoveLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
