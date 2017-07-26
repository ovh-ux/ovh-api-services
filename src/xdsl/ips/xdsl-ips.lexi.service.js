angular.module("ovh-api-services").service("XdslIpsLexi", function ($resource, XdslIps) {
    "use strict";

    var interceptor = {
        response: function (response) {
            XdslIps.resetCache();
            return response.resource;
        }
    };

    return $resource("/xdsl/:xdslId/ipv6", {
        xdslId: "@xdslId",
        ipBlock: "@ipBlock",
        ipReverse: "@ipReverse",
        ip: "@ip",
        reverse: "@reverse",
        ipRange: "@ipRange"
    }, {
        setIpv6: {
            method: "POST",
            interceptor: interceptor
        },
        order: {
            method: "POST",
            url: "/xdsl/:xdslId/ips",
            interceptor: interceptor
        },
        price: {
            method: "GET",
            url: "/price/xdsl/options/ipv4/:ipRange",
            cache: XdslIps.cache
        },
        unOrder: {
            method: "DELETE",
            url: "/xdsl/:xdslId/ips/:ip",
            interceptor: interceptor
        },
        deleteReverse: {
            method: "DELETE",
            url: "/ip/:ipBlock/reverse/:ipReverse",
            interceptor: interceptor
        },
        createReverse: {
            method: "POST",
            url: "/ip/:ipBlock/reverse",
            interceptor: interceptor
        }
    });
});
