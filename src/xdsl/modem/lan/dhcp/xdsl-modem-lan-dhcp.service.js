angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcp", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemLanDhcpLexi");
        },
        Aapi: function () {
            return $injector.get("OvhApiXdslModemLanDhcpAapi");
        },
        DHCPStaticAddress: function () {
            return $injector.get("OvhApiXdslModemLanDhcpDHCPStaticAddresses");
        }
    };
});
