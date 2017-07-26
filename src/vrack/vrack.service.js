angular.module("ovh-api-services").service("Vrack", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("VrackAapi");
        },
        Lexi: function () {
            return $injector.get("VrackLexi");
        },
        CloudProject: function () {
            return $injector.get("VrackCloudProject");
        },
        DedicatedCloud: function () {
            return $injector.get("VrackDedicatedCloud");
        },
        DedicatedServer: function () {
            return $injector.get("VrackDedicatedServer");
        },
        DedicatedServerInterface: function () {
            return $injector.get("DedicatedServerInterface");
        },
        DedicatedConnect: function () {
            return $injector.get("VrackDedicatedConnect");
        },
        Ip: function () {
            return $injector.get("VrackIp");
        },
        LegacyVrack: function () {
            return $injector.get("VrackLegacyVrack");
        },
        Nasha: function () {
            return $injector.get("VrackNasha");
        }
    };
});
