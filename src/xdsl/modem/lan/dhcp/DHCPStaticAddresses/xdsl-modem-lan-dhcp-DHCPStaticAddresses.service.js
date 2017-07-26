angular.module("ovh-api-services").service("XdslModemLanDhcpDHCPStaticAddresses", function ($injector) {
    "use strict";

    return {
        Lexi: function () {
            return $injector.get("XdslModemLanDhcpDHCPStaticAddressesLexi");
        }
    };
});
