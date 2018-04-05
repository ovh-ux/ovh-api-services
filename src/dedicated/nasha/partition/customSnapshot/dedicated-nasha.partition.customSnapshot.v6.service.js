angular.module("ovh-api-services").service("OvhApiDedicatedNashaPartitionCustomSnapshotV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedNashaPartitionCustomSnapshotV6Query");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/nasha/:serviceName/partition/:partitionName/customSnapshot/:name", {
        serviceName: "@serviceName",
        partitionName: "@partitionName",
        name: "@name"
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
        add: {
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/customSnapshot",
            method: "POST",
            interceptor: interceptor,
            params: {
                name: "@name",
                expiration: "@expiration"
            }
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
});
