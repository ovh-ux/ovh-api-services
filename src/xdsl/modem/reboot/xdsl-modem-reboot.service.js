angular.module("ovh-api-services").service("OvhApiXdslModemReboot", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemReboot");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemRebootLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
