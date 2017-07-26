angular.module("ovh-api-services").service("XdslModemReset", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModemReset");

    return {
        Lexi: function () {
            return $injector.get("XdslModemResetLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
