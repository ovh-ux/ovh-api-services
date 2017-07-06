angular.module("ovh-api-services").service("DedicatedCephUserLexi", function ($resource, $cacheFactory, DedicatedCephUserAapi) {
    "use strict";

    var queryCache = $cacheFactory("DedicatedCephUserLexi");

    var interceptor = {
        response: function (response) {
            queryCache.removeAll();
            return response;
        }
    };

    var resource = $resource("/dedicated/ceph/:serviceName/user/:userName", {
        serviceName: "@serviceName",
        userName: "@userName"
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
            url: "/dedicated/ceph/:serviceName/user",
            params: {
                userName: "@userName"
            }
        },
        "delete": {
            method: "DELETE",
            interceptor: interceptor
        }
    });

    resource.resetAllCache = function () {
        resource.resetQueryCache();
        DedicatedCephUserAapi.resetAllCache();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
        DedicatedCephUserAapi.resetCache();
    };

    return resource;
});
