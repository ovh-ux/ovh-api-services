angular.module("ovh-api-services").service("OvhApiPackXdslExchangeIndividual", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslExchangeIndividual");

    return {
        Lexi: function () {
            return $injector.get("OvhApiPackXdslExchangeIndividualLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
