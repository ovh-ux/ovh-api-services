angular.module("ovh-api-services").service("OvhApiXdslResiliation", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslResiliation");

    return {
        Aapi: function () {
            return $injector.get("OvhApiXdslResiliationAapi");
        },
        v6: function () {
            return $injector.get("OvhApiXdslResiliationV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
