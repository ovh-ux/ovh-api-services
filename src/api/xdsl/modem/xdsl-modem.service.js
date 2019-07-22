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
        AvailableWLANChannel: function () {
            return $injector.get("OvhApiXdslModemAvailableWLANChannel");
        },
        Firmware: function () {
            return $injector.get("OvhApiXdslModemFirmware");
        },
        BlocIp: function () {
            return $injector.get("OvhApiXdslModemBlocIp");
        },
        CallWaiting: function () {
            return $injector.get("OvhApiXdslModemCallWaiting");
        },
        ContentSharing: function () {
            return $injector.get("OvhApiXdslModemContentSharing");
        },
        Ftp: function () {
            return $injector.get("OvhApiXdslModemFtp");
        },
        IpsecAlg: function () {
            return $injector.get("OvhApiXdslModemIpsecAlg");
        },
        SipAlg: function () {
            return $injector.get("OvhApiXdslModemSipAlg");
        },
        Upnp: function () {
            return $injector.get("OvhApiXdslModemUpnp");
        },
        cache: cache
    };
});
