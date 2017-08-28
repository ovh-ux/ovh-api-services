angular.module("ovh-api-services").service("OvhApiPackXdslTask", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiPackXdslTask");

    return {
        Aapi: function () {
            return $injector.get("OvhApiPackXdslTaskAapi");
        },
        Lexi: function () {
            return $injector.get("OvhApiPackXdslTaskLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
