angular.module("ovh-api-services").service("DedicatedNashaPartitionOptionsLexi", function ($resource, $cacheFactory) {
    "use strict";

    var cache = $cacheFactory("DedicatedNashaPartitionOptionsLexi");

    var interceptor = {
        response: function (response) {
            cache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/nasha/:serviceName/partition/:partitionName/options", {
        serviceName: "@serviceName",
        partitionName: "@partitionName"
    }, {
        get: {
            method: "GET",
            cache: cache
        },
        save: {
            url: "/dedicated/nasha/:serviceName/partition/:partitionName/options",
            method: "POST",
            interceptor: interceptor,
            params: {
                name: "@name",
                expiration: "@expiration"
            }
        }
    });

    resource.resetCache = function () {
        cache.removeAll();
    };

    return resource;
});
