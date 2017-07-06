angular.module("ovh-api-services").service("PackXdslVoipEcofax", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslVoipEcofax");

    return {
        Lexi: function () {
            return $injector.get("PackXdslVoipEcofaxLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
