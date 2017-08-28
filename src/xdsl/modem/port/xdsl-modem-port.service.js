angular.module("ovh-api-services").service("OvhApiXdslModemPort", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemPort");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemPortLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemPortAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
