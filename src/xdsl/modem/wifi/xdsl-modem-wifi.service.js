angular.module("ovh-api-services").service("OvhApiXdslModemWifi", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemWifi");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemWifiLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemWifiAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
