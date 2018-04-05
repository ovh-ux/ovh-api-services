angular.module("ovh-api-services").service("OvhApiIpReverseV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiIpReverseV6");
    var queryCache = $cacheFactory("OvhApiIpReverseV6Query");

    var interceptor = {
        response: function (response) {
            cache.remove(response.config.url);
            queryCache.removeAll();
            return response.resource;
        }
    };

    var ipReverse = $resource("/ip/:ip/reverse/:ipReverse", {
        ip: "@ip",
        ipReverse: "@ipReverse"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: cache
        },
        create: {
            method: "POST",
            url: "/ip/:ip/reverse",
            interceptor: interceptor
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    }
    );

    /**
     * Get reverse DNS of a given IP.
     *
     * (ipBlock parameter if optional and only used if ip != ipBLock)
     * Example :
     *  ip      : 51.254.180.16
     *  ipBlock : 51.254.180.18/30
     */
    ipReverse.getReverseDns = function (ip, ipBlock) {
        return ipReverse.query({
            ip: ipBlock || ip
        }).$promise.then(function (ips) {
            if (~ips.indexOf(ip)) {
                return ipReverse.get({
                    ip: ipBlock || ip,
                    ipReverse: ip
                }).$promise.then(function (rev) {
                    return rev.reverse;
                });
            }

            return null;
        });
    };

    ipReverse.resetAllCache = function () {
        ipReverse.resetCache();
        ipReverse.resetQueryCache();
    };

    ipReverse.resetCache = function () {
        cache.removeAll();
    };

    ipReverse.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return ipReverse;
});

