angular.module("ovh-api-services").service("OvhApiXdslIpsAapi", function ($resource, OvhApiXdslIps) {
    "use strict";

    var xdslIps = $resource("/xdsl/:xdslId/ips", {
        xdslId: "@xdslId",
        ipBlock: "@ipBlock"
    }, {
        ips: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: OvhApiXdslIps.cache
        },
        reverse: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            url: "/xdsl/reverseDns/:ipBlock",
            cache: OvhApiXdslIps.cache
        }
    });

    return xdslIps;
});
