angular.module("ovh-api-services").service("OvhApiXdslModemWifi", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemWifi");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemWifiV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemWifiAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
