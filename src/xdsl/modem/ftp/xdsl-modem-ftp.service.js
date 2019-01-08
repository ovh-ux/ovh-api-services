angular.module("ovh-api-services").service("OvhApiXdslModemFtp", function ($cacheFactory, $injector) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemFtp");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemFtpV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
