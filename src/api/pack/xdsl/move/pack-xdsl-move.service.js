angular.module("ovh-api-services").service("OvhApiPackXdslMove", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslMove");

    return {
        Aapi: angular.noop,
        v6: function () {
            return $injector.get("OvhApiPackXdslMoveV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
