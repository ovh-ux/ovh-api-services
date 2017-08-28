angular.module("ovh-api-services").service("OvhApiPackXdslVoipEcofax", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslVoipEcofax");

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslVoipEcofaxLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
