angular.module("ovh-api-services").service("OvhApiXdslModemReboot", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemReboot");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemRebootV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
