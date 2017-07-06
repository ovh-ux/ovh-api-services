angular.module("ovh-api-services").service("XdslModemLan", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModemLan");

    return {
        Lexi: function () {
            return $injector.get("XdslModemLanLexi");
        },
        Aapi: function () {
            return $injector.get("XdslModemLanAapi");
        },
        Dhcp: function () {
            return $injector.get("XdslModemLanDhcp");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
