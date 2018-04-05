angular.module("ovh-api-services").service("OvhApiXdslModemReset", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemReset");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemResetV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
