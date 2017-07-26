angular.module("ovh-api-services").service("DedicatedNashaPartitionSnapshotLexi", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedNashaPartitionSnapshotLexiQuery");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/nasha/:serviceName/partition/:partitionName/snapshot", {
        serviceName: "@serviceName",
        partitionName: "@partitionName",
        snapshotType: "@snapshotType"
    }, {
        query: {
            method: "GET",
            isArray: true,
            cache: queryCache
        },
        get: {
            method: "GET",
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/snapshot/:snapshotType"
        },
        add: {
            method: "POST",
            interceptor: interceptor,
            params: {
                snapshotType: "@snapshotType"
            }
        },
        remove: {
            method: "DELETE",
            interceptor: interceptor,
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/snapshot/:snapshotType"
        }
    });

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
});
