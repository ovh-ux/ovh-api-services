angular.module("ovh-api-services").service("XdslResiliation", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslResiliation");

    return {
        Aapi: function () {
            return $injector.get("XdslResiliationAapi");
        },
        Lexi: function () {
            return $injector.get("XdslResiliationLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
