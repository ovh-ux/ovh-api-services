angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcpDHCPStaticAddresses", function ($injector) {
    "use strict";

    return {
        v6: function () {
            return $injector.get("OvhApiXdslModemLanDhcpDHCPStaticAddressesV6");
        }
    };
});
