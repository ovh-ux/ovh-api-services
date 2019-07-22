angular.module("ovh-api-services").service("OvhApiXdslModemAvailableWLANChannel", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemAvailableWLANChannel");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemAvailableWLANChannelV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
