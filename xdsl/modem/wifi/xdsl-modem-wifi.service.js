angular.module("ovh-api-services").service("XdslModemWifi", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModemWifi");

    return {
        Lexi: function () {
            return $injector.get("XdslModemWifiLexi");
        },
        Aapi: function () {
            return $injector.get("XdslModemWifiAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
