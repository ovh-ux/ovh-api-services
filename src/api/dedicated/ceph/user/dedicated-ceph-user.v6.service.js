angular.module("ovh-api-services").service("OvhApiDedicatedCephUserV6", function ($resource, $cacheFactory, OvhApiDedicatedCephUserAapi) {
    "use strict";

    var queryCache = $cacheFactory("OvhApiDedicatedCephUserV6");

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
        OvhApiDedicatedCephUserAapi.resetAllCache();
    };

    resource.resetQueryCache = function () {
        queryCache.removeAll();
        OvhApiDedicatedCephUserAapi.resetCache();
    };

    return resource;
});
