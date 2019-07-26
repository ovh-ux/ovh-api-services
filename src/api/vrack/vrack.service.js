angular.module("ovh-api-services").service("OvhApiVrack", function ($injector) {
    "use strict";
    return {
        Aapi: function () {
            return $injector.get("OvhApiVrackAapi");
        },
        v6: function () {
            return $injector.get("OvhApiVrackV6");
        },
        CloudProject: function () {
            return $injector.get("OvhApiVrackCloudProject");
        },
        DedicatedCloud: function () {
            return $injector.get("OvhApiVrackDedicatedCloud");
        },
        DedicatedServer: function () {
            return $injector.get("OvhApiVrackDedicatedServer");
        },
        DedicatedServerInterface: function () {
            return $injector.get("OvhApiDedicatedServerInterface");
        },
        DedicatedConnect: function () {
            return $injector.get("OvhApiVrackDedicatedConnect");
        },
        Ip: function () {
            return $injector.get("OvhApiVrackIp");
        },
        LegacyVrack: function () {
            return $injector.get("OvhApiVrackLegacyVrack");
        },
        Nasha: function () {
            return $injector.get("OvhApiVrackNasha");
        },
        IpLoadBalancing: function () {
            return $injector.get("OvhApiVrackIpLoadBalancing");
        }
    };
});
