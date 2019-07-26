angular.module("ovh-api-services").service("OvhApiVpsIpsV6", function ($resource) {
    "use strict";

    return $resource("/vps/:serviceName/ips/:ipAddress", {
        serviceName: "@serviceName",
        ipAddress: "@ipAddress"
    }, {
        put: {
            method: "PUT"
        }
    });
});
