angular.module("ovh-api-services").service("OvhApiPackXdslVoipEcofax", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslVoipEcofax");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslVoipEcofaxV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
