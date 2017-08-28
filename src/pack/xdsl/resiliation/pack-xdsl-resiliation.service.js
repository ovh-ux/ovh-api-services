angular.module("ovh-api-services").service("OvhApiPackXdslResiliation", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslResiliation");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslResiliationAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiPackXdslResiliationLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
