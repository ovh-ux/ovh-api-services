angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedNashaPartitionLexiQuery");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/nasha/:serviceName/partition/:partitionName", {
        serviceName: "@serviceName",
        partitionName: "@partitionName"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            cache: queryCache
        },
        use: {
            method: "GET",
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/use",
            cache: queryCache,
            params: {
                type: "@type"
            }
        },
        create: {
            method: "POST",
            interceptor: interceptor,
            url: "/dedicated/nasha/:serviceName/partition",
            params: {
                partitionName: "@partitionName",
                protocol: "@protocol",
                size: "@size"
            }
        },
        update: {
            method: "PUT",
            interceptor: interceptor,
            params: {
                partitionName: "@partitionName",
                size: "@size"
            }
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
});
