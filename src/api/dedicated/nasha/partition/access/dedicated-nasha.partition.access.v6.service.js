angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionAccessV6", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("OvhApiDedicatedNashaPartitionAccessV6");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/nasha/:serviceName/partition/:partitionName/access/:ip", {
        serviceName: "@serviceName",
        partitionName: "@partitionName",
        ip: "@ip"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: cache
        },
        get: {
            method: "GET",
            cache: cache
        },
        add: {
            method: "POST",
            interceptor: interceptor,
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/access",
            params: {
                type: "@type"
            }
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        },
        getAuthorizableIps: {
            method: "GET",
            isArray: true,
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/authorizableIps"
        },
        getAuthorizableIpBlocks: {
            method: "GET",
            isArray: true,
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/authorizableBlocks"
        }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    return resource;
});
