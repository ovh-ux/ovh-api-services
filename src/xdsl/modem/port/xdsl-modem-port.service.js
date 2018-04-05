angular.module("ovh-api-services").service("OvhApiXdslModemPort", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemPort");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemPortV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemPortAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
