angular.module("ovh-api-services").service("OvhApiXdslModemLanDhcpDHCPStaticAddressesLexi", function ($resource) {
    "use strict";

    return $resource("/xdsl/:xdslId/modem/lan/:lanName/dhcp/:dhcpName/DHCPStaticAddresses/:MACAddress", {
        xdslId: "@xdslId",
        lanName: "@lanName",
        dhcpName: "@dhcpName",
        MACAddress: "@MACAddress"
    }, {
        update: {
            method: "PUT"
        },
        post: {
            method: "POST",
            url: "/xdsl/:xdslId/modem/lan/:lanName/dhcp/:dhcpName/DHCPStaticAddresses"
        }
    });
});
