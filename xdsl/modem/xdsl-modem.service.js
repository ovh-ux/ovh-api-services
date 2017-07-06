angular.module("ovh-api-services").service("XdslModem", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("XdslModem");

    return {
        Lexi: function () {
            return $injector.get("XdslModemLexi");
        },
        Aapi: function () {
            return $injector.get("XdslModemAapi");
        },
        resetCache: function () {
            cache.removeAll();

        },
        ConnectedDevices: function () {
            return $injector.get("XdslModemDevices");
        },
        Lan: function () {
            return $injector.get("XdslModemLan");
        },
        Port: function () {
            return $injector.get("XdslModemPort");
        },
        Reboot: function () {
            return $injector.get("XdslModemReboot");
        },
        Reset: function () {
            return $injector.get("XdslModemReset");
        },
        Wifi: function () {
            return $injector.get("XdslModemWifi");
        },
        cache: cache
    };
});
