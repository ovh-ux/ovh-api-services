angular.module("ovh-api-services").service("XdslModemReboot", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModemReboot");

    return {
        Lexi: function () {
            return $injector.get("XdslModemRebootLexi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
