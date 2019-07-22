angular.module("ovh-api-services").service("OvhApiXdslModemBlocIp", function ($cacheFactory, $injector) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemBlocIp");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemBlocIpV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
