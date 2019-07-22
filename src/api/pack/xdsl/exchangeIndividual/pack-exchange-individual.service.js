angular.module("ovh-api-services").service("OvhApiPackXdslExchangeIndividual", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslExchangeIndividual");

    return {
        v6: function () {
            return $injector.get("OvhApiPackXdslExchangeIndividualV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
