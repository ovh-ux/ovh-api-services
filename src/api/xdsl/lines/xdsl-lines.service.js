angular.module("ovh-api-services").service("OvhApiXdslLines", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslLines");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslLinesV6");
        },
        v7: function () {
            return $injector.get("OvhApiXdslLinesV7");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
