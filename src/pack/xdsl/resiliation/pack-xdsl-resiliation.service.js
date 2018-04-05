angular.module("ovh-api-services").service("OvhApiPackXdslResiliation", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslResiliation");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslResiliationAapi");
        },
        v6: function () {
            return $injector.get("OvhApiPackXdslResiliationV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
