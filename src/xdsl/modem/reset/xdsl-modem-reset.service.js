angular.module("ovh-api-services").service("OvhApiXdslModemReset", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemReset");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemResetLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
