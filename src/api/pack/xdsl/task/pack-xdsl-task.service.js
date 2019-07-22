angular.module("ovh-api-services").service("OvhApiPackXdslTask", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslTask");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslTaskAapi");
        },
        v6: function () {
            return $injector.get("OvhApiPackXdslTaskV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
