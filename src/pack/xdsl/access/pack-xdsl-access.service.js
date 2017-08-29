angular.module("ovh-api-services").service("OvhApiPackXdslAccess", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslAccess");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslAccessAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiPackXdslAccessLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
