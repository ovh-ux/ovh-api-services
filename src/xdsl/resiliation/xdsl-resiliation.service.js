angular.module("ovh-api-services").service("OvhApiXdslResiliation", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslResiliation");

    return {
        Aapi: function () {
            return $injector.get("OvhApiXdslResiliationAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiXdslResiliationLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
