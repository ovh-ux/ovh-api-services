angular.module("ovh-api-services").service("OvhApiXdslModemUpnp", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemUpnp");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemUpnpV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
