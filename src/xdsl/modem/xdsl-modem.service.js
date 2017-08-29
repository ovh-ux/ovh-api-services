angular.module("ovh-api-services").service("OvhApiXdslModem", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModem");

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemAapi");
        },
        resetCache: function () {
            cache.removeAll();

        },
        ConnectedDevices: function () {
            return $injector.get("OvhApiXdslModemDevices");
        },
        Lan: function () {
            return $injector.get("OvhApiXdslModemLan");
        },
        Port: function () {
            return $injector.get("OvhApiXdslModemPort");
        },
        Reboot: function () {
            return $injector.get("OvhApiXdslModemReboot");
        },
        Reset: function () {
            return $injector.get("OvhApiXdslModemReset");
        },
        Wifi: function () {
            return $injector.get("OvhApiXdslModemWifi");
        },
        cache: cache
    };
});
