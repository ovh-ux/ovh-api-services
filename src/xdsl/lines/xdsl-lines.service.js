angular.module("ovh-api-services").service("OvhApiXdslLines", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslLines");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslLinesLexi");
        },
        Erika: function () {
            return $injector.get("OvhApiXdslLinesErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
