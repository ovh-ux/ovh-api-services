angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcpDHCPStaticAddresses", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("OvhApiXdslModemLanDhcpDHCPStaticAddressesLexi");
        }
    };
});
