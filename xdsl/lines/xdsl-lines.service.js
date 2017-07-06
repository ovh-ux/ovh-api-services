angular.module("ovh-api-services").service("XdslLines", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslLines");

    return {
        Lexi: function () {
            return $injector.get("XdslLinesLexi");
        },
        Erika: function () {
            return $injector.get("XdslLinesErika");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
