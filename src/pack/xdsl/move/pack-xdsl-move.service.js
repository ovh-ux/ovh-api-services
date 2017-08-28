angular.module("ovh-api-services").service("OvhApiPackXdslMove", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslMove");

    return {
        Aapi: angular.noop,
        Lexi: function () {
            return $injector.get("OvhApiPackXdslMoveLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
