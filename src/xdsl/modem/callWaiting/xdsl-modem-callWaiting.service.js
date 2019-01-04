angular.module("ovh-api-services").service("OvhApiXdslModemCallWaiting", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemCallWaiting");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemCallWaitingV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
