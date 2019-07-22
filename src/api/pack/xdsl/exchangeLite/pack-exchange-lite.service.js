angular.module("ovh-api-services").service("OvhApiPackXdslExchangeLite", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslExchangeLite");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslExchangeLiteV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
