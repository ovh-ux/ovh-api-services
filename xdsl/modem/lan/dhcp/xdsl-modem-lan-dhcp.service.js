angular.module("ovh-api-services").service("XdslModemLanDhcp", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("XdslModemLanDhcpLexi");
        },
        Aapi: function () {
            return $injector.get("XdslModemLanDhcpAapi");
        },
        DHCPStaticAddress: function () {
            return $injector.get("XdslModemLanDhcpDHCPStaticAddresses");
        }
    };
});
