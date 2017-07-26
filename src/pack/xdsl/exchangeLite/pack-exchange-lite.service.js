angular.module("ovh-api-services").service("PackXdslExchangeLite", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslExchangeLite");

    return {
        Lexi: function () {
            return $injector.get("PackXdslExchangeLiteLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
