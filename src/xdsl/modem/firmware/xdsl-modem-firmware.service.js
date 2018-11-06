angular.module("ovh-api-services").service("OvhApiXdslModemFirmware", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModemFirmware");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemFirmwareV6");
        },
        resetCache: cache.removeAll,
        cache: cache
    };
});
