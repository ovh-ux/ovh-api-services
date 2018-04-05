angular.module("ovh-api-services").service("OvhApiPackXdslAccess", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslAccess");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslAccessAapi");
        },
        v6: function () {
            return $injector.get("OvhApiPackXdslAccessV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
