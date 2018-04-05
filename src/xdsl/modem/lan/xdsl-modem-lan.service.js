angular.module("ovh-api-services").service("OvhApiXdslModemLan", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemLan");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemLanV6");
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
