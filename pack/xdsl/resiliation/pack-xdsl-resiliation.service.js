angular.module("ovh-api-services").service("PackXdslResiliation", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("PackXdslResiliation");

    return {
        Aapi: function () {
            return $injector.get("PackXdslResiliationAapi");
        },
        Lexi: function () {
            return $injector.get("PackXdslResiliationLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
