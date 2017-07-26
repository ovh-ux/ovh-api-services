angular.module("ovh-api-services").service("XdslIpsAapi", function ($resource, XdslIps) {
    "use strict";

    var xdslIps = $resource("/xdsl/:xdslId/ips", {
        xdslId: "@xdslId",
        ipBlock: "@ipBlock"
    }, {
        ips: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            cache: XdslIps.cache
        },
        reverse: {
            method: "GET",
            isArray: true,
            serviceType: "aapi",
            url: "/xdsl/reverseDns/:ipBlock",
            cache: XdslIps.cache
        }
    });

    return xdslIps;
});
