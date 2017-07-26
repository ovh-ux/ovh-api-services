angular.module("ovh-api-services").service("XdslAvailableLns", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslAvailableLns");

    return {
        Lexi: function () {
            return $injector.get("XdslAvailableLnsLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
