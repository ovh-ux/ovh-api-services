angular.module("ovh-api-services").service("OvhApiDedicatedCephPoolV6", function ($resource, $cacheFactory) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCephPoolV6");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/ceph/:serviceName/pool/:poolName", {
        serviceName: "@serviceName",
        poolName: "@poolName"
    }, {
        query: {
            method: "GET",
            cache: queryCache,
            isArray: true
        },
        get: {
            method: "GET",
            cache: queryCache
        },
        post: {
            method: "POST",
            interceptor: interceptor,
            url: "/dedicated/ceph/:serviceName/pool",
            params: {
                poolName: "@poolName"
            }
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    resource.resetAllCache = function () {
        resource.resetQueryCache();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
    };

    return resource;
});
