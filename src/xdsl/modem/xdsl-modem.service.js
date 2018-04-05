angular.module("ovh-api-services").service("OvhApiXdslModem", function ($injector, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiXdslModem");

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemV6");
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
