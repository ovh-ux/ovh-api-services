angular.module("ovh-api-services").service("OvhApiPackXdslExchangeLite", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslExchangeLite");

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslExchangeLiteLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
