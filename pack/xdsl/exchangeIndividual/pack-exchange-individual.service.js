angular.module("ovh-api-services").service("PackXdslExchangeIndividual", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslExchangeIndividual");

    return {
        Lexi: function () {
            return $injector.get("PackXdslExchangeIndividualLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
