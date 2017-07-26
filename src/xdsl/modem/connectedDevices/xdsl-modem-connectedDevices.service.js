angular.module("ovh-api-services").service("XdslModemDevices", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModemDevices");

    return {
        Lexi: angular.noop,
        Aapi: function () {
            return $injector.get("XdslModemDevicesAapi");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
