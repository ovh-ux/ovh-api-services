angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcp", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemLanDhcpV6");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemLanDhcpAapi");
        },
        DHCPStaticAddress: function () {
            return $injector.get("OvhApiXdslModemLanDhcpDHCPStaticAddresses");
        }
    };
});
