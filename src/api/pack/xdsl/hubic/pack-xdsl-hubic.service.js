angular.module("ovh-api-services").service("OvhApiPackXdslHubic", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslHubic");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslHubicAapi");
        },
        v6: function () {
            return $injector.get("OvhApiPackXdslHubicV6");
        },
        v7: function () {
            return $injector.get("OvhApiPackXdslHubicV7");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
