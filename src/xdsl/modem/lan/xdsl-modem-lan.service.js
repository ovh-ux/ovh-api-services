angular.module("ovh-api-services").service("OvhApiXdslModemLan", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemLan");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemLanLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemLanAapi");
        },
        Dhcp: function () {
            return $injector.get("OvhApiXdslModemLanDhcp");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
